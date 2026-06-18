import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { educationLevels } from "@/lib/content";
import { SectionHeading } from "@/components/ui";

export default function EducationLevels() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Programs"
          title="Our Educational Journey"
          intro="From early discovery to advanced academics, every stage is designed to nurture curious, capable and confident learners."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {educationLevels.map((level) => (
            <div
              key={level.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url(${level.image})` }}
              />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-bold text-brand">
                  {level.title}
                </h3>
                <p className="mt-2 text-slate-600">{level.description}</p>
                <ul className="mt-4 space-y-2">
                  {level.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <FaCheck className="h-3 w-3 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={level.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-brand transition hover:gap-3"
                >
                  Learn More <FaArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
