/**
 * Upload the source images currently at the ROOT of public/ to Cloudinary,
 * using their correct public IDs (see lib/images.ts / lib/cloudinary.ts).
 *
 * Usage (from project root):
 *   node scripts/upload-public.mjs
 *
 * Requires .env.local to have CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY,
 * CLOUDINARY_API_SECRET (or CLOUDINARY_URL).
 */

import { v2 as cloudinary } from "cloudinary";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";
import sharp from "sharp";

config({ path: ".env.local" });
config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// local filename (as it appears in public/) -> Cloudinary public_id
const ASSET_MAP = {
  // site / brand assets
  "image.png": "stemhsa/site/hopelogo",
  "image_2.png": "stemhsa/site/hopelogo",
  "favicon.png": "stemhsa/site/favicon",
  "image_1.png": "stemhsa/site/aslogo",
  "image_2.jpeg": "stemhsa/site/aslogo",
  "image_1.jpeg": "stemhsa/site/emit",
  "image_4.jpeg": "stemhsa/site/emit",
  "image.jpeg": "stemhsa/site/infinititech",
  "image_3.jpeg": "stemhsa/site/infinititech",

  // hero / gallery photos
  "lab3.jpeg": "stemhsa/heroes/lab3",
  "academics-primary.jpeg": "stemhsa/heroes/academics-primary",
  "academics-junior.jpeg": "stemhsa/heroes/academics-junior",
  "img_0206.jpeg": "stemhsa/gallery/img_0206",
  "img_0261.jpeg": "stemhsa/gallery/img_0261",
  "discover-clubs.jpeg": "stemhsa/gallery/discover-clubs",
  "IMG_0355.jpeg": "stemhsa/gallery/IMG_0355",

  // flyers
  "mbr3fu4qo5oadnpgtn86.png": "stemhsa/flyers/2026-intake-interviews",
  "vbrybo7bavt5daliqwrz.png": "stemhsa/flyers/stem-boot-camp",
};

const MAX_BYTES = 8 * 1024 * 1024;

async function compressImage(filePath) {
  const buf = await readFile(filePath);
  if (buf.length <= MAX_BYTES) return buf;

  const ext = path.extname(filePath).toLowerCase();
  const isPng = ext === ".png";
  let quality = 82;
  let result;

  while (quality >= 40) {
    result = isPng
      ? await sharp(buf).resize({ width: 2400, withoutEnlargement: true })
          .png({ compressionLevel: 9, quality }).toBuffer()
      : await sharp(buf).resize({ width: 2400, withoutEnlargement: true })
          .jpeg({ quality, progressive: true, mozjpeg: true }).toBuffer();

    if (result.length <= MAX_BYTES) break;
    quality -= 10;
  }
  return result;
}

function uploadBuffer(buffer, publicId) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { public_id: publicId, overwrite: false, resource_type: "image" },
      (error, result) => {
        if (error) {
          const msg = JSON.stringify(error);
          if (msg.includes("already exists") || error?.http_code === 400) {
            return resolve({ secure_url: null, existing: true });
          }
          return reject(error);
        }
        resolve(result);
      },
    );
    stream.end(buffer);
  });
}

async function main() {
  const entries = Object.entries(ASSET_MAP);
  console.log(`🔍  Uploading ${entries.length} assets from ${PUBLIC_DIR}\n`);

  let ok = 0, skipped = 0, failed = 0;
  const seen = new Set();

  for (const [filename, publicId] of entries) {
    const filePath = path.join(PUBLIC_DIR, filename);
    try {
      const buffer = await compressImage(filePath);
      const result = await uploadBuffer(buffer, publicId);

      if (result.existing || seen.has(publicId)) {
        console.log(`  ⏭  ${filename} → ${publicId} (already on Cloudinary)`);
        skipped++;
      } else {
        seen.add(publicId);
        console.log(`  ✅  ${filename} → ${publicId}  ${result.secure_url ?? ""}`);
        ok++;
      }
    } catch (err) {
      console.log(`  ❌  ${filename} → ${publicId}: ${err?.message ?? JSON.stringify(err)}`);
      failed++;
    }
  }

  console.log(`\n✔  Done — ${ok} uploaded, ${skipped} skipped, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
