import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "STEM Initiative",
  description:
    "Discover Hopewell STEM Academy's flagship STEM initiative — hands-on learning in robotics, coding, science and engineering.",
};

const pillars = [
  {
    icon: "FaRobot",
    title: "Robotics",
    description:
      "Students design, build and program robots, developing engineering and computational-thinking skills through real challenges.",
  },
  {
    icon: "FaCode",
    title: "Coding & Software",
    description:
      "From block-based coding to real programming languages, learners create apps, games and solutions to everyday problems.",
  },
  {
    icon: "FaFlask",
    title: "Science & Experiments",
    description:
      "Inquiry-led laboratory work brings biology, chemistry and physics to life through hands-on discovery.",
  },
  {
    icon: "FaMicrochip",
    title: "Engineering & Design",
    description:
      "Design-thinking and prototyping projects teach students to engineer solutions from concept to creation.",
  },
  {
    icon: "FaBrain",
    title: "Mathematics Enrichment",
    description:
      "Beyond the syllabus, our enrichment program builds logical reasoning and problem-solving confidence.",
  },
  {
    icon: "FaLightbulb",
    title: "Innovation Projects",
    description:
      "Interdisciplinary projects challenge students to apply STEM to local and global problems that matter.",
  },
];

export default function StemInitiativePage() {
  return (
    <>
      <PageHero
        title="Our STEM Initiative"
        subtitle="Where curiosity becomes capability — hands-on science, technology, engineering and mathematics for every learner."
        image={heroes.discoverStem}
        crumbs={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "STEM Initiative" }]}
      />

      <IntroSplit
        eyebrow="Our Approach"
        title="Learning by Doing"
        image={heroes.discoverStem}
        paragraphs={[
          "STEM is the foundation of innovation and progress. At Hopewell STEM Academy, we equip students with hands-on learning experiences that develop critical thinking, creativity and problem-solving.",
          "Our curriculum integrates real-world applications across science, technology, engineering and mathematics, ensuring students are prepared for the careers of tomorrow — and inspired to lead them.",
        ]}
        features={[
          "Project-based, hands-on learning",
          "Dedicated robotics & innovation labs",
          "Industry-aligned digital skills",
          "Competitions & showcases",
        ]}
      />

      <section className="section bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page">
          <SectionHeading eyebrow="What We Offer" title="The Pillars of Our STEM Program" />
          <IconCardGrid items={pillars} />
        </div>
      </section>

      <CTASection
        title="Give Your Child a Future-Ready Education"
        text="Join a community where young innovators learn the skills, mindset and confidence to shape the future."
        primary={{ label: "Enrol Now", href: "/contact" }}
        secondary={{ label: "Explore Academics", href: "/academics" }}
      />
    </>
  );
}
