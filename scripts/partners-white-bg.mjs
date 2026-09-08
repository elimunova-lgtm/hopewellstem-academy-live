/**
 * Produce white-background versions of the partner logos by flood-filling the
 * background colour inward from the image borders (safe — never touches interior
 * logo pixels), then write transparent/white PNGs.
 *
 * Usage: node scripts/partners-white-bg.mjs
 */

import sharp from "sharp";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", ".tmp", "partner-white");
await mkdir(OUT_DIR, { recursive: true });

const TOLERANCE = 44;

function dist(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

async function backgroundColor(buf, info) {
  const { width, height, channels } = info;
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ];
  const idx = corners.map(([x, y]) => (y * width + x) * channels);
  return idx.map((i) => [buf[i], buf[i + 1], buf[i + 2], buf[i + 3]]);
}

async function processImage(file, name) {
  const raw = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { data, info } = raw;
  const W = info.width;
  const H = info.height;
  const C = info.channels; // 4 with ensureAlpha

  const corners = await backgroundColor(data, info);
  const bg = corners[0];
  const near = (c) => dist(bg, c) <= TOLERANCE;

  const filled = new Uint8Array(W * H);
  const queue = [];

  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    const i = y * W + x;
    if (filled[i]) return;
    const c = [data[i * C], data[i * C + 1], data[i * C + 2]];
    if (!near(c)) return;
    filled[i] = 1;
    queue.push(i);
  };

  for (let x = 0; x < W; x++) {
    push(x, 0);
    push(x, H - 1);
  }
  for (let y = 0; y < H; y++) {
    push(0, y);
    push(W - 1, y);
  }

  let filledCount = 0;
  while (queue.length) {
    const i = queue.pop();
    filledCount++;
    const x = i % W;
    const y = (i / W) | 0;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  for (let i = 0; i < W * H; i++) {
    if (filled[i]) {
      data[i * C] = 255;
      data[i * C + 1] = 255;
      data[i * C + 2] = 255;
      data[i * C + 3] = 255;
    }
  }

  const out = path.join(OUT_DIR, name);
  await writeFile(
    out,
    await sharp(data, { raw: { width: W, height: H, channels: C } })
      .flatten({ background: "#ffffff" })
      .png()
      .toBuffer(),
  );
  const pct = ((filledCount / (W * H)) * 100).toFixed(1);
  process.stdout.write(`${name}: ${W}x${H}, corners bg rgb(${bg[0]},${bg[1]},${bg[2]}), ${pct}% flood-filled\n`);
  return {
    file: out,
    filledPct: parseFloat(pct),
    bg,
  };
}

const jobs = [
  ["C:\\Users\\Home\\AppData\\Local\\Temp\\opencode\\logo-emit.jpg", "emit-white.png"],
  ["C:\\Users\\Home\\AppData\\Local\\Temp\\opencode\\logo-infinititech.jpg", "infinititech-white.png"],
  ["C:\\Users\\Home\\AppData\\Local\\Temp\\opencode\\logo-as.png", "aslogo-white.png"],
];

for (const [file, name] of jobs) {
  await processImage(file, name);
}
process.stdout.write("done\n");