import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
dotenv.config();
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { news, events } from "../lib/content";

const connectionString = process.env.DIRECT_URL ?? process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DIRECT_URL or DATABASE_URL must be set for seeding.");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = (process.env.ADMIN_EMAIL ?? "officeathopewell@gmail.com")
    .trim()
    .toLowerCase();
  const password = process.env.ADMIN_PASSWORD ?? "ChangeMe2026!";

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.admin.upsert({
    where: { email },
    update: { passwordHash },
    create: { email, passwordHash },
  });

  const newsCount = await prisma.newsPost.count();
  if (newsCount === 0) {
    await prisma.newsPost.createMany({
      data: news.map((item, index) => ({
        title: item.title,
        excerpt: item.excerpt,
        image: item.image,
        dateLabel: item.date,
        published: true,
        sortOrder: index,
      })),
    });
  }

  const eventCount = await prisma.eventPost.count();
  if (eventCount === 0) {
    await prisma.eventPost.createMany({
      data: events.map((item, index) => ({
        title: item.title,
        description: item.description,
        dateLabel: item.date,
        time: item.time,
        location: item.location,
        image: item.image,
        published: true,
        sortOrder: index,
      })),
    });
  }

  const popupCount = await prisma.homePopup.count();
  if (popupCount === 0) {
    await prisma.homePopup.createMany({
      data: [
        {
          title: "2026 Admissions Now Open",
          message:
            "Applications for the 2026 academic year are now open. Enrol your child in a future-ready STEM education at Hopewell STEM Academy.",
          buttonLabel: "Contact us",
          buttonHref: "/contact",
          published: true,
          sortOrder: 0,
        },
        {
          title: "Join Our Open Day",
          message:
            "Visit our campus, meet our teachers, and explore our STEM labs and innovation spaces.",
          buttonLabel: "Learn more",
          buttonHref: "/get-involved",
          published: true,
          sortOrder: 1,
        },
      ],
    });
  }

  console.log(`Seeded admin user: ${email}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
