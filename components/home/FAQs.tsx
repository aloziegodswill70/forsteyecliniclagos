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
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-5">

        {/* Header */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full border border-neutral-200 px-4 py-2 text-xs font-semibold text-primary">
            Google Reviews
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            Trusted By Thousands
            <span className="block text-neutral-700">
              Of Happy Patients
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            Patients recommend FORST Eye Clinic for comprehensive eye
            examinations, glaucoma care, cataract evaluation, children's eye
            care, diabetic eye screening and premium optical services.
          </p>

        </div>

        {/* Review Card */}

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-7 lg:p-9">

          {/* Quote */}

          <div className="flex justify-center">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">

              <Quote
                size={22}
                className="text-primary"
              />

            </div>

          </div>

          {/* Stars */}

          <div className="mt-4 flex justify-center gap-1">

            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                fill="currentColor"
                className="text-yellow-400"
              />
            ))}

          </div>

          <h3 className="mt-3 text-center text-4xl font-black text-neutral-900">
            5.0
          </h3>

          <p className="mt-1 text-center text-sm font-semibold text-neutral-700">
            Average Google Rating
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-neutral-600">
            Every review reflects our commitment to exceptional eye care,
            modern technology and compassionate patient service.
          </p>

          {/* Stats */}

          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">

            {[
              {
                value: "20K+",
                label: "Patients",
              },
              {
                value: "6",
                label: "Branches",
              },
              {
                value: "60+",
                label: "HMOs",
              },
              {
                value: "15+",
                label: "Services",
              },
            ].map((item) => (

              <div
                key={item.label}
                className="rounded-2xl border border-neutral-200 p-4 text-center transition hover:shadow-md"
              >

                <h4 className="text-2xl font-black text-primary">
                  {item.value}
                </h4>

                <p className="mt-1 text-xs text-neutral-500">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">

            <Link
              href="https://g.page/r/CQXXXXXXXXXX/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-800 transition hover:border-primary hover:text-primary sm:w-auto"
            >

              View Reviews

              <ExternalLink size={16} />

            </Link>

            <Link
              href="/book-eye-appointment"
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
            >

              <CalendarDays size={17} />

              Book Appointment

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}