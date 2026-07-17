"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Eye,
  ShieldCheck,
  Star,
  CalendarDays,
  Phone,
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
      {/* Premium Badge */}

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

      {/* Image */}

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

        {/* Play */}

        <button
          aria-label="Watch Introduction"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur transition hover:scale-105"
        >
          <Play
            size={26}
            className="ml-1 fill-primary text-primary"
          />
        </button>

        {/* Bottom Gradient */}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-5 pb-5 pt-12">
          <h3 className="text-center text-lg font-bold text-white">
            Book Your Eye Examination
          </h3>

          <p className="mt-1 text-center text-xs text-white/80">
            Modern Technology • Experienced Professionals
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <CalendarDays size={16} />
              Book
            </Link>

            <Link
              href="tel:+2348186992818"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-neutral-100"
            >
              <Phone size={16} />
              Call
            </Link>
          </div>
        </div>

        {/* Floating Eye Card */}

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

        {/* Floating Rating */}

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