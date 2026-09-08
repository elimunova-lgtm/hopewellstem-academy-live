import { NextResponse } from "next/server";
import { ensureAdminApi } from "@/lib/admin-api";
import { prisma } from "@/lib/prisma";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const status = String(body.status ?? "").trim();
  if (!status) {
    return NextResponse.json(
      { error: "Status is required." },
      { status: 400 }
    );
  }

  try {
    await prisma.inquiry.update({ where: { id }, data: { status } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Inquiry not found." },
      { status: 404 }
    );
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;

  try {
    await prisma.inquiry.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Inquiry not found." },
      { status: 404 }
    );
  }
}