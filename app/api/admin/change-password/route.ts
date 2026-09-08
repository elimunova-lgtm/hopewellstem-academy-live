import { NextResponse } from "next/server";
import { changeAdminPassword, getSession } from "@/lib/auth";
import { ensureAdminApi } from "@/lib/admin-api";

export async function POST(request: Request) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const currentPassword = String(body.currentPassword ?? "");
  const newPassword = String(body.newPassword ?? "");

  if (newPassword.length < 8) {
    return NextResponse.json(
      { error: "New password must be at least 8 characters long." },
      { status: 400 }
    );
  }
  if (newPassword === currentPassword) {
    return NextResponse.json(
      { error: "New password must be different from the current password." },
      { status: 400 }
    );
  }

  const result = await changeAdminPassword(
    session.adminId,
    currentPassword,
    newPassword
  );
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}