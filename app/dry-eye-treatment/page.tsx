import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Shield,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dry Eye Treatment in Lagos | Forst Eye Clinic",
  description:
    "Get effective dry eye treatment at Forst Eye Clinic. We diagnose and manage dry eye syndrome using modern technology and personalized treatment plans across our Lagos branches.",
  keywords: [
    "Dry Eye Treatment Lagos",
    "Dry Eye Clinic Lagos",
    "Dry Eye Treatment Ikeja",
    "Dry Eye Specialist Nigeria",
    "Burning Eyes",
    "Watery Eyes",
    "Eye Irritation",
    "Forst Eye Clinic",
  ],
  alternates: {
    canonical: "/dry-eye-treatment",
  },
};

const treatments = [
  "Comprehensive Dry Eye Evaluation",
  "Tear Film Assessment",
  "Meibomian Gland Evaluation",
  "Lubricating Eye Drops",
  "Prescription Dry Eye Medication",
  "Warm Compress Therapy",
  "Lid Hygiene Treatment",
  "Lifestyle & Nutrition Advice",
];

const symptoms = [
  "Burning sensation",
  "Gritty or sandy feeling",
  "Watery eyes",
  "Red eyes",
  "Blurred vision",
  "Eye fatigue",
  "Sensitivity to light",
  "Difficulty wearing contact lenses",
];

export default function DryEyeTreatmentPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site max-w-6xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Dry Eye Treatment
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            Effective Relief for
            <span className="block text-primary">
              Dry, Irritated Eyes
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Dry eye disease is one of the most common causes of discomfort,
            blurred vision and eye irritation. At <strong>FORST EYE CLINIC</strong>,
            we provide comprehensive diagnosis and personalized treatment plans
            to restore comfort and protect your eye health.
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

      {/* Symptoms */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">
              Common Symptoms of Dry Eye
            </h2>

            <p className="mt-4 leading-8 text-neutral-600">
              If you experience any of these symptoms regularly, a comprehensive
              eye examination can help determine the cause and the most
              appropriate treatment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {symptoms.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary"
              >
                <Droplets className="mx-auto text-primary" size={32} />

                <p className="mt-4 font-medium text-neutral-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Personalized Care
              </span>

              <h2 className="mt-4 text-3xl font-bold text-neutral-900">
                Our Dry Eye Treatment Options
              </h2>

              <p className="mt-5 leading-8 text-neutral-600">
                Treatment depends on the underlying cause of your dry eye. Our
                experienced eye care professionals create individualized
                treatment plans that improve comfort, stabilize your tear film,
                and protect your vision.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {treatments.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 text-primary"
                    />

                    <span className="text-neutral-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Eye size={32} className="text-primary" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                Why Choose FORST EYE CLINIC?
              </h3>

              <div className="mt-8 space-y-5">
                <div className="flex gap-3">
                  <Shield className="mt-1 text-primary" size={20} />
                  <p className="text-neutral-600">
                    Comprehensive eye examinations with advanced diagnostic
                    technology.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Shield className="mt-1 text-primary" size={20} />
                  <p className="text-neutral-600">
                    Personalized treatment plans tailored to each patient's
                    needs.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Shield className="mt-1 text-primary" size={20} />
                  <p className="text-neutral-600">
                    Experienced eye care professionals committed to preserving
                    your vision.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Shield className="mt-1 text-primary" size={20} />
                  <p className="text-neutral-600">
                    Convenient locations across Lagos with quality patient care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20">
        <div className="container-site">
          <div className="mx-auto max-w-4xl rounded-3xl border border-primary/10 bg-white p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-neutral-900">
              Get Lasting Relief from Dry Eye
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Don't let dry eye affect your daily activities. Schedule a
              comprehensive eye examination today and receive expert treatment
              from our experienced eye care team.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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