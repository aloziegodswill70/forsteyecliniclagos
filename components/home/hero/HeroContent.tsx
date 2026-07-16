"use client";

import { ShieldCheck } from "lucide-react";

import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";
import HeroSocials from "./HeroSocials";
import HeroReels from "./HeroReels";

export default function HeroContent() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 sm:px-5 text-center">

      {/* ================= Mobile Hero Card ================= */}

      <div
        className="mt-2 w-full max-w-full rounded-xl border bg-white px-4 py-4 shadow-md sm:hidden"
        style={{
          borderColor: "#E0402A",
        }}
      >
        {/* Accent */}

        <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-primary" />

        {/* Badge */}

        <div
          className="mx-auto inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1"
          style={{
            borderColor: "#D4AF37",
            background: "rgba(212,175,55,.08)",
          }}
        >
          <ShieldCheck
            size={11}
            style={{ color: "#D4AF37" }}
          />

          <span
            className="text-[8px] font-semibold uppercase tracking-[0.1em]"
            style={{ color: "#D4AF37" }}
          >
            Trusted Eye Care
          </span>
        </div>

        {/* Heading */}

        <h1 className="mt-3 text-lg font-extrabold leading-tight text-neutral-900">
          <span className="animate-eyeGlow">
            Protect Your Eyes
          </span>

          <span className="block">
            With Expert Eye Care
          </span>
        </h1>

        {/* Services */}

        <p className="mx-auto mt-2 max-w-full text-[11px] font-medium leading-5 text-neutral-600 break-words">
          Eye Examinations • Managements • Premium Optical Services
        </p>

        <p className="mt-2 text-[9px] leading-4 tracking-wide text-neutral-500">
          Professional • Affordable • Trusted Across Lagos
        </p>
      </div>

      {/* ================= Desktop ================= */}

      <div className="hidden w-full sm:block">

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

        <h1 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
          <span className="animate-eyeGlow">
            Protect Your Eyes
          </span>

          <span className="block">
            With Expert Eye Care
          </span>
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-neutral-600 sm:text-[15px]">
          Eye Examinations • Managements • Premium Optical Services
        </p>

        <p className="mt-2 text-[11px] font-medium tracking-wide text-neutral-500">
          Professional • Affordable • Trusted Across Lagos
        </p>

      </div>

      {/* ================= Hero Reels ================= */}

      <div className="mt-4 w-full">
        <HeroReels />
      </div>

      {/* ================= CTA ================= */}

      <div className="mt-4 w-full">
        <HeroActions />
      </div>

      {/* ================= Statistics ================= */}

      <div className="mt-5 w-full">
        <HeroStats />
      </div>

      {/* ================= Social ================= */}

      <div className="mt-5 w-full">
        <HeroSocials />
      </div>

    </section>
  );
}