import { NextResponse } from "next/server";
import { ensureAdminApi } from "@/lib/admin-api";
import { prisma } from "@/lib/prisma";

type RouteContext = { params: Promise<{ id: string }> };

export async function PUT(request: Request, context: RouteContext) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  const body = await request.json();

  const item = await prisma.homePopup.update({
    where: { id },
    data: {
      title: String(body.title ?? ""),
      message: String(body.message ?? ""),
      image: body.image ? String(body.image) : null,
      buttonLabel: body.buttonLabel ? String(body.buttonLabel) : null,
      buttonHref: body.buttonHref ? String(body.buttonHref) : null,
      published: Boolean(body.published),
      sortOrder: Number(body.sortOrder ?? 0),
      startsAt: body.startsAt ? new Date(body.startsAt) : null,
      endsAt: body.endsAt ? new Date(body.endsAt) : null,
    },
  });

  return NextResponse.json(item);
}

export async function DELETE(_request: Request, context: RouteContext) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  await prisma.homePopup.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
