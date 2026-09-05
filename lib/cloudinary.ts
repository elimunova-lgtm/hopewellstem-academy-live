/**
 * Cloudinary URL builder — browser-safe, zero Node.js dependencies.
 *
 * For server-side uploads, see lib/cloudinary-server.ts
 *
 * Required env var (exposed to browser):
 *   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
 */

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "";

/**
 * Local-dev asset override.
 *
 * During `next dev` the site renders these static files from /public instead of
 * hitting Cloudinary, so it works with no Cloudinary account/keys. The map is
 * keyed by Cloudinary public ID and points at the local file in /public.
 *
 * Production (next build / start) ignores this and serves from Cloudinary.
 */
const LOCAL_ASSETS: Record<string, string> = {
  "stemhsa/heroes/lab3": "/lab3.jpeg",
  "stemhsa/heroes/academics-primary": "/academics-primary.jpeg",
  "stemhsa/heroes/academics-junior": "/academics-junior.jpeg",
  "stemhsa/gallery/img_0206": "/img_0206.jpeg",
  "stemhsa/gallery/img_0261": "/img_0261.jpeg",
  "stemhsa/gallery/discover-clubs": "/discover-clubs.jpeg",
  "stemhsa/gallery/IMG_0355": "/IMG_0355.jpeg",
  "stemhsa/site/hopelogo": "/image.png",
  "stemhsa/site/favicon": "/favicon.png",
  "stemhsa/site/aslogo": "/image_1.png",
  "stemhsa/site/infinititech": "/image.jpeg",
  "stemhsa/site/emit": "/image_1.jpeg",
};

const isDev = process.env.NODE_ENV === "development";

/**
 * Build a Cloudinary delivery URL for a given public_id.
 * Automatically applies q_auto + f_auto unless you override them.
 *
 * @example
 *   cldUrl("stemhsa/heroes/lab3")
 *   cldUrl("stemhsa/heroes/lab3", { width: 1280 })
 */
export function cldUrl(
  publicId: string,
  opts: {
    width?: number;
    height?: number;
    crop?: string;
    quality?: string | number;
    format?: string;
    gravity?: string;
  } = {},
): string {
  if (isDev && LOCAL_ASSETS[publicId]) {
    return LOCAL_ASSETS[publicId];
  }

  if (!CLOUD) {
    return `https://res.cloudinary.com/demo/image/upload/${publicId}`;
  }

  const t: string[] = [];
  if (opts.width)   t.push(`w_${opts.width}`);
  if (opts.height)  t.push(`h_${opts.height}`);
  if (opts.crop)    t.push(`c_${opts.crop}`);
  if (opts.gravity) t.push(`g_${opts.gravity}`);
  if (opts.quality) t.push(`q_${opts.quality}`);
  else              t.push("q_auto");
  if (opts.format)  t.push(`f_${opts.format}`);
  else              t.push("f_auto");

  const transforms = t.join(",") + "/";
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${transforms}${encodeURIComponent(publicId).replace(/%2F/g, "/")}`;
}

/** Build a Cloudinary URL for raw files (PDFs, etc.). */
export function cldRawUrl(publicId: string): string {
  if (!CLOUD) return publicId;
  return `https://res.cloudinary.com/${CLOUD}/raw/upload/${publicId}`;
}
