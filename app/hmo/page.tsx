"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const featuredHMOs = [
  {
    name: "Wellness HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943898/wellness_avtydn.jpg",
  },
  {
    name: "Total Health Trust",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/tht_wmv7ds.jpg",
  },
];

const otherHMOs = [
  {
    name: "Police HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/policehmo_hggv8l.png",
  },
  {
    name: "Reliance HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/reliance_c9dy2k.jpg",
  },
  {
    name: "Oceanic HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/oceanic_vgpmxj.jpg",
  },
  {
    name: "Novo HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/novo_ydshzk.jpg",
  },
  {
    name: "Hallmark HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/hallmark_qphklt.jpg",
  },
  {
    name: "Greenbay HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/greenbay_g5lcgp.jpg",
  },
  {
    name: "NEM HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/nem_qlcmhs.jpg",
  },
  {
    name: "Metro HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943796/metro_azi6hb.jpg",
  },
  {
    name: "Clearline HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943796/clearline_dd7xey.jpg",
  },
  {
    name: "Bastion HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943796/bastion_f1abke.png",
  },
  {
    name: "Leadway Health",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943796/leadway_enzp7s.png",
  },
  {
    name: "Hygeia HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943795/hygeia_sfuozd.png",
  },
  {
    name: "AXA Mansard",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943795/axa_vsbyob.png",
  },
  {
    name: "Avon HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943795/avon_nbtmaz.jpg",
  },
  {
    name: "Anchor HMO",
    logo: "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943795/anchor_ud9svr.jpg",
  },
];

export default function HMOPage() {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
            FORST Eye Clinic
          </span>

          <h1 className="mt-5 text-3xl font-black text-neutral-900 sm:text-5xl">
            HMO & Health Insurance
          </h1>

          <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base">
            FORST Eye Clinic partners with selected Health Maintenance
            Organizations (HMOs) to provide quality and affordable eye care.
            Eligible patients can access approved eye care services using
            their health insurance plans.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mt-10 overflow-hidden rounded-3xl">
          <Image
            src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782943898/wellness_avtydn.jpg"
            alt="HMO Eye Care at FORST Eye Clinic"
            width={1400}
            height={700}
            className="h-[220px] w-full object-cover sm:h-[300px]"
          />
        </div>

        {/* Featured HMOs */}
        <div className="mt-10">
          <h2 className="text-center text-2xl font-black text-neutral-900">
            Selected HMO Partners
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {featuredHMOs.map((hmo) => (
              <div
                key={hmo.name}
                className="flex h-28 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <Image
                  src={hmo.logo}
                  alt={hmo.name}
                  width={220}
                  height={90}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Other HMOs */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setShowOthers(!showOthers)}
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              {showOthers
                ? "Hide Other HMOs"
                : "View Other HMOs We Partner With"}

              <ChevronDown
                size={17}
                className={`transition-transform ${
                  showOthers ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {showOthers && (
            <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border bg-neutral-50 p-5 sm:grid-cols-3 md:grid-cols-4">
              {otherHMOs.map((hmo) => (
                <div
                  key={hmo.name}
                  className="flex h-28 items-center justify-center rounded-xl bg-white p-4 shadow-sm"
                >
                  <Image
                    src={hmo.logo}
                    alt={hmo.name}
                    width={220}
                    height={90}
                    className="h-16 w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <Building2 className="mb-4 text-primary" size={28} />

            <h2 className="text-xl font-bold text-neutral-900">
              HMO Services
            </h2>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">
              <li>• Comprehensive Eye Examination</li>
              <li>• Eye Consultation</li>
              <li>• Vision Assessment</li>
              <li>• Glaucoma Screening</li>
              <li>• Cataract Evaluation</li>
              <li>• Professional Referral Services</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6">
            <BadgeCheck className="mb-4 text-primary" size={28} />

            <h2 className="text-xl font-bold text-neutral-900">
              Before Your Visit
            </h2>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">
              <li>• Bring your HMO ID Card.</li>
              <li>• Present a valid referral if required.</li>
              <li>• Carry a means of identification.</li>
              <li>• Confirm your HMO eligibility before visiting.</li>
              <li>• Contact us if you have questions.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-primary px-6 py-10 text-center text-white sm:px-8">
          <h2 className="text-2xl font-black">
            Verify Your HMO Before Visiting
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/90">
            Our team will confirm whether your HMO plan is accepted and guide
            you through the appointment process.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:shadow-lg"
            >
              <CalendarDays size={18} />
              Book Appointment
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}