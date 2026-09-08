import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PersonGrid from "@/components/PersonGrid";
import { SectionHeading } from "@/components/ui";
import { directors } from "@/lib/team";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Meet the Directors",
  description:
    "Meet the visionary directors guiding Hopewell STEM Academy's mission of excellence in STEM education.",  alternates: { canonical: "/about/directors" },
};

export default function DirectorsPage() {
  return (
    <>
      <PageHero
        title="Our Executive Team"
        subtitle="Meet the visionary directors guiding Hopewell STEM Academy's mission of excellence."
        image={heroes.aboutDirectors}
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Directors" }]}
      />
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the Directors"
            intro="Decades of combined experience in education, STEM innovation and school leadership. Click a director's photo to view their full bio."
          />
          <PersonGrid people={directors} />
        </div>
      </section>
    </>
  );
}
