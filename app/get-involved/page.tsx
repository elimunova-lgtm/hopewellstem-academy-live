import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join our vibrant community of innovators, creators and future leaders at Hopewell STEM Academy, Nakuru.",
};

const stats = [
  { value: "15+", label: "STEM Clubs" },
  { value: "95%", label: "Student Participation" },
  { value: "20+", label: "Annual Competitions" },
  { value: "100%", label: "Whole-Child Focus" },
];

const ways = [
  { icon: "FaFlask", title: "STEM Programs", description: "Engage with hands-on science, technology, engineering and mathematics designed to foster critical thinking and innovation." },
  { icon: "FaRobot", title: "Robotics Teams", description: "Build, program and compete — developing technical and teamwork skills while solving real engineering challenges." },
  { icon: "FaCode", title: "Coding & Development", description: "Learn industry-standard programming and create apps, games and software that solve real problems." },
  { icon: "FaStar", title: "Talent Empowerment", description: "Discover and nurture your unique talents through programs that help students develop their strengths." },
  { icon: "FaGlobeAfrica", title: "Cultural Initiatives", description: "Celebrate diversity and global awareness, connecting STEM education with worldwide perspectives." },
  { icon: "FaHandsHelping", title: "Parent & Community", description: "Parents and community members are welcome to share expertise, time and resources to enrich learning." },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved"
        subtitle="Join our vibrant community of innovators, creators and future leaders."
        image={heroes.getInvolved}
        crumbs={[{ label: "Home", href: "/" }, { label: "Get Involved" }]}
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Be Part of It"
            title="Many Ways to Belong"
            intro="Discover how you can contribute to our mission of excellence in STEM education while developing your own skills and talents."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 text-center shadow-card"
              >
                <p className="font-display text-4xl font-extrabold text-brand-700">{s.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page">
          <SectionHeading eyebrow="Opportunities" title="Ways to Get Involved" />
          <IconCardGrid items={ways} />
        </div>
      </section>

      <CTASection
        title="Ready to Make a Difference?"
        text="Whether you're a student eager to explore, a parent looking to support, or a community member with expertise to share, there's a place for you in our STEM community."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "View Gallery", href: "/get-involved/gallery" }}
      />
    </>
  );
}
