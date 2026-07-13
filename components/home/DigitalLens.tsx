import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Monitor,
  Sparkles,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Digital Lenses in Lagos | Blue Light Glasses & Computer Glasses | FORST Eye Clinic",

  description:
    "Reduce digital eye strain with premium digital lenses at FORST Eye Clinic. We provide blue light protection, anti-reflective lenses, computer glasses and digital vision solutions across our Lagos branches.",

  keywords: [
    "Digital lenses Lagos",
    "Computer glasses Lagos",
    "Blue light glasses Nigeria",
    "Digital eye strain",
    "Computer Vision Syndrome",
    "Office lenses",
    "Digital prescription lenses",
    "Anti reflective lenses",
    "Blue light protection",
    "FORST Eye Clinic",
  ],

  alternates: {
    canonical: "/digital-lens",
  },
};

const features = [
  {
    title: "Blue Light Protection",
    description:
      "Helps reduce exposure to blue-violet light emitted from digital screens.",
  },
  {
    title: "Anti-Reflective Coating",
    description:
      "Minimizes glare and reflections for sharper, clearer vision.",
  },
  {
    title: "Digital Lens Design",
    description:
      "Optimized for prolonged computer, smartphone and tablet use.",
  },
  {
    title: "Premium Optical Clarity",
    description:
      "High-definition vision with improved comfort throughout the day.",
  },
  {
    title: "Scratch Resistant",
    description:
      "Durable coatings that help protect your lenses from daily wear.",
  },
  {
    title: "UV Protection",
    description:
      "Additional protection against harmful ultraviolet rays outdoors.",
  },
];

const symptoms = [
  "Eye strain",
  "Blurred vision",
  "Headaches",
  "Dry eyes",
  "Difficulty focusing",
  "Neck and shoulder pain",
  "Screen fatigue",
  "Burning eyes",
];

export default function DigitalLensPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary/5 to-white py-20 lg:py-28">

        <div className="absolute left-0 top-12 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-site relative z-10">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

                <Sparkles size={16} />

                Premium Digital Lens Technology

              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-neutral-900 lg:text-6xl">

                Digital Lenses

                <span className="block text-primary">
                  For Modern Living
                </span>

              </h1>

              <p className="mt-8 text-lg leading-8 text-neutral-600">

                Whether you spend hours working on computers, attending
                online meetings, studying, gaming or browsing on your
                smartphone, our premium digital lenses are designed to
                reduce eye strain, improve comfort and provide sharper,
                clearer vision every day.

              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  <CalendarDays size={20} />

                  Book Eye Examination

                </Link>

                <Link
                  href="/optical-store"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  Visit Optical Store

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="overflow-hidden rounded-[40px] shadow-xl">

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801570/Untitled_design_42_nct5lf.png"
                alt="Digital Lens Technology"
                width={900}
                height={900}
                priority
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="container-site py-20">

        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

            Better Vision For Every Screen

          </span>

          <h2 className="mt-6 text-4xl font-black text-neutral-900">

            What Are Digital Lenses?

          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">

            Digital lenses are specially engineered spectacle lenses
            designed for today's screen-intensive lifestyle. Unlike
            ordinary lenses, they provide enhanced visual comfort for
            people who frequently use computers, smartphones, tablets,
            televisions and other digital devices.

          </p>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="container-site pb-20">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-[30px] border border-neutral-200 bg-white p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                <Monitor
                  className="text-primary"
                  size={30}
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold">

                {feature.title}

              </h3>

              <p className="mt-4 leading-7 text-neutral-600">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= DIGITAL EYE STRAIN ================= */}

      <section className="bg-neutral-50 py-20">

        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <Image
              src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_38_i1ldt3.png"
              alt="Digital Eye Strain"
              width={900}
              height={900}
              className="rounded-[36px] object-cover"
            />

          </div>

          <div>

            <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

              Computer Vision Syndrome

            </span>

            <h2 className="mt-6 text-4xl font-black">

              Are Your Eyes Working
              Too Hard?

            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">

              Spending long hours in front of digital screens can cause
              Digital Eye Strain, also known as Computer Vision Syndrome.
              Our digital lenses help minimize visual fatigue while
              improving focus and comfort.

            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {symptoms.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    className="mt-1 text-primary"
                    size={20}
                  />

                  <span className="text-neutral-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>
            {/* ================= WHO NEEDS DIGITAL LENSES ================= */}

      <section className="container-site py-20">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Who Benefits Most?
          </span>

          <h2 className="mt-6 text-4xl font-black text-neutral-900">

            Digital Lenses Are Perfect For

          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">

            Almost everyone uses digital devices today. If your work,
            education or lifestyle depends on screens, digital lenses can
            significantly improve visual comfort throughout the day.

          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Office Professionals",
              desc: "Ideal for accountants, bankers, administrators and office workers who spend hours on computers.",
            },
            {
              title: "Students",
              desc: "Excellent for online classes, studying and prolonged reading on digital devices.",
            },
            {
              title: "Developers & Designers",
              desc: "Designed for programmers, graphic designers, architects and creative professionals.",
            },
            {
              title: "Gamers & Content Creators",
              desc: "Provides greater visual comfort during extended gaming and content creation sessions.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-[28px] border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                <Monitor
                  size={30}
                  className="text-primary"
                />

              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= WHY DIGITAL LENSES ================= */}

      <section className="bg-neutral-50 py-20">

        <div className="container-site">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              Why Upgrade?
            </span>

            <h2 className="mt-6 text-4xl font-black">

              Why Choose Digital Lenses Instead
              <span className="block text-primary">
                Of Ordinary Lenses?
              </span>

            </h2>

          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {[
              {
                title: "Reduced Digital Eye Strain",
                desc: "Designed to reduce fatigue associated with prolonged screen use.",
              },
              {
                title: "Sharper Vision",
                desc: "Provides crisp, high-definition vision across digital viewing distances.",
              },
              {
                title: "Blue Light Filtering",
                desc: "Helps reduce unnecessary exposure to blue-violet light from digital screens.",
              },
              {
                title: "Anti-Reflective Technology",
                desc: "Minimizes glare from monitors, phones and overhead lighting.",
              },
              {
                title: "Improved Productivity",
                desc: "Comfortable vision helps maintain concentration throughout the day.",
              },
              {
                title: "Premium Comfort",
                desc: "Less eye fatigue means greater comfort during long work sessions.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="flex gap-5 rounded-[28px] border border-neutral-200 bg-white p-8"
              >

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">

                  <Eye
                    size={28}
                    className="text-primary"
                  />

                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY FORST ================= */}

      <section className="container-site py-20">

        <div className="rounded-[40px] bg-primary px-8 py-16 lg:px-16">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white">
              Why FORST Eye Clinic?
            </span>

            <h2 className="mt-6 text-4xl font-black text-white lg:text-5xl">

              Premium Digital Vision Solutions

            </h2>

            <p className="mt-8 text-lg leading-8 text-white/90">

              At FORST Eye Clinic, we combine comprehensive eye examinations,
              accurate prescriptions and premium digital lens technology to
              provide exceptional visual comfort for today's screen-dependent
              lifestyle.

            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Experienced Optometrists",
              "Premium Digital Lens Brands",
              "Advanced Eye Examination",
              "Professional Frame Fitting",
            ].map((item) => (

              <div
                key={item}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur"
              >

                <CheckCircle2
                  className="mx-auto text-white"
                  size={30}
                />

                <p className="mt-5 font-semibold text-white">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="container-site py-20">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-4xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-14 space-y-6">

            {[
              {
                q: "Do digital lenses block blue light?",
                a: "Many premium digital lenses include blue light filtering technology that helps reduce exposure from digital devices.",
              },
              {
                q: "Can I wear digital lenses all day?",
                a: "Yes. They are designed for comfortable everyday use whether you're working, studying or browsing.",
              },
              {
                q: "Do I need a prescription?",
                a: "A comprehensive eye examination helps determine the correct prescription and whether digital lenses are suitable for you.",
              },
              {
                q: "Are digital lenses only for computer users?",
                a: "No. Anyone who spends significant time using smartphones, tablets, televisions or other digital screens can benefit.",
              },
            ].map((faq) => (

              <div
                key={faq.q}
                className="rounded-[28px] border border-neutral-200 bg-white p-8"
              >

                <h3 className="text-xl font-bold">
                  {faq.q}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {faq.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= RELATED SERVICES ================= */}

      <section className="container-site pb-20">

        <div className="rounded-[36px] border border-neutral-200 bg-neutral-50 p-10">

          <h2 className="text-center text-3xl font-black">
            Explore More Optical Services
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

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
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center font-semibold transition hover:border-primary hover:text-primary hover:shadow-lg"
              >
                {service.title}
              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-neutral-900">

        <div className="container-site py-20 text-center">

          <Monitor
            className="mx-auto text-primary"
            size={60}
          />

          <h2 className="mt-8 text-4xl font-black text-white lg:text-5xl">

            Upgrade Your Vision For The Digital World

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">

            Enjoy sharper vision, reduced eye strain and greater comfort with
            premium digital lenses from FORST Eye Clinic. Book a comprehensive
            eye examination today and let our optometrists recommend the best
            lens solution for your lifestyle.

          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <CalendarDays size={20} />
              Book Appointment
            </Link>

            <Link
              href="/optical-store"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-neutral-900"
            >
              Visit Optical Store
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}