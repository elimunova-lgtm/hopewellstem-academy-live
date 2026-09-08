"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <section className="section">
      <div className="container-page mx-auto max-w-2xl py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Something went wrong
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-brand sm:text-5xl">
          An unexpected error occurred
        </h1>
        <p className="mt-4 text-slate-600">
          Please try again. If the problem persists, get in touch and we will
          sort it out as quickly as we can.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button type="button" onClick={() => reset()} className="btn">
            Try again
          </button>
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}