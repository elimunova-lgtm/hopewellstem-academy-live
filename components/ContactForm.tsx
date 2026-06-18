"use client";

import { useState } from "react";

const grades = [
  "Pre-Primary 1",
  "Pre-Primary 2",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Junior Secondary 1",
  "Junior Secondary 2",
  "Junior Secondary 3",
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200";
const labelClass = "mb-1.5 block text-sm font-semibold text-brand-700";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="studentName" className={labelClass}>
          Student Name *
        </label>
        <input id="studentName" name="studentName" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="studentAge" className={labelClass}>
          Student Age *
        </label>
        <input id="studentAge" name="studentAge" type="number" min={3} max={18} required className={inputClass} />
      </div>
      <div>
        <label htmlFor="gradeLevel" className={labelClass}>
          Grade Level *
        </label>
        <select id="gradeLevel" name="gradeLevel" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select Grade Level
          </option>
          {grades.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="parentName" className={labelClass}>
          Parent/Guardian Name *
        </label>
        <input id="parentName" name="parentName" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number *
        </label>
        <input id="phone" name="phone" type="tel" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address *
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="previousSchool" className={labelClass}>
          Previous School (if applicable)
        </label>
        <input id="previousSchool" name="previousSchool" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="additionalInfo" className={labelClass}>
          Any Additional Information
        </label>
        <textarea id="additionalInfo" name="additionalInfo" rows={5} className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full justify-center">
          Submit Application
        </button>
        {submitted && (
          <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
            Thank you for your application! We will contact you shortly.
          </p>
        )}
      </div>
    </form>
  );
}
