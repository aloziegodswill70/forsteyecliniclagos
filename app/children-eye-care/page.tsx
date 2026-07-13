import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  Eye,
  Glasses,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Children's Eye Care | Pediatric Eye Clinic in Lagos | FORST EYE CLINIC",

  description:
    "FORST EYE CLINIC provides comprehensive children's eye examinations, lazy eye treatment, squint assessment, refractive error correction, myopia control and pediatric eye care across Lagos.",

  keywords: [
    "children eye clinic Lagos",
    "pediatric eye care Lagos",
    "children eye examination",
    "child eye doctor Lagos",
    "lazy eye treatment",
    "squint treatment",
    "myopia control Nigeria",
    "eye clinic for children",
    "vision screening",
    "FORST Eye Clinic",
  ],
};

const services = [
  "Comprehensive Children's Eye Examination",
  "School Vision Screening",
  "Lazy Eye (Amblyopia) Management",
  "Squint (Strabismus) Assessment",
  "Myopia Control",
  "Prescription Glasses for Children",
  "Color Vision Testing",
  "Eye Health Assessment",
];

const symptoms = [
  "Frequent eye rubbing",
  "Poor school performance",
  "Sitting too close to television",
  "Headaches while reading",
  "Holding books very close",
  "Crossed eyes",
  "Watery eyes",
  "Poor concentration",
];

export default function ChildrenEyeCarePage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="py-16 lg:py-24">
        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div className="text-center lg:text-left">

              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
                Pediatric Eye Care
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                Children's Eye Care That Protects
                <span className="block text-primary">
                  Growing Vision
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Good vision is essential for your child's learning,
                development and confidence. At FORST EYE CLINIC, we
                provide comprehensive pediatric eye examinations using
                modern diagnostic technology in a friendly and caring
                environment.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

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

            <div className="relative mx-auto h-[320px] w-full max-w-lg overflow-hidden rounded-3xl lg:h-[520px]">

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948981/Untitled_design_33_ugpsn6.png"
                alt="Children Eye Care"
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
              Our Children's Eye Care Services
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Every child deserves healthy vision. Our experienced eye
              care professionals perform detailed examinations to detect
              vision problems early and recommend appropriate treatment.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Baby className="text-primary" size={28} />
                </div>

                <h3 className="mt-5 font-bold text-neutral-900">
                  {service}
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
                Signs Your Child Needs An Eye Examination
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Children may not realize they have vision problems.
                Regular eye examinations help detect conditions early
                before they affect learning and development.
              </p>

              <div className="mt-8 grid gap-4">

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
                <Eye className="text-primary" size={30} />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-neutral-900">
                Why Early Detection Matters
              </h3>

              <p className="mt-6 leading-8 text-neutral-600">
                Detecting vision problems early can improve your child's
                academic performance, confidence and quality of life.
                Conditions like lazy eye and squint are often easier to
                treat when identified at an early age.
              </p>

              <div className="mt-8 rounded-2xl bg-white p-6">

                <div className="flex items-center gap-3">
                  <Glasses
                    className="text-primary"
                    size={24}
                  />

                  <span className="font-semibold">
                    Professional Prescription Glasses
                  </span>
                </div>

                <p className="mt-4 leading-7 text-neutral-600">
                  Our optical department offers high-quality children's
                  frames and prescription lenses designed for comfort,
                  durability and clear vision.
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
              Give Your Child The Gift Of
              <span className="block text-primary">
                Clear Vision
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              Schedule a comprehensive children's eye examination at
              FORST EYE CLINIC today. Early diagnosis and treatment help
              protect your child's vision for life.
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