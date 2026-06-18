/**
 * Cloudinary server-side upload helper.
 *
 * This file imports the cloudinary npm package which uses Node.js APIs (fs, path).
 * ONLY import this from:
 *   - API routes (app/api/**)
 *   - Server Actions
 *   - Server Components
 *
 * NEVER import from client components or lib/images.ts.
 *
 * Required env vars:
 *   CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_API_KEY
 *   CLOUDINARY_API_SECRET
 */

import "server-only";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

type UploadResult = {
  secure_url: string;
  public_id: string;
  resource_type: string;
  format: string;
  bytes: number;
};

/**
 * Upload a Buffer to Cloudinary.
 * Only call from API routes or server components.
 */
export async function uploadToCloudinary(
  source: Buffer | string,
  options: {
    folder?: string;
    publicId?: string;
    resourceType?: "image" | "raw" | "auto";
    tags?: string[];
  } = {},
): Promise<UploadResult> {
  const uploadOptions = {
    folder:        options.folder ?? "stemhsa/uploads",
    public_id:     options.publicId,
    resource_type: (options.resourceType ?? "auto") as "image" | "raw" | "auto" | "video",
    tags:          options.tags,
    overwrite:     false,
  };

  return new Promise<UploadResult>((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cb = (err: unknown, result: any) => {
      if (err) return reject(err);
      if (!result) return reject(new Error("No result from Cloudinary"));
      resolve(result as UploadResult);
    };

    if (Buffer.isBuffer(source)) {
      const stream = cloudinary.uploader.upload_stream(uploadOptions, cb);
      stream.end(source);
    } else {
      cloudinary.uploader.upload(source, uploadOptions, cb);
    }
  });
}
