"use client";

import Link from "next/link";
import {
  CalendarDays,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import clinic from "@/data/clinic";

export default function HeroActions() {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-center justify-center gap-3">

        {/* ================= Book Appointment ================= */}

        <Link
          href={clinic.appointment.bookingPage}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            px-7
            py-3.5
            text-[15px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-[1.02]
          "
          style={{
            background:
              "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
            boxShadow:
              "0 14px 34px rgba(255,59,31,.35)",
          }}
        >
          <CalendarDays size={20} />
          <span>Book Appointment</span>
        </Link>

        {/* ================= WhatsApp ================= */}

        <a
          href={clinic.appointment.whatsappBooking}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            gap-2.5
            rounded-2xl
            bg-[#25D366]
            px-6
            py-3
            text-[15px]
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#20c65a]
          "
        >
          <FaWhatsapp className="text-[20px]" />
          <span>WhatsApp</span>
        </a>

        {/* ================= Call ================= */}

        <a
          href={clinic.appointment.callBooking}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-primary
            bg-white
            px-4
            py-2.5
            text-sm
            font-semibold
            text-primary
            shadow-sm
            transition-all
            duration-300
            hover:bg-primary
            hover:text-white
          "
        >
          <Phone size={16} />
          <span>Call</span>
        </a>

      </div>
    </section>
  );
}