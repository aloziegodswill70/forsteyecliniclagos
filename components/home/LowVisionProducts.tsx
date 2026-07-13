"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { lowVisionProducts } from "@/data/products/lowVisionProducts";
import ProductCard from "@/components/store/ProductCard";

export default function LowVisionProducts() {
  const featuredProducts = lowVisionProducts
    .filter((product) => product.featured)
    .slice(0, 6);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= Header ================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            FORST Eye Clinic Low Vision Centre
          </span>

          <h2 className="mt-5 text-4xl font-black text-neutral-900">
            Low Vision Aids &
            <span className="block text-primary">
              Assistive Devices
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Explore our professionally selected collection of handheld
            magnifiers, electronic video magnifiers, telescopes, reading
            aids, talking devices and daily living aids designed to help
            individuals with low vision achieve greater independence.
          </p>

        </div>

        {/* ================= Featured Products ================= */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        {/* ================= CTA ================= */}

        <div className="mt-16 flex justify-center">

          <Link
            href="/low-vision-store"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Browse Complete Catalogue

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}