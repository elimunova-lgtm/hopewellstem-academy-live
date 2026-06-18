import { whyChoose } from "@/lib/content";
import { SectionHeading, IconCardGrid } from "@/components/ui";

export default function WhyChoose() {
  return (
    <section className="section bg-gradient-to-br from-brand-50 to-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Hopewell"
          title="Why Choose Hopewell STEM Academy?"
          intro="A future-ready education built on innovation, hands-on learning and a community of dedicated educators."
        />
        <IconCardGrid items={whyChoose} />
      </div>
    </section>
  );
}
