import type { Metadata } from "next";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  Navigation,
  Send,
} from "lucide-react";

import { generateSEO } from "@/lib/seo";

import {
  LocalBusinessSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/seo";

export const metadata: Metadata = generateSEO({
  title: "Contact Forst Eye Clinic | Eye Care Services In Lagos",
  description:
    "Contact Forst Eye Clinic for eye examinations, glaucoma care, dry eye treatment, low vision rehabilitation, pediatric eye care, optical services, and appointment bookings.",
  path: "/contact",
});

export default function ContactPage() {
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
            name: "Contact",
            url: "https://www.forsteyeclinic.com/contact",
          },
        ]}
      />

      <FAQSchema
        faqs={[
          {
            question: "Do I need an appointment?",
            answer:
              "Appointments are recommended but walk-in patients may be accommodated depending on availability.",
          },
          {
            question: "Can I book via WhatsApp?",
            answer:
              "Yes. Patients can contact our clinic through WhatsApp for appointment bookings and enquiries.",
          },
          {
            question: "Do you provide glaucoma screening?",
            answer:
              "Yes. We provide glaucoma screening, diagnosis, monitoring and management services.",
          },
        ]}
      />

      <main className="bg-white">
        {/* Hero */}

        <section className="py-16 lg:py-24">
          <div className="container-site max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-primary px-4 py-2 text-primary text-sm font-semibold">
              Contact Forst Eye Clinic
            </span>

            <h1 className="mt-5 text-primary">
              Get In Touch With Our Team
            </h1>

            <p className="mt-6 text-lg text-neutral-700 leading-8">
              Contact Forst Eye Clinic for appointments,
              consultations, directions, eye care enquiries,
              optical services, and professional eye care support.
            </p>
          </div>
        </section>

        {/* Contact Cards */}

        <section className="pb-20">
          <div className="container-site">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="card p-8 text-center">
                <Phone
                  size={40}
                  className="mx-auto text-primary"
                />

                <h2 className="mt-4 font-bold">
                  Call Us
                </h2>

                <p className="mt-3 text-neutral-600">
                  +234 800 000 0000
                </p>
              </div>

              <div className="card p-8 text-center">
                <Mail
                  size={40}
                  className="mx-auto text-primary"
                />

                <h2 className="mt-4 font-bold">
                  Email
                </h2>

                <p className="mt-3 text-neutral-600">
                  info@forsteyeclinic.com
                </p>
              </div>

              <div className="card p-8 text-center">
                <Clock3
                  size={40}
                  className="mx-auto text-primary"
                />

                <h2 className="mt-4 font-bold">
                  Hours
                </h2>

                <p className="mt-3 text-neutral-600">
                  Mon - Sat
                  <br />
                  8:00 AM - 6:00 PM
                </p>
              </div>

              <div className="card p-8 text-center">
                <MapPin
                  size={40}
                  className="mx-auto text-primary"
                />

                <h2 className="mt-4 font-bold">
                  Locations
                </h2>

                <p className="mt-3 text-neutral-600">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Form + CTA */}

            <div className="mt-16 grid gap-10 lg:grid-cols-2">
              {/* Form */}

              <div className="card p-8 lg:p-10">
                <h2 className="text-primary text-3xl font-bold">
                  Send A Message
                </h2>

                <form className="mt-8 space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input"
                  />

                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="input"
                  />

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send size={18} />

                    Send Message
                  </button>
                </form>
              </div>

              {/* Quick Actions */}

              <div className="space-y-6">
                <div className="card p-8">
                  <h3 className="text-primary text-2xl font-bold">
                    Book Appointment
                  </h3>

                  <p className="mt-4 text-neutral-700 leading-8">
                    Schedule an eye examination, glaucoma
                    consultation, dry eye evaluation, pediatric
                    eye care appointment, or optical consultation.
                  </p>

                  <Link
                    href="/book-eye-appointment"
                    className="btn-primary inline-flex mt-6"
                  >
                    Book Appointment
                  </Link>
                </div>

                <div className="card p-8">
                  <h3 className="text-primary text-2xl font-bold">
                    WhatsApp Us
                  </h3>

                  <p className="mt-4 text-neutral-700">
                    Chat directly with our team.
                  </p>

                  <a
                    href="https://wa.me/2348000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 mt-6"
                  >
                    <MessageCircle size={18} />

                    Open WhatsApp
                  </a>
                </div>

                <div className="card p-8">
                  <h3 className="text-primary text-2xl font-bold">
                    Get Directions
                  </h3>

                  <p className="mt-4 text-neutral-700">
                    Find the nearest Forst Eye Clinic branch.
                  </p>

                  <Link
                    href="/branches"
                    className="btn-primary inline-flex items-center gap-2 mt-6"
                  >
                    <Navigation size={18} />

                    View Branches
                  </Link>
                </div>
              </div>
            </div>

            {/* Branch Locations */}

            <div className="mt-20">
              <h2 className="text-primary text-center">
                Visit Our Branches
              </h2>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {[
                  "Ogba Branch",
                  "Festac Branch",
                  "Ikeja Branch",
                ].map((branch) => (
                  <div
                    key={branch}
                    className="card p-8"
                  >
                    <h3 className="font-bold text-xl">
                      {branch}
                    </h3>

                    <p className="mt-4 text-neutral-600">
                      Branch address will be added here.
                    </p>

                    <Link
                      href="/branches"
                      className="text-primary font-semibold mt-5 inline-block"
                    >
                      View Directions
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps */}

            <div className="mt-20">
              <h2 className="text-primary text-center">
                Find Us On Google Maps
              </h2>

              <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200">
                <iframe
                  src="https://maps.google.com/maps?q=Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="500"
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>
            </div>

            {/* SEO Content */}

            <div className="mt-20 rounded-3xl border border-neutral-200 p-8">
              <h2 className="text-primary text-2xl font-bold">
                Contact An Eye Clinic In Lagos
              </h2>

              <p className="mt-5 text-neutral-700 leading-8">
                Patients searching for an eye clinic near me,
                eye examination booking, glaucoma consultation,
                dry eye treatment, low vision clinic, pediatric
                eye care, cataract evaluation, optical services,
                and professional eye care in Lagos can contact
                Forst Eye Clinic by phone, WhatsApp, email, or
                online appointment request.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}