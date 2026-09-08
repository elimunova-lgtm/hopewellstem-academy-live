import { news as staticNews, events as staticEvents } from "@/lib/content";
import { prisma } from "@/lib/prisma";
import { cldUrl } from "@/lib/cloudinary";

export type PublicNewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug?: string;
  category?: string;
  content?: string;
};

export type PublicEventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  image: string;
};

export type PublicPopup = {
  id: string;
  title: string;
  message: string;
  image: string | null;
  buttonLabel: string | null;
  buttonHref: string | null;
  updatedAt: string;
};

export type PublicFlyer = {
  id: string;
  title: string;
  image: string;
  caption: string;
};

function isDbConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function getPublishedNews(): Promise<PublicNewsItem[]> {
  if (!isDbConfigured()) {
    return staticNews.map((item, index) => ({
      id: `static-news-${index}`,
      title: item.title,
      date: item.date,
      excerpt: item.excerpt,
      image: item.image,
      slug: item.slug ?? slugify(item.title),
      category: item.category ?? "News",
      content: item.content ?? "",
    }));
  }

  try {
    const rows = await prisma.newsPost.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });

    if (rows.length === 0) {
      // DB is configured and returned nothing — user deleted all items, respect that.
      return [];
    }

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      date: row.dateLabel,
      excerpt: row.excerpt,
      image: row.image,
      slug: row.slug ?? slugify(row.title),
      category: row.category ?? "News",
      content: row.content ?? "",
    }));
  } catch {
    return staticNews.map((item, index) => ({
      id: `static-news-${index}`,
      title: item.title,
      date: item.date,
      excerpt: item.excerpt,
      image: item.image,
      slug: item.slug ?? slugify(item.title),
      category: item.category ?? "News",
      content: item.content ?? "",
    }));
  }
}

export async function getPublishedNewsBySlug(
  slug: string
): Promise<PublicNewsItem | null> {
  const all = await getPublishedNews();
  return all.find((item) => (item.slug ?? "") === slug) ?? null;
}

export async function getPublishedEvents(): Promise<PublicEventItem[]> {
  if (!isDbConfigured()) {
    return staticEvents.map((item, index) => ({
      id: `static-event-${index}`,
      title: item.title,
      date: item.date,
      time: item.time,
      description: item.description,
      location: item.location,
      image: item.image,
    }));
  }

  try {
    const rows = await prisma.eventPost.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });

    if (rows.length === 0) {
      // DB is configured and returned nothing — user deleted all items, respect that.
      return [];
    }

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      date: row.dateLabel,
      time: row.time,
      description: row.description,
      location: row.location,
      image: row.image,
    }));
  } catch {
    return staticEvents.map((item, index) => ({
      id: `static-event-${index}`,
      title: item.title,
      date: item.date,
      time: item.time,
      description: item.description,
      location: item.location,
      image: item.image,
    }));
  }
}

export async function getActivePopups(): Promise<PublicPopup[]> {
  if (!isDbConfigured()) return [];

  const now = new Date();

  try {
    const rows = await prisma.homePopup.findMany({
      where: {
        published: true,
        OR: [{ startsAt: null }, { startsAt: { lte: now } }],
        AND: [
          {
            OR: [{ endsAt: null }, { endsAt: { gte: now } }],
          },
        ],
      },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      message: row.message,
      image: row.image,
      buttonLabel: row.buttonLabel,
      buttonHref: row.buttonHref,
      updatedAt: row.updatedAt.toISOString(),
    }));
  } catch {
    return [];
  }
}

/**
 * Local dev fallback so flyers render without a reachable DB.
 * Production keeps the "respect CMS deletions" behaviour (no static fallback).
 */
const staticFlyers: PublicFlyer[] = [
  {
    id: "static-flyer-interviews",
    title: "2027 Intake Interviews",
    image: cldUrl("stemhsa/flyers/2026-intake-interviews"),
    caption: "Applications open for the 2027 academic year.",
  },
  {
    id: "static-flyer-bootcamp",
    title: "Holiday Robotics Bootcamp",
    image: cldUrl("stemhsa/flyers/stem-boot-camp"),
    caption: "Every school holiday — November 2026 next. Hands-on robotics.",
  },
];

export async function getPublishedFlyers(): Promise<PublicFlyer[]> {
  const dev = process.env.NODE_ENV === "development";

  if (!isDbConfigured()) {
    return dev ? staticFlyers : [];
  }

  try {
    const rows = await prisma.flyer.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      image: row.image,
      caption: row.caption,
    }));
  } catch {
    return dev ? staticFlyers : [];
  }
}
