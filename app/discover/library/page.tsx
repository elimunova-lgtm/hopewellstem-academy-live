import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Our library and resource centre nurtures a love of reading, research and lifelong learning.",  alternates: { canonical: "/discover/library" },
};

const features = [
  { icon: "FaBook", title: "Rich Collection", description: "A wide range of books across fiction, reference and STEM subjects." },
  { icon: "FaBrain", title: "Reading Culture", description: "Programs and activities that make reading enjoyable and habitual." },
  { icon: "FaLaptopCode", title: "Digital Resources", description: "Access to digital learning materials and research tools." },
  { icon: "FaUsers", title: "Quiet Study Spaces", description: "Comfortable areas for focused, independent learning." },
  { icon: "FaLightbulb", title: "Research Support", description: "Guidance that builds strong research and inquiry skills." },
  { icon: "FaStar", title: "Reading Challenges", description: "Fun challenges that celebrate and reward young readers." },
];

export default function LibraryPage() {
  return (
    <>
      <PageHero
        title="Library & Resource Centre"
        subtitle="Where curiosity meets a world of knowledge."
        image={heroes.discoverLibrary}
        crumbs={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "Library" }]}
      />
      <IntroSplit
        eyebrow="A Love of Reading"
        title="Opening Doors to Knowledge"
        image="/images/IMG_1116.jpg"
        paragraphs={[
          "Our library is a welcoming space that nurtures a lifelong love of reading and learning. With a rich and growing collection, students explore stories, build knowledge and develop strong research skills.",
          "Combining print and digital resources, the library supports every learner â€” from early readers to budding scientists and researchers.",
        ]}
        features={["Diverse book collection", "Digital resources", "Quiet study areas", "Reading programs"]}
      />
      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading eyebrow="What We Offer" title="Inside Our Library" />
          <IconCardGrid items={features} />
        </div>
      </section>
      <CTASection
        title="Nurture a Lifelong Reader"
        text="Discover how our library inspires curiosity and a love of learning at Hopewell."
        primary={{ label: "Visit Us", href: "/contact" }}
      />
    </>
  );
}
