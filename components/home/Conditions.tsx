"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  ShieldAlert,
  ScanEye,
  Droplets,
  Baby,
  Activity,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const conditions = [
  {
    title: "Glaucoma",
    description: "Early detection helps prevent irreversible vision loss.",
    href: "/conditions/glaucoma",
    icon: ShieldAlert,
  },
  {
    title: "Cataract",
    description: "Cloudy vision caused by lens opacity and ageing.",
    href: "/conditions/cataract",
    icon: ScanEye,
  },
  {
    title: "Diabetic Eye Disease",
    description: "Routine retinal examinations help protect your sight.",
    href: "/conditions/diabetic-retinopathy",
    icon: Activity,
  },
  {
    title: "Dry Eye",
    description: "Relief for burning, watery and irritated eyes.",
    href: "/conditions/dry-eye-syndrome",
    icon: Droplets,
  },
  {
    title: "Children's Eye Care",
    description: "Early vision checks support healthy visual development.",
    href: "/conditions/pediatric-eye-problems",
    icon: Baby,
  },
  {
    title: "Blurred Vision",
    description: "May indicate refractive errors or serious eye disease.",
    href: "/conditions/blurry-vision",
    icon: Eye,
  },
];

export default function Conditions() {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Common Eye Conditions
          </span>

          <h2 className="mt-6 text-4xl font-black text-neutral-900">
            Early Detection Saves Vision
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            We manage common eye conditions including glaucoma, cataract,
            diabetic eye disease, dry eye and other vision-related conditions.
          </p>

        </div>

        {/* Featured Images */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Glaucoma */}

          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

            <div className="relative h-72">

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948981/Untitled_design_33_ugpsn6.png"
                alt="Glaucoma"
                fill
                className="object-cover"
              />

            </div>

            <div className="p-8">

              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Glaucoma
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                Detect Glaucoma Early
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Glaucoma develops silently. Regular eye examinations help
                detect it early and protect your vision.
              </p>

            </div>

          </div>

          {/* Cataract */}

          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

            <div className="relative h-72">

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png"
                alt="Cataract"
                fill
                className="object-cover"
              />

            </div>

            <div className="p-8">

              <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                Cataract
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                Restore Clear Vision
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Cataracts cause cloudy vision that gradually worsens.
                Early assessment ensures timely treatment.
              </p>

            </div>

          </div>

        </div>

        {/* Conditions We Manage */}

        <div className="mt-20">

          <div className="mb-10 text-center">

            <h3 className="text-3xl font-bold">
              Conditions We Manage
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
              We provide assessment and management for a wide range of
              common eye conditions.
            </p>

          </div>

          {/* Main Conditions */}

          <div className="grid gap-6 sm:grid-cols-2">

            {conditions.slice(0, 2).map((condition) => {
              const Icon = condition.icon;

              return (
                <Link
                  key={condition.title}
                  href={condition.href}
                  className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={28} />
                  </div>

                  <h4 className="mt-6 text-xl font-bold">
                    {condition.title}
                  </h4>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {condition.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
                    Learn More
                    <ArrowRight size={18} />
                  </div>

                </Link>
              );
            })}

          </div>

          {/* View Other Conditions */}

          <div className="mt-8 text-center">

            <button
              type="button"
              onClick={() => setShowOthers(!showOthers)}
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              {showOthers
                ? "Hide Other Conditions"
                : "View Other Conditions"}

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  showOthers ? "rotate-180" : ""
                }`}
              />
            </button>

          </div>

          {/* Other Conditions */}

          {showOthers && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {conditions.slice(2).map((condition) => {
                const Icon = condition.icon;

                return (
                  <Link
                    key={condition.title}
                    href={condition.href}
                    className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>

                    <h4 className="mt-5 text-lg font-bold">
                      {condition.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-neutral-600">
                      {condition.description}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn More
                      <ArrowRight size={16} />
                    </div>

                  </Link>
                );
              })}

            </div>
          )}

        </div>

        {/* CTA */}

        
        <div
  className="mt-20 rounded-[32px] bg-[#FCA400] px-8 py-14 text-center text-white"
  style={{
    boxShadow: "0 14px 34px rgba(252,164,0,.35)",
  }}
>
  <h3 className="text-4xl font-black">
    Protect Your Vision Today
  </h3>

  <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/90">
    Blurred vision, eye pain, headaches or redness should never
    be ignored. Schedule a comprehensive eye examination with
    our experienced eye care professionals.
  </p>

  <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

    <Link
      href="/book-eye-appointment"
      className="rounded-xl bg-white px-8 py-4 font-semibold text-[#FCA400] transition hover:scale-105"
    >
      Book Appointment
    </Link>

    <Link
      href="/contact"
      className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-white hover:text-[#FCA400]"
    >
      Contact Us
    </Link>

  </div>
</div>

      </div>
    </section>
  );
}