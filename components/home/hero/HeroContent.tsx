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
        className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
        style={{
          borderColor: "#D4AF37",
          background: "rgba(212,175,55,.08)",
        }}
      >
        <ShieldCheck
          size={15}
          style={{ color: "#D4AF37" }}
        />

        <span
          className="text-[11px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: "#D4AF37" }}
        >
          Trusted Eye Care
        </span>
      </div>

      {/* Heading */}

      <h1 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
        Protect Your Vision With Expert Eye Care
      </h1>

      {/* Supporting Text */}

      <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">
        Eye examinations, glaucoma care, cataract evaluation,
        children's eye care and premium optical services.
      </p>

      <p className="mt-2 text-xs font-medium tracking-wide text-neutral-500">
        Professional • Affordable • Trusted Across Lagos
      </p>

      {/* CTA */}

      <div className="mt-7 w-full">
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