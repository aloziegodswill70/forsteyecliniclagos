"use client";

import Link from "next/link";
import {
  Star,
  ExternalLink,
  CalendarDays,
  Quote,
} from "lucide-react";

export default function GoogleReviews() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-neutral-200 px-5 py-2 text-sm font-semibold text-primary">
            Google Reviews
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-neutral-900 md:text-5xl">
            Trusted By Thousands
            <span className="block text-neutral-700">
              Of Happy Patients
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-600">
            Our patients consistently recommend FORST EYE CLINIC for
            comprehensive eye examinations, glaucoma care, cataract
            evaluation, children's eye care, diabetic eye screening,
            OCT imaging and premium optical services.
          </p>

        </div>

        {/* Review Card */}

        <div className="mx-auto mt-14 max-w-5xl rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm lg:p-12">

          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
              <Quote className="text-primary" size={30} />
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-1">

            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={24}
                fill="currentColor"
                className="text-yellow-400"
              />
            ))}

          </div>

          <h3 className="mt-5 text-center text-5xl font-black text-neutral-900">
            5.0
          </h3>

          <p className="mt-2 text-center text-lg font-semibold text-neutral-700">
            Average Google Rating
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-neutral-600">
            Every review represents our commitment to exceptional patient care,
            modern diagnostic technology, professional eye care services and
            friendly clinical experience.
          </p>

          {/* Stats */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                value: "20K+",
                label: "Patients Served",
              },
              {
                value: "6",
                label: "Clinic Locations",
              },
              {
                value: "60+",
                label: "HMO Partners",
              },
              {
                value: "15+",
                label: "Eye Care Services",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-neutral-200 p-6 text-center transition duration-300 hover:shadow-md"
              >
                <h4 className="text-3xl font-black text-neutral-900">
                  {item.value}
                </h4>

                <p className="mt-2 text-sm text-neutral-500">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="https://g.page/r/CQXXXXXXXXXX/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-300 px-7 py-4 font-semibold text-neutral-800 transition hover:border-primary hover:text-primary sm:w-auto"
            >
              View Google Reviews

              <ExternalLink size={18} />
            </Link>

            <Link
              href="/book-eye-appointment"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-7 py-4 font-semibold text-white transition hover:bg-neutral-800 sm:w-auto"
            >
              <CalendarDays size={20} />

              Book Appointment
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}