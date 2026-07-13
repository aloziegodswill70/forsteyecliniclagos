import Link from "next/link";
import {
  Star,
  ExternalLink,
  CalendarDays,
} from "lucide-react";

export default function GoogleReviews() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Google Reviews
          </span>

          <h2 className="mt-6 text-3xl font-black text-neutral-900 md:text-5xl">
            Loved by Patients
            <span className="block text-primary">
              Across Lagos
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600">
            Thousands of patients trust <strong>FORST EYE CLINIC</strong> for
            comprehensive eye examinations, glaucoma screening, cataract
            evaluation, diabetic eye care, children's eye care, OCT imaging,
            premium optical services and compassionate patient experience.
          </p>

        </div>

        {/* Rating Card */}

        <div className="mx-auto mt-12 max-w-4xl rounded-[30px] border border-primary/10 bg-white p-8 shadow-lg lg:p-12">

          <div className="text-center">

            <div className="flex justify-center gap-1">

              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  fill="#FF5A34"
                  className="text-primary"
                />
              ))}

            </div>

            <h3 className="mt-5 text-5xl font-black text-neutral-900">
              5.0
            </h3>

            <p className="mt-2 text-lg font-semibold text-primary">
              Google Rating
            </p>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-600">
              Every review reflects our commitment to accurate diagnosis,
              compassionate care, modern technology and outstanding patient
              satisfaction.
            </p>

          </div>

          {/* Highlights */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-neutral-200 p-6 text-center transition hover:border-primary hover:shadow-md">
              <h4 className="text-3xl font-black text-primary">
                20K+
              </h4>

              <p className="mt-2 text-sm text-neutral-600">
                Happy Patients
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6 text-center transition hover:border-primary hover:shadow-md">
              <h4 className="text-3xl font-black text-primary">
                6
              </h4>

              <p className="mt-2 text-sm text-neutral-600">
                Lagos Branches
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6 text-center transition hover:border-primary hover:shadow-md">
              <h4 className="text-3xl font-black text-primary">
                60+
              </h4>

              <p className="mt-2 text-sm text-neutral-600">
                HMO Partners
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6 text-center transition hover:border-primary hover:shadow-md">
              <h4 className="text-3xl font-black text-primary">
                OCT
              </h4>

              <p className="mt-2 text-sm text-neutral-600">
                Advanced Diagnostics
              </p>
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="https://g.page/r/CQXXXXXXXXXX/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-7 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              View Google Reviews

              <ExternalLink size={18} />
            </Link>

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90"
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