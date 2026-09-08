import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Clubs",
  description:
    "Explore the vibrant clubs and societies at Hopewell STEM Academy that nurture talent, teamwork and leadership.",  alternates: { canonical: "/discover/clubs" },
};

const clubs = [
  { icon: "FaRobot", title: "Robotics Club", description: "Build and program robots and compete in challenges." },
  { icon: "FaCode", title: "Coding Society", description: "Learn to code, build apps and explore computer science." },
  { icon: "FaMicroscope", title: "Science Club", description: "Hands-on experiments and science-fair projects." },
  { icon: "FaBrain", title: "Mathematics Club", description: "Puzzles, contests and problem-solving for budding mathematicians." },
  { icon: "FaPalette", title: "Art & Creativity", description: "Express ideas through art, design and craft." },
  { icon: "FaMusic", title: "Music & Drama", description: "Develop confidence and talent on stage and in song." },
];

export default function ClubsPage() {
  return (
    <>
      <PageHero
        title="Clubs & Societies"
        subtitle="Discover passions, build friendships and develop leadership beyond the classroom."
        image={heroes.discoverClubs}
        crumbs={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "Clubs" }]}
      />
      <IntroSplit
        eyebrow="Beyond the Classroom"
        title="Find Your Passion"
        image={heroes.discoverClubs}
        paragraphs={[
          "Our clubs and societies give students space to explore interests, collaborate with peers and develop talents that complement their academic journey.",
          "Whether building robots, debating ideas or performing on stage, there's a place for every learner to shine.",
        ]}
        features={["Student-led initiatives", "Skilled mentors", "Inter-school competitions", "Leadership opportunities"]}
      />
      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Get Involved" title="Our Clubs" />
          <IconCardGrid items={clubs} />
        </div>
      </section>
      <CTASection
        title="There's a Club for Everyone"
        text="Encourage your child to explore, create and lead through our diverse range of clubs and societies."
        primary={{ label: "Enrol Today", href: "/contact" }}
      />
    </>
  );
}
