import path from "path";

export const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

export const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;

export const ALLOWED_EXTENSIONS = new Set([
  "jpg",
  "jpeg",
  "png",
  "webp",
  "gif",
  "pdf",
]);

export const ALLOWED_UPLOAD_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/pjpeg",
  "image/png",
  "image/x-png",
  "image/webp",
  "image/gif",
  "application/pdf",
]);

export function extensionFromFilename(filename: string) {
  const parts = filename.toLowerCase().split(".");
  return parts.length > 1 ? parts.at(-1) ?? "" : "";
}

export function mimeFromExtension(ext: string) {
  switch (ext.toLowerCase()) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "webp":
      return "image/webp";
    case "gif":
      return "image/gif";
    case "pdf":
      return "application/pdf";
    default:
      return "";
  }
}

export function extensionForMime(mime: string, filename = "") {
  switch (mime.toLowerCase()) {
    case "image/jpeg":
    case "image/jpg":
    case "image/pjpeg":
      return "jpg";
    case "image/png":
    case "image/x-png":
      return "png";
    case "image/webp":
      return "webp";
    case "image/gif":
      return "gif";
    case "application/pdf":
      return "pdf";
    default: {
      const fromName = extensionFromFilename(filename);
      return ALLOWED_EXTENSIONS.has(fromName) ? fromName : "bin";
    }
  }
}

export function isAllowedUpload(mime: string, filename: string) {
  const normalizedMime = mime.toLowerCase();
  if (normalizedMime && ALLOWED_UPLOAD_TYPES.has(normalizedMime)) {
    return true;
  }

  const ext = extensionFromFilename(filename);
  return ALLOWED_EXTENSIONS.has(ext);
}

export function isPdfUrl(url: string) {
  return url.toLowerCase().endsWith(".pdf");
}
