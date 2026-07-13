"use client";

import Link from "next/link";
import {
  CalendarDays,
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  Star,
  ArrowRight,
} from "lucide-react";

import clinic from "@/data/clinic";

export default function HeroBottomBar() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-[32px]"
          style={{
            background:
              "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
            boxShadow: "0 14px 34px rgba(255,59,31,.35)",
          }}
        >
          <div className="grid items-center gap-10 p-6 sm:p-8 lg:grid-cols-[1.25fr_.85fr] lg:p-12">

            {/* LEFT */}

            <div className="text-center lg:text-left">

              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur sm:text-sm">
                <Star
                  size={15}
                  className="fill-white"
                />
                Trusted by 20,000+ Patients
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready To
                <span className="block">
                  Protect Your Vision?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base lg:mx-0">
                Book a comprehensive eye examination with our experienced
                eye care professionals. We provide glaucoma screening,
                cataract evaluation, children's eye care, diabetic eye
                screening and premium optical services using modern
                diagnostic technology.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">

                <Link
                  href={clinic.cta.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
                >
                  <CalendarDays size={18} />

                  Book Appointment

                  <ArrowRight size={18} />
                </Link>

                <a
                  href={clinic.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/70 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary sm:w-auto"
                >
                  <MessageCircle size={18} />

                  WhatsApp Us
                </a>

              </div>
            </div>

            {/* RIGHT */}

            <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-xl lg:p-7">

              <h3 className="text-xl font-bold text-primary">
                Contact Information
              </h3>

              <div className="mt-6 space-y-6">

                <div className="flex gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone
                      size={18}
                      className="text-primary"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-neutral-900">
                      Call Our Clinic
                    </p>

                    <a
                      href={clinic.appointment.callBooking}
                      className="text-sm text-neutral-600 transition hover:text-primary"
                    >
                      {clinic.contact.phone}
                    </a>
                  </div>

                </div>

                <div className="flex gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin
                      size={18}
                      className="text-primary"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-neutral-900">
                      Head Office
                    </p>

                    <p className="text-sm leading-6 text-neutral-600">
                      {clinic.headquarters.address}
                    </p>
                  </div>

                </div>

                <div className="flex gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock3
                      size={18}
                      className="text-primary"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-neutral-900">
                      Opening Hours
                    </p>

                    <p className="text-sm text-neutral-600">
                      {clinic.hours.weekdays}
                    </p>

                    <p className="text-sm text-neutral-600">
                      {clinic.hours.weekend}
                    </p>
                  </div>

                </div>

              </div>

              <Link
                href="/branches"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
              >
                View All Branches

                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}