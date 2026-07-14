"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Eye,
  ShieldCheck,
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type Reason = {
  title: string;
  icon?: React.ElementType;
  image?: string;
  video?: string;
};

const reasons: Reason[] = [
  {
    title: "Comprehensive Care",
    icon: Eye,
  },
  {
    title: "Modern Equipment",
    icon: ShieldCheck,
  },
  {
    title: "Patient First",
    video: "/videos/eyetest.mp4",
  },
  {
    title: "Experienced Team",
    image: "/images/fecteam.jpg",
  },
  {
    title: "Easy Booking",
    icon: Calendar,
  },
  {
    title: "Lagos Branches",
    icon: MapPin,
  },
];

const highlights = [
  "Comprehensive Eye Examination",
  "Glaucoma & Cataract Care",
  "Pediatric Eye Care",
  "Digital Lenses & Optical Services",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= Header ================= */}

        <div className="mx-auto mb-10 max-w-2xl text-center">

          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-semibold text-primary">
            Why Choose FORST Eye Clinic
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            Trusted Eye Care
            <span className="block text-primary">
              For Every Generation
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            Combining compassionate care, experienced professionals and
            modern technology to protect your vision every day.
          </p>

        </div>

        {/* ================= Main Card ================= */}

        <div className="mx-auto max-w-6xl rounded-3xl border border-neutral-200 bg-white p-5 shadow-lg md:p-8">

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">

            {/* ================= LEFT ================= */}

            <div className="text-center lg:text-left">

              <span className="inline-flex rounded-full bg-[#FFF8E8] px-4 py-2 text-xs font-semibold text-[#C9A227]">
                Your Vision Comes First
              </span>

              <h3 className="mt-4 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl">
                Professional Eye Care
                <span className="block text-primary">
                  You Can Trust
                </span>
              </h3>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-600 lg:mx-0">
                Our experienced eye care professionals provide
                comprehensive examinations, early diagnosis and
                personalized treatment using modern technology.
              </p>

              {/* Highlights */}

              <div className="mt-7 space-y-3">

                {highlights.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#C9A227]"
                    />

                    <span className="text-sm font-medium text-neutral-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* CTA */}

              <div className="mt-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-5 text-center lg:text-left">

                <h4 className="text-base font-bold text-neutral-900">
                  Ready to protect your vision?
                </h4>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Book your comprehensive eye examination today.
                </p>

                <Link
                  href="/book-eye-appointment"
                  className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
                    boxShadow:
                      "0 12px 28px rgba(255,59,31,.18)",
                  }}
                >
                  Book Appointment

                  <ArrowRight size={16} />

                </Link>

              </div>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="grid grid-cols-2 gap-3">

              {reasons.map((item) => {

                /* ---------- Video Card ---------- */

                if (item.video) {
                  return (
                    <div
                  key={item.title}
                  className="aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
                >
                  <div className="relative h-[80%] w-full">
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex h-[20%] items-center justify-center px-2">
                    <h4 className="text-center text-xs font-bold sm:text-sm">
                      {item.title}
                    </h4>
                  </div>
                </div>
                  );
                }

                /* ---------- Image Card ---------- */

                if (item.image) {
                  return (
                    <div
                      key={item.title}
                      className="aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
                    >

                      <div className="relative h-[78%] w-full">

                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />

                      </div>

                      <div className="flex h-[22%] items-center justify-center px-2">

                        <h4 className="text-center text-xs font-bold sm:text-sm">
                          {item.title}
                        </h4>

                      </div>

                    </div>
                  );
                }

                /* ---------- Icon Card ---------- */

                const Icon = item.icon!;

                return (
                  <div
                    key={item.title}
                    className="aspect-square rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                  >

                    <div className="flex h-full flex-col items-center justify-center text-center">

                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">

                        <Icon size={20} />

                      </div>

                      <h4 className="text-xs font-bold leading-5 text-neutral-900 sm:text-sm">
                        {item.title}
                      </h4>

                    </div>

                  </div>
                );

              })}

            </div>

          </div>

        </div>
                {/* ================= Statistics ================= */}

        <div className="mx-auto mt-10 max-w-5xl">

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

            {[
              {
                value: "20K+",
                label: "Patients Served",
              },
              {
                value: "4.9★",
                label: "Patient Rating",
              },
              {
                value: "7",
                label: "Lagos Branches",
              },
              {
                value: "15+",
                label: "Eye Care Services",
              },
            ].map((item) => (

              <div
                key={item.label}
                className="
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white
                  p-4
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-lg
                "
              >

                <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-[#C9A227]" />

                <h3 className="text-xl font-black text-primary sm:text-2xl lg:text-3xl">
                  {item.value}
                </h3>

                <p className="mt-1 text-[11px] font-medium text-neutral-600 sm:text-sm">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* ================= Bottom CTA ================= */}

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-primary/10 bg-gradient-to-r from-[#FFF8F4] via-white to-[#FFF8F4] p-6 text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-[11px] font-semibold text-primary">
            Trusted Eye Care in Lagos
          </span>

          <h3 className="mt-4 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl">
            Your Vision Deserves
            <span className="block text-primary">
              The Best Care
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            Whether you need a routine eye examination, glaucoma care,
            cataract evaluation, children's eye care or premium optical
            services, our experienced team is committed to helping you
            maintain healthy vision through compassionate, evidence-based
            eye care.
          </p>

          <div className="mt-6 flex justify-center">

            <Link
              href="/book-eye-appointment"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                background:
                  "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
                boxShadow:
                  "0 12px 28px rgba(255,59,31,.18)",
              }}
            >
              Book Appointment

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}