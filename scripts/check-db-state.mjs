import pg from "pg";
import { config } from "dotenv";

config({ path: ".env.local" });

const { Client } = pg;
const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();

const news = await client.query(
  `SELECT "title", "slug", "dateLabel", "category", "sortOrder", "published" FROM "NewsPost" ORDER BY "sortOrder" ASC`
);
console.log("NEWS:");
for (const r of news.rows) console.log(`  [${r.sortOrder}] ${r.title} | ${r.slug} | ${r.dateLabel} | ${r.category} | published=${r.published}`);

const events = await client.query(
  `SELECT "title", "dateLabel", "time", "published", "sortOrder" FROM "EventPost" ORDER BY "sortOrder" ASC`
);
console.log("EVENTS:");
for (const r of events.rows) console.log(`  [${r.sortOrder}] ${r.title} | ${r.dateLabel} | ${r.time} | published=${r.published}`);

const flyers = await client.query(`SELECT "title" FROM "Flyer" ORDER BY "sortOrder" ASC`);
console.log("FLYERS:");
for (const r of flyers.rows) console.log(`  ${r.title}`);

await client.end();