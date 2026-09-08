/**
 * Audit images referenced by the codebase against what actually exists in
 * Cloudinary under the "stemhsa/" folder.
 *
 * Usage (from project root):
 *   node scripts/audit-images.mjs
 *
 * Prints:
 *   - every missing public ID (referenced but not on Cloudinary)
 *   - dumps the full list of existing public IDs to existing-assets.txt
 *
 * Requires CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 * in .env.local (or CLOUDINARY_URL).
 */

import { v2 as cloudinary } from "cloudinary";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

config({ path: ".env.local" });
config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function listAll(prefix, resourceType) {
  const ids = new Set();
  let cursor = undefined;
  do {
    const params = {
      type: "upload",
      prefix,
      resource_type: resourceType,
      max_results: 500,
    };
    if (cursor) params.next_cursor = cursor;
    const res = await cloudinary.api.resources(params);
    for (const a of res.resources ?? []) ids.add(a.public_id);
    cursor = res.next_cursor;
  } while (cursor);
  return ids;
}

async function scanSourceRefs() {
  const refs = new Set();
  const files = ["lib/gallery.ts", "lib/images.ts", "lib/team.ts", "lib/cms.ts"];
  const re = /(?:cldUrl|img|g)\(\s*["'`](stemhsa\/[^"'`]+)["'`]/g;
  for (const f of files) {
    try {
      const text = await readFile(path.join(ROOT, f), "utf8");
      let m;
      while ((m = re.exec(text)) !== null) refs.add(m[1]);
    } catch {
      /* ignore */
    }
  }
  // LOCAL_ASSETS keys from lib/cloudinary.ts (dev overrides)
  const cc = await readFile(path.join(ROOT, "lib/cloudinary.ts"), "utf8");
  const locRe = /"((?:stemhsa\/)[^"]+)":/g;
  let m;
  while ((m = locRe.exec(cc)) !== null) refs.add(m[1]);
  return refs;
}

const PREFIX = "stemhsa";

const [imageIds, rawIds] = await Promise.all([
  listAll(PREFIX, "image"),
  listAll(PREFIX, "raw"),
]);

const existing = new Set([...imageIds, ...rawIds]);

await writeFile(
  path.join(ROOT, "existing-assets.txt"),
  [...existing].sort().join("\n"),
  "utf8",
);

console.log(`Existing on Cloudinary: ${existing.size} (image ${imageIds.size} + raw ${rawIds.size})`);

const refs = await scanSourceRefs();
const missing = [...refs].filter((id) => !existing.has(id)).sort();
const present = [...refs].filter((id) => existing.has(id)).sort();

console.log(`Referenced in codebase: ${refs.size}`);
console.log(`Present: ${present.length} | MISSING: ${missing.length}`);
console.log("\n=== MISSING PUBLIC IDs ===");
for (const id of missing) console.log(`  ${id}`);

console.log(`\nFull existing list written to existing-assets.txt`);

// Also scan EVERYTHING in the account (any folder) to catch assets that
// might live under a different prefix than stemhsa/.
const [allImage, allRaw] = await Promise.all([
  listAll("", "image"),
  listAll("", "raw"),
]);
const all = new Set([...allImage, ...allRaw]);
const outside = [...all].filter((id) => !id.startsWith("stemhsa/")).sort();
console.log(`\nAccount total: image ${allImage.size} + raw ${allRaw.size}`);
console.log(`Assets OUTSIDE stemhsa/: ${outside.length}`);
for (const id of outside.slice(0, 120)) console.log(`  ${id}`);
await writeFile(path.join(ROOT, "all-assets.txt"), [...all].sort().join("\n"), "utf8");

if (missing.length > 0) process.exit(2);