import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, IconCardGrid, IntroSplit, CTASection } from "@/components/ui";
import { site } from "@/lib/site";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Fees & Transport",
  description:
    "Information on fees and safe, reliable school transport at Hopewell STEM Academy, Nakuru.",
};

const transport = [
  { icon: "FaBus", title: "Reliable Routes", description: "Safe, timely transport across Nakuru and surrounding areas." },
  { icon: "FaShieldAlt", title: "Safety First", description: "Well-maintained buses with caring, vetted attendants on board." },
  { icon: "FaHeart", title: "Door-to-School Care", description: "Friendly support that gives parents peace of mind every day." },
];

export default function FeesTransportPage() {
  return (
    <>
      <PageHero
        title="Fees & Transport"
        subtitle="Clear fee information and safe, dependable transport for your child."
        image={heroes.discoverFeesTransport}
        crumbs={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "Fees & Transport" }]}
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="School Fees"
            title="Transparent & Flexible"
            intro="Our fee structure varies by grade level and includes tuition, learning materials and standard activities. We offer flexible payment plans to suit different families."
          />
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 text-center shadow-card">
            <p className="text-lg text-slate-600">
              For the current fee structure and payment options, please contact our office.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href={site.phoneHref} className="btn-primary">
                Call {site.phone}
              </a>
              <a href={site.emailHref} className="btn-outline">
                Email the Office
              </a>
            </div>
          </div>
        </div>
      </section>

      <IntroSplit
        eyebrow="Getting to School"
        title="Safe & Reliable Transport"
        image="/images/img_0230.jpg"
        reverse
        paragraphs={[
          "We provide safe and reliable transport services for students within Nakuru and its environs. Our buses are well maintained and supervised, with the safety of every child as our top priority.",
          "Transport fees vary by distance. Please contact the office for route information and rates.",
        ]}
      />

      <section className="section bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page">
          <SectionHeading eyebrow="Our Promise" title="Transport You Can Trust" />
          <IconCardGrid items={transport} />
        </div>
      </section>

      <CTASection
        title="Questions About Fees or Transport?"
        text="Our friendly office team is happy to help with fee structures, payment plans and bus routes."
        primary={{ label: "Contact the Office", href: "/contact" }}
      />
    </>
  );
}
