"use client";

import Link from "next/link";
import {
  CalendarDays,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock3,
  MapPin,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div
          className="overflow-hidden rounded-3xl border border-orange-100 px-5 py-8 text-center shadow-xl sm:px-8 sm:py-10 lg:px-12 lg:py-14"
          style={{
            background:
              "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
            boxShadow:
              "0 14px 34px rgba(255,59,31,.30)",
          }}
        >
          {/* Badge */}

          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[11px] font-semibold text-white backdrop-blur sm:px-5 sm:text-xs">
              <ShieldCheck size={14} />
              Trusted Eye Care Across Lagos
            </span>
          </div>

          {/* Heading */}

          <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
            Protect Your Vision
            <span className="block">
              With Professional Eye Care
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-[15px] sm:leading-7">
            <strong>FORST EYE CLINIC</strong> provides comprehensive eye
            examinations, glaucoma screening, cataract assessment,
            diabetic eye care, children's eye care, optical services
            and advanced eye diagnostics delivered by experienced
            professionals.
          </p>

          {/* Buttons */}

          <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">

            <Link
              href="/book-eye-appointment"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto"
            >
              <CalendarDays size={17} />
              Book Appointment
              <ArrowRight size={15} />
            </Link>

            <a
              href="tel:08186992818"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary sm:w-auto"
            >
              <Phone size={17} />
              Call Us
            </a>

            <a
              href="https://wa.me/2348186992818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] sm:w-auto"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>

          </div>

          {/* Info Cards */}

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">

            {/* Branches */}

            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">

              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary">
                <MapPin size={18} />
              </div>

              <h3 className="mt-3 text-sm font-bold text-white">
                6 Lagos Branches
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/85">
                Ogba, Magodo,
                <br />
                Surulere, Festac,
                <br />
                Agbara & Eleko
              </p>

            </div>

            {/* Hours */}

            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">

              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary">
                <Clock3 size={18} />
              </div>

              <h3 className="mt-3 text-sm font-bold text-white">
                Opening Hours
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/85">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>

            </div>

            {/* Contact */}

            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">

              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary">
                <Phone size={18} />
              </div>

              <h3 className="mt-3 text-sm font-bold text-white">
                Contact Us
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/85 break-words">
                0818 699 2818
                <br />
                firsteyeclinic@gmail.com
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}