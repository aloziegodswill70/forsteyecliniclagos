import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Glasses,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Designer Frames in Lagos | Premium Eyeglass Frames | FORST EYE CLINIC",

  description:
    "Discover premium designer eyeglass frames at FORST EYE CLINIC. Shop stylish prescription frames, lightweight frames, titanium frames, children's frames and fashionable eyewear in Lagos.",

  keywords: [
    "Designer Frames Lagos",
    "Eyeglass Frames Lagos",
    "Optical Store Lagos",
    "Fashion Glasses",
    "Prescription Frames",
    "Designer Eyewear Nigeria",
    "Luxury Glasses Lagos",
    "Forst Eye Clinic",
  ],

  alternates: {
    canonical: "/designer-frames",
  },
};

const collections = [
  "Premium Designer Frames",
  "Titanium Frames",
  "Lightweight Frames",
  "Children's Frames",
  "Business Collection",
  "Luxury Collection",
  "Classic Collection",
  "Fashion Collection",
];

const benefits = [
  "Premium Quality Materials",
  "Comfortable All-Day Fit",
  "Modern Fashion Designs",
  "Durable Construction",
  "Professional Frame Adjustment",
  "Suitable for All Lens Types",
];

export default function DesignerFramesPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="py-20 lg:py-28">
        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Premium Optical Collection
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                Designer
                <span className="block text-primary">
                  Eyeglass Frames
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Find the perfect designer frame that combines style,
                comfort and durability. Our optical store offers an
                extensive collection of fashionable prescription frames
                for men, women and children.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/optical-store"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-semibold text-white hover:scale-105 transition"
                >
                  <Glasses className="mr-2" size={18} />
                  Visit Optical Store
                </Link>

                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary px-8 py-4 font-semibold text-primary hover:bg-primary hover:text-white"
                >
                  Book Eye Examination
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            <div>

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png"
                alt="Designer Eyeglass Frames"
                width={700}
                height={700}
                priority
                className="rounded-[32px] object-cover shadow-xl"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Collections */}

      <section className="bg-neutral-50 py-20">

        <div className="container-site">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-4xl font-black">
              Explore Our Frame Collections
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Whether you prefer a classic look or contemporary fashion,
              we have frames designed for every lifestyle and personality.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {collections.map((item) => (

              <div
                key={item}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center transition hover:-translate-y-2 hover:border-primary hover:shadow-lg"
              >

                <Sparkles
                  className="mx-auto text-primary"
                  size={34}
                />

                <h3 className="mt-5 font-bold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="py-20">

        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948981/Untitled_design_33_ugpsn6.png"
                alt="Luxury Designer Frames"
                width={650}
                height={650}
                className="rounded-[30px] object-cover shadow-lg"
              />

            </div>

            <div>

              <h2 className="text-4xl font-black">
                Why Choose Our Frames?
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Every frame in our collection is carefully selected to
                provide outstanding quality, comfort and long-lasting
                durability while enhancing your appearance.
              </p>

              <div className="mt-10 space-y-4">

                {benefits.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4"
                  >

                    <CheckCircle2
                      size={22}
                      className="text-primary"
                    />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="container-site">

          <div className="rounded-[36px] bg-primary px-8 py-16 text-center text-white">

            <ShieldCheck
              size={48}
              className="mx-auto"
            />

            <h2 className="mt-6 text-4xl font-black">
              Upgrade Your Look Today
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Visit FORST EYE CLINIC to explore our premium collection
              of designer frames. Our optical professionals will help
              you select frames that perfectly match your prescription,
              face shape and lifestyle.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/optical-store"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-primary"
              >
                Browse Optical Store
              </Link>

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-primary"
              >
                <CalendarDays size={18} />
                Book Appointment
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}