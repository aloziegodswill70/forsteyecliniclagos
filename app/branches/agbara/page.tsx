import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  Navigation,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Forst Eye Clinic Agbara | Best Eye Clinic in Agbara, Ogun State",
  description:
    "Visit Forst Eye Clinic Agbara for comprehensive eye examinations, glaucoma screening, cataract assessment, diabetic eye screening, children's eye care, dry eye treatment, prescription glasses and optical services.",

  keywords: [
    "Eye Clinic Agbara",
    "Best Eye Clinic Agbara",
    "Eye Hospital Agbara",
    "Eye Doctor Agbara",
    "Optometrist Agbara",
    "Glaucoma Clinic Agbara",
    "Dry Eye Treatment Agbara",
    "Cataract Assessment Agbara",
    "Children Eye Clinic Agbara",
    "Optical Shop Agbara",
    "Prescription Glasses Agbara",
    "Forst Eye Clinic Agbara",
  ],
};

const services = [
  "Comprehensive Eye Examination",
  "Glaucoma Screening & Management",
  "Cataract Assessment",
  "Diabetic Eye Screening",
  "Children's Eye Care",
  "Dry Eye Treatment",
  "Low Vision Care",
  "Optical Services",
  "Prescription Glasses",
  "Contact Lens Services",
];

export default function AgbaraBranchPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="container-site py-20 text-center">

          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Agbara Branch
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            FORST EYE CLINIC
            <span className="block text-primary">
              Agbara
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Professional eye care services for individuals and families in
            Agbara and surrounding communities. Our experienced eye care team
            provides modern diagnostic technology, comprehensive eye
            examinations, glaucoma care, cataract assessment and premium
            optical services.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white"
            >
              <CalendarDays size={20} />
              Book Appointment
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-primary px-7 py-4 font-semibold text-primary"
            >
              <Phone size={20} />
              Contact Branch
            </Link>

          </div>

        </div>
      </section>

      {/* Information */}

      <section className="py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl border border-neutral-200 bg-white p-8">

            <h2 className="text-3xl font-bold text-neutral-900">
              Branch Information
            </h2>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <MapPin className="mt-1 text-primary" />

                <div>
                  <h3 className="font-semibold">
                    Address
                  </h3>

                  <p className="mt-1 text-neutral-600">
                    Agbara,
                    Ogun State,
                    Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 text-primary" />

                <div>
                  <h3 className="font-semibold">
                    Telephone
                  </h3>

                  <p className="mt-1 text-neutral-600">
                    Contact our head office for appointments and enquiries.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock3 className="mt-1 text-primary" />

                <div>
                  <h3 className="font-semibold">
                    Opening Hours
                  </h3>

                  <p className="text-neutral-600">
                    Monday – Friday
                  </p>

                  <p className="text-neutral-600">
                    9:00 AM – 6:00 PM
                  </p>

                  <p className="mt-2 text-neutral-600">
                    Saturday
                  </p>

                  <p className="text-neutral-600">
                    9:00 AM – 6:00 PM
                  </p>

                  <p className="mt-2 text-neutral-600">
                    Sunday — Closed
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">

            <h2 className="text-3xl font-bold text-neutral-900">
              Services Available
            </h2>

            <div className="mt-8 grid gap-4">

              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-primary"
                  />

                  <span>{service}</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* Why Choose */}

      <section className="bg-neutral-50 py-20">
        <div className="container-site max-w-4xl text-center">

          <h2 className="text-3xl font-bold text-neutral-900">
            Why Choose Our Agbara Branch?
          </h2>

          <p className="mt-6 leading-8 text-neutral-600">
            Patients in Agbara trust FORST EYE CLINIC because we combine
            experienced eye care professionals with advanced diagnostic
            technology and compassionate patient care. Whether you require a
            routine eye examination, glaucoma screening, cataract evaluation,
            diabetic eye screening, children's eye care or prescription
            glasses, our team is committed to protecting your vision.
          </p>

        </div>
      </section>

      {/* CTA */}

      <section className="py-20">
        <div className="container-site">

          <div className="rounded-3xl border border-primary/10 bg-primary/5 p-10 text-center">

            <h2 className="text-3xl font-bold text-neutral-900">
              Schedule Your Eye Examination Today
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Early detection helps prevent avoidable vision loss. Visit FORST
              EYE CLINIC Agbara for professional eye care delivered with
              excellence and compassion.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white"
              >
                <CalendarDays size={20} />
                Book Appointment
              </Link>

              <Link
                href="/branches"
                className="inline-flex items-center gap-2 rounded-xl border border-primary px-7 py-4 font-semibold text-primary"
              >
                <Navigation size={20} />
                View All Branches
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}