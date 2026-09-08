import { whyChoose } from "@/lib/content";
import { SectionHeading, IconCardGrid } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function WhyChoose() {
  return (
    <section className="section bg-cream">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Why Hopewell"
            title="Why Choose Hopewell STEM Academy?"
            intro="A future-ready education built on innovation, hands-on learning and a community of dedicated educators."
          />
        </Reveal>
        <Reveal delay={120}>
          <IconCardGrid items={whyChoose} />
        </Reveal>
      </div>
    </section>
  );
}
