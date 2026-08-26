"use client";

import Link from "next/link";
import { ArrowRight, Eye, Shield } from "lucide-react";

const services = [
  {
    title: "Comprehensive Eye Examination",
    href: "/eye-examination",
    icon: Eye,
  },
  {
    title: "Glaucoma Clinic",
    href: "/glaucoma-treatment",
    icon: Shield,
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      className="
        group
        flex
        w-full
        items-center
        gap-4
        rounded-2xl
        border
        border-neutral-200
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#FF5A34]/40
        hover:shadow-xl
      "
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
        style={{
          background:
            "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
        }}
      >
        <Icon size={22} />
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-bold text-neutral-900 sm:text-base">
          {service.title}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-[#C9A227] transition group-hover:text-primary">
          Explore
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="overflow-hidden bg-gradient-to-b from-white via-[#FFFDFB] to-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
            Our Services
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            Professional Eye Care
            <span className="block text-primary">
              You Can Trust
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            We provide professional eye care services with modern
            technology and compassionate patient-focused care.
          </p>

        </div>

        {/* Two Services */}

        <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>

        {/* Services Page Link */}

        <div className="mt-10 flex justify-center">

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#FCA400] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View Our Services
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>
    </section>
  );
}