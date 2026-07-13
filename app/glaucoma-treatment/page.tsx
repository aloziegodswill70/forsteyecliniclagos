import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  ArrowRight,
  ShieldAlert,
  Eye,
  CheckCircle2,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Glaucoma Treatment in Lagos | FORST EYE CLINIC",
  description:
    "Receive comprehensive glaucoma treatment and long-term management at FORST EYE CLINIC. Early diagnosis and regular monitoring help preserve vision and reduce the risk of blindness.",
  keywords: [
    "Glaucoma Treatment Lagos",
    "Glaucoma Management",
    "Eye Pressure Treatment",
    "Glaucoma Clinic Ikeja",
    "Optic Nerve Assessment",
    "Visual Field Test",
    "Eye Clinic Lagos",
    "FORST EYE CLINIC",
  ],
  alternates: {
    canonical: "/glaucoma-treatment",
  },
};

const treatments = [
  "Comprehensive Eye Examination",
  "Eye Pressure Monitoring",
  "Prescription Eye Drops",
  "OCT Imaging",
  "Visual Field Testing",
  "Optic Nerve Evaluation",
  "Long-term Glaucoma Monitoring",
  "Specialist Referral When Needed",
];

const benefits = [
  "Early detection of disease progression",
  "Reduction of eye pressure",
  "Protection of the optic nerve",
  "Preservation of vision",
  "Personalized treatment plans",
  "Regular follow-up appointments",
];

export default function GlaucomaTreatmentPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Glaucoma Treatment
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            Comprehensive
            <span className="block text-primary">
              Glaucoma Treatment
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Glaucoma cannot be reversed, but with early diagnosis, appropriate
            treatment and regular follow-up, its progression can often be
            slowed or controlled. At <strong>FORST EYE CLINIC</strong>, we
            provide personalized glaucoma management designed to protect your
            vision for life.
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

      {/* Treatments */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">
              Our Glaucoma Treatment Services
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              We combine modern diagnostic technology with evidence-based
              treatment plans to help preserve your vision and improve your
              long-term eye health.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary"
              >
                <ShieldAlert className="mx-auto text-primary" size={34} />

                <p className="mt-4 font-medium text-neutral-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Why Treatment Matters
              </span>

              <h2 className="mt-4 text-3xl font-bold text-neutral-900">
                Protect Your Vision for the Future
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Glaucoma damages the optic nerve gradually and often without
                warning signs. Consistent treatment and regular monitoring are
                essential for slowing disease progression and maintaining useful
                vision.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((item) => (
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
                <Activity className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                What to Expect During Your Visit
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Detailed medical and eye history",
                  "Comprehensive eye examination",
                  "Eye pressure measurement",
                  "Optic nerve assessment",
                  "Visual field testing",
                  "Individualized treatment recommendations",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <Eye
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
              Start Your Glaucoma Treatment Today
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Regular eye examinations and proper glaucoma management can help
              preserve your vision and improve your quality of life. Let our
              experienced eye care professionals guide you every step of the
              way.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-eye-appointment"
                className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Book Appointment
              </Link>

              <Link
                href="/glaucoma"
                className="rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Learn About Glaucoma
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}