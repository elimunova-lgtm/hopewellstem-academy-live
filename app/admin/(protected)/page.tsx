import Link from "next/link";

const cards = [
  {
    href: "/admin/news",
    title: "Latest News",
    description: "Manage homepage news cards and announcements.",
  },
  {
    href: "/admin/events",
    title: "Upcoming Events",
    description: "Update event listings shown on the homepage.",
  },
  {
    href: "/admin/popups",
    title: "Homepage Pop-ups",
    description: "Create rotating pop-ups with schedule controls.",
  },
  {
    href: "/admin/flyers",
    title: "Flyers & Posters",
    description: "Upload flyers and posters shown on the gallery page.",
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-brand">Dashboard</h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        Update live homepage content without touching code. Published items appear
        on the website immediately.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
          >
            <h3 className="font-display text-lg font-bold text-brand">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
