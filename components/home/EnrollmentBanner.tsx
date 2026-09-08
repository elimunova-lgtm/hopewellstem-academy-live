import Link from "next/link";
import { images } from "@/lib/images";
import Reveal from "@/components/Reveal";

export default function EnrollmentBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.enrollment})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand/85" aria-hidden="true" />
      <div className="bg-dots-light absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-20 text-center text-white sm:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
            <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
            Admissions Open
            <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Be Part of Us
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Join our vibrant community of future innovators, leaders and changemakers. At
            Hopewell STEM Academy, we don&apos;t just educate students — we inspire the next
            generation of scientific pioneers and technological innovators.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              Enrol Now
            </Link>
            <Link
              href="/academics"
              className="btn border-2 border-white/70 text-white hover:bg-white hover:text-brand"
            >
              Explore Academics
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
