import { FaFacebookF, FaThumbsUp } from "react-icons/fa";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/ui";

function Card({
  name,
  initials,
  date,
  text,
}: (typeof testimonials)[number]) {
  return (
    <figure className="relative flex w-80 shrink-0 flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
      <FaFacebookF className="absolute right-5 top-5 h-4 w-4 text-[#4267B2]/70" />
      <figcaption className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-semibold text-white">
          {initials}
        </span>
        <div>
          <p className="font-semibold text-brand">{name}</p>
          <p className="text-xs text-slate-400">{date}</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-green-600">
            <FaThumbsUp className="h-3 w-3" /> Recommends
          </p>
        </div>
      </figcaption>
      <blockquote className="mt-4 text-sm leading-relaxed text-slate-600">
        &ldquo;{text}&rdquo;
      </blockquote>
    </figure>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="section overflow-hidden bg-gradient-to-br from-brand-50 to-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Community Says"
          intro="Hear from the parents and families who trust Hopewell STEM Academy with their children's future."
        />
      </div>
      <div className="group relative mt-12">
        <div className="flex w-max animate-marquee gap-6 px-4 group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
