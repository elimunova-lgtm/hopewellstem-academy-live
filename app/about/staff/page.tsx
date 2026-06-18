import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PersonGrid from "@/components/PersonGrid";
import { SectionHeading } from "@/components/ui";
import { teachingStaff, nonTeachingStaff } from "@/lib/team";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Meet the Staff",
  description:
    "Meet the dedicated teaching and non-teaching staff who drive excellence at Hopewell STEM Academy.",
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Meet the dedicated team that drives excellence at Hopewell STEM Academy."
        image={heroes.aboutStaff}
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Staff" }]}
      />
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our People"
            title="Teaching Staff"
            intro="Passionate, qualified educators committed to every learner's success."
          />
          <PersonGrid people={teachingStaff} variant="staff" />
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Behind the Scenes"
            title="Non-Teaching Staff"
            intro="The hardworking individuals who keep our school running smoothly every day."
          />
          <PersonGrid people={nonTeachingStaff} variant="staff" />
        </div>
      </section>
    </>
  );
}
