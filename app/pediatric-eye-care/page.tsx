import type { Metadata } from "next";
import Link from "next/link";
import {
  Baby,
  Eye,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pediatric Eye Care in Lagos | Children's Eye Clinic | FORST EYE CLINIC",
  description:
    "FORST EYE CLINIC provides comprehensive pediatric eye care, children's eye examinations, vision screening, lazy eye treatment, squint evaluation and myopia management in Lagos.",
  keywords: [
    "Pediatric Eye Care Lagos",
    "Children Eye Clinic",
    "Children Eye Examination",
    "Child Eye Doctor",
    "Kids Eye Clinic",
    "Lazy Eye Treatment",
    "Squint Treatment",
    "Myopia Management",
    "Vision Screening",
    "FORST EYE CLINIC",
  ],
  alternates: {
    canonical: "/pediatric-eye-care",
  },
};

const services = [
  "Comprehensive Children's Eye Examination",
  "Infant & Preschool Vision Screening",
  "Lazy Eye (Amblyopia) Management",
  "Squint (Strabismus) Evaluation",
  "Myopia Control & Management",
  "Prescription Glasses for Children",
  "Eye Infection Treatment",
  "Regular Vision Monitoring",
];

const signs = [
  "Frequent eye rubbing",
  "Squinting while reading or watching TV",
  "Poor school performance due to vision",
  "Holding books too close",
  "Crossed or wandering eyes",
  "Frequent headaches",
];

export default function PediatricEyeCarePage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Children's Eye Care
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            Pediatric
            <span className="block text-primary">
              Eye Care Services
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Healthy vision plays an important role in your child's learning,
            development and confidence. At <strong>FORST EYE CLINIC</strong>,
            we provide comprehensive pediatric eye care using child-friendly
            examination techniques and modern diagnostic technology.
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

      {/* Services */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">
              Pediatric Eye Care Services
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              Our experienced eye care professionals provide complete vision
              assessments and personalized treatment plans for infants,
              children and teenagers.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary"
              >
                <Baby className="mx-auto text-primary" size={34} />

                <p className="mt-4 font-medium text-neutral-700">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900">
                Signs Your Child May Need an Eye Examination
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Many childhood vision problems develop without obvious symptoms.
                Early eye examinations help detect problems before they affect
                learning or development.
              </p>

              <div className="mt-8 space-y-4">
                {signs.map((item) => (
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
                <ShieldCheck className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                Why Early Eye Care Matters
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Supports healthy visual development",
                  "Improves classroom performance",
                  "Detects eye problems early",
                  "Prevents avoidable vision loss",
                  "Provides appropriate treatment promptly",
                  "Encourages lifelong eye health",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <Eye
                      className="mt-1 text-primary"
                      size={20}
                    />

                    <p className="text-neutral-600">
                      {item}
                    </p>
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
              Give Your Child the Gift of Healthy Vision
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Regular children's eye examinations help detect vision problems
              early, supporting healthy learning, development and confidence.
              Schedule your child's comprehensive eye examination with FORST
              EYE CLINIC today.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-eye-appointment"
                className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Book Appointment
              </Link>

              <Link
                href="/eye-examination"
                className="rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Learn About Eye Examinations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}