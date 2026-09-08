import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Events Ground",
  description:
    "Our spacious events ground hosts assemblies, sports days, science fairs and community celebrations.",  alternates: { canonical: "/discover/events-ground" },
};

const uses = [
  { icon: "FaFutbol", title: "Sports Days", description: "Spacious grounds for athletics, games and physical activities." },
  { icon: "FaUsers", title: "Assemblies", description: "Room for the whole school to gather and celebrate together." },
  { icon: "FaMicroscope", title: "Science Fairs", description: "A platform to showcase student innovation and creativity." },
  { icon: "FaStar", title: "Fun Days", description: "Family-friendly celebrations that bring our community together." },
  { icon: "FaTrophy", title: "Competitions", description: "Hosting inter-school events and prize-giving ceremonies." },
  { icon: "FaCalendarAlt", title: "Community Events", description: "Open days and gatherings that connect school and community." },
];

export default function EventsGroundPage() {
  return (
    <>
      <PageHero
        title="Events Ground"
        subtitle="Space for sport, celebration and community."
        image={heroes.discoverEventsGround}
        crumbs={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "Events Ground" }]}
      />
      <IntroSplit
        eyebrow="Our Campus"
        title="A Space for Every Occasion"
        image={heroes.discoverEventsGround}
        paragraphs={[
          "Our spacious events ground is the heart of school life beyond the classroom. From sports days and assemblies to science fairs and family fun days, it brings our community together.",
          "Well-maintained and versatile, the grounds provide a safe, welcoming venue for learning, play and celebration throughout the year.",
        ]}
        features={["Open, spacious grounds", "Hosts major events", "Safe & well-kept", "Community gatherings"]}
      />
      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading eyebrow="How We Use It" title="Bringing Our Community Together" />
          <IconCardGrid items={uses} />
        </div>
      </section>
      <CTASection
        title="Join Us at Our Next Event"
        text="See our calendar for upcoming sports days, fun days and community celebrations."
        primary={{ label: "View Calendar", href: "/get-involved/calendar" }}
      />
    </>
  );
}
