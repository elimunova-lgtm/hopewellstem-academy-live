import { NextResponse } from "next/server";
import { getActivePopups } from "@/lib/cms";

export const dynamic = "force-dynamic";

export async function GET() {
  const popups = await getActivePopups();
  return NextResponse.json(popups);
}
