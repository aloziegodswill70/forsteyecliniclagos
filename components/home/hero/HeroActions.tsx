"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";

import clinic from "@/data/clinic";

export default function HeroActions() {
  return (
    <section className="mt-5 w-full">

      {/* ================= Book Appointment ================= */}

      <div className="flex w-full items-center justify-center px-4">

        <Link
          href={clinic.appointment.bookingPage}
          aria-label="Book Appointment"
          className="
            inline-flex
            w-full
            max-w-[260px]
            items-center
            justify-center
            gap-2
            rounded-xl
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300

            hover:-translate-y-1
            hover:scale-[1.02]

            sm:max-w-[280px]
            sm:py-3.5
            sm:text-sm

            lg:max-w-[300px]
          "
          style={{
            background:
              "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
            boxShadow:
              "0 12px 28px rgba(255,59,31,.35)",
          }}
        >
          <CalendarDays
            size={18}
            strokeWidth={2.2}
          />

          <span>
            Book Appointment
          </span>
        </Link>

      </div>

    </section>
  );
}