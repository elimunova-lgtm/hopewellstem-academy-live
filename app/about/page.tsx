import type { Metadata } from "next";
import { FaBullseye, FaEye } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, CTASection } from "@/components/ui";
import { coreValues, approach, timeline, achievements, facilities } from "@/lib/about";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hopewell STEM Academy's mission, vision, values and journey of excellence in STEM education in Nakuru, Kenya.",  alternates: { canonical: "/about" },
};

const impact = [
  "STEM Outreach Program: hands-on workshops introducing coding, robotics and experimental science.",
  "Annual Science Fair: a community platform for young scientists to showcase their innovations.",
  "Girls in STEM Initiative: dedicated programs encouraging girls' participation in science and technology.",
  "Environmental Stewardship: student-led conservation and sustainability projects.",
  "Digital Literacy: essential computer skills for learners and the wider community.",
  "Educator Development: training and resources that strengthen STEM teaching across the region.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Hopewell STEM Academy"
        subtitle="Cultivating innovation, excellence and leadership in tomorrow's change-makers."
        image={heroes.about}
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {[
            {
              icon: FaBullseye,
              title: "Our Mission",
              text: "At Hopewell STEM Academy, we cultivate intellectually curious and capable young minds who become selfless contributors to local and global communities. We nurture ethical, compassionate leaders through a rigorous, innovative curriculum that integrates advanced STEM education with the humanities â€” inspiring the visionaries who will solve tomorrow's most pressing challenges.",
            },
            {
              icon: FaEye,
              title: "Our Vision",
              text: "We aspire to set the standard for 21st-century education in Kenya and beyond â€” an exceptional environment where academic excellence converges with lifelong friendships and personal growth. By emphasising both technical mastery and human connection, we equip students with the versatile toolkit they need for enduring success and careers of significant impact.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl bg-gradient-to-br from-brand to-brand-950 p-8 text-white shadow-card sm:p-10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-bold">{title}</h2>
              <p className="mt-4 leading-relaxed text-white/85">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading eyebrow="What Drives Us" title="Our Core Values" />
          <IconCardGrid items={coreValues} />
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="How We Teach"
            title="Our Educational Approach"
            intro="We blend inquiry, collaboration and real-world application to develop confident, capable learners."
          />
          <IconCardGrid items={approach} />
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Our Story" title="Our Journey of Innovation" />
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

      {/* Achievements */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Milestones" title="Our Proud Achievements" />
          <IconCardGrid items={achievements} />
        </div>
      </section>

      {/* Community Impact */}
      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Beyond the Classroom"
            title="Our Community Impact"
            intro="We believe knowledge carries responsibility. Our initiatives reach thousands of learners beyond our campus each year."
          />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {impact.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border-l-4 border-gold-400 bg-white p-4 shadow-card"
              >
                <p className="text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Our Campus" title="World-Class Facilities" />
          <IconCardGrid items={facilities} />
        </div>
      </section>

      <CTASection
        title="Join the Hopewell Family"
        text="Ready to embark on an educational journey that will transform your child's future? We'd love to welcome you."
        primary={{ label: "Apply Now", href: "/contact" }}
        secondary={{ label: "Meet Our Team", href: "/about/staff" }}
      />
    </>
  );
}
