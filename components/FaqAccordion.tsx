"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border bg-white shadow-card transition ${
              isOpen ? "border-gold/50" : "border-brand-100"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold transition ${
                isOpen ? "bg-cream text-brand" : "text-brand-700 hover:bg-brand-50"
              }`}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                  isOpen ? "bg-gold text-brand-950" : "bg-brand-50 text-brand"
                }`}
              >
                <FaChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-slate-600">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
