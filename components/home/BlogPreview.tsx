"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldAlert,
  ScanEye,
  CheckCircle2,
} from "lucide-react";

const conditions = [
  {
    title: "Glaucoma",
    tag: "Silent Thief of Sight",
    icon: ShieldAlert,
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782948981/Untitled_design_33_ugpsn6.png",
    href: "/conditions/glaucoma",
    description:
      "Glaucoma damages the optic nerve without noticeable symptoms in its early stages. Regular eye examinations are the best way to detect it before permanent vision loss occurs.",
    points: [
      "Comprehensive Eye Examination",
      "Eye Pressure Measurement",
      "Optic Nerve Assessment",
      "Visual Field Testing",
    ],
  },
  {
    title: "Cataract",
    tag: "Cloudy Vision",
    icon: ScanEye,
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png",
    href: "/conditions/cataract",
    description:
      "Cataracts gradually cloud the natural lens of the eye, causing blurred vision, glare and difficulty performing daily activities. Early evaluation helps determine the right treatment.",
    points: [
      "Cataract Evaluation",
      "Vision Assessment",
      "Surgical Referral",
      "Follow-up Care",
    ],
  },
];

export default function Conditions() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Common Eye Conditions
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-neutral-900 md:text-5xl">
            Protect Your Vision
            <span className="block text-neutral-700">
              Through Early Detection
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-600">
            Many eye diseases develop quietly before affecting your vision.
            Routine eye examinations help detect problems early, allowing
            timely treatment and better long-term visual outcomes.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {conditions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-[30px] border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="text-primary" size={28} />
                    </div>

                    <div>

                      <span className="text-sm font-semibold text-primary">
                        {item.tag}
                      </span>

                      <h3 className="text-2xl font-bold text-neutral-900">
                        {item.title}
                      </h3>

                    </div>

                  </div>

                  <p className="mt-6 leading-8 text-neutral-600">
                    {item.description}
                  </p>

                  <div className="mt-8 space-y-3">

                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-primary"
                        />

                        <span className="text-neutral-700">
                          {point}
                        </span>
                      </div>
                    ))}

                  </div>

                  <Link
                    href={item.href}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
                  >
                    Learn More

                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mx-auto mt-20 max-w-5xl rounded-[30px] bg-[#FCA400] p-8 text-center lg:p-12">

          <h3 className="text-3xl font-bold text-white">
            Don't Ignore Changes In Your Vision
          </h3>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/90">
            Blurred vision, eye pain, headaches, excessive tearing or poor
            night vision could be signs of an underlying eye condition.
            Schedule a comprehensive eye examination today for early diagnosis
            and expert care.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-[#FCA400] transition hover:scale-105"
            >
              Book Appointment
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#FCA400]"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}