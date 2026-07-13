import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  Eye,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Glaucoma Screening & Treatment in Lagos | FORST EYE CLINIC",
  description:
    "Protect your sight with comprehensive glaucoma screening and management at FORST EYE CLINIC. Early diagnosis helps prevent permanent vision loss.",
  keywords: [
    "Glaucoma Lagos",
    "Glaucoma Screening",
    "Eye Pressure Test",
    "Optic Nerve Assessment",
    "Visual Field Test",
    "Glaucoma Treatment",
    "Eye Clinic Ikeja",
    "FORST EYE CLINIC",
  ],
  alternates: {
    canonical: "/glaucoma",
  },
};

const services = [
  "Comprehensive Eye Examination",
  "Eye Pressure Measurement",
  "Optic Nerve Evaluation",
  "Visual Field Test",
  "OCT Scan",
  "Glaucoma Monitoring",
  "Medication Management",
  "Long-term Follow-up",
];

const symptoms = [
  "Gradual loss of peripheral vision",
  "Blurred vision",
  "Eye pain (acute cases)",
  "Halos around lights",
  "Headache",
  "Often no symptoms in early stages",
];

export default function GlaucomaPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Glaucoma Care
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            Protect Your Vision From
            <span className="block text-primary">
              Glaucoma
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Glaucoma is known as the <strong>"silent thief of sight"</strong>
            because it often develops without noticeable symptoms. At
            <strong> FORST EYE CLINIC</strong>, we provide comprehensive
            glaucoma screening, early diagnosis and long-term management to
            help preserve your vision.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <CalendarDays size={20} />
              Book Glaucoma Screening
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
              Our Glaucoma Services
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              We use advanced diagnostic technology to detect glaucoma early,
              monitor disease progression and protect your long-term vision.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary"
              >
                <ShieldAlert className="mx-auto text-primary" size={34} />

                <p className="mt-4 font-medium text-neutral-700">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information */}

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Symptoms & Risk Factors
              </span>

              <h2 className="mt-4 text-3xl font-bold text-neutral-900">
                Know the Warning Signs
              </h2>

              <div className="mt-8 space-y-4">
                {symptoms.map((item) => (
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

              <p className="mt-8 leading-8 text-neutral-600">
                People over the age of 40, individuals with a family history
                of glaucoma, diabetes, high eye pressure or certain medical
                conditions should have regular comprehensive eye examinations.
              </p>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Activity className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                Why Early Detection Matters
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Detect glaucoma before symptoms appear",
                  "Prevent permanent vision loss",
                  "Monitor optic nerve health",
                  "Reduce risk of blindness",
                  "Personalized treatment plans",
                  "Regular follow-up and monitoring",
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
              Early Glaucoma Detection Can Save Your Sight
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Don't wait until vision loss occurs. Schedule a comprehensive
              glaucoma screening at FORST EYE CLINIC and let our experienced
              eye care professionals help protect your eyesight for years to
              come.
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
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}