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
    <article className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">

      {/* Image */}

      <div className="relative bg-neutral-50">

        <span className="absolute left-2 top-2 z-10 rounded-full bg-secondary px-2 py-0.5 text-[9px] font-semibold text-black">
          {product.category}
        </span>

        <div className="relative h-28 sm:h-36 md:h-44 w-full overflow-hidden">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2 transition duration-300 group-hover:scale-105"
          />

        </div>

      </div>

      {/* Content */}

      <div className="p-3 text-center">

        <p className="text-[9px] font-semibold uppercase tracking-wide text-primary">
          {product.brand}
        </p>

        <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-neutral-900 sm:text-base">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-neutral-600">
          {product.description}
        </p>

        <div className="mt-2 flex justify-center">

          <span
            className={`rounded-full px-2 py-1 text-[9px] font-semibold ${
              product.availability === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {product.availability}
          </span>

        </div>

        {/* Buttons */}

        <div className="mt-3 grid grid-cols-2 gap-2">

          <Link
            href={`/low-vision-store/${product.slug}`}
            className="flex items-center justify-center gap-1 rounded-md border border-neutral-300 py-2 text-[10px] font-semibold transition hover:border-primary hover:text-primary"
          >
            <Eye size={12} />
            Details
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 rounded-md bg-primary py-2 text-[10px] font-semibold text-white transition hover:opacity-90"
          >
            <MessageCircle size={12} />
            Enquire
          </a>

        </div>

      </div>

    </article>
  );
}