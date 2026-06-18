import Image from "next/image";
import { partners } from "@/lib/content";

export default function Partners() {
  if (partners.length === 0) return null;

  return (
    <section className="section bg-white">
      <div className="container-page text-center">
        <span className="section-eyebrow">Partnerships</span>
        <h2 className="section-title">Our Trusted Partners</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex h-36 w-44 items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
            >
              <Image
                src={p.logo}
                alt={p.name}
                title={p.name}
                width={140}
                height={90}
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
