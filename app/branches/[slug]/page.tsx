import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { branches } from "@/data/branches";

import {
  Phone,
  MapPin,
  Clock3,
  Navigation,
  MessageCircle,
} from "lucide-react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return branches.map((branch) => ({
    slug: branch.slug,
  }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const branch = branches.find(
    (b) => b.slug === params.slug
  );

  if (!branch) {
    return {};
  }

  return {
    title: branch.seo.title,

    description: branch.seo.description,
  };
}

export default function BranchPage({
  params,
}: Props) {
  const branch = branches.find(
    (b) => b.slug === params.slug
  );

  if (!branch) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",

    "@type": "MedicalClinic",

    name: branch.name,

    address: {
      "@type": "PostalAddress",

      streetAddress: branch.address,

      addressLocality: branch.city,

      addressRegion: branch.state,

      addressCountry: "NG",
    },

    telephone: branch.phone,

    geo: {
      "@type": "GeoCoordinates",

      latitude: branch.latitude,

      longitude: branch.longitude,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="bg-white">
        {/* HERO */}

        <section className="py-16">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-primary">
                  {branch.name}
                </h1>

                <p className="mt-6 text-neutral-700 leading-8">
                  {branch.seo.description}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex gap-3">
                    <MapPin
                      className="text-primary"
                    />
                    {branch.address}
                  </div>

                  <div className="flex gap-3">
                    <Phone
                      className="text-primary"
                    />
                    {branch.phone}
                  </div>

                  <div className="flex gap-3">
                    <Clock3
                      className="text-primary"
                    />
                    {branch.openingHours.weekdays}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={`tel:${branch.phone}`}
                    className="btn-primary"
                  >
                    Call Branch
                  </a>

                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    className="btn-secondary"
                  >
                    <Navigation size={18} />
                    Directions
                  </a>

                  <a
                    href={`https://wa.me/${branch.whatsapp.replace(
                      "+",
                      ""
                    )}`}
                    target="_blank"
                    className="btn-outline"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative h-[450px] rounded-3xl overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section className="section">
          <div className="container-site">
            <h2 className="text-primary mb-8">
              Services Available
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {branch.services.map((service) => (
                <div
                  key={service}
                  className="border border-neutral-200 rounded-2xl p-5"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAP */}

        <section className="section">
          <div className="container-site">
            <h2 className="text-primary mb-8">
              Find Us
            </h2>

            <div className="rounded-3xl overflow-hidden border border-neutral-200">
              <iframe
                src={branch.mapEmbedUrl}
                width="100%"
                height="500"
                loading="lazy"
                title={branch.name}
              />
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="section">
          <div className="container-site">
            <div className="bg-primary rounded-3xl p-10 text-center">
              <h2 className="text-white">
                Book An Appointment Today
              </h2>

              <p className="text-white mt-4">
                Schedule your eye examination
                with our team.
              </p>

              <Link
                href="/book-eye-appointment"
                className="inline-block mt-6 bg-white text-primary px-6 py-4 rounded-xl font-semibold"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}