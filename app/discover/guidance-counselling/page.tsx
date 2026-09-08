import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Guidance & Counselling",
  description:
    "Hopewell STEM Academy's guidance and counselling program supports every student's wellbeing, character and growth.",  alternates: { canonical: "/discover/guidance-counselling" },
};

const services = [
  { icon: "FaHeart", title: "Emotional Wellbeing", description: "A safe, supportive space where students can share and grow." },
  { icon: "FaHandsHelping", title: "Personal Mentorship", description: "Caring mentors guide each learner through challenges and choices." },
  { icon: "FaUserGraduate", title: "Academic Guidance", description: "Support in study skills, goal-setting and academic progress." },
  { icon: "FaUsers", title: "Social Skills", description: "Building confidence, empathy and healthy relationships." },
  { icon: "FaLightbulb", title: "Career Awareness", description: "Helping students discover their strengths and future pathways." },
  { icon: "FaShieldAlt", title: "Child Protection", description: "Clear safeguarding ensures every child feels safe and valued." },
];

export default function GuidancePage() {
  return (
    <>
      <PageHero
        title="Guidance & Counselling"
        subtitle="Nurturing the whole child â€” mind, character and heart."
        image={heroes.discoverGuidance}
        crumbs={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "Guidance & Counselling" }]}
      />
      <IntroSplit
        eyebrow="Pastoral Care"
        title="Every Child Matters"
        image={heroes.discoverGuidance}
        paragraphs={[
          "At Hopewell STEM Academy, we believe academic success goes hand in hand with personal wellbeing. Our guidance and counselling program provides a caring, confidential environment where students feel heard and supported.",
          "Through mentorship, life-skills sessions and a strong culture of care, we help every learner build resilience, confidence and a positive sense of self.",
        ]}
        features={["Confidential support", "Trained counsellors", "Life-skills programs", "Parent partnership"]}
      />
      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading eyebrow="How We Help" title="Our Support Services" />
          <IconCardGrid items={services} />
        </div>
      </section>
      <CTASection
        title="A School That Cares"
        text="Talk to us about how we support each child's wellbeing and growth at Hopewell."
        primary={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
