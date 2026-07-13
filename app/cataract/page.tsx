import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  ScanEye,
  CheckCircle2,
  AlertTriangle,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cataract Treatment in Lagos | FORST EYE CLINIC",

  description:
    "FORST EYE CLINIC provides comprehensive cataract evaluation, diagnosis, monitoring, surgical referral and post-operative eye care across Lagos.",

  keywords: [
    "Cataract Lagos",
    "Cataract Treatment",
    "Cataract Surgery",
    "Eye Clinic Lagos",
    "Blurred Vision",
    "Eye Examination",
    "FORST Eye Clinic",
  ],
};

const symptoms = [
  "Blurred or cloudy vision",
  "Difficulty seeing at night",
  "Sensitivity to bright light",
  "Halos around lights",
  "Frequent changes in glasses",
  "Faded or yellow colours",
  "Double vision in one eye",
  "Poor contrast sensitivity",
];

const services = [
  "Comprehensive Eye Examination",
  "Visual Acuity Assessment",
  "Slit Lamp Examination",
  "Dilated Eye Examination",
  "Cataract Evaluation",
  "Surgical Referral",
  "Pre-operative Assessment",
  "Post-operative Follow-up",
];

export default function CataractPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="py-16 lg:py-24">
        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div className="text-center lg:text-left">

              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
                Cataract Care
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                Cataract
                <span className="block text-primary">
                  Diagnosis & Management
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Cataracts develop when the natural lens of the eye becomes
                cloudy, causing blurred vision and difficulty performing daily
                activities. Early diagnosis allows timely treatment and helps
                restore clear vision.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white hover:opacity-90"
                >
                  <CalendarDays size={20} />
                  Book Eye Examination
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-7 py-4 font-semibold text-primary hover:bg-primary hover:text-white"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            <div className="relative mx-auto h-[320px] w-full max-w-lg overflow-hidden rounded-[32px] border border-neutral-200 shadow-lg lg:h-[520px]">

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png"
                alt="Cataract Examination"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Symptoms */}

      <section className="bg-neutral-50 py-16 lg:py-24">

        <div className="container-site">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-3xl font-black text-neutral-900 lg:text-5xl">
              Common Cataract Symptoms
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Cataracts usually develop slowly. If you notice these symptoms,
              schedule a comprehensive eye examination.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {symptoms.map((item) => (

              <div
                key={item}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

                  <Eye
                    size={28}
                    className="text-primary"
                  />

                </div>

                <h3 className="mt-5 font-bold text-neutral-900">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Services */}

      <section className="py-16 lg:py-24">

        <div className="container-site">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <h2 className="text-3xl font-black text-neutral-900">
                Our Cataract Services
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Our experienced eye care professionals perform detailed
                examinations to determine the severity of cataracts and advise
                the most appropriate treatment plan.
              </p>

              <div className="mt-8 space-y-4">

                {services.map((service) => (

                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-primary"
                    />

                    <span>{service}</span>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-8">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                <ScanEye
                  size={30}
                  className="text-primary"
                />

              </div>

              <h3 className="mt-6 text-3xl font-bold text-neutral-900">
                Why Early Diagnosis Matters
              </h3>

              <p className="mt-6 leading-8 text-neutral-600">
                Cataracts do not always require immediate surgery. Regular eye
                examinations help monitor progression and determine the ideal
                time for treatment.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-white p-6">

                <div className="flex items-center gap-3">

                  <AlertTriangle
                    className="text-primary"
                    size={24}
                  />

                  <span className="font-semibold">
                    Don't Ignore Blurred Vision
                  </span>

                </div>

                <p className="mt-4 leading-7 text-neutral-600">
                  Persistent blurred vision may be caused by cataracts,
                  glaucoma, diabetic eye disease or other serious eye
                  conditions. Professional diagnosis is essential.
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
              Protect Your Vision
              <span className="block text-primary">
                With Regular Eye Examinations
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              Our comprehensive cataract assessment helps detect vision changes
              early, allowing timely treatment and improved quality of life.
              Book your appointment today at FORST EYE CLINIC.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white hover:opacity-90"
              >
                <CalendarDays size={20} />
                Book Appointment
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary hover:bg-primary hover:text-white"
              >
                View Our Services
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}