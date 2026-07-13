import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ScanEye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Comprehensive Eye Examination in Lagos | FORST EYE CLINIC",
  description:
    "Book a comprehensive eye examination at FORST EYE CLINIC. We provide detailed vision assessments, glaucoma screening, cataract evaluation, diabetic eye screening, children's eye care and advanced diagnostic services across Lagos.",
  keywords: [
    "Eye Examination Lagos",
    "Comprehensive Eye Test Lagos",
    "Eye Clinic Ikeja",
    "Eye Examination Ogba",
    "Vision Test Lagos",
    "Eye Doctor Lagos",
    "Glaucoma Screening",
    "FORST EYE CLINIC",
  ],
  alternates: {
    canonical: "/eye-examination",
  },
};

const services = [
  "Comprehensive Eye Examination",
  "Visual Acuity Assessment",
  "Refraction (Prescription Test)",
  "Eye Pressure Measurement",
  "Glaucoma Screening",
  "Retinal Examination",
  "Optic Nerve Assessment",
  "Digital Eye Health Evaluation",
];

const benefits = [
  "Early detection of eye diseases",
  "Updated spectacle prescription",
  "Improved vision and eye comfort",
  "Monitoring of chronic eye conditions",
  "Personalized treatment recommendations",
  "Professional eye health advice",
];

export default function EyeExaminationPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Comprehensive Eye Examination
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            Protect Your Vision With
            <span className="block text-primary">
              Regular Eye Examinations
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            At <strong>FORST EYE CLINIC</strong>, every comprehensive eye
            examination goes beyond checking your eyesight. We carefully assess
            your vision and overall eye health to detect conditions such as
            glaucoma, cataracts, diabetic eye disease and other sight-threatening
            problems before symptoms develop.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <CalendarDays size={20} />
              Book Eye Examination
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

      {/* Services */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">
              What Your Eye Examination Includes
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              Our experienced eye care professionals use modern diagnostic
              equipment to evaluate every aspect of your eye health and visual
              performance.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary"
              >
                <Eye className="mx-auto text-primary" size={34} />

                <p className="mt-4 font-medium text-neutral-700">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Regular Eye Exams */}

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Why It Matters
              </span>

              <h2 className="mt-4 text-3xl font-bold text-neutral-900">
                Early Detection Saves Sight
              </h2>

              <p className="mt-5 leading-8 text-neutral-600">
                Many serious eye diseases develop silently without noticeable
                symptoms. Routine eye examinations allow early diagnosis,
                timely treatment and long-term protection of your vision.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 text-primary"
                    />

                    <span className="text-neutral-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <ScanEye className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                Who Should Have an Eye Examination?
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Children before starting school",
                  "Adults every 1–2 years",
                  "People with diabetes",
                  "Individuals above 40 years",
                  "Patients with glaucoma risk",
                  "Anyone experiencing blurred vision or eye discomfort",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <ShieldCheck
                      size={20}
                      className="mt-1 text-primary"
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
              Schedule Your Comprehensive Eye Examination Today
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Whether you're experiencing blurred vision, headaches, eye
              discomfort or simply due for your routine check-up, our
              experienced team is here to help you maintain healthy vision for
              life.
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
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}