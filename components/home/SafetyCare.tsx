import { FaShieldAlt, FaBus, FaUtensils, FaHandshake } from "react-icons/fa";
import Reveal from "@/components/Reveal";

const cares = [
  {
    icon: FaShieldAlt,
    title: "Safeguarded Campus",
    text: "Secure grounds, strict visitor protocols and staff trained in child protection.",
  },
  {
    icon: FaBus,
    title: "Supervised Transport",
    text: "Well-maintained buses with staff on board, serving Nakuru and its environs.",
  },
  {
    icon: FaUtensils,
    title: "Fresh, Nutritious Meals",
    text: "Meals prepared and served daily under constant staff supervision.",
  },
  {
    icon: FaHandshake,
    title: "Care & Mentorship",
    text: "Every child is known by name and supported by a trusted class mentor.",
  },
];

export default function SafetyCare() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="bg-dots-light absolute inset-0" aria-hidden="true" />
      <div className="bg-gold-glow absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-20 sm:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
            <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
            Parent Peace of Mind
            <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Your Child Is Safe in Our Hands
          </h2>
          <p className="mt-4 max-w-2xl text-white/85">
            Before anything else, Hopewell is a place parents trust. Safety,
            care and dignity are woven into every part of school life.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cares.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="group rounded-2xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur-sm transition hover:-translate-y-1.5 hover:border-gold-400/60 hover:bg-white/15">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400 text-brand-950 shadow-card-soft transition group-hover:scale-105">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-gold-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}