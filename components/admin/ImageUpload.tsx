"use client";

import { useRef, useState } from "react";
import { FaUpload } from "react-icons/fa";

type ImageUploadProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helpText?: string;
};

export default function ImageUpload({
  label,
  value,
  onChange,
  helpText = "Upload an image or PDF flyer. JPG, PNG, WebP, GIF, or PDF up to 25 MB.",
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      let data: { url?: string; error?: string } = {};
      try {
        data = await response.json();
      } catch {
        setError(`Upload failed (${response.status}). Please try again.`);
        return;
      }

      if (!response.ok) {
        setError(data.error ?? `Upload failed (${response.status}).`);
        return;
      }

      if (!data.url) {
        setError("Upload succeeded but no file URL was returned.");
        return;
      }

      onChange(data.url);
      setSuccess("File uploaded successfully.");
    } catch {
      setError("Upload failed. Check your connection and try again.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div>
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <p className="mt-1 text-xs text-slate-500">{helpText}</p>

      <div className="mt-3 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
        >
          <FaUpload className="h-4 w-4" />
          {uploading ? "Uploading..." : "Upload file"}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp,.gif,.pdf,image/*,application/pdf"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="/uploads/your-file.jpg"
        className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-brand focus:ring-2"
      />

      {value ? (
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-3">
          {value.toLowerCase().endsWith(".pdf") ? (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand hover:underline"
            >
              Preview uploaded PDF
            </a>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value}
              alt="Upload preview"
              className="max-h-48 w-full rounded-lg object-contain"
            />
          )}
        </div>
      ) : null}

      {success ? <p className="mt-2 text-sm text-green-700">{success}</p> : null}
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
