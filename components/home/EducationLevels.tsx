import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { educationLevels } from "@/lib/content";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function EducationLevels() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Our Programs"
            title="Our Educational Journey"
            intro="From early discovery to advanced academics, every stage is designed to nurture curious, capable and confident learners."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {educationLevels.map((level, index) => (
            <Reveal key={level.title} delay={index * 110}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100/80 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover"
              >
              <span
                className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-300 via-gold to-gold-500 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <div className="relative h-52 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${level.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-950">
                  {level.title}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-slate-600">{level.description}</p>
                <ul className="mt-4 space-y-2">
                  {level.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <FaCheck className="h-3 w-3 text-gold-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={level.href}
                  className="link-arrow mt-6"
                >
                  Learn More <FaArrowRight className="h-3.5 w-3.5 text-gold-600" />
                </Link>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
