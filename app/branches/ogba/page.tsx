import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  CalendarDays,
  Navigation,
  CheckCircle2,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "FORST EYE CLINIC Ogba | Best Eye Clinic in Ogba, Ikeja, Lagos",
  description:
    "Visit FORST EYE CLINIC Ogba, our head office in Ikeja, Lagos, for comprehensive eye examinations, glaucoma care, cataract assessment, diabetic eye screening, children's eye care, dry eye treatment and premium optical services.",
  keywords: [
    "Eye Clinic Ogba",
    "Best Eye Clinic Ogba",
    "Eye Hospital Ogba",
    "Optometrist Ogba",
    "Eye Doctor Ogba",
    "Glaucoma Clinic Ogba",
    "Eye Clinic Ikeja",
    "Eye Examination Ogba",
    "Optical Store Ogba",
    "FORST EYE CLINIC",
  ],
  alternates: {
    canonical: "/branches/ogba",
  },
};

const services = [
  "Comprehensive Eye Examination",
  "Glaucoma Screening & Management",
  "Cataract Evaluation",
  "Diabetic Eye Screening",
  "Dry Eye Treatment",
  "Children's Eye Care",
  "OCT Imaging",
  "Optical Services",
];

export default function OgbaBranchPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Head Office
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            FORST EYE CLINIC
            <span className="block text-primary">
              Ogba, Ikeja
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Our Ogba branch serves as the headquarters of FORST EYE CLINIC,
            providing modern eye care with advanced diagnostic technology,
            experienced eye care professionals and compassionate patient care.
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
              Call Branch
            </a>
          </div>
        </div>
      </section>

      {/* Branch Information */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-neutral-200 p-8 text-center shadow-sm">
              <MapPin className="mx-auto text-primary" size={34} />

              <h3 className="mt-5 text-xl font-bold">
                Address
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                No. 14 Kayode Street,
                <br />
                Off Ijaiye Road,
                <br />
                Caterpillar Bus Stop,
                <br />
                Ogba, Ikeja, Lagos.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 p-8 text-center shadow-sm">
              <Clock3 className="mx-auto text-primary" size={34} />

              <h3 className="mt-5 text-xl font-bold">
                Opening Hours
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                Monday – Friday
                <br />
                9:00 AM – 6:00 PM
                <br /><br />
                Saturday
                <br />
                9:00 AM – 6:00 PM
                <br /><br />
                Sunday: Closed
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 p-8 text-center shadow-sm">
              <Building2 className="mx-auto text-primary" size={34} />

              <h3 className="mt-5 text-xl font-bold">
                Why Visit Us?
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                Modern diagnostic equipment, experienced clinicians,
                comprehensive eye care services and premium optical products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">
              Services Available
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              The Ogba branch offers comprehensive eye care for children,
              adults and seniors using modern technology and evidence-based
              clinical practice.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center transition hover:border-primary hover:shadow-md"
              >
                <CheckCircle2
                  className="mx-auto text-primary"
                  size={28}
                />

                <p className="mt-4 font-medium text-neutral-700">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="rounded-3xl border border-neutral-200 overflow-hidden shadow-sm">
            <iframe
              src="YOUR_GOOGLE_MAP_EMBED_LINK"
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-20">
        <div className="container-site">
          <div className="mx-auto max-w-5xl rounded-3xl border border-primary/10 bg-white p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-neutral-900 lg:text-4xl">
              Visit Our Ogba Head Office Today
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Whether you need a routine eye examination, glaucoma screening,
              children's eye care or premium optical services, our Ogba team is
              ready to provide quality eye care with professionalism and
              compassion.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-eye-appointment"
                className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Book Appointment
              </Link>

              <Link
                href="/branches"
                className="inline-flex items-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                <Navigation size={18} />
                View All Branches
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}