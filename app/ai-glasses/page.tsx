import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Glasses,
  Sparkles,
  ScanEye,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Glasses | Smart Eyewear & Digital Vision Solutions | FORST EYE CLINIC",

  description:
    "Discover AI-powered smart glasses and premium eyewear solutions at FORST EYE CLINIC. We provide professional eye examinations, personalized lens recommendations and modern optical care.",

  keywords: [
    "AI glasses Lagos",
    "smart glasses Nigeria",
    "premium eyewear",
    "digital lenses",
    "optical clinic Lagos",
    "prescription glasses",
    "FORST Eye Clinic",
  ],
};

const features = [
  "Premium Smart Eyewear",
  "Prescription Lens Fitting",
  "Blue Light Protection",
  "Digital Vision Support",
  "Comfortable Lightweight Frames",
  "Professional Frame Styling",
  "UV Protection",
  "Latest Optical Technology",
];

const benefits = [
  "Enhanced visual comfort",
  "Modern intelligent design",
  "Reduced digital eye strain",
  "Improved everyday productivity",
  "Fashionable premium frames",
  "Professional fitting by experts",
];

export default function AIGlassesPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="py-16 lg:py-24">
        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div className="text-center lg:text-left">

              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
                Smart Optical Solutions
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                AI Glasses &
                <span className="block text-primary">
                  Smart Eyewear
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Experience the future of vision with premium smart eyewear and
                advanced optical solutions. At FORST EYE CLINIC, we combine
                comprehensive eye examinations with personalized lens
                recommendations to help you enjoy clearer, more comfortable
                vision every day.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  <CalendarDays size={20} />
                  Book Consultation
                </Link>

                <Link
                  href="/optical"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-7 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  Visit Optical Store
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            <div className="relative mx-auto h-[320px] w-full max-w-lg overflow-hidden rounded-[32px] border border-neutral-200 shadow-lg lg:h-[520px]">

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png"
                alt="AI Glasses"
                fill
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
              Designed For Modern Living
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Our optical department offers premium eyewear, smart lens
              technology and personalized recommendations for work, school,
              driving and everyday life.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (

              <div
                key={feature}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Sparkles className="text-primary" size={28} />
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
                Why Choose Smart Eyewear?
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Today's eyewear goes beyond vision correction. Smart optical
                technology helps improve comfort, productivity and protection
                against the demands of modern digital lifestyles.
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
                <Glasses
                  className="text-primary"
                  size={30}
                />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-neutral-900">
                Professional Optical Care
              </h3>

              <p className="mt-6 leading-8 text-neutral-600">
                Every pair of glasses begins with a comprehensive eye
                examination. Our experienced eye care professionals recommend
                the most suitable frames and lenses based on your lifestyle,
                prescription and visual needs.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-white p-6">

                <div className="flex items-center gap-3">

                  <ScanEye
                    className="text-primary"
                    size={24}
                  />

                  <span className="font-semibold">
                    Comprehensive Vision Assessment
                  </span>

                </div>

                <p className="mt-4 leading-7 text-neutral-600">
                  Accurate prescriptions ensure your lenses deliver excellent
                  clarity, comfort and long-term eye health.
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
              Upgrade Your
              <span className="block text-primary">
                Vision Experience
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              Visit FORST EYE CLINIC today for professional eye examinations,
              premium eyewear, intelligent lens solutions and personalized
              optical care tailored to your lifestyle.
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

        </div>

      </section>

    </main>
  );
}