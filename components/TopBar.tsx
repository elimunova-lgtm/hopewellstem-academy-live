import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { site } from "@/lib/site";
import SocialLinks from "./SocialLinks";

export default function TopBar() {
  return (
    <div className="border-b-4 border-gold-500 bg-brand">
      <div className="container-page flex min-h-9 flex-col items-center justify-between gap-1 py-1.5 text-sm text-white md:h-10 md:flex-row md:gap-3 md:py-0">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <a href={site.phoneHref} className="flex items-center gap-2 transition hover:text-gold-400">
            <FaPhone className="h-3.5 w-3.5 text-gold-400" />
            {site.phone}
          </a>
          <a href={site.emailHref} className="flex items-center gap-2 transition hover:text-gold-400">
            <FaEnvelope className="h-3.5 w-3.5 text-gold-400" />
            {site.email}
          </a>
          <span className="hidden items-center gap-2 lg:flex">
            <FaMapMarkerAlt className="h-3.5 w-3.5 text-gold-400" />
            {site.location}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <a
            href={site.elimunova}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-950 shadow-card-soft transition hover:-translate-y-0.5 hover:bg-gold-400"
          >
            Elimu Nova Platform
          </a>
        </div>
      </div>
    </div>
  );
}
