"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaExpand, FaTimes } from "react-icons/fa";
import ImageLightbox from "@/components/ImageLightbox";
import type { PublicPopup } from "@/lib/cms";

const ROTATE_MS = 8000;
const STORAGE_KEY = "hsa_dismissed_popups";

function dismissalKey(popup: PublicPopup) {
  return `${popup.id}:${popup.updatedAt}`;
}

function getDismissedKeys(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function dismissPopup(popup: PublicPopup) {
  const dismissed = new Set(getDismissedKeys());
  dismissed.add(dismissalKey(popup));
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...dismissed]));
}

export default function HomePopups({
  popups: initialPopups = [],
}: {
  popups?: PublicPopup[];
}) {
  const [popups, setPopups] = useState<PublicPopup[]>(initialPopups);
  const [visiblePopups, setVisiblePopups] = useState<PublicPopup[]>([]);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPopups() {
      try {
        const response = await fetch("/api/popups", { cache: "no-store" });
        if (!response.ok) return;
        const data = (await response.json()) as PublicPopup[];
        if (!cancelled) setPopups(data);
      } catch {
        // Keep server-provided popups as fallback.
      }
    }

    loadPopups();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const dismissed = new Set(getDismissedKeys());
    const active = popups.filter((popup) => !dismissed.has(dismissalKey(popup)));
    setVisiblePopups(active);
    setIndex(0);
    setOpen(active.length > 0);
  }, [popups]);

  const current = useMemo(
    () => (visiblePopups.length > 0 ? visiblePopups[index] : null),
    [visiblePopups, index]
  );

  useEffect(() => {
    if (!open || visiblePopups.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % visiblePopups.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [open, visiblePopups.length]);

  if (!open || !current) return null;

  function handleDismiss() {
    dismissPopup(current!);
    const remaining = visiblePopups.filter(
      (popup) => dismissalKey(popup) !== dismissalKey(current!)
    );
    setVisiblePopups(remaining);
    if (remaining.length === 0) {
      setOpen(false);
      return;
    }
    setIndex((prev) => prev % remaining.length);
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-brand/50 p-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="home-popup-title"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-600 shadow transition hover:text-brand"
          aria-label="Dismiss pop-up"
        >
          <FaTimes />
        </button>

        {current.image ? (
          <button
            type="button"
            onClick={() => setImageOpen(true)}
            className="group relative block h-48 w-full"
            aria-label={`View full image for ${current.title}`}
          >
            <Image
              src={current.image}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 512px"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/25">
              <FaExpand className="h-6 w-6 text-white opacity-0 transition group-hover:opacity-100" />
            </span>
          </button>
        ) : null}

        <div className="p-6">
          <h2
            id="home-popup-title"
            className="font-display text-2xl font-bold text-brand"
          >
            {current.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {current.message}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {current.buttonLabel && current.buttonHref ? (
              <Link
                href={current.buttonHref}
                onClick={handleDismiss}
                className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand/90"
              >
                {current.buttonLabel}
              </Link>
            ) : null}
            <button
              type="button"
              onClick={handleDismiss}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Close
            </button>
          </div>

          {visiblePopups.length > 1 ? (
            <div className="mt-5 flex items-center justify-center gap-2">
              {visiblePopups.map((popup, popupIndex) => (
                <span
                  key={dismissalKey(popup)}
                  className={`h-2 w-2 rounded-full ${
                    popupIndex === index ? "bg-accent" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {current.image ? (
        <ImageLightbox
          src={current.image}
          alt={current.title}
          open={imageOpen}
          onClose={() => setImageOpen(false)}
        />
      ) : null}
    </div>
  );
}
