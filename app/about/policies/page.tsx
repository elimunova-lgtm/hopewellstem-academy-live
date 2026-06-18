import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid } from "@/components/ui";
import { policies } from "@/lib/team";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Our Policies",
  description:
    "Review the policies that guide conduct, safety and communication at Hopewell STEM Academy.",
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        title="Our Policies"
        subtitle="The standards and protocols that keep our community safe, respectful and thriving."
        image={heroes.aboutPolicies}
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Policies" }]}
      />
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Standards & Conduct"
            title="School Policies"
            intro="For full policy documents, please contact the school office."
          />
          <IconCardGrid
            items={policies.map((p) => ({
              icon: p.icon,
              title: p.title,
              description: p.description,
            }))}
          />
        </div>
      </section>
    </>
  );
}
