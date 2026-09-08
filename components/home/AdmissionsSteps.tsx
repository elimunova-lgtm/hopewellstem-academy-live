import Link from "next/link";
import {
  FaPhoneVolume,
  FaUsers,
  FaFlagCheckered,
  FaArrowRight,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

const steps = [
  {
    icon: FaPhoneVolume,
    title: "Request an Admissions Call",
    text: "Tell us about your child. Our admissions team calls you within 24 hours with next steps, fees and space availability.",
    cta: "Request a call now",
    href: "/contact",
  },
  {
    icon: FaUsers,
    title: "Meet, Assess & Interview",
    text: "A friendly campus visit and assessment help us place your child in the right class. Ask us anything along the way.",
    cta: "See how admissions work",
    href: "/discover/fees-transport",
  },
  {
    icon: FaFlagCheckered,
    title: "Welcome to Hopewell",
    text: "Receive the admission offer, settle fees, collect the uniform and enrol — your child joins our family of young innovators.",
    cta: "Begin the journey",
    href: "/academics",
  },
];

export default function AdmissionsSteps() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Admissions"
            title="Joining Us Is Simple"
            intro="Three clear steps take your child from enquiry to enrolled — guided at every stage by our admissions team."
          />
        </Reveal>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Reveal delay={index * 100}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-b from-white to-brand-50/40 p-7 shadow-card-soft transition hover:-translate-y-1.5 hover:shadow-card">
                  <span
                    className="pointer-events-none absolute -right-3 -top-6 font-display text-8xl font-extrabold text-brand/10 transition group-hover:text-brand/15"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-gold-300 shadow-card-soft transition group-hover:-rotate-6">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-brand">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                  <Link
                    href={step.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition group-hover:gap-3 hover:underline"
                  >
                    {step.cta} <FaArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </Reveal>
              {index < steps.length - 1 ? (
                <FaArrowRight
                  className="absolute -right-5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-gold-500 lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>

        <Reveal delay={180}>
          <p className="mt-10 text-center text-sm text-slate-500">
            Have a question right now? Call us on{" "}
            <a href={site.phoneHref} className="font-semibold text-brand hover:underline">
              {site.phone}
            </a>{" "}
            or{" "}
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">
              message us on WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}