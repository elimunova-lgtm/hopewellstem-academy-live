/**
 * Central image registry — all paths are Cloudinary public IDs.
 *
 * Only public IDs that are VERIFIED to exist in the school's Cloudinary
 * account are referenced here (the account holds 7 photos + logos + flyers).
 * Missing originals have never existed on the account; swap any entry once the
 * real photo is uploaded (see scripts/upload-public.mjs).
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
    transport: img("stemhsa/gallery/img_0261"),
    bootcamp:  img("stemhsa/heroes/lab3"),
    admission: img("stemhsa/heroes/academics-primary"),
    robotics:  img("stemhsa/heroes/academics-junior"),
  },

  events: {
    funday:   img("stemhsa/gallery/IMG_0355"),
    bootcamp: img("stemhsa/heroes/lab3"),
    sports:   img("stemhsa/gallery/img_0206"),
    career:   img("stemhsa/heroes/academics-primary"),
  },

  history: [
    img("stemhsa/gallery/img_0261"),
    img("stemhsa/heroes/academics-primary"),
    img("stemhsa/gallery/IMG_0355"),
  ],

  partners: {
    emit:         img("stemhsa/site/emit"),
    infinititech: img("stemhsa/site/infinititech"),
    as:           img("stemhsa/site/aslogo"),
  },
} as const;

/** Page hero images — one distinct school photo per page */
export const heroes = {
  about:           img("stemhsa/heroes/academics-primary"),
  aboutDirectors:  img("stemhsa/gallery/img_0206"),
  aboutStaff:      img("stemhsa/heroes/academics-junior"),
  aboutHistory:    img("stemhsa/gallery/IMG_0355"),
  aboutPolicies:   img("stemhsa/gallery/img_0261"),

  discover:              img("stemhsa/gallery/discover-clubs"),
  discoverStem:          img("stemhsa/heroes/lab3"),
  discoverSports:        img("stemhsa/gallery/img_0206"),
  discoverClubs:         img("stemhsa/gallery/discover-clubs"),
  discoverGuidance:      img("stemhsa/heroes/academics-junior"),
  discoverFeesTransport: img("stemhsa/gallery/img_0261"),
  discoverComputerLab:   img("stemhsa/heroes/lab3"),
  discoverLibrary:       img("stemhsa/gallery/IMG_0355"),
  discoverEventsGround:  img("stemhsa/gallery/img_0206"),
  discoverUniform:       img("stemhsa/heroes/academics-primary"),

  academics:           img("stemhsa/heroes/lab3"),
  academicsPlaygroup:  img("stemhsa/gallery/img_0261"),
  academicsPrimary:    img("stemhsa/heroes/academics-primary"),
  academicsJuniorHigh: img("stemhsa/heroes/academics-junior"),

  getInvolved:        img("stemhsa/gallery/img_0206"),
  getInvolvedGallery: img("stemhsa/gallery/IMG_0355"),
  getInvolvedCalendar:img("stemhsa/gallery/img_0261"),

  contact: img("stemhsa/heroes/academics-junior"),
} as const;