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
    <section className="relative z-10 -mt-16">
      <div className="container-page grid grid-cols-2 gap-4 lg:grid-cols-4">
        {links.map(({ icon: Icon, title, description, href }) => (
          <Link
            key={title}
            href={href}
            className="group rounded-2xl border border-brand-100 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
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
