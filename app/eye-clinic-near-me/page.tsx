import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Eye Clinic Near Me | Best Eye Clinic in Lagos | FORST EYE CLINIC",
  description:
    "Looking for an eye clinic near you? FORST EYE CLINIC provides comprehensive eye examinations, glaucoma screening, cataract evaluation, children's eye care, diabetic eye screening, dry eye treatment, optical services and emergency eye care across Lagos.",

  keywords: [
    "eye clinic near me",
    "best eye clinic near me",
    "eye hospital near me",
    "eye doctor near me",
    "optometrist near me",
    "eye clinic in Lagos",
    "eye clinic in Ikeja",
    "eye clinic in Ogba",
    "FORST Eye Clinic",
  ],

  alternates: {
    canonical:
      "https://www.forsteyeclinic.com/eye-clinic-near-me",
  },
};

const services = [
  "Comprehensive Eye Examination",
  "Glaucoma Screening",
  "Cataract Assessment",
  "Dry Eye Treatment",
  "Children's Eye Care",
  "Diabetic Eye Screening",
  "Optical Services",
  "Prescription Glasses",
  "Contact Lens Fitting",
  "Low Vision Rehabilitation",
];

const branches = [
  "Ogba",
  "Surulere",
  "Festac",
  "Magodo",
  "Agbara",
  "Eleko",
];

const faqs = [
  {
    q: "How often should I have an eye examination?",
    a: "Adults should have a comprehensive eye examination every one to two years, while patients with glaucoma, diabetes or other eye conditions may require more frequent visits.",
  },
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended to reduce waiting time, but walk-in patients are also welcome at our clinics.",
  },
  {
    q: "Do you accept HMOs?",
    a: "Yes. FORST EYE CLINIC partners with several HMOs and insurance providers across Nigeria.",
  },
];

export default function EyeClinicNearMePage() {
  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="relative h-[420px] md:h-[560px]">

          <Image
            src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948981/Untitled_design_33_ugpsn6.png"
            alt="Eye Clinic Near Me"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center">

            <div className="container-site">

              <div className="max-w-3xl">

                <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
                  Trusted Eye Care Across Lagos
                </span>

                <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
                  Looking For An
                  <span className="block text-primary">
                    Eye Clinic Near You?
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
                  FORST EYE CLINIC provides comprehensive eye care,
                  modern diagnostic technology and experienced eye
                  care professionals across multiple Lagos locations.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                  <Link
                    href="/book-eye-appointment"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105"
                  >
                    <CalendarDays size={20} />
                    Book Appointment
                  </Link>

                  <Link
                    href="/branches"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary"
                  >
                    <Navigation size={20} />
                    Find A Branch
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="section">

        <div className="container-site">

          <div className="mx-auto max-w-4xl text-center">

            <h2>
              Professional Eye Care Services Near You
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              If you've searched for an <strong>eye clinic near me</strong>,
              you're in the right place. FORST EYE CLINIC delivers
              comprehensive eye examinations, glaucoma care,
              cataract evaluation, diabetic eye screening,
              pediatric eye care, dry eye management and quality
              optical services using advanced diagnostic equipment.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="section bg-neutral-50">

        <div className="container-site">

          <div className="text-center">

            <h2>Our Eye Care Services</h2>

            <p className="mt-4 text-neutral-600">
              Everything you need to protect your vision.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {services.map((service) => (

              <div
                key={service}
                className="rounded-3xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:border-primary"
              >
                <CheckCircle2
                  className="mx-auto text-primary"
                  size={30}
                />

                <h3 className="mt-4 font-bold">
                  {service}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BRANCHES */}

      <section className="section">

        <div className="container-site">

          <div className="text-center">

            <h2>Visit Any Of Our Lagos Branches</h2>

            <p className="mt-4 text-neutral-600">
              Quality eye care is always close to you.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {branches.map((branch) => (

              <div
                key={branch}
                className="rounded-3xl border p-8 text-center transition hover:border-primary hover:shadow-xl"
              >
                <MapPin
                  size={34}
                  className="mx-auto text-primary"
                />

                <h3 className="mt-5 text-2xl font-bold">
                  {branch}
                </h3>

                <Link
                  href="/branches"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-primary"
                >
                  View Branch
                  <ArrowRight size={18} />
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY */}

      <section className="section bg-primary text-white">

        <div className="container-site text-center">

          <h2 className="text-white">
            Why Choose FORST EYE CLINIC?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div>
              <h3 className="text-2xl font-bold">
                Experienced Professionals
              </h3>

              <p className="mt-4 text-white/90">
                Qualified eye care professionals committed to
                preserving your vision.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Modern Technology
              </h3>

              <p className="mt-4 text-white/90">
                Advanced diagnostic equipment for accurate
                diagnosis and treatment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Multiple Branches
              </h3>

              <p className="mt-4 text-white/90">
                Convenient locations across Lagos for easy access.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="section">

        <div className="container-site">

          <div className="mx-auto max-w-4xl">

            <h2 className="text-center">
              Frequently Asked Questions
            </h2>

            <div className="mt-12 space-y-6">

              {faqs.map((faq) => (

                <div
                  key={faq.q}
                  className="rounded-3xl border p-8"
                >
                  <h3 className="text-xl font-bold">
                    {faq.q}
                  </h3>

                  <p className="mt-4 leading-8 text-neutral-600">
                    {faq.a}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="section">

        <div className="container-site">

          <div className="rounded-[40px] bg-neutral-900 px-8 py-16 text-center text-white">

            <Phone
              className="mx-auto text-primary"
              size={44}
            />

            <h2 className="mt-6 text-white">
              Ready To Protect Your Vision?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-white/80 leading-8">
              Book your comprehensive eye examination today and
              experience professional eye care from one of Lagos'
              trusted eye clinics.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/book-eye-appointment"
                className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Book Appointment
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white px-8 py-4 font-semibold"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}