import { NextResponse } from "next/server";
import { ensureAdminApi } from "@/lib/admin-api";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/cms";

type RouteContext = { params: Promise<{ id: string }> };

export async function PUT(request: Request, context: RouteContext) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  const body = await request.json();

  const item = await prisma.newsPost.update({
    where: { id },
    data: {
      title: String(body.title ?? ""),
      excerpt: String(body.excerpt ?? ""),
      image: String(body.image ?? ""),
      dateLabel: String(body.dateLabel ?? ""),
      slug: body.slug ? String(body.slug).trim() : slugify(String(body.title ?? "")),
      content: String(body.content ?? ""),
      category: String(body.category ?? "News"),
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
  await prisma.newsPost.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
