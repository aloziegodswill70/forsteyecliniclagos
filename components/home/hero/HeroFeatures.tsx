"use client";

import Link from "next/link";
import {
  ArrowRight,
  Eye,
  ScanEye,
  ShieldCheck,
  Droplets,
  Baby,
  Glasses,
  HeartPulse,
  Activity,
} from "lucide-react";

const features = [
  {
    title: "Comprehensive Eye Examination",
    description:
      "Complete vision assessment using modern diagnostic equipment.",
    href: "/services/comprehensive-eye-examination",
    icon: Eye,
  },
  {
    title: "Glaucoma Clinic",
    description:
      "Early detection, diagnosis and long-term glaucoma management.",
    href: "/services/glaucoma-management",
    icon: ShieldCheck,
  },
  {
    title: "Cataract Evaluation",
    description:
      "Professional cataract assessment and surgical referral.",
    href: "/services/cataract-care",
    icon: ScanEye,
  },
  {
    title: "Dry Eye Clinic",
    description:
      "Advanced treatment for dry, itchy and irritated eyes.",
    href: "/services/dry-eye-treatment",
    icon: Droplets,
  },
  {
    title: "Pediatric Eye Care",
    description:
      "Eye examinations and vision care for infants and children.",
    href: "/services/pediatric-eye-care",
    icon: Baby,
  },
  {
    title: "Optical Services",
    description:
      "Premium frames, lenses and sunglasses for every lifestyle.",
    href: "/store",
    icon: Glasses,
  },
  {
    title: "Diabetic Eye Screening",
    description:
      "Routine retinal examinations for people living with diabetes.",
    href: "/services/diabetic-eye-screening",
    icon: HeartPulse,
  },
  {
    title: "OCT & Eye Imaging",
    description:
      "Advanced retinal and optic nerve imaging technology.",
    href: "/services/oct-scan",
    icon: Activity,
  },
];

export default function HeroFeatures() {
  return (
    <section className="mt-20">
      <div className="mb-10 text-center">
        <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          Our Eye Care Services
        </span>

        <h2 className="mt-4 text-3xl font-bold text-neutral-900 lg:text-4xl">
          Comprehensive Eye Care Under One Roof
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-neutral-600 leading-8">
          From routine eye examinations to advanced diagnostics, glaucoma
          management, dry eye treatment and premium optical services, our team
          provides complete eye care for children and adults.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Link
              key={feature.title}
              href={feature.href}
              className="
                group
                rounded-3xl
                border
                border-neutral-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary/30
                hover:shadow-xl
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition group-hover:bg-primary">
                <Icon
                  size={28}
                  className="text-primary transition group-hover:text-white"
                />
              </div>

              <h3 className="mt-5 text-xl font-bold text-neutral-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {feature.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
                Learn More

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}