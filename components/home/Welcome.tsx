import Link from "next/link";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { images } from "@/lib/images";
import Reveal from "@/components/Reveal";

const highlights = [
  "State-of-the-art STEM facilities",
  "Experienced, expert faculty",
  "Small class sizes",
  "Hands-on learning experiences",
];

const stats = [
  { value: "5+", label: "Years of Excellence" },
  { value: "3", label: "Learning Levels" },
  { value: "100%", label: "STEM-Focused Curriculum" },
  { value: "24hr", label: "Admissions Response" },
];

export default function Welcome() {
  return (
    <section className="section bg-gold-glow">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="section-eyebrow">Welcome</span>
            <h2 className="section-title !text-left">Welcome to Hopewell STEM Academy</h2>
            <span className="mt-5 block h-1 w-16 rounded-full bg-gradient-to-r from-gold-300 via-gold to-gold-500" />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                At Hopewell STEM Academy, we&apos;re revolutionising education through an
                innovative, STEM-focused curriculum. Our state-of-the-art facilities, expert
                faculty and hands-on learning approach create an environment where students
                develop critical thinking, problem-solving and innovation skills essential for
                the digital age.
              </p>
              <p>
                Through comprehensive STEM programs, robotics workshops and coding classes,
                we&apos;re preparing the next generation of scientists, technologists, engineers
                and mathematicians.
              </p>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-brand ring-1 ring-gold/30">
                    <FaCheck className="h-3 w-3" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/about" className="btn-primary">
                Begin Your STEM Journey
              </Link>
              <Link href="/academics" className="link-arrow">
                Explore academics <FaArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative">
          <div className="relative">
            <div className="absolute -bottom-6 -left-6 h-full w-full rounded-3xl bg-gradient-to-br from-gold-300/50 to-transparent" />
            <div
              className="relative aspect-[4/3] w-full rounded-3xl bg-cover bg-center shadow-card-hover ring-1 ring-brand-100"
              style={{ backgroundImage: `url(${images.welcome})` }}
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-brand px-7 py-5 text-white shadow-card-hover sm:block">
              <p className="font-display text-3xl font-bold text-gold-300">5+</p>
              <p className="text-sm text-white/80">Years of Excellence</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={160} className="container-page">
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-brand-100/80 bg-white p-6 text-center shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-300 via-gold to-gold-500 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <p className="font-display text-4xl font-extrabold text-brand">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}