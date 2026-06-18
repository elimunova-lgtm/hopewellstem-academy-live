import { NextResponse } from "next/server";
import { ensureAdminApi } from "@/lib/admin-api";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const items = await prisma.eventPost.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const body = await request.json();

  const item = await prisma.eventPost.create({
    data: {
      title: String(body.title ?? ""),
      description: String(body.description ?? ""),
      dateLabel: String(body.dateLabel ?? ""),
      time: String(body.time ?? ""),
      location: String(body.location ?? ""),
      image: String(body.image ?? ""),
      published: Boolean(body.published ?? true),
      sortOrder: Number(body.sortOrder ?? 0),
      startsAt: body.startsAt ? new Date(body.startsAt) : null,
    },
  });

  return NextResponse.json(item, { status: 201 });
}
