import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "School Uniform",
  description:
    "Our school uniform guidelines promote pride, identity and a sense of belonging at Hopewell STEM Academy.",
};

const guidelines = [
  { icon: "FaCheck", title: "Daily Uniform", description: "The official uniform is worn neatly every school day." },
  { icon: "FaRunning", title: "Games Kit", description: "Sports attire and shoes are worn on games and PE days." },
  { icon: "FaStar", title: "Smart & Tidy", description: "Students take pride in a clean, well-presented appearance." },
  { icon: "FaShieldAlt", title: "Identity & Safety", description: "Uniform builds belonging and helps keep students identifiable." },
  { icon: "FaHeart", title: "Equality", description: "A shared uniform fosters unity and removes pressure to compare." },
  { icon: "FaBook", title: "Where to Buy", description: "Uniform details and suppliers are available from the office." },
];

export default function UniformPage() {
  return (
    <>
      <PageHero
        title="School Uniform"
        subtitle="Pride, identity and belonging — woven into what we wear."
        image={heroes.discoverUniform}
        crumbs={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "Uniform" }]}
      />
      <IntroSplit
        eyebrow="Our Standards"
        title="Dressed for Success"
        image={heroes.discoverUniform}
        paragraphs={[
          "Our school uniform reflects the values of Hopewell STEM Academy — discipline, pride and a strong sense of community. Wearing the uniform smartly helps students feel they belong and are ready to learn.",
          "The official uniform is worn every day, including after-school programs, while games kit is reserved for sports and PE days.",
        ]}
        features={["Official daily uniform", "Dedicated games kit", "Smart presentation", "Sense of belonging"]}
      />
      <section className="section bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page">
          <SectionHeading eyebrow="Guidelines" title="Uniform Essentials" />
          <IconCardGrid items={guidelines} />
        </div>
      </section>
      <CTASection
        title="Need Uniform Information?"
        text="Contact the office for full uniform guidelines and approved suppliers."
        primary={{ label: "Contact the Office", href: "/contact" }}
      />
    </>
  );
}
