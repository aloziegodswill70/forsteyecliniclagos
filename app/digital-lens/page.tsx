import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Glasses,
  Monitor,
  CheckCircle2,
  ShieldCheck,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Lenses in Lagos | FORST EYE CLINIC",

  description:
    "Protect your eyes from digital eye strain with premium digital lenses at FORST EYE CLINIC. We provide professional lens recommendations, blue light protection, anti-reflective coatings and customized prescription lenses.",

  keywords: [
    "Digital Lenses Lagos",
    "Blue Light Glasses",
    "Computer Glasses",
    "Anti Reflective Lenses",
    "Prescription Glasses Lagos",
    "Optical Services",
    "FORST Eye Clinic",
  ],
};

const features = [
  "Blue Light Protection",
  "Anti-Reflective Coating",
  "Reduced Digital Eye Strain",
  "Sharper Vision",
  "Lightweight Premium Lenses",
  "Scratch Resistant Coating",
  "UV Protection",
  "Customized Prescription",
];

const benefits = [
  "Reduced Eye Fatigue",
  "Less Screen Glare",
  "Improved Visual Comfort",
  "Better Productivity",
  "Enhanced Contrast",
  "Comfort During Long Screen Hours",
];

export default function DigitalLensesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
                Premium Optical Services
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                Digital
                <span className="block text-primary">
                  Protection Lenses
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Whether you spend hours on computers, phones or tablets,
                digital lenses help reduce eye strain, minimize glare and
                improve visual comfort. Our experienced optometrists recommend
                the most suitable lenses based on your lifestyle and visual
                needs.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  <CalendarDays size={20} />
                  Book Eye Examination
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
                alt="Digital Lenses"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black text-neutral-900 lg:text-5xl">
              Features of Our Digital Lenses
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Our premium digital lenses are designed to provide maximum
              comfort, protection and clearer vision for everyday digital life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Glasses
                    size={28}
                    className="text-primary"
                  />
                </div>

                <h3 className="mt-5 font-bold text-neutral-900">
                  {feature}
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
                Why Choose Digital Lenses?
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Extended screen time can cause tired eyes, headaches, blurred
                vision and neck discomfort. Digital lenses are specifically
                designed to reduce these symptoms and improve visual comfort.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-primary"
                    />

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldCheck
                  size={30}
                  className="text-primary"
                />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-neutral-900">
                Personalized Optical Solutions
              </h3>

              <p className="mt-6 leading-8 text-neutral-600">
                Every prescription is unique. Our eye care professionals
                carefully assess your vision and recommend the most suitable
                digital lenses based on your work, lifestyle and daily visual
                demands.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <Monitor
                    size={24}
                    className="text-primary"
                  />

                  <span className="font-semibold">
                    Perfect for Daily Screen Users
                  </span>
                </div>

                <p className="mt-4 leading-7 text-neutral-600">
                  Ideal for office workers, students, programmers, designers,
                  gamers and anyone who spends several hours using digital
                  devices every day.
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
              Experience Clearer,
              <span className="block text-primary">
                More Comfortable Vision
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              Upgrade your vision with premium digital lenses from FORST EYE
              CLINIC. Book a comprehensive eye examination today and receive
              professional recommendations tailored to your visual needs.
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