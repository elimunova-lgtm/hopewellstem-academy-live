import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
  crumbs?: Crumb[];
};

export default function PageHero({ title, subtitle, image, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 -bottom-48 h-96 w-96 rounded-full bg-brand/5 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative pb-16 pt-20 text-center sm:pb-20 sm:pt-24">
        {crumbs && (
          <nav className="mb-8 flex flex-wrap items-center justify-center gap-2 text-sm">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="rounded-full border border-brand-100 bg-white px-3 py-1 font-medium text-brand-700 shadow-card-soft transition hover:border-gold hover:text-brand"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="rounded-full bg-gold px-3 py-1 font-semibold text-brand-950 shadow-card-soft">
                    {c.label}
                  </span>
                )}
                {i < crumbs.length - 1 && (
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
        <span className="section-eyebrow is-centered">{site.tagline}</span>
        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-extrabold leading-tight text-brand sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 sm:text-xl">
            {subtitle}
          </p>
        )}
        <span className="mx-auto mt-7 block h-1 w-24 rounded-full bg-gradient-to-r from-gold-300 via-gold to-gold-500" />
      </div>

      {image && (
        <div className="container-page relative pb-12">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-gradient-to-br from-gold-300/40 to-brand-100/40" />
            <Image
              src={image}
              alt=""
              width={1280}
              height={640}
              priority
              className="relative aspect-[2/1] w-full rounded-3xl object-cover shadow-card-hover ring-1 ring-brand-100"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}