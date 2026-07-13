import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye,
  Glasses,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  ScanEye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Low Vision Clinic in Lagos | FORST EYE CLINIC",
  description:
    "FORST EYE CLINIC provides comprehensive low vision assessment, rehabilitation and assistive devices to help patients maximize their remaining vision and maintain independence.",
  keywords: [
    "Low Vision Clinic Lagos",
    "Low Vision Rehabilitation",
    "Low Vision Assessment",
    "Low Vision Aids",
    "Magnifiers",
    "Low Vision Store",
    "Eye Clinic Lagos",
    "FORST EYE CLINIC",
  ],
  alternates: {
    canonical: "/low-vision-clinic",
  },
};

const services = [
  "Comprehensive Low Vision Assessment",
  "Functional Vision Evaluation",
  "Magnifiers & Optical Devices",
  "Electronic Low Vision Aids",
  "Reading & Mobility Training",
  "Vision Rehabilitation",
  "Patient Counselling",
  "Follow-up Care",
];

const benefits = [
  "Improve reading ability",
  "Maximize remaining vision",
  "Maintain independence",
  "Enhance daily activities",
  "Personalized rehabilitation plans",
  "Access to quality low vision devices",
];

export default function LowVisionClinicPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Low Vision Rehabilitation
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            Low Vision
            <span className="block text-primary">
              Clinic & Rehabilitation
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Losing vision doesn't mean losing your independence. At{" "}
            <strong>FORST EYE CLINIC</strong>, we provide comprehensive low
            vision assessment, rehabilitation services and assistive devices to
            help you make the most of your remaining vision.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <CalendarDays size={20} />
              Book Assessment
            </Link>

            <Link
              href="/low-vision-store"
              className="inline-flex items-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              <Glasses size={20} />
              Visit Low Vision Store
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">
              Our Low Vision Services
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              We provide personalized rehabilitation programs and recommend
              suitable devices to improve your quality of life.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary"
              >
                <ScanEye className="mx-auto text-primary" size={34} />

                <p className="mt-4 font-medium text-neutral-700">
                  {service}
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
              <h2 className="text-3xl font-bold text-neutral-900">
                How We Help
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Our experienced low vision specialists work with patients of
                all ages to improve visual performance using modern assessment
                techniques and customized rehabilitation strategies.
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
                <Eye className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                Need Low Vision Devices?
              </h3>

              <p className="mt-5 leading-8 text-neutral-600">
                We offer a range of quality low vision aids including handheld
                magnifiers, stand magnifiers, illuminated magnifiers, reading
                devices, telescopes and other assistive technologies to help
                maximize your remaining vision.
              </p>

              <Link
                href="/low-vision-store"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90"
              >
                <Glasses size={20} />
                Visit Low Vision Store
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20">
        <div className="container-site">
          <div className="mx-auto max-w-5xl rounded-3xl border border-primary/10 bg-white p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-neutral-900 lg:text-4xl">
              Live Better With Low Vision Rehabilitation
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Our goal is to help you remain independent, confident and
              productive through comprehensive low vision care and quality
              assistive devices.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-eye-appointment"
                className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Book Appointment
              </Link>

              <Link
                href="/low-vision-store"
                className="rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Browse Low Vision Store
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}