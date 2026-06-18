import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Primary School",
  description:
    "Our primary school builds strong academic foundations through a STEM-integrated, competency-based curriculum.",
};

const highlights = [
  { icon: "FaBook", title: "Strong Foundations", description: "Solid literacy and numeracy that underpin all future learning." },
  { icon: "FaFlask", title: "Hands-On Science", description: "Experiments and projects that bring science to life." },
  { icon: "FaLaptopCode", title: "Digital Skills", description: "Early coding and ICT literacy for a connected world." },
  { icon: "FaUsers", title: "Collaboration", description: "Teamwork and communication built through group learning." },
  { icon: "FaFutbol", title: "Co-Curricular", description: "Sports, clubs and the arts that develop the whole child." },
  { icon: "FaHeart", title: "Values & Character", description: "Discipline, respect and integrity at the heart of school life." },
];

export default function PrimaryPage() {
  return (
    <>
      <PageHero
        title="Primary School"
        subtitle="Building strong foundations for confident, curious learners."
        image={heroes.academicsPrimary}
        crumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Primary School" }]}
      />
      <IntroSplit
        eyebrow="Grades 1–6"
        title="Where Strong Learners Are Made"
        image={heroes.academicsPrimary}
        paragraphs={[
          "Our primary school delivers a rich, competency-based curriculum that develops literacy, numeracy and a genuine love of science, technology and discovery. Learning is active and engaging, helping every child build the knowledge and skills they need to thrive.",
          "Beyond academics, we nurture curiosity, creativity and character — supported by dedicated teachers, hands-on STEM activities and a vibrant co-curricular program.",
        ]}
        features={["Competency-based curriculum", "STEM-integrated lessons", "Caring, qualified teachers", "Rich co-curricular life"]}
      />
      <section className="section bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page">
          <SectionHeading eyebrow="What We Offer" title="A Well-Rounded Education" />
          <IconCardGrid items={highlights} />
        </div>
      </section>
      <CTASection
        title="Enroll Your Child in Primary School"
        text="Discover how our primary program builds confident, capable and curious learners."
        primary={{ label: "Enroll Now", href: "/contact" }}
        secondary={{ label: "Book a Visit", href: "/contact" }}
      />
    </>
  );
}
