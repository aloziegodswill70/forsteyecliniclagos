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
    "FORST EYE CLINIC Magodo | Best Eye Clinic in Magodo, Lagos",
  description:
    "Visit FORST EYE CLINIC Magodo for comprehensive eye examinations, glaucoma screening, cataract assessment, diabetic eye screening, children's eye care, dry eye treatment and premium optical services.",
  keywords: [
    "Eye Clinic Magodo",
    "Best Eye Clinic Magodo",
    "Eye Hospital Magodo",
    "Optometrist Magodo",
    "Eye Doctor Magodo",
    "Glaucoma Clinic Magodo",
    "Eye Examination Magodo",
    "Optical Store Magodo",
    "FORST EYE CLINIC",
  ],
  alternates: {
    canonical: "/branches/magodo",
  },
};

const services = [
  "Comprehensive Eye Examination",
  "Glaucoma Screening & Management",
  "Cataract Assessment",
  "Diabetic Eye Screening",
  "Dry Eye Treatment",
  "Children's Eye Care",
  "OCT Imaging",
  "Optical Services",
];

export default function MagodoBranchPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            FORST EYE CLINIC
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            Magodo
            <span className="block text-primary">
              Branch
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Receive professional eye care from our experienced team at FORST
            EYE CLINIC Magodo. We provide comprehensive eye examinations,
            diagnosis, treatment and optical services using modern diagnostic
            technology in a comfortable environment.
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

      {/* Information */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-neutral-200 p-8 text-center shadow-sm">
              <MapPin className="mx-auto text-primary" size={34} />

              <h3 className="mt-5 text-xl font-bold">
                Branch Location
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                Magodo,
                <br />
                Lagos State,
                <br />
                Nigeria.
                <br />
                <span className="text-sm">
                  (Update with full address.)
                </span>
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
                <br />
                <br />
                Saturday
                <br />
                9:00 AM – 6:00 PM
                <br />
                <br />
                Sunday: Closed
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 p-8 text-center shadow-sm">
              <Building2 className="mx-auto text-primary" size={34} />

              <h3 className="mt-5 text-xl font-bold">
                Modern Eye Care
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                Personalized eye care delivered with professionalism,
                compassion and advanced diagnostic technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">
              Services Available
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              Our Magodo branch provides complete eye care services for
              children, adults and seniors.
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

      {/* Why Choose */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900">
            Why Choose Our Magodo Branch?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
            We combine experienced eye care professionals, modern diagnostic
            equipment and patient-centered care to help preserve, protect and
            improve your vision. Whether you require a routine eye examination,
            glaucoma management, diabetic eye screening or children's eye care,
            our team is committed to delivering quality care every visit.
          </p>
        </div>
      </section>

      {/* Map */}

      <section className="pb-16">
        <div className="container-site max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-sm">
            <iframe
              src="YOUR_MAGODO_GOOGLE_MAP_EMBED_LINK"
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
              Book an Appointment at Our Magodo Branch
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Looking for a trusted eye clinic in Magodo? Visit FORST EYE
              CLINIC for comprehensive eye examinations, glaucoma care,
              cataract evaluation, diabetic eye screening, children's eye care
              and professional optical services.
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