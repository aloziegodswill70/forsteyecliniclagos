"use client";

import Image from "next/image";
import {
  Eye,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function HeroMedia() {
  return (
    <div
      className="
        mx-auto
        flex
        w-full
        max-w-xl
        flex-col
        items-center

        lg:max-w-[500px]
        xl:max-w-[520px]
        lg:ml-auto
        lg:mr-0
        lg:translate-x-10
        xl:translate-x-16
      "
    >
      {/* ================= Premium Badge ================= */}

      <div
        className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2"
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
          className="text-[11px] font-semibold uppercase tracking-[0.15em]"
          style={{ color: "#D4AF37" }}
        >
          Professional Eye Care
        </span>
      </div>

      {/* ================= Image ================= */}

      <div className="relative overflow-hidden rounded-[26px] border border-neutral-200 bg-white shadow-2xl">

        <Image
          src="/images/hero/hero.jpg"
          alt="Forst Eye Clinic"
          width={620}
          height={620}
          priority
          className="
            aspect-square
            w-full
            object-cover

            lg:max-w-[500px]
            xl:max-w-[520px]
          "
        />

        {/* ================= Floating Eye Card ================= */}

        <div className="absolute left-4 top-4 hidden rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur lg:flex lg:items-center lg:gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">

            <Eye
              size={20}
              className="text-primary"
            />

          </div>

          <div>

            <p className="text-sm font-semibold">
              Eye Examination
            </p>

            <p className="text-xs text-neutral-500">
              Early Detection
            </p>

          </div>

        </div>

        {/* ================= Floating Rating ================= */}

        <div className="absolute right-4 top-4 hidden rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur lg:block">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">

              <Star
                size={18}
                className="fill-yellow-500 text-yellow-500"
              />

            </div>

            <div>

              <p className="text-sm font-bold">
                20K+
              </p>

              <p className="text-xs text-neutral-500">
                Happy Patients
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}