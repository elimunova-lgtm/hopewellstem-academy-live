import Link from "next/link";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import ClickableImage from "@/components/ClickableImage";
import { getPublishedEvents, getPublishedNews } from "@/lib/cms";

export const dynamic = "force-dynamic";

export default async function NewsEvents() {
  const [news, events] = await Promise.all([
    getPublishedNews(),
    getPublishedEvents(),
  ]);

  return (
    <section className="section bg-slate-50">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-8 border-l-4 border-accent pl-4">
            <span className="section-eyebrow !mb-1">Stay Informed</span>
            <h2 className="font-display text-3xl font-bold text-brand">Latest News</h2>
          </div>
          {news.length === 0 ? (
            <p className="rounded-2xl border border-slate-100 bg-white p-6 text-slate-500 shadow-card">
              No news at the moment — check back soon.
            </p>
          ) : (
            <div className="space-y-5">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover sm:flex-row"
                >
                  <div className="h-40 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-40">
                    <ClickableImage
                      src={item.image}
                      alt={item.title}
                      imageClassName="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="flex items-center gap-2 text-sm text-accent">
                      <FaCalendarAlt className="h-3.5 w-3.5" /> {item.date}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-brand">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="mb-8 border-l-4 border-accent pl-4">
            <span className="section-eyebrow !mb-1">Mark Your Calendar</span>
            <h2 className="font-display text-3xl font-bold text-brand">Upcoming Events</h2>
          </div>
          {events.length === 0 ? (
            <p className="rounded-2xl border border-slate-100 bg-white p-6 text-slate-500 shadow-card">
              No upcoming events scheduled — check back soon.
            </p>
          ) : (
            <div className="space-y-5">
              {events.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
                >
                  {item.image ? (
                    <div className="h-44 w-full overflow-hidden">
                      <ClickableImage
                        src={item.image}
                        alt={item.title}
                        imageClassName="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5 text-accent">
                        <FaCalendarAlt className="h-3.5 w-3.5" /> {item.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaClock className="h-3.5 w-3.5" /> {item.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="h-3.5 w-3.5" /> {item.location}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold text-brand">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
          <Link
            href="/get-involved/calendar"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-brand transition hover:gap-3"
          >
            View Full Calendar <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
