import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Lenses | FORST Eye Clinic",
  description:
    "Premium digital lenses for comfortable screen use and clearer vision.",
};

export default function DigitalLensPage() {
  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="bg-[#FCA400] py-14 md:py-20">
        <div className="container-site">

          <div className="mx-auto max-w-4xl text-center">

            <h1 className="text-3xl font-black leading-tight text-white md:text-5xl">
              Digital Lenses for
              <span className="block">
                Comfortable Vision
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
              Enjoy clearer and more comfortable vision while using
              computers, phones, tablets and other digital devices.
            </p>

            <div className="mt-8 flex justify-center">

              <Link
                href="/digital-lens"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#FCA400] transition hover:-translate-y-1 hover:shadow-lg"
              >
                Explore Digital Lenses
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* SIMPLE CONTENT */}

      <section className="container-site py-14 md:py-20">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* IMAGE */}

          <div className="overflow-hidden rounded-3xl">
            <Image
              src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801570/Untitled_design_42_nct5lf.png"
              alt="Digital Lenses"
              width={900}
              height={600}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {/* CONTENT */}

          <div>

            <span className="inline-flex rounded-full bg-[#FCA400]/10 px-4 py-2 text-xs font-semibold text-[#FCA400]">
              Digital Eye Care
            </span>

            <h2 className="mt-4 text-2xl font-black text-neutral-900 md:text-4xl">
              Better Vision for Your Digital Lifestyle
            </h2>

            <p className="mt-5 text-sm leading-7 text-neutral-600 md:text-base">
              Digital lenses are designed to provide comfortable vision
              for people who spend significant time looking at computers,
              smartphones, tablets and other digital screens.
            </p>

            <div className="mt-6 space-y-3">

              {[
                "Blue Light Protection",
                "Anti-Reflective Coating",
                "Sharper Digital Vision",
                "UV & Scratch Protection",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-neutral-700"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#FCA400]"
                  />

                  {item}
                </div>
              ))}

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/digital-lens"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FCA400] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                View Digital Lenses
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#FCA400] px-6 py-3 text-sm font-semibold text-[#FCA400] transition hover:bg-[#FCA400] hover:text-white"
              >
                <CalendarDays size={17} />
                Book Appointment
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}