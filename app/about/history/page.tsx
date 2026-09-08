import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading } from "@/components/ui";
import { timeline } from "@/lib/about";
import { heroes } from "@/lib/heroes";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "Discover the journey, vision and milestones that have shaped Hopewell STEM Academy into a leading force in STEM education.",  alternates: { canonical: "/about/history" },
};

const blocks = [
  {
    title: "Founding & Vision",
    image: images.history[0],
    text: "Hopewell STEM Academy was established in 2019 with a pioneering vision to cultivate a community of learners proficient in Science, Technology, Engineering and Mathematics. The founding team — educators, community leaders and industry professionals — recognised the growing importance of STEM skills and set out to prepare students for the challenges and opportunities of a rapidly evolving technological world.",
  },
  {
    title: "Growth & Expansion",
    image: images.history[1],
    text: "Over the years, the Academy has grown in both enrolment and academic offerings. We expanded our facilities to include advanced technology labs, a comprehensive library and dedicated spaces for engineering and computer science — adding the STEM Wing, advanced STEM courses and the Innovation Hub.",
  },
  {
    title: "Community Impact",
    image: images.history[2],
    text: "Our influence extends beyond campus through outreach programs, partnerships and community engagement. We collaborate with local businesses, universities and non-profit organisations to give students real-world experiences and contribute to the broader community.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        title="Our History"
        subtitle="The journey, vision and milestones that shaped Hopewell STEM Academy."
        image={heroes.aboutHistory}
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "History" }]}
      />

      <section className="section">
        <div className="container-page space-y-16">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className="aspect-[4/3] w-full rounded-3xl bg-cover bg-center shadow-card"
                style={{ backgroundImage: `url(${b.image})` }}
              />
              <div>
                <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
                  {b.title}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Milestones" title="Key Moments in Our Journey" />
          <div className="mx-auto mt-12 max-w-3xl">
            <ol className="relative border-l-2 border-gold/50 pl-8">
              {timeline.map((t) => (
                <li key={t.year} className="mb-10 last:mb-0">
                  <span className="absolute -left-[0.6rem] flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-gold" />
                  <p className="text-sm font-bold uppercase tracking-wide text-gold-600">
                    {t.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-brand">{t.title}</h3>
                  <p className="mt-1 leading-relaxed text-slate-600">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
