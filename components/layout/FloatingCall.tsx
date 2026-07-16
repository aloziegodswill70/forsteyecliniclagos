"use client";

import { Phone } from "lucide-react";

const phone = "08186992818";

export default function FloatingCall() {
  return (
    <div className="relative group">
      {/* Tooltip */}
      <div
        className="
          pointer-events-none
          absolute
          right-16
          top-1/2
          -translate-y-1/2
          whitespace-nowrap
          rounded-xl
          border
          border-neutral-200
          bg-white
          px-4
          py-2
          text-sm
          font-semibold
          text-neutral-700
          shadow-xl
          opacity-0
          invisible
          transition-all
          duration-300
          group-hover:visible
          group-hover:opacity-100
          group-hover:-translate-x-1
        "
      >
        📞 Call FORST Eye Clinic
      </div>

      {/* Floating Call Button */}
      <a
        href={`tel:${phone}`}
        title="Call FORST Eye Clinic"
        aria-label="Call FORST Eye Clinic"
        className="
          relative
          flex
          h-12
          w-12
          sm:h-16
          sm:w-16
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-primary
          text-white
          shadow-floating
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-2xl
          active:scale-95
          focus:outline-none
          focus:ring-4
          focus:ring-primary/20
        "
      >
        {/* Animated Pulse */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-primary
            opacity-25
            animate-ping
          "
        />

        {/* Decorative Ring */}
        <span
          className="
            absolute
            inset-[3px]
            rounded-full
            border-2
            border-[#D4CE1E]/60
          "
        />

        {/* Shine Effect */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-gradient-to-tr
            from-white/20
            via-transparent
            to-transparent
          "
        />

        {/* Icon */}
        <Phone
          strokeWidth={2.6}
          className="relative z-10 h-5 w-5 sm:h-7 sm:w-7"
        />
      </a>
    </div>
  );
}