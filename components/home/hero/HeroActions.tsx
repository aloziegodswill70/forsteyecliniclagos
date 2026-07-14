"use client";

import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import clinic from "@/data/clinic";

export default function HeroActions() {
  return (
    <section className="mt-5">
      <div className="flex flex-wrap justify-center items-center gap-3">

        {/* Book Appointment */}

        <Link
          href={clinic.appointment.bookingPage}
          className="
            inline-flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-xl
            px-5
            text-sm
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
            boxShadow: "0 12px 28px rgba(255,59,31,.35)",
          }}
        >
          <CalendarDays size={18} />
          <span>Book Appointment</span>
        </Link>

        {/* WhatsApp */}

        <a
          href={clinic.appointment.whatsappBooking}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#25D366]
            px-5
            text-sm
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#20c65a]
          "
        >
          <FaWhatsapp className="text-lg" />
          <span>WhatsApp</span>
        </a>

        {/* Call */}

        <a
          href={clinic.appointment.callBooking}
          className="
            inline-flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-primary
            bg-white
            px-5
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