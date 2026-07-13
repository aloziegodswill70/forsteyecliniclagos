"use client";

import Link from "next/link";
import {
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";

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
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Patient Reviews
          </span>

          <h2 className="mt-6 text-3xl font-black text-neutral-900 md:text-5xl">
            Trusted By Patients
            <span className="block text-primary">
              Across Lagos
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600">
            We are committed to delivering exceptional eye care through
            experienced professionals, modern diagnostic technology and
            compassionate patient-centered service.
          </p>

        </div>

        {/* Rating */}

        <div className="mx-auto mt-14 max-w-4xl rounded-[30px] border border-primary/10 bg-primary/5 p-8 text-center lg:p-10">

          <div className="flex justify-center gap-1">

            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={28}
                fill="currentColor"
                className="text-primary"
              />
            ))}

          </div>

          <h3 className="mt-5 text-5xl font-black text-neutral-900">
            4.9 / 5
          </h3>

          <p className="mt-3 text-lg font-semibold text-primary">
            Patient Satisfaction Rating
          </p>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-600">
            Thousands of patients trust FORST EYE CLINIC for comprehensive
            eye examinations, glaucoma care, cataract evaluation, diabetic
            eye screening, children's eye care and premium optical services.
          </p>

        </div>

        {/* Reviews */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {reviews.map((review) => (

            <article
              key={review.name}
              className="rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-lg"
            >

              <Quote
                size={34}
                className="text-primary"
              />

              <div className="mt-5 flex gap-1">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className="text-primary"
                  />
                ))}

              </div>

              <p className="mt-5 leading-8 text-neutral-600">
                "{review.review}"
              </p>

              <div className="mt-8 border-t border-neutral-100 pt-5">

                <h4 className="font-bold text-neutral-900">
                  {review.name}
                </h4>

                <p className="mt-1 text-sm text-neutral-500">
                  {review.location}
                </p>

              </div>

            </article>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mx-auto mt-20 max-w-5xl rounded-[30px] border border-primary/10 bg-white p-10 text-center shadow-sm">

          <h3 className="text-3xl font-black text-neutral-900">
            Experience Eye Care You Can Trust
          </h3>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
            Join thousands of satisfied patients who rely on FORST EYE
            CLINIC for professional eye examinations, advanced diagnostics
            and quality vision care across Lagos.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Book Appointment

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/reviews"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Read More Reviews
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}