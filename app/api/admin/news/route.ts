import { NextResponse } from "next/server";
import { ensureAdminApi } from "@/lib/admin-api";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const items = await prisma.newsPost.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const body = await request.json();

  const item = await prisma.newsPost.create({
    data: {
      title: String(body.title ?? ""),
      excerpt: String(body.excerpt ?? ""),
      image: String(body.image ?? ""),
      dateLabel: String(body.dateLabel ?? ""),
      published: Boolean(body.published ?? true),
      sortOrder: Number(body.sortOrder ?? 0),
    },
  });

  return NextResponse.json(item, { status: 201 });
}
