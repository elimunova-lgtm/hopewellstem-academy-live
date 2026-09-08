import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function buildEmailHtml({
  parentName,
  phone,
  email,
  childName,
  childLevel,
  message,
}: {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childLevel: string;
  message: string;
}) {
  const rows: [string, string][] = [
    ["Parent / Guardian", parentName],
    ["Phone", phone],
    ["Email", email || "—"],
    ["Child's name", childName || "—"],
    ["Child's class / level", childLevel || "—"],
  ];
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;border:1px solid #e5e0d5;border-radius:12px;overflow:hidden">
      <div style="background:#8B0000;padding:18px 24px">
        <p style="margin:0;color:#D4AF37;font-size:12px;letter-spacing:2px;text-transform:uppercase">Hopewell STEM Academy</p>
        <h2 style="margin:4px 0 0;color:#ffffff;font-size:20px">New Enrollment Inquiry</h2>
      </div>
      <div style="padding:24px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${rows
            .map(
              ([label, value]) =>
                `<tr>
                  <td style="padding:8px 12px;background:#FBF8F3;color:#8B0000;font-weight:bold;border-bottom:1px solid #e5e0d5">${label}</td>
                  <td style="padding:8px 12px;border-bottom:1px solid #e5e0d5;color:#333">${value}</td>
                </tr>`
            )
            .join("")}
          ${message ? `<tr><td style="padding:8px 12px;background:#FBF8F3;color:#8B0000;font-weight:bold;border-bottom:1px solid #e5e0d5;vertical-align:top">Message</td><td style="padding:8px 12px;border-bottom:1px solid #e5e0d5;color:#333;white-space:pre-wrap">${message}</td></tr>` : ""}
        </table>
        <p style="margin:20px 0 0;font-size:12px;color:#777">This inquiry was submitted via the Hopewell STEM Academy website. Reply to the parent directly from your inbox.</p>
      </div>
    </div>
  `;
}

async function sendInquiryEmail(details: {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childLevel: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const to = process.env.INQUIRY_EMAIL_TO || "officeathopewell@gmail.com";
  const from =
    process.env.INQUIRY_EMAIL_FROM ||
    "Hopewell STEM Academy <onboarding@resend.dev>";

  const body: Record<string, unknown> = {
    from,
    to: [to],
    subject: `New enrollment inquiry — ${details.parentName}`,
    html: buildEmailHtml(details),
  };
  if (details.email) body.reply_to = [details.email];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parentName = String(body.parentName ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const childName = String(body.childName ?? "").trim();
  const childLevel = String(body.childLevel ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (parentName.length < 2) {
    return NextResponse.json(
      { error: "Please provide the parent / guardian full name." },
      { status: 400 }
    );
  }
  if (!/^[+\d][\d\s\-()]{6,}$/.test(phone)) {
    return NextResponse.json(
      { error: "Please provide a valid phone number." },
      { status: 400 }
    );
  }
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        parentName,
        phone,
        email: email || null,
        childName: childName || null,
        childLevel: childLevel || null,
        message,
      },
    });

    // Non-blocking: email notification is best-effort and never fails the
    // submission. Skips silently until RESEND_API_KEY is configured.
    void sendInquiryEmail({
      parentName,
      phone,
      email,
      childName,
      childLevel,
      message,
    });

    return NextResponse.json({ ok: true, id: inquiry.id }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Could not submit your inquiry. Please try again." },
      { status: 500 }
    );
  }
}