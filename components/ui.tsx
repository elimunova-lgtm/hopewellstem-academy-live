import type { ReactNode } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getIcon } from "@/lib/icons";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"
      }
    >
      {eyebrow && (
        <span
          className={`section-eyebrow ${
            centered ? "is-centered" : ""
          } ${light ? "!text-gold-300" : ""}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`section-title ${light ? "!text-white" : ""}`}>
        {title}
      </h2>
      {intro && (
        <p className={`section-intro ${light ? "!text-white/80" : ""}`}>
          {intro}
        </p>
      )}
      <span
        className={`mt-5 block h-1 w-16 rounded-full bg-gradient-to-r from-gold-300 via-gold to-gold-500 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

export type IconCardData = {
  icon: string;
  title: string;
  description: string;
  number?: string;
};

export function IconCard({ icon, title, description, number }: IconCardData) {
  const Icon = getIcon(icon);
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-brand-100/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover">
      <span
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-300 via-gold to-gold-500 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      {number && (
        <span
          className="absolute right-6 top-5 font-display text-3xl font-extrabold text-brand-100 transition-colors duration-300 group-hover:text-gold"
          aria-hidden="true"
        >
          {number}
        </span>
      )}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-gold group-hover:text-brand-950 group-hover:ring-gold">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-display text-xl font-bold text-brand">{title}</h3>
      <p className="leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

export function IconCardGrid({ items }: { items: IconCardData[] }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <IconCard key={item.title} {...item} number={item.number ?? String(i + 1).padStart(2, "0")} />
      ))}
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-page">{children}</div>;
}

export type LinkCardData = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export function LinkCardGrid({ items }: { items: LinkCardData[] }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon, title, description, href }) => {
        const Icon = getIcon(icon);
        return (
          <Link
            key={title}
            href={href}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover"
          >
            <span
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-300 via-gold to-gold-500 transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden="true"
            />
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-gold group-hover:text-brand-950 group-hover:ring-gold">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-brand">{title}</h3>
            <p className="flex-1 leading-relaxed text-slate-600">{description}</p>
            <span className="mt-4 inline-flex items-center gap-2 font-semibold text-brand transition-all group-hover:gap-3">
              Explore <FaArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  const Check = getIcon("FaCheck");
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-600">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
            <Check className="h-2.5 w-2.5" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function IntroSplit({
  eyebrow,
  title,
  paragraphs,
  image,
  features,
  reverse = false,
}: {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  image: string;
  features?: string[];
  reverse?: boolean;
}) {
  return (
    <section className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
          <div className="absolute -bottom-5 -left-5 h-full w-full rounded-3xl bg-gradient-to-br from-gold-300/50 to-transparent" />
          <div
            className="relative aspect-[4/3] w-full rounded-3xl bg-cover bg-center shadow-card-hover ring-1 ring-brand-100"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div>
          {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
          <h2 className="font-display text-3xl font-bold text-brand sm:text-4xl">{title}</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {features && (
            <div className="mt-6">
              <FeatureList items={features} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function CTASection({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-800 to-brand-950 px-6 py-16 text-center text-white shadow-card-hover sm:px-12">
          <div className="bg-dots-light absolute inset-0" aria-hidden="true" />
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
              <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
              Begin the Journey
              <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">{text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {primary && (
                <a href={primary.href} className="btn-gold">
                  {primary.label}
                </a>
              )}
              {secondary && (
                <a
                  href={secondary.href}
                  className="btn border-2 border-white/70 text-white hover:bg-white hover:text-brand"
                >
                  {secondary.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
