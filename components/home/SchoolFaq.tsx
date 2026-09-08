import Link from "next/link";
import { FaChevronDown, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "Is Hopewell STEM Academy one of the best schools in Nakuru, Kenya?",
    answer:
      "Yes. Hopewell STEM Academy is a leading STEM school in Nakuru, Kenya, known for hands-on robotics, coding and science programmes from playgroup through junior high school. Parents choose us for our small classes, expert STEM teachers, modern computer lab and a safe, caring campus in Pipeline, Nakuru.",
    href: "/about",
    cta: "Learn more about us",
  },
  {
    question: "What levels does Hopewell STEM Academy teach?",
    answer:
      "We teach Playgroup (early years), Primary School and Junior High School under Kenya's competency-based curriculum, with STEM integrated across every level — from discovery-based play for little learners to advanced sciences, coding and engineering for senior students.",
    href: "/academics",
    cta: "Explore our academics",
  },
  {
    question: "Does Hopewell STEM Academy offer robotics and coding for kids?",
    answer:
      "Yes. Our flagship STEM initiative runs a robotics club, coding society, science olympiad and dedicated computer-lab lessons for all learners. Every Friday is STEM Day, when students build, code and experiment on hands-on projects — one of the reasons we are a top STEM school in Kenya.",
    href: "/discover/stem-initiative",
    cta: "See our STEM initiative",
  },
  {
    question: "Where is Hopewell STEM Academy located in Nakuru?",
    answer:
      "Our school is located at Pipeline, Nakuru, Kenya — easily accessible from across Nakuru town and surrounding areas, with safe, reliable school transport and nutritious meals provided every school day.",
    href: "/contact",
    cta: "Get directions",
  },
  {
    question: "How much are school fees at Hopewell STEM Academy in Nakuru?",
    answer:
      "Our fees are competitive for a private school in Nakuru and cover tuition, STEM programmes, labs and learning materials, with transport and meals available. Contact our admissions team for the current fee schedule for your child's level.",
    href: "/discover/fees-transport",
    cta: "View fees & transport",
  },
  {
    question: "How do I enrol my child at Hopewell STEM Academy?",
    answer:
      "Enrolling takes three simple steps: request an admissions call, visit the campus for an assessment and interview, then receive your offer and complete enrolment. Our admissions team guides you at every stage.",
    href: "/contact",
    cta: "Start your enquiry",
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SchoolFaq() {
  return (
    <section className="section bg-brand">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand-950/40 p-8 shadow-card-hover sm:p-10 lg:p-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
            aria-hidden="true"
          />
          <Reveal>
            <SectionHeading
              eyebrow="Parents Ask"
              title="Your Questions, Answered"
              intro="Honest answers about Hopewell STEM Academy, one of the leading STEM schools in Nakuru, Kenya."
              light
            />
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-6 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={(index % 2) * 100}>
                <details className="group rounded-2xl border border-white/10 bg-white/[0.07] shadow-card-soft transition open:bg-white/[0.12]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-base font-bold leading-snug text-white sm:text-lg">
                      {faq.question}
                    </h3>
                    <FaChevronDown className="h-4 w-4 shrink-0 text-gold-300 transition group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-white/80">
                      {faq.answer}
                    </p>
                    <Link
                      href={faq.href}
                      className="link-arrow mt-3 !text-gold-300"
                    >
                      {faq.cta}
                    </Link>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-gold-500/30 bg-gold-500/10 p-6 sm:flex-row">
              <div>
                <p className="font-display text-lg font-bold text-white">
                  Still have a question?
                </p>
                <p className="mt-1 text-sm text-white/75">
                  Speak directly with our admissions team today.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={site.phoneHref}
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <FaPhoneAlt className="h-4 w-4" /> {site.phone}
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 !border-gold-500/50 !text-white hover:!bg-gold-500 hover:!text-brand"
                >
                  <FaWhatsapp className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}