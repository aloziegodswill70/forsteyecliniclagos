"use client";

import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Chioma A.",
    location: "Ikeja, Lagos",
    review:
      "The team was professional and thorough. My eye examination was detailed, and the doctor explained everything clearly.",
  },
  {
    name: "Emeka O.",
    location: "Ogba, Lagos",
    review:
      "Excellent customer service and modern equipment. The clinic was clean, welcoming and very organized.",
  },
  {
    name: "Aisha B.",
    location: "Festac, Lagos",
    review:
      "The doctors were patient and caring. My treatment was explained clearly and I felt reassured throughout.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
            Patient Reviews
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl lg:text-5xl">
            Trusted By Patients
            <span className="block text-primary">
              Across Lagos
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            We are committed to delivering exceptional eye care through
            experienced professionals, modern technology and compassionate service.
          </p>

        </div>

        {/* Rating */}

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/10 bg-primary/5 p-5 text-center md:p-8">

          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                fill="currentColor"
                className="text-primary md:h-6 md:w-6"
              />
            ))}
          </div>

          <h3 className="mt-3 text-3xl font-black text-neutral-900 md:text-5xl">
            4.9 / 5
          </h3>

          <p className="mt-2 text-sm font-semibold text-primary md:text-lg">
            Patient Satisfaction Rating
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-neutral-600 md:text-base md:leading-8">
            Thousands of patients trust FORST Eye Clinic for quality eye care
            and advanced vision services.
          </p>

        </div>

        {/* Reviews */}

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {reviews.map((review) => (

            <article
              key={review.name}
              className="rounded-2xl border border-neutral-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg md:p-7"
            >

              <Quote
                size={24}
                className="mx-auto text-primary md:h-8 md:w-8"
              />

              <div className="mt-3 flex justify-center gap-1">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    className="text-primary"
                  />
                ))}

              </div>

              <p className="mt-4 text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
                "{review.review}"
              </p>

              <div className="mt-5 border-t border-neutral-100 pt-4">

                <h4 className="text-sm font-bold text-neutral-900 md:text-base">
                  {review.name}
                </h4>

                <p className="mt-1 text-xs text-neutral-500 md:text-sm">
                  {review.location}
                </p>

              </div>

            </article>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-primary/10 bg-white p-6 text-center shadow-sm md:p-10">

          <h3 className="text-xl font-black text-neutral-900 md:text-3xl">
            Experience Eye Care You Can Trust
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
            Join thousands of satisfied patients who trust FORST Eye Clinic
            for professional eye care across Lagos.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link
              href="/book-eye-appointment"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
            >
              Book Appointment
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/reviews"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white sm:w-auto"
            >
              Read More Reviews
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}