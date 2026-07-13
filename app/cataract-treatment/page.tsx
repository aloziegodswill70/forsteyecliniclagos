import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  ScanEye,
  ShieldCheck,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cataract Treatment in Lagos | FORST EYE CLINIC",

  description:
    "FORST EYE CLINIC provides comprehensive cataract diagnosis, monitoring, surgical referral, pre-operative assessment and post-operative eye care across Lagos.",

  keywords: [
    "Cataract Treatment Lagos",
    "Cataract Surgery Lagos",
    "Cataract Specialist",
    "Eye Clinic Lagos",
    "Blurred Vision",
    "Eye Examination",
    "FORST Eye Clinic",
  ],
};

const treatments = [
  "Comprehensive Cataract Evaluation",
  "Visual Acuity Assessment",
  "Slit Lamp Examination",
  "Dilated Eye Examination",
  "Biometry & Surgical Assessment",
  "Cataract Surgery Referral",
  "Post-operative Eye Care",
  "Routine Cataract Monitoring",
];

const benefits = [
  "Clearer Vision",
  "Improved Night Driving",
  "Better Colour Perception",
  "Reduced Glare",
  "Improved Quality of Life",
  "Enhanced Daily Activities",
];

export default function CataractTreatmentPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
                Cataract Treatment
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                Restore Clear Vision With
                <span className="block text-primary">
                  Professional Cataract Care
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Cataracts are one of the leading causes of vision impairment,
                especially as we age. At <strong>FORST EYE CLINIC</strong>, we
                provide comprehensive cataract assessment, surgical referral,
                monitoring and follow-up care to help preserve and restore your
                vision.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  <CalendarDays size={20} />
                  Book Appointment
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-7 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto h-[340px] w-full max-w-lg overflow-hidden rounded-[32px] border border-neutral-200 shadow-lg lg:h-[520px]">
              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png"
                alt="Cataract Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black text-neutral-900 lg:text-5xl">
              Our Cataract Care Services
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Every patient receives a personalized treatment plan based on the
              severity of the cataract and overall eye health.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {treatments.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <ScanEye className="text-primary" size={28} />
                </div>

                <h3 className="mt-5 font-bold text-neutral-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-neutral-900">
                Benefits of Early Cataract Treatment
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Timely diagnosis and appropriate management can significantly
                improve vision and daily quality of life.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4"
                  >
                    <CheckCircle2
                      className="text-primary"
                      size={20}
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldCheck
                  className="text-primary"
                  size={30}
                />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-neutral-900">
                Complete Cataract Management
              </h3>

              <p className="mt-6 leading-8 text-neutral-600">
                Our experienced eye care professionals carefully evaluate your
                vision, monitor cataract progression and coordinate referral for
                surgery when necessary. We also provide post-operative
                examinations to ensure excellent recovery.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <Eye
                    className="text-primary"
                    size={24}
                  />

                  <span className="font-semibold">
                    Comprehensive Eye Examination
                  </span>
                </div>

                <p className="mt-4 leading-7 text-neutral-600">
                  Every cataract consultation includes a detailed assessment of
                  your vision and overall eye health to determine the most
                  appropriate treatment option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 lg:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black text-neutral-900 lg:text-5xl">
              See The World
              <span className="block text-primary">
                More Clearly Again
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              If you're experiencing cloudy or blurred vision, don't wait.
              Schedule a comprehensive cataract evaluation with FORST EYE
              CLINIC and receive expert care tailored to your needs.
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
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}