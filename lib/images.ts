/**
 * Central image registry — all paths are Cloudinary public IDs.
 *
 * Convention: images are organised under the "stemhsa/" folder in Cloudinary.
 *   stemhsa/site/       — logos, favicon, partner logos
 *   stemhsa/heroes/     — page hero backgrounds
 *   stemhsa/gallery/    — gallery grid photos
 *   stemhsa/team/       — staff & director headshots
 *   stemhsa/levels/     — education level card images
 *   stemhsa/news/       — news card images
 *   stemhsa/events/     — event card images
 *
 * cldUrl() builds the full delivery URL with auto quality + format.
 */
import { cldUrl } from "./cloudinary";

const img = (publicId: string) => cldUrl(publicId);

export const images = {
  logo:    img("stemhsa/site/hopelogo"),
  favicon: img("stemhsa/site/favicon"),

  heroSlides: [
    img("stemhsa/heroes/lab3"),
    img("stemhsa/heroes/academics-primary"),
    img("stemhsa/gallery/img_0206"),
  ],

  welcome:    img("stemhsa/gallery/discover-clubs"),
  enrollment: img("stemhsa/gallery/IMG_0355"),

  levels: {
    playgroup: img("stemhsa/gallery/img_0261"),
    primary:   img("stemhsa/heroes/academics-primary"),
    junior:    img("stemhsa/heroes/academics-junior"),
  },

  news: {
    transport: img("stemhsa/gallery/discover-transport"),
    bootcamp:  img("stemhsa/gallery/lab1"),
    admission: img("stemhsa/heroes/academics-primary"),
    robotics:  img("stemhsa/gallery/img_0225"),
  },

  events: {
    funday:   img("stemhsa/gallery/discover-events"),
    bootcamp: img("stemhsa/gallery/lab2"),
    sports:   img("stemhsa/gallery/IMG_0307"),
    career:   img("stemhsa/gallery/IMG_1104"),
  },

  history: [
    img("stemhsa/gallery/img_0191"),
    img("stemhsa/heroes/academics-primary"),
    img("stemhsa/gallery/discover-events"),
  ],

  partners: {
    emit:         img("stemhsa/site/emit"),
    infinititech: img("stemhsa/site/infinititech"),
    as:           img("stemhsa/site/aslogo"),
  },
} as const;

/** Page hero backgrounds — one distinct school photo per page */
export const heroes = {
  about:           img("stemhsa/heroes/academics-primary"),
  aboutDirectors:  img("stemhsa/heroes/IMG_1098"),
  aboutStaff:      img("stemhsa/heroes/IMG_1101"),
  aboutHistory:    img("stemhsa/heroes/IMG_1121"),
  aboutPolicies:   img("stemhsa/heroes/IMG_1132"),

  discover:              img("stemhsa/heroes/IMG_0361"),
  discoverStem:          img("stemhsa/gallery/discover-stem"),
  discoverSports:        img("stemhsa/gallery/discover-sports"),
  discoverClubs:         img("stemhsa/gallery/discover-clubs"),
  discoverGuidance:      img("stemhsa/gallery/IMG_1104"),
  discoverFeesTransport: img("stemhsa/gallery/discover-transport"),
  discoverComputerLab:   img("stemhsa/gallery/lab1"),
  discoverLibrary:       img("stemhsa/gallery/discover-library"),
  discoverEventsGround:  img("stemhsa/heroes/IMG_0298"),
  discoverUniform:       img("stemhsa/gallery/discover-uniform"),

  academics:           img("stemhsa/heroes/IMG_1098"),
  academicsPlaygroup:  img("stemhsa/gallery/img_0191"),
  academicsPrimary:    img("stemhsa/heroes/academics-primary"),
  academicsJuniorHigh: img("stemhsa/heroes/academics-junior"),

  getInvolved:        img("stemhsa/heroes/IMG_1134"),
  getInvolvedGallery: img("stemhsa/heroes/IMG_0345"),
  getInvolvedCalendar:img("stemhsa/heroes/IMG_0313"),

  contact: img("stemhsa/heroes/IMG_1121"),
} as const;
