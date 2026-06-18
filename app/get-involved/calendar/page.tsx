import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SectionHeading, CTASection } from "@/components/ui";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "School Calendar",
  description:
    "Stay up to date with term dates, events and activities at Hopewell STEM Academy, Nakuru.",
};

export default function CalendarPage() {
  return (
    <>
      <PageHero
        title="School Calendar"
        subtitle="Term dates, events and activities — all in one place."
        image={heroes.getInvolvedCalendar}
        crumbs={[{ label: "Home", href: "/" }, { label: "Get Involved", href: "/get-involved" }, { label: "Calendar" }]}
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Stay Informed"
            title="Upcoming Events & Term Dates"
            intro="Our calendar keeps parents and students up to date with school terms, holidays, sports days, science fairs and community events."
          />
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-brand-100 shadow-card">
            <iframe
              title="Hopewell STEM Academy school calendar"
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FNairobi&src=am9zZW13YXVyYTA3OEBnbWFpbC5jb20&src=ZW4ua2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23D81B60&color=%230B8043"
              className="h-[600px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Never Miss an Event"
        text="Add our calendar to your own and stay in the loop with everything happening at Hopewell."
        primary={{ label: "Contact the Office", href: "/contact" }}
      />
    </>
  );
}
