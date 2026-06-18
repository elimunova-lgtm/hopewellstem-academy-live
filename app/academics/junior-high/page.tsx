import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Junior High School",
  description:
    "Junior High at Hopewell STEM Academy — robotics, coding, engineering and scientific inquiry for future innovators.",
};

const highlights = [
  { icon: "FaRobot", title: "Robotics", description: "Hands-on robotics that turn ideas into working machines." },
  { icon: "FaCode", title: "Coding & Programming", description: "Real programming skills for the digital generation." },
  { icon: "FaProjectDiagram", title: "Engineering Challenges", description: "Design-and-build projects that develop problem-solving." },
  { icon: "FaMicroscope", title: "Scientific Inquiry", description: "Investigations that build analytical, evidence-based thinking." },
  { icon: "FaBullseye", title: "Career Pathways", description: "Guidance toward STEM careers and senior school subjects." },
  { icon: "FaUsers", title: "Leadership", description: "Teamwork, communication and confidence for the future." },
];

export default function JuniorHighPage() {
  return (
    <>
      <PageHero
        title="Junior High School"
        subtitle="Innovation starts here — cultivating critical thinkers and future innovators."
        image={heroes.academicsJuniorHigh}
        crumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Junior High School" }]}
      />
      <IntroSplit
        eyebrow="Grades 7–9"
        title="Shaping Tomorrow's Innovators"
        image={heroes.academicsJuniorHigh}
        paragraphs={[
          "At Hopewell STEM Academy, we cultivate critical thinkers and future innovators. Junior high students actively engage in robotics, coding, engineering challenges and scientific experiments, preparing them for the advanced STEM fields that will define the future.",
          "With strong academics, expert guidance and real-world projects, our learners develop the confidence, skills and curiosity to lead in a technology-driven world.",
        ]}
        features={["Robotics & coding", "Engineering projects", "Strong academics", "Career guidance"]}
      />
      <section className="section bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page">
          <SectionHeading eyebrow="What We Offer" title="Learning That Inspires Innovation" />
          <IconCardGrid items={highlights} />
        </div>
      </section>
      <CTASection
        title="Prepare Your Teen for a STEM Future"
        text="Join a program where young people build the skills to solve real-world challenges."
        primary={{ label: "Enroll Now", href: "/contact" }}
        secondary={{ label: "Book a Visit", href: "/contact" }}
      />
    </>
  );
}
