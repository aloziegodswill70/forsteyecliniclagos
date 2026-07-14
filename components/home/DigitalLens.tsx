import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Monitor,
  CheckCircle2,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Lenses | FORST Eye Clinic",
  description:
    "Premium digital lenses for comfortable screen use and clearer vision.",
};

const features = [
  "Blue Light Protection",
  "Anti-Reflective Coating",
  "Sharper Digital Vision",
  "UV & Scratch Protection",
];

export default function DigitalLensPage() {
  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-b from-white via-primary/5 to-white py-12 md:py-16">
        <div className="container-site">

          <div className="mx-auto max-w-5xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
              <Sparkles size={14} />
              Premium Digital Lenses
            </span>

            <h1 className="mt-5 text-3xl font-black leading-tight text-neutral-900 md:text-5xl">
              Comfortable Vision
              <span className="block text-primary">
                For Every Screen
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
              Reduce digital eye strain with premium blue-light and
              anti-reflective lenses designed for computers, phones,
              tablets and everyday screen use.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                <CalendarDays size={16} />
                Book Appointment
              </Link>

              <Link
                href="/optical-store"
                className="inline-flex items-center gap-2 rounded-xl border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
              >
                Optical Store
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801570/Untitled_design_42_nct5lf.png"
              alt="Digital Lens"
              width={900}
              height={600}
              priority
              className="w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="container-site py-12 md:py-16">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-2xl font-black text-neutral-900 md:text-4xl">
            Why Choose Digital Lenses?
          </h2>

          <p className="mt-3 text-sm leading-7 text-neutral-600 md:text-base">
            Built for today's digital lifestyle with clearer vision and
            greater comfort.
          </p>

        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">

          {features.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-200 p-5 text-center transition hover:border-primary hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Monitor className="text-primary" size={22} />
              </div>

              <h3 className="mt-4 text-base font-bold text-neutral-900">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* DIGITAL EYE STRAIN */}

      <section className="bg-neutral-50 py-12 md:py-16">

        <div className="container-site grid items-center gap-10 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl">
            <Image
              src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_38_i1ldt3.png"
              alt="Digital Eye Strain"
              width={800}
              height={700}
              className="w-full object-cover"
            />
          </div>

          <div className="text-center lg:text-left">

            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
              Digital Eye Strain
            </span>

            <h2 className="mt-4 text-2xl font-black text-neutral-900 md:text-4xl">
              Protect Your Eyes Every Day
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
              Long hours on digital devices can cause tired eyes,
              headaches and blurred vision. Digital lenses help reduce
              discomfort and improve focus.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">

              {[
                "Eye Strain",
                "Blurred Vision",
                "Dry Eyes",
                "Headaches",
                "Screen Fatigue",
                "Poor Focus",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    size={16}
                    className="text-primary"
                  />
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
            {/* WHO NEEDS DIGITAL LENSES */}

      <section className="container-site py-12 md:py-16">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
            Who Benefits?
          </span>

          <h2 className="mt-4 text-2xl font-black text-neutral-900 md:text-4xl">
            Perfect For Everyday Screen Users
          </h2>

          <p className="mt-3 text-sm leading-7 text-neutral-600 md:text-base">
            Digital lenses are ideal for anyone who spends long hours using digital devices.
          </p>

        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "Office Workers",
            "Students",
            "Developers",
            "Gamers",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-200 p-5 text-center transition hover:border-primary hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Monitor size={22} className="text-primary" />
              </div>

              <h3 className="mt-4 text-base font-semibold text-neutral-900">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-neutral-50 py-12 md:py-16">

        <div className="container-site">

          <h2 className="text-center text-2xl font-black text-neutral-900 md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-4">

            {[
              {
                q: "Do digital lenses block blue light?",
                a: "Yes. Premium digital lenses help reduce blue-light exposure from digital devices.",
              },
              {
                q: "Can I wear them every day?",
                a: "Absolutely. They are designed for comfortable everyday use.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <h3 className="text-base font-bold text-neutral-900">
                  {faq.q}
                </h3>

                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  {faq.a}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* RELATED SERVICES */}

      <section className="container-site py-12">

        <h2 className="text-center text-2xl font-black text-neutral-900 md:text-4xl">
          Related Services
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Optical Store",
              href: "/optical-store",
            },
            {
              title: "Prescription Glasses",
              href: "/prescription-glasses",
            },
            {
              title: "Contact Lenses",
              href: "/contact-lenses",
            },
            {
              title: "AI Smart Glasses",
              href: "/ai-glasses",
            },
          ].map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-2xl border border-neutral-200 p-5 text-center text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              {service.title}
            </Link>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-primary py-14">

        <div className="container-site text-center">

          <h2 className="text-2xl font-black text-white md:text-4xl">
            Upgrade Your Digital Vision
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
            Book a comprehensive eye examination and discover the right
            digital lenses for your everyday lifestyle.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary hover:opacity-90"
            >
              <CalendarDays size={16} />
              Book Appointment
            </Link>

            <Link
              href="/optical-store"
              className="inline-flex items-center gap-2 rounded-xl border border-white px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-primary"
            >
              Visit Store
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}