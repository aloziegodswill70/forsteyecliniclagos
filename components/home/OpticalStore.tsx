import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Optical Store | FORST Eye Clinic",
  description:
    "Shop premium prescription glasses, designer frames, contact lenses and low vision devices at FORST Eye Clinic.",
};

const collections = [
  {
    title: "Prescription Glasses",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/FEC1_we5i61.png",
    href: "/prescription-glasses",
  },
  {
    title: "Designer Frames",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943800/FEC2_uvmwgz.png",
    href: "/frames",
  },
  {
    title: "Contact Lenses",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_41_jnnfl0.png",
    href: "/contact-lenses",
  },
  {
    title: "Low Vision Aids",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943897/Untitled_design_31_vdeoys.png",
    href: "/low-vision-store",
  },
];

export default function OpticalStorePage() {
  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-b from-white via-primary/5 to-white py-12 lg:py-16">

        <div className="container-site text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            FORST Optical Store
          </span>

          <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-neutral-900 md:text-5xl">
            Premium Eyewear &
            <span className="block text-primary">
              Low Vision Devices
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
            Prescription glasses, designer frames, contact lenses and
            professionally recommended low vision solutions.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              <CalendarDays size={16} />
              Book Eye Exam
            </Link>

            <Link
              href="/low-vision-store"
              className="inline-flex items-center gap-2 rounded-xl border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
            >
              View Catalogue
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>

      {/* COLLECTIONS */}

      <section className="container-site py-12">

        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-2xl font-bold text-neutral-900">
            Explore Our Collections
          </h2>

          <p className="mt-2 text-sm text-neutral-600">
            Quality optical products for every lifestyle.
          </p>

        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          {collections.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg"
            >

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="h-36 w-full object-cover transition duration-500 group-hover:scale-110 md:h-44"
                />

              </div>

              <div className="p-3 text-center">

                <h3 className="text-sm font-semibold text-neutral-900">
                  {item.title}
                </h3>

              </div>

            </Link>

          ))}

        </div>

      </section>
            {/* ================= FEATURED PRODUCTS ================= */}

      <section className="container-site py-12">

        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-2xl font-bold text-neutral-900">
            Featured Low Vision Devices
          </h2>

          <p className="mt-2 text-sm text-neutral-600">
            Professionally recommended products to improve everyday vision.
          </p>

        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          {[
            {
              name: "Digital Magnifier",
              image:
                "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943897/Untitled_design_29_qtnvra.png",
            },
            {
              name: "Reading Magnifier",
              image:
                "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943898/Untitled_design_3_tfxkcb.png",
            },
            {
              name: "Portable Telescope",
              image:
                "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943832/Untitled_design_14_vcofdj.png",
            },
            {
              name: "Electronic Reader",
              image:
                "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943799/Untitled_design_11_tpp5jf.png",
            },
          ].map((product) => (

            <div
              key={product.name}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg"
            >

              <div className="overflow-hidden bg-neutral-50">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-40 w-full object-cover transition duration-500 hover:scale-110"
                />

              </div>

              <div className="p-3 text-center">

                <h3 className="text-sm font-semibold text-neutral-900">
                  {product.name}
                </h3>

                <p className="mt-1 text-xs text-neutral-500">
                  Recommended by our optometrists.
                </p>

                <Link
                  href="/low-vision-store"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  View Product
                  <ArrowRight size={14} />
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= SEO CONTENT ================= */}

      <section className="container-site py-12">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-2xl font-bold text-neutral-900">
            Your Trusted Optical Store in Lagos
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-600">
            FORST Eye Clinic provides prescription glasses, designer frames,
            contact lenses and low vision devices. Every recommendation is
            based on a comprehensive eye examination to ensure clearer,
            comfortable vision.
          </p>

        </div>

      </section>

      {/* ================= QUICK LINKS ================= */}

      <section className="container-site pb-16">

        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">

          <h2 className="text-center text-xl font-bold text-neutral-900">
            Explore More
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

            {[
              {
                title: "Book Appointment",
                href: "/book-eye-appointment",
              },
              {
                title: "Low Vision Store",
                href: "/low-vision-store",
              },
              {
                title: "Contact Lenses",
                href: "/contact-lenses",
              },
              {
                title: "Children Eye Care",
                href: "/children-eye-care",
              },
            ].map((item) => (

              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-primary px-4 py-2 text-xs font-medium text-primary transition hover:bg-primary hover:text-white"
              >
                {item.title}
              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}