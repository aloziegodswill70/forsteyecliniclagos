"use client";

import { ShieldCheck } from "lucide-react";

import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center">

      {/* Premium Badge */}

      <div
        className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
        style={{
          borderColor: "#D4AF37",
          background: "rgba(212,175,55,.08)",
        }}
      >
        <ShieldCheck
          size={14}
          style={{ color: "#D4AF37" }}
        />

        <span
          className="text-[10px] font-semibold uppercase tracking-[0.16em]"
          style={{ color: "#D4AF37" }}
        >
          Trusted Eye Care
        </span>
      </div>

      {/* Heading */}

      <h1 className="mt-4 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
        Protect Your Vision
        <span className="block">
          With Expert Eye Care
        </span>
      </h1>

      {/* Supporting Text */}

      <p className="mt-3 max-w-xl text-[15px] leading-7 text-neutral-600">
        Eye examinations, glaucoma care, cataract evaluation,
        children's eye care and premium optical services.
      </p>

      <p className="mt-2 text-[11px] font-medium tracking-wide text-neutral-500">
        Professional • Affordable • Trusted Across Lagos
      </p>

      {/* Hero Video */}

      <div className="mt-6 w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200 bg-black shadow-xl">

        <video
          className="aspect-video w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video>

      </div>

      {/* CTA */}

      <div className="mt-6 w-full">
        <HeroActions />
      </div>

      {/* Statistics */}

      <div className="mt-8 w-full">
        <HeroStats />
      </div>

      {/* Social */}

      <div className="mt-7">
        <HeroSocials />
      </div>

    </section>
  );
}