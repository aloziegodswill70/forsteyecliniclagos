"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  MessageCircle,
} from "lucide-react";

import { Product } from "@/data/products/lowVisionProducts";

interface ProductCardProps {
  product: Product;
}

const WHATSAPP = "2348033435554";

export default function ProductCard({
  product,
}: ProductCardProps) {
  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
`Hello FORST Eye Clinic,

I'm interested in this Low Vision Device.

Product: ${product.name}
Brand: ${product.brand}

Kindly advise me on availability and suitability.

Thank you.`
  )}`;

  return (
    <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative bg-neutral-50">

        <span className="absolute left-4 top-4 z-10 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-black">
          {product.category}
        </span>

        <div className="relative h-72 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-xs font-bold uppercase tracking-widest text-primary">
          {product.brand}
        </p>

        <h3 className="mt-2 text-xl font-bold text-neutral-900">
          {product.name}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-neutral-600">
          {product.description}
        </p>

        <div className="mt-6">
          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
              product.availability === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {product.availability}
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">

          <Link
            href={`/low-vision-store/${product.slug}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 font-semibold transition hover:border-primary hover:text-primary"
          >
            <Eye size={18} />
            Details
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <MessageCircle size={18} />
            Enquire
          </a>

        </div>

      </div>

    </article>
  );
}