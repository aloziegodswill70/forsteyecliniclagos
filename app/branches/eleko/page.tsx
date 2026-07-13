// app/branches/eleko/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  CalendarDays,
  Navigation,
  ArrowRight,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Forst Eye Clinic Eleko | Eye Clinic in Eleko, Ibeju-Lekki, Lagos",
  description:
    "Visit Forst Eye Clinic Eleko for comprehensive eye examinations, glaucoma care, cataract assessment, diabetic eye screening, children's eye care, dry eye treatment, optical services and quality eye care in Ibeju-Lekki, Lagos.",

  keywords: [
    "Eye Clinic Eleko",
    "Eye Clinic Ibeju Lekki",
    "Optometrist Eleko",
    "Eye Hospital Eleko",
    "Eye Test Eleko",
    "Eye Examination Eleko",
    "Glaucoma Clinic Ibeju Lekki",
    "Best Eye Clinic Eleko",
    "Forst Eye Clinic Eleko",
  ],
};

export default function ElekoBranchPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-primary py-20 text-white">

        <div className="container-site text-center">

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
            FORST EYE CLINIC
          </span>

          <h1 className="mt-6 text-4xl font-black lg:text-6xl">
            Eleko Branch
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Delivering accessible, modern and comprehensive eye care services
            to individuals and families in Eleko and the rapidly developing
            Ibeju-Lekki axis of Lagos.
          </p>

        </div>

      </section>

      {/* Information */}

      <section className="py-20">

        <div className="container-site">

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border p-8 text-center">

              <Building2 className="mx-auto mb-4 text-primary" size={40} />

              <h2 className="text-xl font-bold">
                Branch
              </h2>

              <p className="mt-3 text-neutral-600">
                FORST EYE CLINIC
                <br />
                Eleko, Ibeju-Lekki
              </p>

            </div>

            <div className="rounded-3xl border p-8 text-center">

              <MapPin className="mx-auto mb-4 text-primary" size={40} />

              <h2 className="text-xl font-bold">
                Service Area
              </h2>

              <p className="mt-3 text-neutral-600">
                Eleko
                <br />
                Ibeju-Lekki
                <br />
                Lagos State
              </p>

            </div>

            <div className="rounded-3xl border p-8 text-center">

              <Clock3 className="mx-auto mb-4 text-primary" size={40} />

              <h2 className="text-xl font-bold">
                Opening Hours
              </h2>

              <p className="mt-3 text-neutral-600">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Services */}

      <section className="bg-neutral-50 py-20">

        <div className="container-site">

          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-4xl font-black">
              Eye Care Services Available
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Our Eleko branch offers comprehensive eye care using modern
              diagnostic equipment and experienced eye care professionals.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Comprehensive Eye Examination",
              "Glaucoma Screening",
              "Cataract Assessment",
              "Diabetic Eye Screening",
              "Children's Eye Care",
              "Dry Eye Treatment",
              "Optical Services",
              "Prescription Glasses",
              "Contact Lens Services",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border bg-white p-6 text-center shadow-sm"
              >
                <p className="font-semibold">
                  {service}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20">

        <div className="container-site">

          <div className="rounded-[32px] border border-primary/10 bg-primary/5 px-8 py-14 text-center">

            <h2 className="text-3xl font-black lg:text-5xl">
              Visit Our Eleko Branch
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              Whether you need a routine eye examination, glaucoma screening,
              cataract evaluation, diabetic eye care or children's eye care,
              our Eleko team is ready to help protect your vision.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                <CalendarDays size={20} />
                Book Appointment
              </Link>

              <a
                href="tel:08186992818"
                className="inline-flex items-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                <Phone size={20} />
                Call Us
              </a>

              <Link
                href="/branches"
                className="inline-flex items-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                <Navigation size={20} />
                All Branches
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* SEO */}

      <section className="pb-20">

        <div className="container-site">

          <div className="rounded-3xl border bg-white p-10">

            <h2 className="text-3xl font-black">
              Eye Clinic in Eleko, Ibeju-Lekki
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              FORST EYE CLINIC Eleko provides comprehensive eye examinations,
              glaucoma management, cataract assessment, diabetic eye screening,
              children's eye care, dry eye treatment, optical dispensing,
              prescription glasses, contact lenses and preventive eye care for
              residents of Eleko, Ibeju-Lekki and neighboring communities.
              Our commitment is to deliver accessible, affordable and
              high-quality eye care using modern technology and evidence-based
              clinical practices.
            </p>

            <div className="mt-8">
              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center gap-2 font-semibold text-primary"
              >
                Schedule Your Appointment
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}