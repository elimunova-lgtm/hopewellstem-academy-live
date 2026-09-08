import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import {
  createSessionToken,
  sessionCookieName,
  verifySessionToken,
  type SessionPayload,
} from "@/lib/session";

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function loginAdmin(email: string, password: string) {
  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) return null;

  const valid = await verifyPassword(password, admin.passwordHash);
  if (!valid) return null;

  const token = await createSessionToken({
    adminId: admin.id,
    email: admin.email,
  });

  const cookieStore = await cookies();
  cookieStore.set(sessionCookieName(), token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return admin;
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookieName());
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(sessionCookieName())?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export async function requireSession() {
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function changeAdminPassword(
  adminId: string,
  currentPassword: string,
  newPassword: string
): Promise<{ ok: boolean; error?: string }> {
  const admin = await prisma.admin.findUnique({ where: { id: adminId } });
  if (!admin) {
    return { ok: false, error: "Admin account not found." };
  }

  const valid = await verifyPassword(currentPassword, admin.passwordHash);
  if (!valid) {
    return { ok: false, error: "Current password is incorrect." };
  }

  const passwordHash = await hashPassword(newPassword);
  await prisma.admin.update({
    where: { id: adminId },
    data: { passwordHash },
  });

  return { ok: true };
}
