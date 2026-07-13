import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Glasses,
  CheckCircle2,
  CalendarDays,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Photochromic Lenses in Lagos | Transition Lenses | FORST EYE CLINIC",

  description:
    "Enjoy clear vision indoors and sun protection outdoors with premium photochromic lenses from FORST EYE CLINIC. Our transition lenses automatically adapt to changing light conditions for maximum comfort.",

  keywords: [
    "Photochromic Lenses Lagos",
    "Transition Lenses Nigeria",
    "Light Adaptive Glasses",
    "Prescription Sunglasses",
    "UV Protection Glasses",
    "Optical Store Lagos",
    "Forst Eye Clinic",
  ],

  alternates: {
    canonical: "/photochromic-lenses",
  },
};

const benefits = [
  "Automatically Darken in Sunlight",
  "100% UV Protection",
  "Comfortable Indoor & Outdoor Vision",
  "Reduced Eye Strain",
  "Convenient Everyday Use",
  "Available with Prescription Lenses",
];

const features = [
  "Fast Light Adaptation",
  "Modern Lens Technology",
  "Scratch Resistant Options",
  "Anti-Reflective Coating",
  "Suitable for Driving",
  "Premium Optical Quality",
];

export default function PhotochromicLensesPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="py-20 lg:py-28">
        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Smart Lens Technology
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                Photochromic
                <span className="block text-primary">
                  Transition Lenses
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Experience lenses that intelligently adjust to changing
                light conditions. Photochromic lenses stay clear indoors
                and automatically darken outdoors, giving you comfortable
                vision throughout the day.
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
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png"
                alt="Photochromic Transition Lenses"
                width={700}
                height={700}
                priority
                className="rounded-[32px] object-cover shadow-xl"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Benefits */}

      <section className="bg-neutral-50 py-20">

        <div className="container-site">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-4xl font-black">
              Why Choose Photochromic Lenses?
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Transition lenses provide the convenience of everyday
              glasses and sunglasses in one intelligent solution.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item) => (

              <div
                key={item}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center transition hover:-translate-y-2 hover:border-primary hover:shadow-lg"
              >

                <Sun className="mx-auto text-primary" size={36} />

                <h3 className="mt-5 font-bold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-20">

        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948981/Untitled_design_33_ugpsn6.png"
                alt="Transition Lens Technology"
                width={650}
                height={650}
                className="rounded-[30px] object-cover shadow-lg"
              />

            </div>

            <div>

              <h2 className="text-4xl font-black">
                Premium Lens Features
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Every photochromic lens is designed to provide excellent
                optical clarity, UV protection and long-lasting comfort.
              </p>

              <div className="mt-10 space-y-4">

                {features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4"
                  >

                    <CheckCircle2
                      className="text-primary"
                      size={22}
                    />

                    <span>{feature}</span>

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
              One Pair of Glasses for Every Environment
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Discover the convenience of photochromic lenses at
              FORST EYE CLINIC. Our optical team will help you choose
              the ideal transition lenses for your prescription and
              daily lifestyle.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/optical-store"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-primary"
              >
                <Glasses className="mr-2 inline" size={18} />
                Browse Optical Store
              </Link>

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-primary"
              >
                <ShieldCheck size={18} />
                Book Appointment
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}