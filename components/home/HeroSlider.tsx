"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { heroSlides } from "@/lib/content";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-brand-950">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
        </div>
      ))}

      <div className="container-page relative flex h-full flex-col justify-center">
        <div className="max-w-2xl text-white">
          <p className="mb-3 inline-block rounded-full bg-accent/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Hopewell STEM Academy
          </p>
          <h1
            key={index}
            className="animate-fade-in-up font-display text-4xl font-extrabold leading-tight drop-shadow sm:text-5xl lg:text-6xl"
          >
            {heroSlides[index].title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90 sm:text-xl">
            {heroSlides[index].subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Join Our Journey
            </Link>
            <Link
              href="/academics"
              className="btn border-2 border-white text-white hover:bg-white hover:text-brand"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand/60 text-white transition hover:bg-brand"
      >
        <FaChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand/60 text-white transition hover:bg-brand"
      >
        <FaChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-accent" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
