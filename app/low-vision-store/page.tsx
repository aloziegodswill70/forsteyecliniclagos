"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  MessageCircle,
} from "lucide-react";

import { lowVisionProducts } from "@/data/products/lowVisionProducts";
import ProductCard from "@/components/store/ProductCard";

const categories = [
  "All",
  "Handheld Magnifiers",
  "Digital Video Magnifiers",
  "Talking Devices",
  "Low Vision Spectacles",
  "Telescopes",
  "Stand Magnifiers",
  "Reading Aids",
  "Writing Aids",
  "Daily Living Aids",
];

export default function LowVisionStorePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    return lowVisionProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(keyword) ||
        product.brand.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="bg-neutral-50">

      {/* ================= HERO ================= */}

      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-[11px] font-semibold text-primary sm:px-5 sm:text-sm">
            FORST Eye Clinic Low Vision Centre
          </span>

          <h1 className="mt-5 text-3xl font-black leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Low Vision
            <span className="block text-primary">
              Devices Catalogue
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base lg:text-lg">
            Explore our professionally selected low vision
            rehabilitation devices including handheld
            magnifiers, digital video magnifiers,
            telescopes, talking devices, writing aids,
            braille products and daily living aids.
            Product availability may vary by branch.
          </p>

          <Link
            href="https://wa.me/2348033435554"
            target="_blank"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:px-6 sm:py-4"
          >
            <MessageCircle size={18} />
            Chat With Specialist
          </Link>

        </div>
      </section>

      {/* ================= SEARCH ================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          {/* Search */}

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search devices..."
              className="
                w-full
                rounded-2xl
                border
                border-neutral-200
                bg-white
                py-3
                pl-12
                pr-4
                text-sm
                outline-none
                transition
                focus:border-primary
              "
            />

          </div>

          {/* Categories */}

          <div
            className="
              mt-6
              flex
              gap-2
              overflow-x-auto
              pb-2
              scroll-smooth
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {categories.map((item) => (

              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition sm:px-5 sm:py-3 sm:text-sm ${
                  category === item
                    ? "bg-primary text-white"
                    : "border border-neutral-200 bg-white text-neutral-700 hover:border-primary hover:text-primary"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <h2 className="text-2xl font-black text-neutral-900 sm:text-3xl">
                Available Devices
              </h2>

              <p className="mt-1 text-sm text-neutral-500">
                {filteredProducts.length} Products Found
              </p>

            </div>

          </div>

          {/* Mobile Reel Layout */}

          <div
            className="
              flex
              gap-3
              overflow-x-auto
              pb-2
              sm:hidden
              scroll-smooth
              snap-x
              snap-mandatory
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="w-[185px] shrink-0 snap-start"
              >
                <ProductCard product={product} />
              </div>

            ))}

          </div>

          {/* Desktop Grid */}

          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

          {/* Empty */}

          {filteredProducts.length === 0 && (

            <div className="mt-8 rounded-3xl bg-white py-20 text-center shadow-sm">

              <h3 className="text-2xl font-bold text-neutral-900">
                No Products Found
              </h3>

              <p className="mt-3 text-neutral-500">
                Try another keyword or choose a different category.
              </p>

            </div>

          )}

        </div>
      </section>

    </main>
  );
}