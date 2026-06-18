import { NextResponse } from "next/server";
import { ensureAdminApi } from "@/lib/admin-api";
import { uploadToCloudinary } from "@/lib/cloudinary-server";
import {
  MAX_UPLOAD_BYTES,
  isAllowedUpload,
  isPdfUrl,
  extensionForMime,
} from "@/lib/uploads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const unauthorized = await ensureAdminApi();
  if (unauthorized) return unauthorized;

  try {
    const formData = await request.formData();
    const entry = formData.get("file");

    if (!entry || typeof entry === "string") {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }

    const blob = entry as Blob & { name?: string };
    const filename =
      typeof blob.name === "string" && blob.name.trim()
        ? blob.name.trim()
        : "upload.jpg";
    const mime = blob.type || "";

    if (blob.size === 0) {
      return NextResponse.json({ error: "The selected file is empty." }, { status: 400 });
    }

    if (blob.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json(
        { error: "File is too large. Maximum size is 25 MB." },
        { status: 400 },
      );
    }

    if (!isAllowedUpload(mime, filename)) {
      return NextResponse.json(
        { error: "Unsupported file type. Use JPG, PNG, WebP, GIF, or PDF." },
        { status: 400 },
      );
    }

    const ext = extensionForMime(mime, filename);
    const isPdf = ext === "pdf" || isPdfUrl(filename);

    const buffer = Buffer.from(await blob.arrayBuffer());

    const result = await uploadToCloudinary(buffer, {
      folder: "stemhsa/uploads",
      resourceType: isPdf ? "raw" : "image",
    });

    return NextResponse.json({
      url: result.secure_url,
      type: mime || `image/${ext}`,
      name: filename,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Upload failed: ${error.message}`
            : "Upload failed. Please try again.",
      },
      { status: 500 },
    );
  }
}
