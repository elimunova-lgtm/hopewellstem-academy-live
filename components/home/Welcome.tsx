import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { images } from "@/lib/images";

const highlights = [
  "State-of-the-art STEM facilities",
  "Experienced, expert faculty",
  "Small class sizes",
  "Hands-on learning experiences",
];

export default function Welcome() {
  return (
    <section className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="section-eyebrow">Welcome</span>
          <h2 className="section-title !text-left">
            Welcome to Hopewell STEM Academy
          </h2>
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
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand">
                  <FaCheck className="h-3 w-3" />
                </span>
                {h}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-primary mt-8">
            Begin Your STEM Journey
          </Link>
        </div>
        <div className="relative">
          <div
            className="aspect-[4/3] w-full rounded-3xl bg-cover bg-center shadow-card"
            style={{ backgroundImage: `url(${images.welcome})` }}
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-brand px-6 py-5 text-white shadow-card-hover sm:block">
            <p className="font-display text-3xl font-bold">5+</p>
            <p className="text-sm text-white/80">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
