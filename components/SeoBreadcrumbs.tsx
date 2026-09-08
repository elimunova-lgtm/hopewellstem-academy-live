"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const labelByPath: Record<string, string> = {
  "/about": "About Us",
  "/about/directors": "Meet the Directors",
  "/about/staff": "Meet the Staff",
  "/about/history": "Our History",
  "/about/policies": "Our Policies",
  "/discover": "Discover Hopewell STEM Academy",
  "/discover/stem-initiative": "STEM Initiative",
  "/discover/sports": "Sports & Athletics",
  "/discover/clubs": "Clubs & Societies",
  "/discover/guidance-counselling": "Guidance & Counselling",
  "/discover/fees-transport": "Fees & Transport",
  "/discover/computer-lab": "Computer Lab",
  "/discover/library": "Library",
  "/discover/events-ground": "Events Ground",
  "/discover/uniform": "School Uniform",
  "/academics": "Academics",
  "/academics/playgroup": "Playgroup",
  "/academics/primary": "Primary School",
  "/academics/junior-high": "Junior High School",
  "/get-involved": "Get Involved",
  "/get-involved/gallery": "Gallery",
  "/get-involved/calendar": "Academic Calendar",
  "/contact": "Contact Us",
  "/news": "News & Blog",
};

const parentLabels: Record<string, string> = {
  news: "News & Blog",
};

function humanize(segment: string) {
  if (parentLabels[segment]) return parentLabels[segment];
  return decodeURIComponent(segment)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function SeoBreadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", path: "/" }];

  let crumb = "";
  for (const segment of segments) {
    crumb += `/${segment}`;
    const label = labelByPath[crumb] ?? humanize(segment);
    items.push({ name: label, path: crumb });
  }

  if (items.length < 2) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}