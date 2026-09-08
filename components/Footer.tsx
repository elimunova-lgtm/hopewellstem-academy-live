import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { site } from "@/lib/site";
import SocialLinks from "./SocialLinks";
import NewsletterForm from "./NewsletterForm";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/contact" },
  { label: "News & Blog", href: "/news" },
  { label: "Calendar", href: "/get-involved/calendar" },
  { label: "Elimu Nova Platform", href: site.elimunova },
  { label: "E-Learning", href: site.elearning },
  { label: "Contact Us", href: "/contact" },
];

const programs = [
  { label: "STEM Initiative", href: "/discover/stem-initiative" },
  { label: "Clubs & Societies", href: "/discover/clubs" },
  { label: "Sports & Athletics", href: "/discover/sports" },
  { label: "Library", href: "/discover/library" },
  { label: "Gallery", href: "/get-involved/gallery" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand text-white">
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-300 via-gold to-gold-500"
        aria-hidden="true"
      />
      <div className="bg-dots-light absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-page relative grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {quickLinks.map((l) => (
              <li key={l.label}>
                {l.href.startsWith("http") ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:pl-1 hover:text-white"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="transition hover:pl-1 hover:text-white">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Programs</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {programs.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition hover:pl-1 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 h-4 w-4 shrink-0" />
              {site.location}
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="h-4 w-4 shrink-0" />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="h-4 w-4 shrink-0" />
              <a href={site.emailHref} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
          <SocialLinks variant="footer" className="mt-4" />
        </div>

        <div>
          <h3 className="footer-heading">Newsletter</h3>
          <p className="mb-3 text-sm text-white/80">
            Subscribe to our newsletter for the latest updates and news.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="relative border-y border-white/10 py-8 text-center">
        <h3 className="font-display text-2xl font-bold tracking-wide sm:text-3xl">
          <span className="bg-gradient-to-r from-gold-300 via-white to-gold-300 bg-clip-text text-transparent">
            {site.motto}
          </span>
        </h3>
        <p className="mt-2 italic text-white/80">{site.tagline}</p>
      </div>

      <div className="container-page relative py-6 text-center text-sm text-white/60">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="mt-1">
          Developed by{" "}
          <a
            href={site.developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold-300 hover:text-white"
          >
            {site.developer.name}
          </a>
        </p>
        <p className="mt-3">
          <Link
            href="/admin/login"
            className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-xs font-medium text-white/70 transition hover:border-white/40 hover:text-white"
          >
            Admin login
          </Link>
        </p>
      </div>
    </footer>
  );
}
