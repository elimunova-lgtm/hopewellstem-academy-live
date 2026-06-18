import { NextResponse } from "next/server";
import { ensureAdminApi } from "@/lib/admin-api";
import { prisma } from "@/lib/prisma";

type RouteContext = { params: Promise<{ id: string }> };

export async function PUT(request: Request, context: RouteContext) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  const body = await request.json();

  const item = await prisma.flyer.update({
    where: { id },
    data: {
      title: String(body.title ?? ""),
      image: String(body.image ?? ""),
      caption: String(body.caption ?? ""),
      published: Boolean(body.published),
      sortOrder: Number(body.sortOrder ?? 0),
    },
  });

  return NextResponse.json(item);
}

export async function DELETE(_request: Request, context: RouteContext) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  await prisma.flyer.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
