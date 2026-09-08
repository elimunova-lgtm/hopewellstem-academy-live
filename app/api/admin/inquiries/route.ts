import { NextResponse } from "next/server";
import { ensureAdminApi } from "@/lib/admin-api";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const rows = await prisma.inquiry.findMany({
    orderBy: [{ createdAt: "desc" }],
  });

  return NextResponse.json(rows);
}