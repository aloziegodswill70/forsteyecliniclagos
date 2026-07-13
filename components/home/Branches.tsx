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
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= Header ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Our Clinics
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-neutral-900 md:text-4xl">
            Visit Any
            <span className="block text-primary">
              FORST EYE CLINIC Branch
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-600">
            Quality eye care is always within reach. Every branch is equipped
            with modern diagnostic technology and experienced professionals
            dedicated to protecting your vision.
          </p>
        </motion.div>

        {/* ================= Branches ================= */}

        <div className="space-y-12">

          {branches.map((branch, index) => (

            <motion.div
              key={branch.slug}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid items-center lg:grid-cols-2">

                {/* ================= Image ================= */}

                <div className="relative h-64 overflow-hidden md:h-80 lg:h-full lg:min-h-[430px]">

                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    priority={index === 0}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                </div>

                {/* ================= Content ================= */}

                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-10">

                  <span className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    Eye Care Branch
                  </span>

                  <h3 className="mt-5 text-3xl font-black text-neutral-900">
                    {branch.name}
                  </h3>

                  <div className="mt-8 space-y-6">

                    <div className="flex items-start gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <MapPin
                          size={20}
                          className="text-primary"
                        />
                      </div>

                      <div>

                        <p className="font-semibold text-neutral-900">
                          Address
                        </p>

                        <p className="mt-1 leading-7 text-neutral-600">
                          {branch.address}
                        </p>

                      </div>

                    </div>

                    <div className="flex items-start gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Phone
                          size={20}
                          className="text-primary"
                        />
                      </div>

                      <div>

                        <p className="font-semibold text-neutral-900">
                          Telephone
                        </p>

                        <a
                          href={`tel:${branch.phone}`}
                          className="mt-1 block text-neutral-600 transition hover:text-primary"
                        >
                          {branch.phone}
                        </a>

                      </div>

                    </div>

                    <div className="flex items-start gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Clock3
                          size={20}
                          className="text-primary"
                        />
                      </div>

                      <div>

                        <p className="font-semibold text-neutral-900">
                          Opening Hours
                        </p>

                        <div className="mt-1 space-y-1 text-neutral-600">

                          <p>
                            Mon – Fri: {branch.openingHours.weekdays}
                          </p>

                          <p>
                            Saturday: {branch.openingHours.saturday}
                          </p>

                          <p>
                            Sunday: {branch.openingHours.sunday}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* ================= Services ================= */}

                  <div className="mt-8">

                    <h4 className="mb-4 text-lg font-bold text-primary">
                      Services Available
                    </h4>

                    <div className="flex flex-wrap gap-3">

                      {branch.services.map((service) => (

                        <span
                          key={service}
                          className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700"
                        >
                          {service}
                        </span>

                      ))}

                    </div>

                  </div>

                  {/* ================= Buttons ================= */}

                  <div className="mt-10 flex flex-wrap gap-4">

                    <Link
                      href={`/branches/${branch.slug}`}
                      className="btn-primary"
                    >
                      View Clinic
                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      href={`tel:${branch.phone}`}
                      className="btn-outline"
                    >
                      Call Clinic
                    </Link>

                    <Link
                      href={branch.directionsUrl}
                      target="_blank"
                      className="btn-secondary"
                    >
                      <Navigation size={18} />
                      Directions
                    </Link>

                  </div>
                </div>
              </div>
                            {/* ================= Google Map ================= */}

              {branch.mapEmbedUrl && (
                <div className="border-t border-neutral-200 bg-neutral-50">
                  <iframe
                    src={branch.mapEmbedUrl}
                    width="100%"
                    height="320"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={branch.name}
                    className="w-full"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-20 max-w-6xl overflow-hidden rounded-[36px] border border-neutral-200 bg-gradient-to-br from-white via-[#FFFDFB] to-[#FFF8F3] p-8 shadow-sm md:p-12 lg:p-16"
        >
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              Book Your Visit
            </span>

            <h3 className="mt-6 text-3xl font-black leading-tight text-neutral-900 md:text-4xl">
              Quality Eye Care
              <span className="block text-primary">
                Close To You
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-600">
              Whether you need a routine eye examination, glaucoma care,
              cataract consultation, pediatric eye care, diabetic eye
              screening, OCT imaging or premium optical services, our
              experienced team is ready to help.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
                  boxShadow:
                    "0 14px 34px rgba(255,59,31,.30)",
                }}
              >
                Book Appointment

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/branches"
                className="inline-flex items-center rounded-full border border-neutral-300 px-8 py-4 font-semibold text-neutral-700 transition hover:border-primary hover:text-primary"
              >
                View All Branches
              </Link>

            </div>

          </div>
        </motion.div>

        {/* ================= SEO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-16 max-w-6xl rounded-[30px] border border-neutral-200 bg-white p-8 shadow-sm lg:p-10"
        >
          <h3 className="text-2xl font-bold text-primary">
            Professional Eye Care Across Lagos
          </h3>

          <p className="mt-5 leading-8 text-neutral-600">
            FORST EYE CLINIC provides comprehensive eye care services across
            Lagos through strategically located branches. Our clinics offer
            comprehensive eye examinations, glaucoma management, cataract
            evaluation, diabetic eye screening, dry eye treatment,
            pediatric eye care, OCT imaging, prescription glasses,
            contact lenses, low vision rehabilitation and complete
            optical services using modern diagnostic technology and
            experienced eye care professionals.
          </p>
        </motion.div>

      </div>
    </section>
  );
}