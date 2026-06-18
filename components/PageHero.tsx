import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
  crumbs?: Crumb[];
};

export default function PageHero({ title, subtitle, image, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24 text-white sm:py-28">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand/90 via-brand/75 to-brand-950/90"
            aria-hidden="true"
          />
        </>
      )}
      {!image && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand to-brand-950"
          aria-hidden="true"
        />
      )}
      <div className="container-page relative text-center">
        {crumbs && (
          <nav className="mb-4 flex items-center justify-center gap-2 text-sm text-white/70">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>
        )}
        <span className="mx-auto mt-6 block h-1 w-20 rounded-full bg-gold" />
      </div>
    </section>
  );
}
