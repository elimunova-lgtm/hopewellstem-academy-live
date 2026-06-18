"use client";

import { useState } from "react";
import { FaExpand, FaFilePdf } from "react-icons/fa";
import ImageLightbox from "@/components/ImageLightbox";
import { isPdfUrl } from "@/lib/uploads";

type ClickableImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  showExpandHint?: boolean;
};

export default function ClickableImage({
  src,
  alt,
  className = "",
  imageClassName = "h-full w-full object-cover",
  showExpandHint = true,
}: ClickableImageProps) {
  const [open, setOpen] = useState(false);

  if (!src) return null;

  if (isPdfUrl(src)) {
    return (
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex h-full w-full flex-col items-center justify-center bg-slate-100 transition hover:bg-slate-200 ${className}`}
        aria-label={`Open PDF: ${alt}`}
      >
        <FaFilePdf className="h-10 w-10 text-red-600" />
        <span className="mt-2 px-3 text-center text-sm font-medium text-slate-700">
          {alt}
        </span>
        <span className="mt-1 text-xs text-slate-500">Click to open PDF</span>
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block h-full w-full overflow-hidden ${className}`}
        aria-label={`View full image: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={imageClassName} />
        {showExpandHint ? (
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
            <FaExpand className="h-6 w-6 text-white opacity-0 transition group-hover:opacity-100" />
          </span>
        ) : null}
      </button>
      <ImageLightbox
        src={src}
        alt={alt}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
