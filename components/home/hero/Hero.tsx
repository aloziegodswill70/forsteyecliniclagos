"use client";

import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";
import HeroBottom from "./HeroBottomBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-white">

      {/* ================= Background Decoration ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

        <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-secondary/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

        <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-60 sm:w-60 lg:h-72 lg:w-72" />

      </div>

      {/* ================= Hero ================= */}

      <div className="container-site relative z-10 px-3 pt-3 pb-8 sm:px-4 sm:pt-5 sm:pb-10 md:px-6 lg:px-8 lg:pt-12 lg:pb-16 xl:pt-14 xl:pb-20">

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-5
            sm:gap-6
            md:gap-8
            lg:grid-cols-2
            lg:items-center
            lg:gap-10
            xl:gap-14
          "
        >

          {/* Left */}

          <div className="min-w-0">
            <HeroContent />
          </div>

          {/* Right */}

          <div className="min-w-0 w-full flex justify-center lg:justify-end">
            <HeroMedia />
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-6 sm:mt-8 lg:mt-12">
          <HeroBottom />
        </div>

      </div>

    </section>
  );
}