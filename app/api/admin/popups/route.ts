import { NextResponse } from "next/server";
import { ensureAdminApi } from "@/lib/admin-api";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const items = await prisma.homePopup.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const body = await request.json();

  const item = await prisma.homePopup.create({
    data: {
      title: String(body.title ?? ""),
      message: String(body.message ?? ""),
      image: body.image ? String(body.image) : null,
      buttonLabel: body.buttonLabel ? String(body.buttonLabel) : null,
      buttonHref: body.buttonHref ? String(body.buttonHref) : null,
      published: Boolean(body.published ?? true),
      sortOrder: Number(body.sortOrder ?? 0),
      startsAt: body.startsAt ? new Date(body.startsAt) : null,
      endsAt: body.endsAt ? new Date(body.endsAt) : null,
    },
  });

  return NextResponse.json(item, { status: 201 });
}
