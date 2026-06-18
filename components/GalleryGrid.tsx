"use client";

import { useMemo, useState } from "react";
import ClickableImage from "@/components/ClickableImage";
import { galleryCategories, galleryItems } from "@/lib/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {galleryCategories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-brand-600 text-white shadow-sm"
                  : "border border-brand-100 bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        Showing {filtered.length} {filtered.length === 1 ? "item" : "items"}.
        Click any photo for full view.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <figure
            key={item.src}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 shadow-card"
          >
            <ClickableImage
              src={item.src}
              alt={item.alt}
              imageClassName="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-brand-900/85 to-transparent px-4 py-3 text-sm font-medium text-white transition group-hover:translate-y-0">
              {item.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
