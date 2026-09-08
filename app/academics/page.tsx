import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Home of academic excellence. Discover the STEM-driven curriculum and programs at Hopewell STEM Academy, Nakuru.",  alternates: { canonical: "/academics" },
};

const programs = [
  {
    title: "Playgroup",
    tagline: "Early Discovery & Imagination",
    image: heroes.academicsPlaygroup,
    href: "/academics/playgroup",
    description:
      "A nurturing environment where young minds explore STEM through fun, interactive play that builds early cognitive and problem-solving skills.",
  },
  {
    title: "Primary School",
    tagline: "Building Strong Foundations",
    image: heroes.academicsPrimary,
    href: "/academics/primary",
    description:
      "A rich, competency-based curriculum that develops literacy, numeracy and a genuine love of science, technology and discovery.",
  },
  {
    title: "Junior High School",
    tagline: "Innovation Starts Here",
    image: heroes.academicsJuniorHigh,
    href: "/academics/junior-high",
    description:
      "Students engage in robotics, coding, engineering challenges and scientific inquiry, preparing them for advanced STEM pathways.",
  },
];

const why = [
  { icon: "FaFlask", title: "Hands-On Learning", description: "Real experiments and projects that turn theory into understanding." },
  { icon: "FaBrain", title: "Critical Thinking", description: "We nurture problem-solvers who reason, question and create." },
  { icon: "FaRobot", title: "Technology-Driven", description: "Coding, robotics and ICT woven through everyday learning." },
  { icon: "FaUserGraduate", title: "Future-Ready", description: "Skills for careers in AI, engineering, medicine and beyond." },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Home of Academic Excellence"
        subtitle="Where passion meets innovation â€” building the next generation of leaders in science and technology."
        image={heroes.academics}
        crumbs={[{ label: "Home", href: "/" }, { label: "Academics" }]}
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Programs"
            title="A Pathway for Every Stage"
            intro="From early childhood through junior high, our STEM-integrated curriculum grows with your child â€” combining strong academics with creativity, curiosity and real-world skills."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {programs.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
                  <span className="absolute bottom-4 left-5 text-sm font-semibold uppercase tracking-wide text-white/90">
                    {p.tagline}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand-700">{p.title}</h3>
                  <p className="mt-2 text-slate-600">{p.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-semibold text-gold-600 transition group-hover:gap-3">
                    Learn more
                    <span className="transition group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="What is STEM?"
            title="The Core of Global Innovation"
            intro="STEM â€” Science, Technology, Engineering and Mathematics â€” is the driving force behind modern innovation. It fosters problem-solving, creativity and analytical thinking, equipping students with the skills they need to thrive in a technology-driven world."
          />
          <IconCardGrid items={why} />
        </div>
      </section>

      <CTASection
        title="Give Your Child a Future-Ready Education"
        text="Join a community where curiosity is celebrated and every learner is prepared to solve tomorrow's challenges."
        primary={{ label: "Enroll Today", href: "/contact" }}
        secondary={{ label: "Book a Visit", href: "/contact" }}
      />
    </>
  );
}
