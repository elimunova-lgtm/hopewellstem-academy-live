import Link from "next/link";
import { images } from "@/lib/images";

export default function EnrollmentBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.enrollment})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand/85" aria-hidden="true" />
      <div className="container-page relative py-20 text-center text-white sm:py-24">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          Be Part of Us
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          Join our vibrant community of future innovators, leaders and changemakers. At
          Hopewell STEM Academy, we don&apos;t just educate students — we inspire the next
          generation of scientific pioneers and technological innovators.
        </p>
        <Link href="/contact" className="btn-white mt-8">
          Enrol Now
        </Link>
      </div>
    </section>
  );
}
