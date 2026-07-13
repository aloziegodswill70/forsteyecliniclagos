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
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">

        <div
          className="overflow-hidden rounded-[32px] border border-orange-100 px-6 py-10 text-center shadow-xl md:px-10 md:py-14 lg:px-16"
          style={{
            background:
              "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
            boxShadow:
              "0 14px 34px rgba(255,59,31,.30)",
          }}
        >
          {/* Badge */}

          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            <ShieldCheck size={16} />
            Trusted Eye Care Across Lagos
          </span>

          {/* Heading */}

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-tight text-white md:text-5xl">
            Protect Your Vision With
            <span className="block">
              Professional Eye Care
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/90 md:text-base md:leading-8">
            At <strong>FORST EYE CLINIC</strong>, we provide comprehensive
            eye examinations, glaucoma screening, cataract assessment,
            diabetic eye care, children's eye care, optical services and
            advanced diagnostic technology delivered by experienced eye
            care professionals.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/book-eye-appointment"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
            >
              <CalendarDays size={20} />
              Book Appointment
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:08186992818"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary sm:w-auto"
            >
              <Phone size={20} />
              Call Head Branch
            </a>

            <a
              href="https://wa.me/2348186992818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 sm:w-auto"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

          </div>

          {/* Info Cards */}

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary">
                <MapPin size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">
                6 Lagos Branches
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/85">
                Ogba, Magodo, Surulere,
                Festac, Agbara &
                Eleko.
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary">
                <Clock3 size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">
                Opening Hours
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/85">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary">
                <Phone size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">
                Contact Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/85">
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