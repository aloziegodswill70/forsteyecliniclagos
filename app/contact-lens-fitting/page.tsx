import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Eye,
  Clock3,
  ArrowRight,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Contact Lens Fitting in Lagos | Professional Contact Lens Assessment | FORST EYE CLINIC",

  description:
    "Book a professional contact lens fitting at FORST EYE CLINIC, Lagos. We provide comprehensive contact lens assessments, soft lenses, toric lenses, multifocal lenses, rigid gas permeable lenses and follow-up care.",

  keywords: [
    "Contact Lens Fitting Lagos",
    "Contact Lens Assessment",
    "Soft Contact Lens Lagos",
    "Toric Contact Lens",
    "Multifocal Contact Lens",
    "Eye Clinic Lagos",
    "Contact Lens Clinic Ikeja",
    "Forst Eye Clinic",
  ],

  alternates: {
    canonical: "/contact-lens-fitting",
  },
};

const services = [
  "Comprehensive Eye Examination",
  "Contact Lens Power Assessment",
  "Corneal Health Evaluation",
  "Tear Film Assessment",
  "Soft Contact Lens Fitting",
  "Rigid Gas Permeable Lens Fitting",
  "Toric Lens Assessment",
  "Multifocal Contact Lens Fitting",
];

const benefits = [
  "Personalized lens selection",
  "Comfortable and precise fitting",
  "Professional lens handling training",
  "Safe wearing schedule",
  "Cleaning and maintenance education",
  "Routine follow-up appointments",
];

export default function ContactLensFittingPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="py-20 lg:py-28">
        <div className="container-site">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Professional Contact Lens Care
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                Contact Lens
                <span className="block text-primary">
                  Fitting & Assessment
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                A proper contact lens fitting is essential for comfort,
                clear vision and long-term eye health. Our experienced
                optometrists carefully evaluate your eyes to recommend
                the most suitable contact lenses for your lifestyle and
                prescription.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  <CalendarDays className="mr-2" size={18} />
                  Book Contact Lens Fitting
                </Link>

                <Link
                  href="/contact-lens"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  Learn About Contact Lenses
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            <div>

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948981/Untitled_design_33_ugpsn6.png"
                alt="Professional Contact Lens Fitting"
                width={700}
                height={700}
                className="rounded-[32px] object-cover shadow-xl"
                priority
              />

            </div>

          </div>

        </div>
      </section>

      {/* Services */}

      <section className="bg-neutral-50 py-20">

        <div className="container-site">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-4xl font-black text-neutral-900">
              What Your Contact Lens Fitting Includes
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Every fitting is performed carefully to ensure your lenses
              provide excellent vision, maximum comfort and healthy eyes.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center transition hover:-translate-y-2 hover:border-primary hover:shadow-lg"
              >
                <Eye className="mx-auto text-primary" size={34} />

                <h3 className="mt-5 font-bold text-neutral-900">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Benefits */}

      <section className="py-20">

        <div className="container-site">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png"
                alt="Contact Lens Consultation"
                width={650}
                height={650}
                className="rounded-[30px] object-cover shadow-lg"
              />

            </div>

            <div>

              <h2 className="text-4xl font-black">
                Why Proper Contact Lens Fitting Matters
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Wearing contact lenses that are not professionally fitted
                may cause discomfort, infections, dry eyes and blurred
                vision. Our team ensures every patient receives the
                correct lens type and proper guidance for safe use.
              </p>

              <div className="mt-10 space-y-5">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4"
                  >
                    <CheckCircle2
                      className="text-primary"
                      size={22}
                    />

                    <span>{benefit}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="container-site">

          <div className="rounded-[36px] bg-primary px-8 py-16 text-center text-white">

            <ShieldCheck className="mx-auto" size={48} />

            <h2 className="mt-6 text-4xl font-black">
              See Clearly. Wear Comfortably.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Schedule a professional contact lens fitting today at
              FORST EYE CLINIC and enjoy clearer vision with lenses
              selected specifically for your eyes.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold text-primary"
              >
                Book Appointment
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary"
              >
                <Clock3 size={18} />
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}