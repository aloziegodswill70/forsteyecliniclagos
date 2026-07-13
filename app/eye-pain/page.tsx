import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Eye Pain Treatment in Lagos | FORST EYE CLINIC",
  description:
    "Experiencing eye pain? Visit FORST EYE CLINIC for comprehensive eye examinations, accurate diagnosis and effective treatment for eye pain, redness, infections, glaucoma and other eye conditions.",
  keywords: [
    "Eye Pain Lagos",
    "Eye Pain Treatment",
    "Eye Clinic Lagos",
    "Eye Doctor Ikeja",
    "Eye Infection",
    "Red Eye Treatment",
    "Glaucoma Emergency",
    "FORST EYE CLINIC",
  ],
  alternates: {
    canonical: "/eye-pain",
  },
};

const causes = [
  "Eye Infection",
  "Dry Eye Disease",
  "Eye Injury",
  "Glaucoma",
  "Corneal Abrasion",
  "Foreign Body",
  "Eye Allergy",
  "Eye Strain",
];

const symptoms = [
  "Sharp or aching eye pain",
  "Redness",
  "Blurred vision",
  "Sensitivity to light",
  "Excessive tearing",
  "Swollen eyelids",
];

export default function EyePainPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Eye Pain Treatment
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            Don't Ignore
            <span className="block text-primary">
              Eye Pain
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Eye pain can range from mild discomfort to severe pain caused by
            infections, injuries, glaucoma or other serious eye conditions.
            Prompt evaluation by an eye care professional helps prevent vision
            loss and ensures appropriate treatment.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <CalendarDays size={20} />
              Book Appointment
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Causes */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">
              Common Causes of Eye Pain
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              Our comprehensive eye examination helps identify the underlying
              cause of your symptoms for accurate diagnosis and treatment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {causes.map((cause) => (
              <div
                key={cause}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary"
              >
                <AlertCircle className="mx-auto text-primary" size={34} />

                <p className="mt-4 font-medium text-neutral-700">
                  {cause}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms & Care */}

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Warning Signs
              </span>

              <h2 className="mt-4 text-3xl font-bold text-neutral-900">
                Symptoms That Require Immediate Attention
              </h2>

              <div className="mt-8 space-y-4">
                {symptoms.map((symptom) => (
                  <div
                    key={symptom}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      className="mt-1 text-primary"
                      size={20}
                    />

                    <span className="text-neutral-700">
                      {symptom}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Eye className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                Why Choose FORST EYE CLINIC?
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Comprehensive eye examinations",
                  "Modern diagnostic technology",
                  "Experienced eye care professionals",
                  "Accurate diagnosis and treatment",
                  "Emergency eye care services",
                  "Convenient Lagos locations",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <ShieldCheck
                      className="mt-1 text-primary"
                      size={20}
                    />

                    <p className="text-neutral-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20">
        <div className="container-site">
          <div className="mx-auto max-w-5xl rounded-3xl border border-primary/10 bg-white p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-neutral-900 lg:text-4xl">
              Seek Professional Eye Care Today
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Persistent or severe eye pain should never be ignored. Early
              diagnosis and treatment can prevent complications and help
              preserve your vision.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-eye-appointment"
                className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Book Appointment
              </Link>

              <Link
                href="/services"
                className="rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}