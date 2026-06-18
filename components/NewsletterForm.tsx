"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setDone(true);
        setEmail("");
      }}
      className="flex flex-col gap-2"
    >
      {done ? (
        <p className="rounded-md bg-white/10 px-3 py-2 text-sm text-white/90">
          Thank you for subscribing!
        </p>
      ) : (
        <>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-accent px-3 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Subscribe
          </button>
        </>
      )}
    </form>
  );
}
