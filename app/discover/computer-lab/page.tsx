import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Computer Lab",
  description:
    "Our modern computer lab powers coding, research and digital literacy at Hopewell STEM Academy.",
};

const features = [
  { icon: "FaLaptopCode", title: "Modern Workstations", description: "Up-to-date computers for coding, research and creativity." },
  { icon: "FaCode", title: "Coding & Programming", description: "Students learn real digital skills from an early age." },
  { icon: "FaMicrochip", title: "Digital Literacy", description: "Essential ICT skills for the modern, connected world." },
  { icon: "FaRobot", title: "Robotics Integration", description: "The lab supports our robotics and innovation projects." },
  { icon: "FaBook", title: "Online Research", description: "Guided, safe access to digital learning resources." },
  { icon: "FaShieldAlt", title: "Safe & Supervised", description: "A monitored environment that keeps learners safe online." },
];

export default function ComputerLabPage() {
  return (
    <>
      <PageHero
        title="Computer Lab"
        subtitle="The digital heart of our STEM learning."
        image="/images/IMG_1134.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "Computer Lab" }]}
      />
      <IntroSplit
        eyebrow="Digital Learning"
        title="Technology at Their Fingertips"
        image="/images/IMG_1128.jpg"
        paragraphs={[
          "Our computer lab gives students hands-on access to the tools and technology that power modern learning. From coding and research to robotics and design, learners build the digital skills essential for the future.",
          "Lessons are guided by qualified instructors in a safe, supervised environment that encourages curiosity and responsible use of technology.",
        ]}
        features={["Modern computers", "Coding curriculum", "Supervised access", "Robotics-ready"]}
      />
      <section className="section bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page">
          <SectionHeading eyebrow="Inside the Lab" title="What Students Experience" />
          <IconCardGrid items={features} />
        </div>
      </section>
      <CTASection
        title="See Our Facilities for Yourself"
        text="Book a visit and explore the computer lab and innovation spaces at Hopewell."
        primary={{ label: "Book a Visit", href: "/contact" }}
      />
    </>
  );
}
