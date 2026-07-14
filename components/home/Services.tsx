"use client";

import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Eye,
  Glasses,
  HeartPulse,
  Monitor,
  ScanEye,
  Shield,
  Stethoscope,
} from "lucide-react";

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
  {
    title: "Cataract Care",
    href: "/cataract-treatment",
    icon: ScanEye,
  },
  {
    title: "Dry Eye Clinic",
    href: "/dry-eye-treatment",
    icon: HeartPulse,
  },
  {
    title: "Low Vision Rehabilitation",
    href: "/low-vision-clinic",
    icon: Stethoscope,
  },
  {
    title: "Pediatric Eye Care",
    href: "/pediatric-eye-care",
    icon: Baby,
  },
  {
    title: "Digital Lenses",
    href: "/digital-lenses",
    icon: Monitor,
  },
  {
    title: "Optical Store",
    href: "/optical-store",
    icon: Glasses,
  },
];

const firstRow = services.slice(0, 4);
const secondRow = services.slice(4);

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
      w-[180px]
      sm:w-[200px]
      lg:w-[235px]
      shrink-0
      items-center
      gap-3
      rounded-2xl
      border
      border-neutral-200
      bg-white
      p-3
      sm:p-4
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#FF5A34]/40
      hover:shadow-xl
    "
    >
      <div
        className="
        flex
        h-10
        w-10
        sm:h-11
        sm:w-11
        items-center
        justify-center
        rounded-xl
        text-white
      "
        style={{
          background:
            "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
        }}
      >
        <Icon size={20} />
      </div>

      <div className="flex-1">
        <h3 className="text-xs font-bold leading-5 text-neutral-900 sm:text-sm">
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

function DesktopMarquee({
  items,
  reverse = false,
}: {
  items: typeof services;
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="hidden overflow-hidden lg:block">
      <div
        className={`flex w-max gap-5 py-3 ${
          reverse
            ? "animate-[marqueeReverse_32s_linear_infinite]"
            : "animate-[marquee_32s_linear_infinite]"
        }`}
      >
        {duplicated.map((service, index) => (
          <ServiceCard
            key={`${service.title}-${index}`}
            service={service}
          />
        ))}
      </div>
    </div>
  );
}

function MobileCarousel({
  items,
}: {
  items: typeof services;
}) {
  return (
    <div
      className="
      lg:hidden
      flex
      gap-4
      overflow-x-auto
      snap-x
      snap-mandatory
      pb-4
      px-1
      scrollbar-hide
    "
    >
      {items.map((service) => (
        <div
          key={service.title}
          className="snap-center"
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
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
              For Every Stage of Vision
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            Forst Eye Clinic provides professional eye care services for
            children, adults and seniors using modern diagnostic technology.
          </p>

        </div>

        {/* MOBILE */}

        <div className="mt-10 space-y-4">
          <MobileCarousel items={firstRow} />
          <MobileCarousel items={secondRow} />
        </div>

        {/* DESKTOP */}

        <div className="mt-10">
          <DesktopMarquee items={firstRow} />
          <DesktopMarquee
            items={secondRow}
            reverse
          />
        </div>

        {/* Button */}

        <div className="mt-10 flex justify-center">

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
              boxShadow:
                "0 14px 34px rgba(255,59,31,.35)",
            }}
          >
            View All Services
            <ArrowRight size={16} />
          </Link>

        </div>

        {/* Bottom */}

        <div className="mx-auto mt-14 max-w-4xl rounded-[24px] border border-[#C9A227]/20 bg-gradient-to-r from-[#FFF8E8] via-white to-[#FFF8E8] p-6 text-center">

          <h3 className="text-xl font-bold text-primary sm:text-2xl">
            Trusted Eye Care Clinic in Lagos
          </h3>

          <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
            We provide comprehensive eye examinations, glaucoma
            management, cataract care, pediatric eye care, low vision
            rehabilitation, dry eye treatment, digital lenses and premium
            optical services using modern technology with compassionate,
            patient-focused care.
          </p>

        </div>

      </div>
    </section>
  );
}