import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaTag,
  FaArrowLeft,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";
import ClickableImage from "@/components/ClickableImage";
import { getPublishedNews, getPublishedNewsBySlug } from "@/lib/cms";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

function absoluteImage(image: string): string {
  if (!image) return `${site.url}/favicon.png`;
  if (/^https?:\/\//.test(image)) return image;
  return `${site.url}${image.startsWith("/") ? image : `/${image}`}`;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedNewsBySlug(slug);
  if (!post) return { title: "Article not found" };

  const title = post.content ? post.title : `${post.title} | ${site.name}`;

  return {
    title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug ?? ""}` },
    openGraph: {
      title,
      description: post.excerpt,
      url: `${site.url}/news/${post.slug ?? ""}`,
      type: "article",
      images: [
        {
          url: absoluteImage(post.image),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: [absoluteImage(post.image)],
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPublishedNewsBySlug(slug);
  if (!post) notFound();

  const paragraphs = (post.content ?? "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const isArticle = paragraphs.length > 0;

  const allPosts = await getPublishedNews();
  const related = allPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteImage(post.image),
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/favicon.png`,
      },
    },
    mainEntityOfPage: `${site.url}/news/${post.slug ?? ""}`,
  };

  return (
    <div className="section bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <div className="container-page max-w-4xl">
        <Link
          href="/news"
          className="link-arrow text-sm"
        >
          <FaArrowLeft className="h-3.5 w-3.5" /> All News &amp; Blog
        </Link>

        <article className="mt-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-2 font-medium text-gold-600">
              <FaCalendarAlt className="h-3.5 w-3.5" /> {post.date}
            </span>
            {post.category ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-semibold text-brand">
                <FaTag className="h-3 w-3 text-gold-600" /> {post.category}
              </span>
            ) : null}
          </div>

          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-brand sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {post.excerpt}
          </p>

          {post.image ? (
            <div className="mt-7 overflow-hidden rounded-2xl shadow-card">
              <ClickableImage
                src={post.image}
                alt={post.title}
                imageClassName="w-full object-cover"
              />
            </div>
          ) : null}

          {isArticle ? (
            <div className="prose-crimson mt-8 space-y-5 leading-relaxed text-slate-700">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-slate-600">
              Contact our admissions team for more details about this update.
            </p>
          )}

          <div className="mt-10 rounded-2xl bg-brand p-7 text-white shadow-card-hover sm:p-9">
            <h2 className="font-display text-2xl font-bold">
              Ready to join Hopewell STEM Academy?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Enrol your child at one of the best STEM schools in Nakuru, Kenya.
              Book an admissions call or a campus visit today.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Start Your Enquiry <FaArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="btn-outline !border-gold-500/60 !text-white hover:!bg-gold-500 hover:!text-brand"
              >
                <FaPhoneAlt className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
        </article>

        {related.length > 0 ? (
          <aside className="mt-14">
            <h2 className="font-display text-2xl font-bold text-brand">
              More from the blog
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug ?? ""}`}
                  className="group flex h-full flex-col rounded-2xl border border-brand-100/80 bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <p className="text-xs font-medium text-gold-600">{item.date}</p>
                  <h3 className="mt-1.5 flex-1 font-display text-sm font-bold leading-snug text-brand group-hover:text-brand-700">
                    {item.title}
                  </h3>
                  <span className="link-arrow mt-2 text-xs">
                    Read <FaArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}