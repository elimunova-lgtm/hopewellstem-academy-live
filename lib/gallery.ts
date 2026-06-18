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

/** All school photos hosted on Cloudinary under stemhsa/gallery/ */
export const galleryItems: GalleryItem[] = [
  // Named campus & program photos
  { src: g("stemhsa/gallery/discover-stem"),        alt: "STEM learning",       category: "stem" },
  { src: g("stemhsa/gallery/discover-computerlab"), alt: "Computer lab",        category: "lab" },
  { src: g("stemhsa/gallery/discover-clubs"),       alt: "Clubs and societies", category: "discover" },
  { src: g("stemhsa/gallery/discover-sports"),      alt: "Sports",              category: "sports" },
  { src: g("stemhsa/gallery/discover-events"),      alt: "School events",       category: "events" },
  { src: g("stemhsa/gallery/discover-uniform"),     alt: "School uniform",      category: "discover" },
  { src: g("stemhsa/gallery/discover-transport"),   alt: "School transport",    category: "discover" },
  { src: g("stemhsa/gallery/discover-library"),     alt: "Library",             category: "learning" },
  { src: g("stemhsa/heroes/academics-primary"),     alt: "Primary school",      category: "academics" },
  { src: g("stemhsa/heroes/academics-junior"),      alt: "Junior high",         category: "academics" },
  { src: g("stemhsa/gallery/lab1"),                 alt: "Science laboratory",  category: "lab" },
  { src: g("stemhsa/gallery/lab2"),                 alt: "Lab experiments",     category: "lab" },
  { src: g("stemhsa/heroes/lab3"),                  alt: "Laboratory work",     category: "lab" },

  // Campus photo collection
  { src: g("stemhsa/gallery/img_0191"),   alt: "STEM activity",       category: "stem" },
  { src: g("stemhsa/gallery/img_0206"),   alt: "Swimming",            category: "sports" },
  { src: g("stemhsa/gallery/img_0225"),   alt: "Robotics project",    category: "stem" },
  { src: g("stemhsa/gallery/img_0230"),   alt: "Classroom learning",  category: "learning" },
  { src: g("stemhsa/gallery/img_0261"),   alt: "Student activities",  category: "discover" },
  { src: g("stemhsa/gallery/IMG_0293"),   alt: "Outdoor learning",    category: "outdoor" },
  { src: g("stemhsa/gallery/IMG_0294"),   alt: "Campus life",         category: "discover" },
  { src: g("stemhsa/heroes/IMG_0298"),    alt: "Outdoor activities",  category: "outdoor" },
  { src: g("stemhsa/gallery/IMG_0300"),   alt: "Field activities",    category: "outdoor" },
  { src: g("stemhsa/gallery/IMG_0307"),   alt: "Sports day",          category: "sports" },
  { src: g("stemhsa/heroes/IMG_0313"),    alt: "Athletics",           category: "sports" },
  { src: g("stemhsa/gallery/IMG_0314"),   alt: "Team sports",         category: "sports" },
  { src: g("stemhsa/gallery/IMG_0343"),   alt: "School trip",         category: "outdoor" },
  { src: g("stemhsa/heroes/IMG_0345"),    alt: "Excursion",           category: "outdoor" },
  { src: g("stemhsa/gallery/IMG_0355"),   alt: "School community",    category: "events" },
  { src: g("stemhsa/heroes/IMG_0361"),    alt: "Campus overview",     category: "discover" },
  { src: g("stemhsa/gallery/IMG_0362"),   alt: "School grounds",      category: "outdoor" },
  { src: g("stemhsa/heroes/IMG_1098"),    alt: "Academic excellence", category: "academics" },
  { src: g("stemhsa/heroes/IMG_1101"),    alt: "Classroom session",   category: "learning" },
  { src: g("stemhsa/gallery/IMG_1104"),   alt: "Student support",     category: "learning" },
  { src: g("stemhsa/heroes/IMG_1116"),    alt: "Library and reading", category: "learning" },
  { src: g("stemhsa/heroes/IMG_1121"),    alt: "School assembly",     category: "events" },
  { src: g("stemhsa/heroes/IMG_1132"),    alt: "School life",         category: "discover" },
  { src: g("stemhsa/heroes/IMG_1134"),    alt: "Community gathering", category: "events" },
  { src: g("stemhsa/heroes/IMG_1135"),    alt: "Celebration",         category: "events" },
  { src: g("stemhsa/gallery/IMG_1138-3"), alt: "Student achievements",category: "academics" },

  // Gallery folder
  { src: g("stemhsa/gallery/stem-1"),     alt: "STEM project",        category: "stem" },
  { src: g("stemhsa/gallery/stem-2"),     alt: "Science fair",        category: "stem" },
  { src: g("stemhsa/gallery/robotics-1"), alt: "Robotics class",      category: "stem" },
  { src: g("stemhsa/gallery/lab-1"),      alt: "Laboratory session",  category: "lab" },
  { src: g("stemhsa/gallery/lab-2"),      alt: "Science experiment",  category: "lab" },
  { src: g("stemhsa/gallery/sports-1"),   alt: "Sports activity",     category: "sports" },
  { src: g("stemhsa/gallery/sports-2"),   alt: "Sports competition",  category: "sports" },
  { src: g("stemhsa/gallery/swimming-1"), alt: "Swimming",            category: "sports" },
  { src: g("stemhsa/gallery/outdoor-1"),  alt: "Outdoor activity",    category: "outdoor" },
  { src: g("stemhsa/gallery/outdoor-2"),  alt: "Field day",           category: "outdoor" },
  { src: g("stemhsa/gallery/events-1"),   alt: "School celebration",  category: "events" },
  { src: g("stemhsa/gallery/events-2"),   alt: "Community event",     category: "events" },
  { src: g("stemhsa/gallery/assembly-1"), alt: "Assembly",            category: "events" },
  { src: g("stemhsa/gallery/trips-1"),    alt: "School trip",         category: "outdoor" },
  { src: g("stemhsa/gallery/arts-1"),     alt: "Creative arts",       category: "discover" },
];
