import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets,
  Eye,
  Wind,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dry Eye Treatment in Lagos | FORST EYE CLINIC",
  description:
    "Get professional dry eye diagnosis and treatment at FORST EYE CLINIC. We provide comprehensive dry eye evaluation, meibomian gland assessment, artificial tears, eyelid care and long-term dry eye management in Lagos.",
  keywords: [
    "Dry Eye Treatment Lagos",
    "Dry Eye Clinic Lagos",
    "Dry Eye Specialist",
    "Burning Eyes",
    "Watery Eyes",
    "Eye Irritation",
    "Dry Eye Syndrome",
    "Forst Eye Clinic",
  ],
  alternates: {
    canonical: "/dry-eye",
  },
};

const symptoms = [
  "Burning or stinging sensation",
  "Gritty feeling in the eyes",
  "Blurred vision",
  "Watery eyes",
  "Red eyes",
  "Eye fatigue",
  "Sensitivity to light",
  "Difficulty using digital screens",
];

const treatments = [
  "Comprehensive Dry Eye Assessment",
  "Tear Film Evaluation",
  "Meibomian Gland Assessment",
  "Artificial Tear Recommendations",
  "Prescription Eye Drops",
  "Eyelid Hygiene Education",
  "Lifestyle & Nutrition Advice",
  "Long-Term Follow-up Care",
];

export default function DryEyePage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="container-site py-16 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
              Dry Eye Care
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-neutral-900 md:text-6xl">
              Professional
              <span className="block text-primary">
                Dry Eye Treatment
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Dry eye syndrome is one of the most common eye conditions,
              causing discomfort, irritation and fluctuating vision. At
              <strong> FORST EYE CLINIC</strong>, we diagnose the underlying
              cause and provide personalized treatment to restore comfort and
              protect your vision.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90"
              >
                <CalendarDays size={20} />
                Book Eye Examination
              </Link>

              <a
                href="tel:08186992818"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-7 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                <Phone size={20} />
                Call Our Clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Droplets className="text-primary" size={34} />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-neutral-900">
                Common Symptoms of Dry Eye
              </h2>

              <p className="mt-5 leading-8 text-neutral-600">
                Dry eye occurs when your eyes do not produce enough tears or
                when tears evaporate too quickly. Early diagnosis helps reduce
                discomfort and prevent damage to the eye surface.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {symptoms.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-neutral-200 p-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 text-primary"
                      size={18}
                    />

                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
              <Eye className="text-primary" size={42} />

              <h3 className="mt-5 text-2xl font-bold text-neutral-900">
                Who Is At Risk?
              </h3>

              <ul className="mt-6 space-y-4 text-neutral-600">
                <li>• Adults over 50 years</li>
                <li>• Long hours of computer use</li>
                <li>• Contact lens wearers</li>
                <li>• Air-conditioned environments</li>
                <li>• Hormonal changes</li>
                <li>• Certain medications</li>
                <li>• Autoimmune diseases</li>
                <li>• Previous eye surgery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Wind className="mx-auto text-primary" size={42} />

            <h2 className="mt-6 text-3xl font-bold text-neutral-900">
              Our Dry Eye Treatment Services
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              Every patient receives a personalized treatment plan depending
              on the severity and underlying cause of their dry eye symptoms.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {treatments.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CheckCircle2
                  className="mx-auto text-primary"
                  size={30}
                />

                <h3 className="mt-5 font-semibold text-neutral-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-primary/10 bg-primary/5 px-8 py-12 text-center lg:px-14">
            <h2 className="text-3xl font-bold text-neutral-900 lg:text-4xl">
              Find Relief From Dry Eyes
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Don't ignore persistent eye irritation, redness or blurred
              vision. Schedule a comprehensive eye examination with FORST EYE
              CLINIC and receive expert dry eye diagnosis and treatment.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-primary px-7 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}