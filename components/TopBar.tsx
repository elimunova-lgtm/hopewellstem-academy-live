import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { site } from "@/lib/site";
import SocialLinks from "./SocialLinks";

export default function TopBar() {
  return (
    <div className="bg-brand-900 text-white">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-2 text-sm md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-white/90">
          <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
            <FaPhone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
          <a href={site.emailHref} className="flex items-center gap-2 hover:text-white">
            <FaEnvelope className="h-3.5 w-3.5" />
            {site.email}
          </a>
          <span className="hidden items-center gap-2 lg:flex">
            <FaMapMarkerAlt className="h-3.5 w-3.5" />
            {site.location}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <a
            href={site.elearning}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-brand-950 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            E-Learning
          </a>
        </div>
      </div>
    </div>
  );
}
