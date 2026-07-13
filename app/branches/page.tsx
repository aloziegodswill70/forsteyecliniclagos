import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { branches } from "@/data/branches";

import {
  MapPin,
  Phone,
  Clock3,
  Navigation,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Forst Eye Clinic Locations | Eye Clinics Across Lagos",

  description:
    "Find a Forst Eye Clinic branch near you in Lagos. Visit our eye clinics for eye examinations, glaucoma care, cataract management, dry eye treatment, low vision care, pediatric eye care and optical services.",

  alternates: {
    canonical: "https://www.forsteyeclinic.com/branches",
  },
};

export default function BranchesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center border border-primary px-4 py-2 rounded-full text-primary font-semibold text-sm">
              Our Locations
            </span>

            <h1 className="mt-6">
              Find A Forst Eye Clinic Branch Near You
            </h1>

            <p className="mt-6 text-neutral-600 text-lg leading-8">
              Access professional eye care services through our growing
              network of eye clinics across Lagos. Our branches provide
              comprehensive eye examinations, glaucoma management,
              cataract care, dry eye treatment, low vision services,
              pediatric eye care, digital lenses and optical services.
            </p>
          </div>
        </div>
      </section>

      {/* BRANCH LIST */}

      <section className="pb-20">
        <div className="container-site">
          <div className="space-y-10">
            {branches.map((branch) => (
              <article
                key={branch.slug}
                className="overflow-hidden rounded-3xl border border-neutral-200"
              >
                <div className="grid lg:grid-cols-2">
                  {/* IMAGE */}

                  <div className="relative min-h-[350px] lg:min-h-[450px]">
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      priority={false}
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="p-6 md:p-10">
                    <h2 className="text-primary text-3xl font-bold">
                      {branch.name}
                    </h2>

                    <div className="mt-6 space-y-4">
                      <div className="flex gap-3">
                        <MapPin
                          size={20}
                          className="text-primary shrink-0 mt-1"
                        />

                        <span>{branch.address}</span>
                      </div>

                      <div className="flex gap-3">
                        <Phone
                          size={20}
                          className="text-primary shrink-0 mt-1"
                        />

                        <span>{branch.phone}</span>
                      </div>

                      <div className="flex gap-3">
                        <Clock3
                          size={20}
                          className="text-primary shrink-0 mt-1"
                        />

                        <span>
                          Mon - Fri: {branch.openingHours.weekdays}
                        </span>
                      </div>
                    </div>

                    {/* SERVICES */}

                    <div className="mt-8">
                      <h3 className="font-semibold mb-4">
                        Available Services
                      </h3>

                      <div className="flex flex-wrap gap-3">
                        {branch.services.map((service) => (
                          <span
                            key={service}
                            className="border border-secondary text-secondary px-4 py-2 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/branches/${branch.slug}`}
                        className="btn-primary"
                      >
                        View Branch

                        <ArrowRight size={18} />
                      </Link>

                      <a
                        href={`tel:${branch.phone}`}
                        className="btn-outline"
                      >
                        Call Branch
                      </a>

                      <a
                        href={branch.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <Navigation size={18} />

                        Directions
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="pb-20">
        <div className="container-site">
          <div className="rounded-3xl border border-neutral-200 p-8 lg:p-12">
            <h2 className="text-primary text-3xl font-bold">
              Trusted Eye Care Clinics Across Lagos
            </h2>

            <p className="mt-6 leading-8 text-neutral-700">
              Forst Eye Clinic serves patients across Lagos through
              strategically located branches designed to provide
              convenient access to quality eye care services.
              Whether you require a comprehensive eye examination,
              glaucoma management, cataract evaluation, dry eye
              treatment, pediatric eye care, diabetic eye screening,
              low vision rehabilitation, digital lenses or optical
              services, our clinics are equipped to support your
              eye health needs.
            </p>

            <p className="mt-6 leading-8 text-neutral-700">
              Patients searching for the best eye clinic in Lagos,
              eye clinic near me, eye test near me, glaucoma clinic
              in Ikeja, eye clinic in Ogba, eye clinic in Festac,
              low vision clinic in Lagos, and dry eye clinic near
              me can easily locate a Forst Eye Clinic branch and
              book an appointment online.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-20">
        <div className="container-site">
          <div className="bg-primary rounded-3xl p-10 lg:p-14 text-center">
            <h2 className="text-white text-3xl lg:text-5xl font-bold">
              Book Your Eye Examination Today
            </h2>

            <p className="text-white mt-6 max-w-3xl mx-auto leading-8">
              Schedule an appointment with a Forst Eye Clinic branch
              near you and receive professional eye care from our team.
            </p>

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center justify-center mt-8 bg-white text-primary px-8 py-4 rounded-xl font-semibold"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}