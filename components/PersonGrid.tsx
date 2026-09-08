"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes, FaUser } from "react-icons/fa";
import type { Person } from "@/lib/team";

function initials(name: string) {
  return name
    .replace(/^(Mr\.|Md\.|Ms\.|Dr\.)\s*/i, "")
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type Props = {
  people: Person[];
  variant?: "director" | "staff";
};

export default function PersonGrid({ people, variant = "director" }: Props) {
  const [selected, setSelected] = useState<Person | null>(null);
  const isStaff = variant === "staff";

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <>
      <div
        className={`mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 ${
          isStaff ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {people.map((p) => {
          const clickable = Boolean(p.bioImage);
          return (
            <article
              key={p.name}
              className={`group transition hover:-translate-y-1.5 ${
                isStaff
                  ? "flex flex-col items-center rounded-2xl border border-brand-100 bg-white p-6 shadow-card hover:shadow-card-hover"
                  : `overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card ring-1 ring-transparent hover:ring-gold/60 hover:shadow-card-hover ${
                      clickable ? "cursor-pointer" : ""
                    }`
              }`}
              onClick={clickable ? () => setSelected(p) : undefined}
              onKeyDown={
                clickable
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelected(p);
                      }
                    }
                  : undefined
              }
              role={clickable ? "button" : undefined}
              tabIndex={clickable ? 0 : undefined}
              aria-label={clickable ? `View bio for ${p.name}` : undefined}
            >
              {isStaff ? (
                <div className="relative mb-4 h-36 w-36 overflow-hidden rounded-full border-4 border-brand-100 bg-brand-50 shadow-card ring-2 ring-gold/30">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-brand-400">
                      <FaUser className="h-8 w-8" />
                      <span className="text-sm font-bold text-brand">{initials(p.name)}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-display text-5xl font-bold tracking-wide text-brand/25">
                      {initials(p.name)}
                    </span>
                  )}
                  {clickable && (
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/80 to-transparent px-4 py-3 text-center text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                      Click to view bio
                    </span>
                  )}
                </div>
              )}

              <div className={isStaff ? "text-center" : "p-5 text-center"}>
                <h3 className="font-display text-lg font-bold text-brand">{p.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{p.role}</p>
                {isStaff && !p.image && (
                  <p className="mt-2 text-xs text-slate-400">Photo coming soon</p>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {selected?.bioImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} bio`}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white shadow-md transition hover:bg-brand-900"
              aria-label="Close bio"
            >
              <FaTimes />
            </button>
            <div className="relative max-h-[calc(90vh-4rem)] w-full overflow-y-auto">
              <Image
                src={selected.bioImage}
                alt={`${selected.name} — bio`}
                width={1200}
                height={1600}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="border-t border-slate-100 px-5 py-4 text-center">
              <h3 className="font-display text-lg font-bold text-brand">{selected.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{selected.role}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
