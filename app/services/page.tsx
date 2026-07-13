import type { Metadata } from "next";
import Link from "next/link";

import {
  Eye,
  Shield,
  Droplets,
  Glasses,
  Baby,
  ScanEye,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { generateSEO } from "@/lib/seo";

import {
  LocalBusinessSchema,
  BreadcrumbSchema,
} from "@/components/seo";

export const metadata: Metadata = generateSEO({
  title: "Eye Care Services In Lagos | Forst Eye Clinic",
  description:
    "Explore comprehensive eye care services including eye examinations, glaucoma management, dry eye treatment, low vision rehabilitation, pediatric eye care, cataract evaluations, and digital lenses.",
  path: "/services",
});

const services = [
  {
    title: "Comprehensive Eye Examination",
    icon: Eye,
    href: "/eye-examination",
    description:
      "Detailed assessment of vision and eye health using modern diagnostic technology.",
  },

  {
    title: "Glaucoma Clinic",
    icon: Shield,
    href: "/glaucoma-treatment",
    description:
      "Early detection, diagnosis, monitoring, and management of glaucoma.",
  },

  {
    title: "Dry Eye Clinic",
    icon: Droplets,
    href: "/dry-eye-treatment",
    description:
      "Advanced evaluation and treatment for dry, irritated, and uncomfortable eyes.",
  },

  {
    title: "Low Vision Clinic",
    icon: Glasses,
    href: "/low-vision-clinic",
    description:
      "Rehabilitation services and visual aids for patients with reduced vision.",
  },

  {
    title: "Pediatric Eye Care",
    icon: Baby,
    href: "/pediatric-eye-care",
    description:
      "Comprehensive eye examinations and vision care for children.",
  },

  {
    title: "Cataract Evaluation",
    icon: ScanEye,
    href: "/cataract-treatment",
    description:
      "Professional cataract assessment, monitoring, and referral services.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <LocalBusinessSchema />

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.forsteyeclinic.com",
          },
          {
            name: "Services",
            url: "https://www.forsteyeclinic.com/services",
          },
        ]}
      />

      <main className="bg-white">
        {/* Hero */}

        <section className="py-16 lg:py-24">
          <div className="container-site max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-primary px-4 py-2 text-primary text-sm font-semibold">
              Professional Eye Care Services
            </span>

            <h1 className="mt-5 text-primary">
              Comprehensive Eye Care Services In Lagos
            </h1>

            <p className="mt-6 text-lg text-neutral-700 leading-8">
              Our clinic provides comprehensive eye examinations,
              glaucoma management, dry eye treatment, pediatric eye
              care, low vision rehabilitation, cataract evaluations,
              digital lenses, and quality optical services.
            </p>
          </div>
        </section>

        {/* Services Grid */}

        <section className="pb-20">
          <div className="container-site">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="card card-hover p-8 group"
                  >
                    <Icon
                      size={48}
                      className="text-primary"
                    />

                    <h2 className="mt-6 text-xl font-bold">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-neutral-600 leading-7">
                      {service.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
                      Learn More

                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Why Services Matter */}

            <div className="mt-20 rounded-3xl bg-primary p-8 lg:p-12">
              <h2 className="text-white text-center">
                Why Regular Eye Care Matters
              </h2>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {[
                  "Early Detection Of Eye Diseases",
                  "Protection Against Vision Loss",
                  "Improved Visual Performance",
                  "Monitoring Chronic Eye Conditions",
                  "Children's Vision Development",
                  "Digital Eye Strain Management",
                  "Glaucoma Detection",
                  "Healthy Aging Vision Care",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 size={20} />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}

            <div className="mt-20 text-center">
              <h2 className="text-primary">
                Ready To Schedule Your Eye Examination?
              </h2>

              <p className="mt-4 text-neutral-700 max-w-3xl mx-auto leading-8">
                Whether you need a routine eye examination, glaucoma
                consultation, dry eye evaluation, pediatric eye care,
                low vision assessment, or cataract evaluation, our team
                is ready to assist you.
              </p>

              <div className="mt-8">
                <Link
                  href="/book-eye-appointment"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Book Appointment

                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* SEO Content */}

            <div className="mt-20 rounded-3xl border border-neutral-200 p-8">
              <h2 className="text-primary text-2xl font-bold">
                Professional Eye Care Services Across Lagos
              </h2>

              <p className="mt-5 text-neutral-700 leading-8">
                Patients searching for eye examination services,
                glaucoma clinic in Lagos, dry eye treatment, low vision
                rehabilitation, pediatric eye care, cataract evaluation,
                digital lenses, and comprehensive eye care services can
                access professional, patient-centered treatment at
                Forst Eye Clinic. Our goal is to help patients maintain
                healthy vision through preventive care, early diagnosis,
                and evidence-based treatment solutions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}