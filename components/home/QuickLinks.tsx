import Link from "next/link";
import { FaRobot, FaCalendarAlt, FaNewspaper, FaUserPlus } from "react-icons/fa";

const links = [
  {
    icon: FaRobot,
    title: "STEM Programs",
    description: "Discover our innovative curriculum",
    href: "/discover/stem-initiative",
  },
  {
    icon: FaCalendarAlt,
    title: "Calendar",
    description: "Important dates & events",
    href: "/get-involved/calendar",
  },
  {
    icon: FaNewspaper,
    title: "Gallery",
    description: "Life at Hopewell",
    href: "/get-involved/gallery",
  },
  {
    icon: FaUserPlus,
    title: "Admissions",
    description: "Apply & enrol today",
    href: "/contact",
  },
];

export default function QuickLinks() {
  return (
    <section className="relative z-10 border-b border-brand-100/70 bg-cream">
      <div className="container-page grid grid-cols-2 gap-4 py-12 lg:grid-cols-4">
        {links.map(({ icon: Icon, title, description, href }) => (
          <Link
            key={title}
            href={href}
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-brand-100/80 bg-white p-6 text-center shadow-card-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover"
          >
            <span
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-300 via-gold to-gold-500 transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden="true"
            />
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-gold group-hover:text-brand-950 group-hover:ring-gold">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-brand">{title}</h3>
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}