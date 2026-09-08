import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, LinkCardGrid } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Discover HSA",
  description:
    "Explore life at Hopewell STEM Academy — our STEM initiative, sports, clubs, guidance, facilities and more.",  alternates: { canonical: "/discover" },
};

const areas = [
  {
    icon: "FaRobot",
    title: "STEM Initiative",
    description: "Our flagship hands-on program in robotics, coding, science and innovation.",
    href: "/discover/stem-initiative",
  },
  {
    icon: "FaFutbol",
    title: "Sports",
    description: "Athletics, team games and physical education that build healthy, confident learners.",
    href: "/discover/sports",
  },
  {
    icon: "FaUsers",
    title: "Clubs",
    description: "A vibrant range of clubs and societies that nurture talent and teamwork.",
    href: "/discover/clubs",
  },
  {
    icon: "FaHandsHelping",
    title: "Guidance & Counselling",
    description: "Pastoral care that supports every student's wellbeing and personal growth.",
    href: "/discover/guidance-counselling",
  },
  {
    icon: "FaBus",
    title: "Fees & Transport",
    description: "Transparent fee information and safe, reliable transport across Nakuru.",
    href: "/discover/fees-transport",
  },
  {
    icon: "FaLaptopCode",
    title: "Computer Lab",
    description: "A modern computer lab powering coding, research and digital literacy.",
    href: "/discover/computer-lab",
  },
  {
    icon: "FaBook",
    title: "Library",
    description: "A rich library and resource centre that fosters a love of reading and inquiry.",
    href: "/discover/library",
  },
  {
    icon: "FaCalendarAlt",
    title: "Events Ground",
    description: "Spacious grounds for assemblies, sports days and community celebrations.",
    href: "/discover/events-ground",
  },
  {
    icon: "FaCheck",
    title: "School Uniform",
    description: "Our uniform guidelines that promote pride, identity and belonging.",
    href: "/discover/uniform",
  },
];

export default function DiscoverPage() {
  return (
    <>
      <PageHero
        title="Discover Hopewell STEM Academy"
        subtitle="There's so much more to learning here. Explore the experiences that make Hopewell special."
        image={heroes.discover}
        crumbs={[{ label: "Home", href: "/" }, { label: "Discover HSA" }]}
      />
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Explore"
            title="Life at Hopewell"
            intro="From innovation labs to the sports field, discover the people, places and programs that shape our community."
          />
          <LinkCardGrid items={areas} />
        </div>
      </section>
    </>
  );
}
