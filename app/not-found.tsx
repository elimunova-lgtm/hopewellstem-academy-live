import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page mx-auto max-w-2xl py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-brand sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-slate-600">
          The page you are looking for does not exist or has been moved. Let us
          get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}