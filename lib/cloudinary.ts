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
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${transforms}${publicId}`;
}

/** Build a Cloudinary URL for raw files (PDFs, etc.). */
export function cldRawUrl(publicId: string): string {
  if (!CLOUD) return publicId;
  return `https://res.cloudinary.com/${CLOUD}/raw/upload/${publicId}`;
}
