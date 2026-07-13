import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Glasses,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Prescription Glasses in Lagos | Optical Store | FORST EYE CLINIC",

  description:
    "Looking for prescription glasses in Lagos? FORST EYE CLINIC provides comprehensive eye examinations, premium prescription lenses, designer frames, blue light lenses, progressive lenses, transition lenses and children's glasses.",

  keywords: [
    "Prescription Glasses Lagos",
    "Eyeglasses Lagos",
    "Optical Store Lagos",
    "Prescription Lenses",
    "Designer Frames",
    "Reading Glasses",
    "Progressive Lenses",
    "Blue Light Glasses",
    "Forst Eye Clinic",
  ],

  alternates: {
    canonical: "/prescription-glasses",
  },
};

const products = [
  "Single Vision Glasses",
  "Progressive Lenses",
  "Photochromic Lenses",
  "Blue Light Glasses",
  "Anti-Reflective Lenses",
  "Children's Glasses",
  "Computer Glasses",
  "Premium Designer Frames",
];

const reasons = [
  "Accurate Prescription",
  "Premium Lens Quality",
  "Stylish Designer Frames",
  "Professional Frame Fitting",
  "Lens Customization",
  "After-Sales Support",
];

export default function PrescriptionGlassesPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="py-20 lg:py-28">

        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Optical Services
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                Prescription
                <span className="block text-primary">
                  Glasses in Lagos
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Experience clearer vision with professionally prescribed
                eyeglasses from FORST EYE CLINIC. Our experienced
                optometrists combine comprehensive eye examinations with
                premium lenses and stylish frames to deliver exceptional
                visual comfort.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  <CalendarDays className="mr-2" size={18} />
                  Book Eye Examination
                </Link>

                <Link
                  href="/optical-store"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary px-8 py-4 font-semibold text-primary hover:bg-primary hover:text-white"
                >
                  Visit Optical Store
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            <div>

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948981/Untitled_design_33_ugpsn6.png"
                alt="Prescription Glasses at FORST EYE CLINIC"
                width={700}
                height={700}
                priority
                className="rounded-[32px] object-cover shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Products */}

      <section className="bg-neutral-50 py-20">

        <div className="container-site">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-4xl font-black">
              Our Prescription Glasses
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              We provide premium prescription lenses designed to suit
              your lifestyle, occupation and visual needs.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {products.map((item) => (

              <div
                key={item}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center transition hover:-translate-y-2 hover:border-primary hover:shadow-lg"
              >

                <Glasses
                  className="mx-auto text-primary"
                  size={34}
                />

                <h3 className="mt-5 font-bold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="py-20">

        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png"
                alt="Designer Prescription Glasses"
                width={650}
                height={650}
                className="rounded-[30px] shadow-lg object-cover"
              />

            </div>

            <div>

              <h2 className="text-4xl font-black">
                Why Patients Choose Our Optical Store
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Every pair of glasses is customized to provide sharp,
                comfortable vision while complementing your personal
                style.
              </p>

              <div className="mt-10 space-y-4">

                {reasons.map((reason) => (

                  <div
                    key={reason}
                    className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4"
                  >

                    <CheckCircle2
                      className="text-primary"
                      size={22}
                    />

                    <span>{reason}</span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="container-site">

          <div className="rounded-[36px] bg-primary px-8 py-16 text-center text-white">

            <Sparkles
              className="mx-auto"
              size={48}
            />

            <h2 className="mt-6 text-4xl font-black">
              See Better. Look Better.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Whether you need prescription glasses for reading,
              driving, computer work or everyday use, our optical
              team is ready to help you find the perfect solution.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/book-eye-appointment"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-primary"
              >
                Book Appointment
              </Link>

              <Link
                href="/optical-store"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-primary"
              >
                <ShieldCheck size={18} />
                Browse Optical Store
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}