import "server-only";
import { v2 as cloudinary } from "cloudinary";
import { cldUrl } from "./cloudinary";
import type { GalleryItem } from "./gallery";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const FOLDERS = ["stemhsa/gallery", "stemhsa/heroes"];

function categoryFor(publicId: string): string {
  const base = publicId.toLowerCase();
  if (/lab/.test(base)) return "lab";
  if (/stem|robot|science|code|technolog/.test(base)) return "stem";
  if (/swim|sport|athlet|foot|game|field/.test(base)) return "sports";
  if (/librar|read/.test(base)) return "learning";
  if (/event|assembl|celebr|trip|outing/.test(base)) return "events";
  if (/academ|class|primary|junior|playgroup|grade/.test(base)) return "academics";
  if (/outdoor/.test(base)) return "outdoor";
  return "discover";
}

function altFor(publicId: string): string {
  const base = publicId.split("/").at(-1) ?? publicId;
  return decodeURIComponent(base)
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * List every image Cloudinary actually has in the school folders. The gallery
 * shows exactly this, so a broken image can never appear and newly uploaded
 * photos show up automatically. Returns [] when Cloudinary is not configured
 * or the listing fails.
 */
export async function listCloudinaryPhotos(): Promise<GalleryItem[]> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  if (!cloudName || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    return [];
  }

  const ids: string[] = [];
  try {
    for (const folder of FOLDERS) {
      let cursor: string | undefined;
      do {
        const params: Record<string, unknown> = {
          type: "upload",
          prefix: folder,
          resource_type: "image",
          max_results: 500,
        };
        if (cursor) params.next_cursor = cursor;
        const res = await cloudinary.api.resources(params);
        for (const asset of res.resources ?? []) ids.push(asset.public_id);
        cursor = res.next_cursor;
      } while (cursor);
    }
  } catch {
    return [];
  }

  const unique = [...new Set(ids)].sort();
  return unique.map((id) => ({
    src: cldUrl(id, { width: 800, crop: "fill", gravity: "auto" }),
    alt: altFor(id),
    category: categoryFor(id),
  }));
}