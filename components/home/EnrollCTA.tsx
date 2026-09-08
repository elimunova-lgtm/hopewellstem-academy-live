import Link from "next/link";
import { FaCheck, FaPhone, FaWhatsapp } from "react-icons/fa";
import { site, intakeYear } from "@/lib/site";
import EnrollInquiryForm from "./EnrollInquiryForm";

const benefits = [
  "Guided enrollment & interview scheduling",
  "Fee structure and transport information",
  "Campus tour arrangements",
  "Financial aid guidance",
];

export default function EnrollCTA() {
  return (
    <section className="relative z-20 -mt-12 sm:-mt-16">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-3xl shadow-card-hover lg:grid-cols-[1fr_1.35fr]">
          <div className="relative flex flex-col justify-center bg-brand p-8 text-white sm:p-10">
            <div className="absolute right-8 top-8 hidden text-brand-50/20 sm:block">
              <FaWhatsapp className="h-24 w-24" />
            </div>
            <span className="inline-block w-fit rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              Admissions Open · {intakeYear} Intake
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Request an Enrollment Call
            </h2>
            <p className="mt-4 max-w-md text-white/85">
              Tell us about your child and our admissions team will reach out
              within 24 hours with next steps, interviews and space
              availability.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                    <FaCheck className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <FaPhone className="h-3.5 w-3.5" /> {site.phone}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                <FaWhatsapp className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10">
            <EnrollInquiryForm />
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Prefer to reach us directly?{" "}
          <Link href="/contact" className="font-semibold text-brand hover:underline">
            Visit the contact page
          </Link>{" "}
          or email{" "}
          <a href={site.emailHref} className="font-semibold text-brand hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}