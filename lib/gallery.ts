import { cldUrl } from "./cloudinary";

export type GalleryCategory = {
  id: string;
  label: string;
};

export const galleryCategories: GalleryCategory[] = [
  { id: "all",       label: "All" },
  { id: "stem",      label: "STEM" },
  { id: "sports",    label: "Sports" },
  { id: "learning",  label: "Learning" },
  { id: "lab",       label: "Lab" },
  { id: "outdoor",   label: "Outdoor" },
  { id: "events",    label: "Events" },
  { id: "academics", label: "Academics" },
  { id: "discover",  label: "Campus Life" },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
};

const g = (publicId: string) =>
  cldUrl(publicId, { width: 800, crop: "fill", gravity: "auto" });

/**
 * Curated fallback gallery — only photos that are verified to exist in the
 * Cloudinary account. The gallery page prefers the live list from Cloudinary
 * (lib/gallery-live.ts) and falls back here if that is unavailable.
 */
export const galleryItems: GalleryItem[] = [
  { src: g("stemhsa/gallery/discover-clubs"), alt: "Clubs and societies", category: "discover" },
  { src: g("stemhsa/heroes/academics-primary"), alt: "Primary school",    category: "academics" },
  { src: g("stemhsa/heroes/academics-junior"),  alt: "Junior high",       category: "academics" },
  { src: g("stemhsa/gallery/img_0206"),         alt: "Swimming",          category: "sports" },
  { src: g("stemhsa/gallery/img_0261"),         alt: "Classroom learning",category: "learning" },
  { src: g("stemhsa/gallery/IMG_0355"),         alt: "School community",  category: "events" },
  { src: g("stemhsa/heroes/lab3"),              alt: "Science laboratory",category: "lab" },
];