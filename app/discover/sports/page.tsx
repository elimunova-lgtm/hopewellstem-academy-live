import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Sports",
  description:
    "Sports and athletics at Hopewell STEM Academy build healthy, confident and disciplined learners.",  alternates: { canonical: "/discover/sports" },
};

const offerings = [
  { icon: "FaFutbol", title: "Football", description: "Team training and friendly fixtures that build teamwork and fitness." },
  { icon: "FaRunning", title: "Athletics", description: "Track and field events that develop discipline, focus and resilience." },
  { icon: "FaUsers", title: "Team Games", description: "From netball to handball, students learn cooperation and fair play." },
  { icon: "FaTrophy", title: "Inter-School Competitions", description: "Opportunities to represent the school and compete with pride." },
  { icon: "FaHeart", title: "Health & Wellbeing", description: "Physical education that supports balanced, healthy development." },
  { icon: "FaStar", title: "Talent Development", description: "We identify and nurture sporting talent alongside academics." },
];

export default function SportsPage() {
  return (
    <>
      <PageHero
        title="Sports & Athletics"
        subtitle="A healthy body supports a sharp mind. Sport is central to life at Hopewell."
        image={heroes.discoverSports}
        crumbs={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "Sports" }]}
      />
      <IntroSplit
        eyebrow="Active Learners"
        title="More Than a Game"
        image={heroes.discoverSports}
        paragraphs={[
          "At Hopewell STEM Academy, sport is an essential part of a well-rounded education. Through games and athletics, students develop fitness, discipline, leadership and the ability to work as a team.",
          "Our spacious grounds and dedicated PE program give every learner the chance to discover and grow their sporting talents.",
        ]}
        features={["Spacious sports grounds", "Qualified coaching", "Annual sports day", "Inter-school fixtures"]}
      />
      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading eyebrow="On the Field" title="Our Sporting Programs" />
          <IconCardGrid items={offerings} />
        </div>
      </section>
      <CTASection
        title="Come and Play with Us"
        text="Discover how sport and academics combine to develop confident, capable young people at Hopewell."
        primary={{ label: "Visit Us", href: "/contact" }}
      />
    </>
  );
}
