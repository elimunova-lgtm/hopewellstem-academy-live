import type { MetadataRoute } from "next";
import { navigation, site } from "@/lib/site";
import { getPublishedNews } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = new Map<string, number>([["/", 1]]);

  const visit = (item: {
    href: string;
    children?: { href: string }[];
  }) => {
    if (!pages.has(item.href)) pages.set(item.href, 0.8);
    item.children?.forEach((child) => {
      if (!pages.has(child.href)) pages.set(child.href, 0.8);
    });
  };

  navigation.forEach(visit);

  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [...pages.entries()].map(
    ([path, priority]) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority,
    })
  );

  const posts = await getPublishedNews().catch(() => []);
  for (const post of posts) {
    if (!post.slug) continue;
    entries.push({
      url: `${site.url}/news/${post.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return entries;
}