"use client";

import Link from "next/link";
import {
  Award,
  Eye,
  ShieldCheck,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    title: "Comprehensive Care",
    icon: Eye,
  },
  {
    title: "Modern Equipment",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Team",
    icon: Award,
  },
  {
    title: "Patient First",
    icon: Users,
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
      className="bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Why Choose Forst Eye Clinic
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-neutral-900 md:text-4xl">
            Trusted Eye Care
            <span className="block text-primary">
              For Every Generation
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-neutral-600">
            Combining compassionate care, experienced professionals and
            modern technology to protect your vision every day.
          </p>
        </div>

        {/* Main Content Card */}

        <div className="mx-auto max-w-6xl rounded-[34px] border border-neutral-200 bg-white p-6 shadow-lg md:p-8 lg:p-10">

          <div className="grid gap-10 lg:grid-cols-[1.15fr_.95fr]">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center rounded-full bg-[#FFF8E8] px-4 py-2 text-sm font-semibold text-[#C9A227]">
                Your Vision Comes First
              </span>

              <h3 className="mt-5 text-3xl font-black leading-tight text-neutral-900 lg:text-4xl">
                Professional Eye Care
                <span className="block text-primary">
                  You Can Trust
                </span>
              </h3>

              <p className="mt-6 max-w-xl leading-8 text-neutral-600">
                Our experienced eye care professionals provide
                comprehensive examinations, early diagnosis and
                personalized treatment using modern technology.
              </p>

              {/* Highlights */}

              <div className="mt-8 space-y-4">

                {highlights.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 transition hover:border-primary/20 hover:bg-white"
                  >
                    <CheckCircle2
                      size={22}
                      className="shrink-0 text-[#C9A227]"
                    />

                    <span className="font-medium text-neutral-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* CTA Box */}

              <div className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">

                <p className="text-lg font-semibold text-neutral-900">
                  Ready to protect your vision?
                </p>

                <p className="mt-2 text-neutral-600">
                  Schedule your comprehensive eye examination with our
                  experienced team today.
                </p>

                <Link
                  href="/book-eye-appointment"
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
                    boxShadow:
                      "0 12px 28px rgba(255,59,31,.18)",
                  }}
                >
                  Book Appointment

                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-5">

              {reasons.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                  >

                    {/* Square Badge */}

                    <div
                      className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                    >
                      <Icon size={28} />
                    </div>

                    <h4 className="font-bold leading-6 text-neutral-900">
                      {item.title}
                    </h4>

                  </div>
                );

              })}

            </div>

          </div>

        </div>

        {/* Continue with Statistics Section in Part 2 */}
                {/* Statistics */}

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-5 lg:grid-cols-4">

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
              className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h3 className="text-3xl font-black text-primary">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-neutral-600">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}