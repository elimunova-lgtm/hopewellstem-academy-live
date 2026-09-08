import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaTag } from "react-icons/fa";
import ClickableImage from "@/components/ClickableImage";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { getPublishedNews } from "@/lib/cms";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "News & Blog",
  description:
    "Read the latest news from Hopewell STEM Academy in Nakuru, Kenya — STEM education guides, school updates, robotics wins and admissions advice for parents.",
  alternates: { canonical: "/news" },
};

export default async function NewsPage() {
  const posts = await getPublishedNews();

  return (
    <div className="section bg-cream">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="News & Blog"
            title="The Hopewell Blog"
            intro="School updates, STEM education guides and honest advice for parents choosing a school in Nakuru, Kenya."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={(index % 3) * 90}>
              <Link
                href={`/news/${post.slug ?? ""}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100/80 bg-white shadow-card transition hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover"
              >
                <span
                  className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-300 via-gold to-gold-500 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="h-44 w-full overflow-hidden">
                  <ClickableImage
                    src={post.image}
                    alt={post.title}
                    imageClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium text-gold-600">
                      <FaCalendarAlt className="h-3.5 w-3.5" /> {post.date}
                    </span>
                    {post.category ? (
                      <span className="flex items-center gap-1.5">
                        <FaTag className="h-3 w-3" /> {post.category}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-3 flex-1 font-display text-lg font-bold leading-snug text-brand transition group-hover:text-brand-700">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="link-arrow mt-4">
                    Read article <FaArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}