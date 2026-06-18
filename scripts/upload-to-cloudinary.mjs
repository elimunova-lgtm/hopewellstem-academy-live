/**
 * Bulk-upload all images from public/images/ to Cloudinary.
 * Images larger than 8 MB are compressed with sharp before uploading.
 *
 * Usage (from project root):
 *   node scripts/upload-to-cloudinary.mjs
 *
 * Requires .env.local to have:
 *   CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 */

import { v2 as cloudinary } from "cloudinary";
import { readdir, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";
import { config } from "dotenv";
import sharp from "sharp";

// Load .env.local
config({ path: ".env.local" });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const MAX_BYTES = 8 * 1024 * 1024; // 8 MB — stay under Cloudinary's 10 MB free limit

/** Recursively collect all image files under a directory */
async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(full)));
    } else if (IMAGE_EXTS.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

/**
 * Determine the Cloudinary public_id for a local file path.
 * Mirrors the folder structure used in lib/images.ts.
 */
function getPublicId(filePath) {
  const rel = path.relative(IMAGES_DIR, filePath);
  const parts = rel.split(path.sep);
  const nameNoExt = path.basename(rel, path.extname(rel));

  // Sub-folder images (gallery/, team/)
  if (parts.length > 1) {
    const subfolder = parts[0];
    return `stemhsa/${subfolder}/${nameNoExt}`;
  }

  // Root images — split into site assets, heroes, gallery
  const heroNames = new Set([
    "lab3", "academics-primary", "academics-junior",
    "IMG_0298", "IMG_0313", "IMG_0345", "IMG_0361",
    "IMG_1098", "IMG_1101", "IMG_1116", "IMG_1121",
    "IMG_1132", "IMG_1134", "IMG_1135",
  ]);
  const siteNames = new Set([
    "hopelogo", "favicon", "emit", "infinititech", "aslogo",
  ]);

  if (siteNames.has(nameNoExt)) return `stemhsa/site/${nameNoExt}`;
  if (heroNames.has(nameNoExt)) return `stemhsa/heroes/${nameNoExt}`;
  return `stemhsa/gallery/${nameNoExt}`;
}

/**
 * Compress an image buffer to stay under MAX_BYTES.
 * Resizes to max 2400px wide and applies progressive JPEG compression.
 */
async function compressImage(filePath) {
  const buf = await readFile(filePath);
  if (buf.length <= MAX_BYTES) return buf; // already small enough

  const ext = path.extname(filePath).toLowerCase();
  const isPng = ext === ".png";

  let quality = 82;
  let result;

  // Try progressively lower quality until under the limit
  while (quality >= 40) {
    if (isPng) {
      result = await sharp(buf)
        .resize({ width: 2400, withoutEnlargement: true })
        .png({ compressionLevel: 9, quality })
        .toBuffer();
    } else {
      result = await sharp(buf)
        .resize({ width: 2400, withoutEnlargement: true })
        .jpeg({ quality, progressive: true, mozjpeg: true })
        .toBuffer();
    }

    if (result.length <= MAX_BYTES) break;
    quality -= 10;
  }

  return result;
}

async function uploadBuffer(buffer, publicId) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        public_id: publicId,
        overwrite: false,
        resource_type: "image",
        // Return existing asset details instead of erroring when overwrite:false
        invalidate: false,
      },
      (error, result) => {
        if (error) {
          // Treat "already exists" as a successful skip
          const msg = JSON.stringify(error);
          if (msg.includes("already exists") || error?.http_code === 400) {
            resolve({ secure_url: null, existing: true });
          } else {
            reject(error);
          }
        } else {
          resolve(result);
        }
      },
    );
    stream.end(buffer);
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function processFile(file) {
  const publicId = getPublicId(file);
  const name = path.relative(IMAGES_DIR, file);

  // Retry up to 3 times for transient errors
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const original = await readFile(file);
      const buffer = await compressImage(file);
      const compressed = buffer.length < original.length;

      const result = await uploadBuffer(buffer, publicId);

      if (result.existing) {
        process.stdout.write(`  ⏭  ${name} (already on Cloudinary)\n`);
        return "skipped";
      }

      const tag = compressed ? " (compressed)" : "";
      process.stdout.write(`  ✅  ${name}${tag} → ${result.secure_url}\n`);
      return "ok";
    } catch (err) {
      // Transient / memory error — wait and retry
      const isTransient =
        err?.message?.includes("UNKNOWN") ||
        err?.message?.includes("read") ||
        err?.message?.includes("ECONNRESET") ||
        err?.message?.includes("Timeout") ||
        err?.message?.includes("ENOTFOUND");

      if (isTransient && attempt < 3) {
        process.stdout.write(`  ⚠  ${name}: attempt ${attempt} failed (${err.message}), retrying...\n`);
        await sleep(2000 * attempt);
        continue;
      }

      process.stdout.write(`  ❌  ${name}: ${err?.message ?? JSON.stringify(err)}\n`);
      return "failed";
    }
  }
  return "failed";
}

async function main() {
  if (!existsSync(IMAGES_DIR)) {
    console.error(`❌  ${IMAGES_DIR} does not exist. Nothing to upload.`);
    process.exit(1);
  }

  console.log("🔍  Scanning", IMAGES_DIR, "...");
  const files = await collectImages(IMAGES_DIR);
  console.log(`📁  Found ${files.length} images\n`);

  let ok = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of files) {
    const result = await processFile(file);
    if (result === "ok") ok++;
    else if (result === "skipped") skipped++;
    else failed++;

    // Small pause between files to avoid memory pressure on large batches
    await sleep(100);
  }

  console.log(`\n✔  Done — ${ok} uploaded, ${skipped} skipped, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
