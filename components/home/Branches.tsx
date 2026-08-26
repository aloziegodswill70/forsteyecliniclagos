"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock3,
  Navigation,
  ArrowRight,
} from "lucide-react";

import { branches } from "@/data/branches";

export default function Branches() {
  // Only show Ogba / Head Branch on homepage
  const headBranch =
    branches.find(
      (branch) =>
        branch.slug === "ogba" ||
        branch.name.toLowerCase().includes("ogba")
    ) || branches[0];

  if (!headBranch) return null;

  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= Header ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
            Our Head Branch
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            Visit FORST EYE CLINIC
            <span className="block text-primary">
              Ogba Head Branch
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            Our Ogba head branch provides comprehensive eye care,
            modern diagnostic services and professional optical care
            for individuals and families across Lagos.
          </p>
        </motion.div>

        {/* ================= Head Branch ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[420px]">
              <Image
                src={headBranch.image}
                alt={`${headBranch.name} - FORST Eye Clinic`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute left-4 top-4 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-lg">
                Head Branch
              </div>
            </div>

            {/* Content */}

            <div className="p-6 sm:p-8 lg:p-10">

              <h3 className="text-2xl font-black text-neutral-900 sm:text-3xl">
                {headBranch.name}
              </h3>

              {/* Address */}

              <div className="mt-7 flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-primary" size={20} />

                <div>
                  <p className="font-semibold text-neutral-900">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-neutral-600">
                    {headBranch.address}
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="mt-5 flex items-start gap-3">
                <Phone className="mt-1 shrink-0 text-primary" size={20} />

                <div>
                  <p className="font-semibold text-neutral-900">
                    Telephone
                  </p>

                  <a
                    href={`tel:${headBranch.phone}`}
                    className="mt-1 block text-sm text-neutral-600 hover:text-primary"
                  >
                    {headBranch.phone}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}

              <div className="mt-5 flex items-start gap-3">
                <Clock3 className="mt-1 shrink-0 text-primary" size={20} />

                <div>
                  <p className="font-semibold text-neutral-900">
                    Opening Hours
                  </p>

                  <div className="mt-1 text-sm leading-6 text-neutral-600">
                    <p>
                      Mon – Fri: {headBranch.openingHours.weekdays}
                    </p>

                    <p>
                      Saturday: {headBranch.openingHours.saturday}
                    </p>

                    <p>
                      Sunday: {headBranch.openingHours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href={`/branches/${headBranch.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View Head Branch
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href={headBranch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-primary hover:text-primary"
                >
                  <Navigation size={16} />
                  Directions
                </Link>

              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= Other Branches ================= */}

        <div className="mt-8 text-center sm:mt-10">
          <p className="mb-4 text-sm text-neutral-500">
            We also have other FORST EYE CLINIC locations across Lagos.
          </p>

          <Link
            href="/branches"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            View Other Branches
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}