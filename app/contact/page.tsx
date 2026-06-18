import type { Metadata } from "next";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import { SectionHeading } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { site } from "@/lib/site";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hopewell STEM Academy, Nakuru. Call, email, visit or apply online — we'd love to hear from you.",
};

const info = [
  { icon: FaMapMarkerAlt, title: "Location", lines: ["Hopewell STEM Academy", "Pipeline, Nakuru, Kenya"] },
  { icon: FaPhone, title: "Phone", lines: [site.phone] },
  { icon: FaEnvelope, title: "Email", lines: [site.email] },
  { icon: FaClock, title: "Office Hours", lines: ["Mon – Fri: 8:00 AM – 5:00 PM", "Sat: 8:00 AM – 12:00 PM"] },
];

const faqs: FaqItem[] = [
  {
    question: "What curriculum does Hopewell STEM Academy follow?",
    answer:
      "We follow the Competency Based Curriculum (CBC) with an enhanced focus on Science, Technology, Engineering and Mathematics. Our approach develops critical thinking, problem-solving and a strong STEM foundation while ensuring well-rounded development.",
  },
  {
    question: "What are the school hours?",
    answer:
      "Our school day runs from 7:30 AM to 3:30 PM, Monday through Friday. We also offer optional after-school programs and activities until 5:00 PM for students who need extended care or wish to take part in extracurricular activities.",
  },
  {
    question: "What is the fee structure?",
    answer:
      "Our fee structure varies by grade level and includes tuition, learning materials, technology access and standard extracurricular activities. Please contact our office at 0112183663 or email officeathopewell@gmail.com for current details. We offer various payment plans to suit different families.",
  },
  {
    question: "What is the admission process?",
    answer:
      "The process involves submitting an application form, an academic assessment of the student, a parent and student interview, a review of previous records (if applicable), and then an admission offer and fee payment. We accept applications year-round but recommend applying early as spaces are limited.",
  },
  {
    question: "What makes Hopewell STEM Academy unique?",
    answer:
      "Our integrated STEM approach across all subjects, low teacher-to-student ratio, modern learning facilities, emphasis on both academic excellence and character, highly qualified teachers, and regular hands-on, real-world problem-solving projects set us apart.",
  },
  {
    question: "Are there transportation services available?",
    answer:
      "Yes. We provide safe and reliable transport for students within Nakuru and its environs. Our buses are well maintained and supervised. Transport fees vary by distance — please contact our office for route information and rates.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries or to schedule a visit."
        image={heroes.contact}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8">
              <h2 className="font-display text-2xl font-bold text-brand-700">Get in Touch</h2>
              <div className="mt-6 space-y-6">
                {info.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <Icon />
                    </span>
                    <div>
                      <h3 className="font-semibold text-brand-700">{title}</h3>
                      {lines.map((line) => (
                        <p key={line} className="text-slate-600">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.phoneHref} className="btn-primary">
                  <FaPhone /> Call Now
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-semibold text-white shadow-sm transition hover:brightness-110"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href={site.emailHref} className="btn-outline">
                  <FaEnvelope /> Email Us
                </a>
              </div>
            </div>

            <div className="min-h-[400px] overflow-hidden rounded-3xl border border-brand-100 shadow-card">
              <iframe
                title="Hopewell STEM Academy location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0674736704186!2d36.142698273495185!3d-0.3347216353232993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298f673ae52fe1%3A0xa84575eb61f1b97a!2sHopewell%20STEM%20Academy!5e1!3m2!1sen!2ske!4v1747813712634!5m2!1sen!2ske"
                className="h-full min-h-[400px] w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Admissions"
            title="Apply to Hopewell STEM Academy"
            intro="Complete the form below to begin your child's application. Our admissions team will be in touch shortly."
          />
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-brand-100 bg-white p-6 shadow-card sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Questions?" title="Frequently Asked Questions" />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
