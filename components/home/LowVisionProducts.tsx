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
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto mb-10 max-w-2xl text-center">

          <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
            FORST Eye Clinic Low Vision Centre
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            Low Vision Aids &
            <span className="block text-primary">
              Assistive Devices
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            Explore our professionally selected collection of magnifiers,
            electronic video magnifiers, telescopes, reading aids and
            assistive devices that help people with low vision enjoy greater
            independence.
          </p>

        </div>

        {/* Featured Products */}

        <div className="grid justify-center gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {featuredProducts.map((product) => (
            <div key={product.id} className="mx-auto w-full max-w-sm">
              <ProductCard product={product} />
            </div>
          ))}

        </div>

        {/* CTA */}

        <div className="mt-10 flex justify-center">

          <Link
            href="/low-vision-store"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Browse Complete Catalogue
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>
    </section>
  );
}