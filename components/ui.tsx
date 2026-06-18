import type { ReactNode } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getIcon } from "@/lib/icons";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>}
    </div>
  );
}

export type IconCardData = {
  icon: string;
  title: string;
  description: string;
};

export function IconCard({ icon, title, description }: IconCardData) {
  const Icon = getIcon(icon);
  return (
    <div className="group h-full rounded-2xl border border-brand-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
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
      {items.map((item) => (
        <IconCard key={item.title} {...item} />
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
            className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
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
        <div
          className={`aspect-[4/3] w-full rounded-3xl bg-cover bg-center shadow-card ${
            reverse ? "lg:order-2" : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
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
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-950 px-6 py-14 text-center text-white sm:px-12">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {primary && (
              <a href={primary.href} className="btn-white">
                {primary.label}
              </a>
            )}
            {secondary && (
              <a
                href={secondary.href}
                className="btn border-2 border-white text-white hover:bg-white hover:text-brand"
              >
                {secondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
