"use client";

import Link from "next/link";
import {
  Eye,
  Shield,
  ScanEye,
  Glasses,
  Baby,
  Monitor,
  Stethoscope,
  HeartPulse,
  ArrowRight,
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

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof services;
  reverse?: boolean;
}) {
  const marqueeItems = [...items, ...items];

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden py-3">
      <div
        className={`flex w-max gap-4 lg:gap-5 ${
          reverse
            ? "animate-[marqueeReverse_32s_linear_infinite]"
            : "animate-[marquee_32s_linear_infinite]"
        }`}
      >
        {marqueeItems.map((service, index) => {
          const Icon = service.icon;

          return (
            <Link
              key={`${service.title}-${index}`}
              href={service.href}
              className="
                group
                flex
                w-[210px]
                sm:w-[235px]
                lg:w-[255px]
                xl:w-[270px]
                shrink-0
                items-center
                gap-4
                rounded-3xl
                border
                border-neutral-200
                bg-white
                p-4
                lg:p-5
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
                  h-12
                  w-12
                  lg:h-14
                  lg:w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  text-white
                "
                style={{
                  background:
                    "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
                }}
              >
                <Icon size={24} />
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-bold leading-6 text-neutral-900 lg:text-base xl:text-lg">
                  {service.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#C9A227] transition group-hover:text-primary">
                  Explore
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="overflow-hidden bg-gradient-to-b from-white via-[#FFFDFB] to-white py-14 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-neutral-900 md:text-4xl">
            Professional Eye Care
            <span className="block text-primary">
              For Every Stage of Vision
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600">
            Forst Eye Clinic provides professional eye care services like:
          </p>
        </div>

        {/* Sliding Services */}

        <MarqueeRow items={firstRow} />

        <MarqueeRow
          items={secondRow}
          reverse
        />

        {/* CTA */}

        <div className="mx-auto mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
              boxShadow:
                "0 14px 34px rgba(255,59,31,.35)",
            }}
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Bottom SEO */}

        <div className="mx-auto mt-16 max-w-4xl rounded-[28px] border border-[#C9A227]/20 bg-gradient-to-r from-[#FFF8E8] via-white to-[#FFF8E8] p-6 text-center md:p-8">
          <h3 className="text-2xl font-bold text-primary">
            Trusted Eye Care Clinic in Lagos
          </h3>

          <p className="mt-4 leading-8 text-neutral-600">
            We provide comprehensive eye examinations, glaucoma management,
            cataract care, pediatric eye care, low vision rehabilitation,
            digital lenses, dry eye treatment and premium optical services
            using modern technology with compassionate patient-focused care.
          </p>
        </div>
      </div>
    </section>
  );
}