"use client";

import ClickableImage from "@/components/ClickableImage";
import type { PublicFlyer } from "@/lib/cms";

export default function FlyerGallery({ flyers }: { flyers: PublicFlyer[] }) {
  if (flyers.length === 0) return null;

  return (
    <section className="mt-16">
      <div className="mb-8 flex items-start gap-4">
        <span className="mt-1.5 h-10 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-gold-300 via-gold to-gold-500" aria-hidden="true" />
        <div>
          <span className="section-eyebrow !mb-1">Announcements</span>
          <h2 className="font-display text-3xl font-bold text-brand">
            Flyers & Posters
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Click any flyer to view it full size.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {flyers.map((flyer) => (
          <article
            key={flyer.id}
            className="overflow-hidden rounded-2xl border border-brand-100/80 bg-white shadow-card transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-card-hover"
          >
            <div className="aspect-[3/4] bg-slate-100">
              <ClickableImage
                src={flyer.image}
                alt={flyer.title}
                imageClassName="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-display text-lg font-bold text-brand">
                {flyer.title}
              </h3>
              {flyer.caption ? (
                <p className="mt-1 text-sm text-slate-600">{flyer.caption}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
