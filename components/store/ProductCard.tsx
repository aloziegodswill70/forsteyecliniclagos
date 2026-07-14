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
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}

      <div className="relative bg-neutral-50">

        <span className="absolute left-3 top-3 z-10 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-black sm:px-3 sm:text-xs">
          {product.category}
        </span>

        <div className="relative h-48 sm:h-56 lg:h-64 w-full">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
          />

        </div>

      </div>

      {/* Content */}

      <div className="p-4 sm:p-5">

        <p className="text-[10px] font-bold uppercase tracking-wider text-primary sm:text-xs">
          {product.brand}
        </p>

        <h3 className="mt-2 text-base font-bold leading-6 text-neutral-900 sm:text-lg lg:text-xl">
          {product.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">
          {product.description}
        </p>

        <div className="mt-4">

          <span
            className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
              product.availability === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {product.availability}
          </span>

        </div>

        {/* Buttons */}

        <div className="mt-5 grid grid-cols-2 gap-2">

          <Link
            href={`/low-vision-store/${product.slug}`}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-2.5 text-xs font-semibold transition hover:border-primary hover:text-primary sm:text-sm"
          >
            <Eye size={15} />
            Details
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2.5 text-xs font-semibold text-white transition hover:opacity-90 sm:text-sm"
          >
            <MessageCircle size={15} />
            Enquire
          </a>

        </div>

      </div>

    </article>
  );
}