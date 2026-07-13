"use client";

import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";
import HeroBottom from "./HeroBottomBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-white">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-site relative z-10 pt-8 pb-10 lg:pt-14 lg:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <HeroContent />

          <HeroMedia />
        </div>

        <HeroBottom />
      </div>
    </section>
  );
}