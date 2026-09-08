"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { educationLevels } from "@/lib/content";

const levelOptions = ["Not yet started", ...educationLevels.map((level) => level.title)];

const emptyForm = {
  parentName: "",
  phone: "",
  email: "",
  childName: "",
  childLevel: levelOptions[0],
  message: "",
};

export default function EnrollInquiryForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  function update<K extends keyof typeof emptyForm>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setForm(emptyForm);
      setStatus("success");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center py-8 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-brand">
          Inquiry Received
        </h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Thank you! Our admissions team will call you within 24 hours to
          discuss next steps for your child&apos;s enrollment.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border-2 border-brand px-6 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h3 className="font-display text-xl font-bold text-brand">Enquiry Form</h3>
        <p className="mt-1 text-sm text-slate-500">
          Fields marked * are required.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Full name *"
          value={form.parentName}
          onChange={(value) => update("parentName", value)}
          placeholder="Parent / guardian name"
          autoComplete="name"
          required
        />
        <Field
          label="Phone number *"
          type="tel"
          value={form.phone}
          onChange={(value) => update("phone", value)}
          placeholder="+254 7XX XXX XXX"
          autoComplete="tel"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Email (optional)"
          type="email"
          value={form.email}
          onChange={(value) => update("email", value)}
          placeholder="you@example.com"
          autoComplete="email"
        />
        <Field
          label="Child&apos;s name (optional)"
          value={form.childName}
          onChange={(value) => update("childName", value)}
          placeholder="Child&apos;s full name"
        />
      </div>

      <Field
        label="Child&apos;s class / level *"
        value={form.childLevel}
        onChange={(value) => update("childLevel", value)}
        options={levelOptions}
      />

      <label className="block text-sm font-medium text-slate-700">
        Message (optional)
        <textarea
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          rows={3}
          placeholder="Any questions about fees, transport, boarding or the curriculum?"
          className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand focus:ring-2"
        />
      </label>

      {status === "error" ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand py-3.5 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-900 hover:shadow-card-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          "Submitting…"
        ) : (
          <span className="inline-flex items-center gap-2">
            Submit Inquiry <FaPaperPlane className="h-3.5 w-3.5" />
          </span>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
  required,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  options?: string[];
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      {options ? (
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none ring-brand focus:ring-2"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          onChange={(event) => onChange(event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand focus:ring-2"
        />
      )}
    </label>
  );
}