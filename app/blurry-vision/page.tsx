import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Blurry Vision Treatment in Lagos | FORST EYE CLINIC",

  description:
    "Experiencing blurry vision? FORST EYE CLINIC provides comprehensive eye examinations to diagnose and treat blurry vision caused by refractive errors, cataracts, glaucoma, diabetes and other eye conditions.",

  keywords: [
    "blurry vision Lagos",
    "blurred vision treatment",
    "eye examination Lagos",
    "eye doctor Lagos",
    "glaucoma screening",
    "cataract diagnosis",
    "diabetic eye examination",
    "FORST Eye Clinic",
  ],
};

const causes = [
  "Refractive Errors (Short or Long Sightedness)",
  "Cataracts",
  "Glaucoma",
  "Diabetic Eye Disease",
  "Dry Eye Syndrome",
  "Eye Infections",
  "Macular Diseases",
  "Computer Vision Syndrome",
];

const symptoms = [
  "Difficulty seeing distant objects",
  "Difficulty reading small print",
  "Double vision",
  "Eye strain",
  "Frequent headaches",
  "Poor night vision",
  "Light sensitivity",
  "Sudden vision changes",
];

export default function BlurryVisionPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="py-16 lg:py-24">
        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div className="text-center lg:text-left">

              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
                Eye Health
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                Blurry Vision
                <span className="block text-primary">
                  Should Never Be Ignored
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Blurry vision may be temporary or a sign of an underlying eye
                disease. At <strong>FORST EYE CLINIC</strong>, we perform
                comprehensive eye examinations to determine the cause of your
                blurred vision and recommend the most appropriate treatment.
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
                alt="Blurry Vision Examination"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Causes */}

      <section className="bg-neutral-50 py-16 lg:py-24">

        <div className="container-site">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-3xl font-black text-neutral-900 lg:text-5xl">
              Common Causes of Blurry Vision
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Blurry vision has many possible causes. A comprehensive eye
              examination helps identify the exact reason and allows early
              treatment before permanent vision loss occurs.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {causes.map((cause) => (

              <div
                key={cause}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

                  <Eye
                    className="text-primary"
                    size={28}
                  />

                </div>

                <h3 className="mt-5 font-bold text-neutral-900">
                  {cause}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Symptoms */}

      <section className="py-16 lg:py-24">

        <div className="container-site">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <h2 className="text-3xl font-black text-neutral-900">
                Symptoms That Require An Eye Examination
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                If you experience any of these symptoms, schedule an eye
                examination as soon as possible.
              </p>

              <div className="mt-8 space-y-4">

                {symptoms.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-primary"
                    />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-8">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                <AlertTriangle
                  className="text-primary"
                  size={30}
                />

              </div>

              <h3 className="mt-6 text-3xl font-bold text-neutral-900">
                Early Diagnosis Saves Vision
              </h3>

              <p className="mt-6 leading-8 text-neutral-600">
                Sudden blurry vision can sometimes indicate a serious eye
                condition requiring urgent medical attention. Early diagnosis
                greatly improves treatment outcomes and helps preserve vision.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-white p-6">

                <div className="flex items-center gap-3">

                  <Activity
                    className="text-primary"
                    size={24}
                  />

                  <span className="font-semibold">
                    Comprehensive Eye Assessment
                  </span>

                </div>

                <p className="mt-4 leading-7 text-neutral-600">
                  Our examinations include visual acuity testing, refraction,
                  eye pressure measurement, slit lamp examination, retinal
                  evaluation and other advanced diagnostic procedures when
                  necessary.
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
              Restore Clear,
              <span className="block text-primary">
                Comfortable Vision
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              Don't ignore blurry vision. Visit FORST EYE CLINIC for a
              comprehensive eye examination and receive personalized treatment
              from our experienced eye care professionals.
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