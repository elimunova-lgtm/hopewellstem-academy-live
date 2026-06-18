"use client";

import { useEffect, useRef, useState } from "react";
import { FaComments, FaTimes, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

type Message = { from: "bot" | "user"; text: string };

const greeting =
  "Hello! I'm here to help. Ask me about admissions, STEM programs, fees, or anything about Hopewell STEM Academy.";

export default function FloatingWidgets() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ from: "bot", text: greeting }]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  async function send() {
    const value = input.trim();
    if (!value || loading) return;

    const userMessage: Message = { from: "user", text: value };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    const history = nextMessages.map((m) => ({
      role: m.from === "user" ? ("user" as const) : ("assistant" as const),
      content: m.text,
    }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Request failed");
      }

      setMessages((m) => [...m, { from: "bot", text: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text: `I'm having trouble connecting right now. Please call ${site.phone} or email ${site.email} and our team will be happy to help.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-brand px-4 py-3 text-white">
            <h3 className="text-sm font-semibold">{site.name}</h3>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <FaTimes className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                  m.from === "user"
                    ? "ml-auto bg-brand text-white"
                    : "border border-slate-200 bg-white text-slate-700"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
                Thinking…
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="flex items-end gap-2 border-t border-slate-200 p-3">
            <textarea
              rows={1}
              value={input}
              disabled={loading}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Type your message..."
              className="max-h-24 flex-1 resize-none rounded-full border border-slate-200 px-4 py-2 text-sm focus:border-brand focus:outline-none disabled:opacity-60"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-900 disabled:opacity-50"
            >
              <FaPaperPlane className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-900"
      >
        {open ? <FaTimes className="h-5 w-5" /> : <FaComments className="h-5 w-5" />}
        <span className="hidden sm:inline">{open ? "Close" : "Let's Talk"}</span>
      </button>
    </>
  );
}
