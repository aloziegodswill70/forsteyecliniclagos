import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  PackageCheck,
} from "lucide-react";

import { lowVisionProducts } from "@/data/products/lowVisionProducts";

const WHATSAPP = "2348033435554";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return lowVisionProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function LowVisionProductPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = lowVisionProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
`Hello FORST Eye Clinic,

I am interested in this product.

Product: ${product.name}

Please provide availability and more information.

Thank you.`
  )}`;

  return (
    <main className="bg-white">
      {/* Back */}

      <section className="border-b">
        <div className="container-site py-6">
          <Link
            href="/low-vision-store"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Store
          </Link>
        </div>
      </section>

      {/* Product */}

      <section className="py-16">
        <div className="container-site grid gap-14 lg:grid-cols-2">

          {/* Image */}

          <div className="overflow-hidden rounded-3xl border bg-neutral-50">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8"
              />
            </div>
          </div>

          {/* Details */}

          <div>

            {product.category && (
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {product.category}
              </span>
            )}

            <h1 className="mt-6 text-4xl font-black">
              {product.name}
            </h1>

            {"brand" in product && product.brand && (
              <p className="mt-3 text-lg text-neutral-500">
                {product.brand}
              </p>
            )}

            {"description" in product && product.description && (
              <p className="mt-8 leading-8 text-neutral-700">
                {product.description}
              </p>
            )}

            {"availability" in product && product.availability && (
              <div className="mt-8 flex gap-4 rounded-2xl border bg-neutral-50 p-5">
                <PackageCheck
                  size={24}
                  className="text-primary"
                />

                <div>
                  <p className="font-bold">
                    {product.availability}
                  </p>

                  <p className="text-sm text-neutral-500">
                    Availability may vary between branches.
                  </p>
                </div>
              </div>
            )}

            {"recommendedFor" in product &&
              Array.isArray(product.recommendedFor) &&
              product.recommendedFor.length > 0 && (
                <div className="mt-10">
                  <h2 className="mb-4 text-2xl font-bold">
                    Recommended For
                  </h2>

                  <div className="flex flex-wrap gap-3">
                    {product.recommendedFor.map((item: string) => (
                      <span
                        key={item}
                        className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            {"keyFeatures" in product &&
              Array.isArray(product.keyFeatures) &&
              product.keyFeatures.length > 0 && (
                <div className="mt-10">
                  <h2 className="mb-5 text-2xl font-bold">
                    Key Features
                  </h2>

                  <ul className="space-y-3">
                    {product.keyFeatures.map((feature: string) => (
                      <li
                        key={feature}
                        className="flex gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 text-primary"
                        />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {"specifications" in product &&
              Array.isArray(product.specifications) &&
              product.specifications.length > 0 && (
                <div className="mt-10">
                  <h2 className="mb-5 text-2xl font-bold">
                    Specifications
                  </h2>

                  <ul className="space-y-3">
                    {product.specifications.map((spec: string) => (
                      <li
                        key={spec}
                        className="flex gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 text-primary"
                        />

                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            <div className="mt-12">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                <MessageCircle size={20} />
                Enquire on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}