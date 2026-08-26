"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Wellness HMO",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943898/wellness_avtydn.jpg",
  },
  {
    name: "THT HMO",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/tht_wmv7ds.jpg",
  },
];

export default function InsurancePartners() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= Header ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary sm:px-5 sm:py-2 sm:text-sm">
            Our HMO Partners
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            HMOs We
            <span className="block text-primary">
              Work With
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            We work with selected Health Maintenance Organizations
            to make quality eye care more accessible and affordable.
          </p>

        </div>

        {/* ================= Two Featured HMOs ================= */}

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:mt-10 sm:gap-6">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="
                flex
                h-24
                items-center
                justify-center
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-3
                shadow-sm
                transition
                hover:-translate-y-1
                hover:border-primary/20
                hover:shadow-md
                sm:h-32
                sm:p-5
              "
            >
              <div className="relative h-16 w-full sm:h-24">
                <Image
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 640px) 45vw, 280px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}

        </div>

        {/* ================= View More ================= */}

        <div className="mt-8 flex justify-center sm:mt-10">

          <Link
            href="/hmo"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-primary
              px-5
              py-2.5
              text-xs
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
              sm:px-6
              sm:py-3
              sm:text-sm
            "
          >
            View Other HMOs We Partner With
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>
    </section>
  );
}