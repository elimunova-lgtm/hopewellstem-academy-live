import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config({ path: ".env.local" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const jobs = [
  [".tmp/partner-white/emit-white.png", "stemhsa/site/emit-white"],
  [".tmp/partner-white/infinititech-white.png", "stemhsa/site/infinititech-white"],
  [".tmp/partner-white/aslogo-white.png", "stemhsa/site/aslogo-white"],
];

for (const [file, publicId] of jobs) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      public_id: publicId.split("/").pop(),
      folder: "stemhsa/site",
      overwrite: false,
      invalidate: true,
    });
    console.log(`OK ${publicId} -> ${result.secure_url}`);
  } catch (err) {
    const msg = JSON.stringify(err);
    if (msg.includes("already exists")) {
      console.log(`SKIP ${publicId} (exists)`);
    } else {
      console.error(`FAIL ${publicId}: ${err.message ?? msg}`);
    }
  }
}