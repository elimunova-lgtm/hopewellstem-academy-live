import { NextResponse } from "next/server";
import { ensureAdminApi } from "@/lib/admin-api";
import { prisma } from "@/lib/prisma";

type RouteContext = { params: Promise<{ id: string }> };

export async function PUT(request: Request, context: RouteContext) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  const body = await request.json();

  const item = await prisma.eventPost.update({
    where: { id },
    data: {
      title: String(body.title ?? ""),
      description: String(body.description ?? ""),
      dateLabel: String(body.dateLabel ?? ""),
      time: String(body.time ?? ""),
      location: String(body.location ?? ""),
      image: String(body.image ?? ""),
      published: Boolean(body.published),
      sortOrder: Number(body.sortOrder ?? 0),
      startsAt: body.startsAt ? new Date(body.startsAt) : null,
    },
  });

  return NextResponse.json(item);
}

export async function DELETE(_request: Request, context: RouteContext) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  await prisma.eventPost.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
