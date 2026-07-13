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
    return lowVisionProducts.filter((product) => {
      const keyword = search.toLowerCase();

     const matchesSearch =
  product.name.toLowerCase().includes(keyword) ||
  product.brand.toLowerCase().includes(keyword) ||
  product.description
    .toLowerCase()
    .includes(keyword);

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="bg-neutral-50">
      {/* HERO */}

      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-20">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            FORST Eye Clinic Low Vision Centre
          </span>

          <h1 className="mt-6 text-5xl font-black text-neutral-900">
            Low Vision Devices Catalogue
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
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
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-white hover:opacity-90"
          >
            <MessageCircle size={20} />
            Chat With Low Vision Specialist
          </Link>

        </div>
      </section>

      {/* SEARCH */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">

          <div className="relative">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search devices..."
              className="w-full rounded-2xl border border-neutral-200 py-4 pl-14 pr-5 outline-none focus:border-primary"
            />

          </div>

          <div className="mt-8 flex gap-3 overflow-x-auto pb-2">

            {categories.map((item) => (

              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition ${
                  category === item
                    ? "bg-primary text-white"
                    : "border border-neutral-200 bg-white hover:border-primary hover:text-primary"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

        </div>
      </section>

      {/* PRODUCTS */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">

          <div className="mb-10">

            <h2 className="text-3xl font-bold">
              Available Devices
            </h2>

            <p className="mt-2 text-neutral-600">
              {filteredProducts.length} products found
            </p>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

          {filteredProducts.length === 0 && (

            <div className="rounded-3xl bg-white py-20 text-center">

              <h3 className="text-2xl font-bold">
                No products found
              </h3>

              <p className="mt-3 text-neutral-500">
                Try another keyword or category.
              </p>

            </div>

          )}

        </div>
      </section>
    </main>
  );
}