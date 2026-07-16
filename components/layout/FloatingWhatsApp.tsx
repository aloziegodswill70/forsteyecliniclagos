"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "2348186992818";

const MESSAGE = encodeURIComponent(
  "Hello FORST Eye Clinic, I would like to make an enquiry."
);

export default function FloatingWhatsApp() {
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
          bg-white
          px-4
          py-2
          text-sm
          font-semibold
          text-neutral-700
          shadow-xl
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:-translate-x-1
        "
      >
        💬 Chat with us on WhatsApp
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="
          relative
          flex
          h-12
          w-12
          sm:h-16
          sm:w-16
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-green-400/40
          active:scale-95
        "
      >
        {/* Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

        {/* Ring */}
        <span className="absolute inset-[3px] rounded-full border-2 border-white/30" />

        {/* Icon */}
        <FaWhatsapp
          className="relative z-10 h-6 w-6 sm:h-[34px] sm:w-[34px]"
        />
      </a>
    </div>
  );
}