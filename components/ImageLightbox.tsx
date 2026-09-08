"use client";

import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { IMAGE_FALLBACK } from "@/lib/placeholder-image";

type ImageLightboxProps = {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
};

export default function ImageLightbox({
  src,
  alt,
  open,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt || "Full size image"}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        aria-label="Close full view"
      >
        <FaTimes className="h-5 w-5" />
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] max-w-[min(90vw,1200px)] rounded-lg object-contain shadow-2xl"
      />
    </div>
  );
}
