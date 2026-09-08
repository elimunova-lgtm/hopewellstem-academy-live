import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Playgroup",
  description:
    "Early childhood learning at Hopewell STEM Academy â€” where young minds explore, play and discover through STEM.",  alternates: { canonical: "/academics/playgroup" },
};

const highlights = [
  { icon: "FaSeedling", title: "Nurturing Care", description: "A safe, loving environment where every child feels secure and valued." },
  { icon: "FaLightbulb", title: "Learning Through Play", description: "Fun, hands-on activities that spark curiosity and imagination." },
  { icon: "FaBrain", title: "Early STEM Concepts", description: "Simple, playful introductions to numbers, shapes, nature and discovery." },
  { icon: "FaHeart", title: "Social Skills", description: "Sharing, teamwork and confidence built through guided play." },
  { icon: "FaPalette", title: "Creativity", description: "Art, music and storytelling that develop expression and joy." },
  { icon: "FaChalkboardTeacher", title: "Caring Teachers", description: "Trained early-years educators who understand young learners." },
];

export default function PlaygroupPage() {
  return (
    <>
      <PageHero
        title="Playgroup"
        subtitle="Early discovery and imagination â€” the joyful first step in your child's learning journey."
        image={heroes.academicsPlaygroup}
        crumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Playgroup" }]}
      />
      <IntroSplit
        eyebrow="Our Youngest Learners"
        title="A Joyful Start to Learning"
        image={heroes.academicsPlaygroup}
        paragraphs={[
          "Young minds are filled with curiosity! Our playgroup provides a warm, nurturing environment where children explore STEM through fun, interactive activities. We introduce fundamental concepts through creative play, fostering early cognitive development and problem-solving abilities.",
          "Through stories, songs, art and hands-on discovery, our little learners build confidence, social skills and a lifelong love of learning â€” guided every step of the way by caring, qualified teachers.",
        ]}
        features={["Play-based learning", "Safe & nurturing", "Trained teachers", "Early STEM exposure"]}
      />
      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading eyebrow="What We Offer" title="Growing Through Play" />
          <IconCardGrid items={highlights} />
        </div>
      </section>
      <CTASection
        title="Begin Your Child's Journey With Us"
        text="Give your little one a joyful, nurturing start. Reach out to learn about enrollment and visit our playgroup."
        primary={{ label: "Enroll Now", href: "/contact" }}
        secondary={{ label: "Book a Visit", href: "/contact" }}
      />
    </>
  );
}
