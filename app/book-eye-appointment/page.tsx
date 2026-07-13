import type { Metadata } from "next";
import {
  CalendarDays,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import { generateSEO } from "@/lib/seo";
import {
  LocalBusinessSchema,
  BreadcrumbSchema,
} from "@/components/seo";

import AppointmentForm from "@/components/forms/AppointmentForm";

export const metadata: Metadata = generateSEO({
  title: "Book Eye Appointment In Lagos | FORST Eye Clinic",
  description:
    "Book an eye examination, glaucoma consultation, cataract assessment, pediatric eye care, contact lens fitting, dry eye clinic, low vision assessment and other professional eye care services at FORST Eye Clinic.",
  path: "/book-eye-appointment",
});

const WHATSAPP = "2348186992818";

export default function BookAppointmentPage() {
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
            name: "Book Eye Appointment",
            url: "https://www.forsteyeclinic.com/book-eye-appointment",
          },
        ]}
      />

      <main className="bg-gradient-to-b from-white via-neutral-50/30 to-white">
        {/* Hero */}

        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

          <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

          <div className="container-site relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                <CalendarDays size={16} />
                Appointment Booking
              </span>

              <h1 className="mt-7 text-4xl font-black leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
                Book Your
                <span className="block text-primary">
                  Eye Care Appointment
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
                Schedule your comprehensive eye examination, glaucoma
                screening, cataract consultation, dry eye assessment,
                children's eye examination, contact lens fitting,
                optical services or low vision consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Options */}

        <section className="pb-20">
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Call */}

              <div className="rounded-[32px] border border-neutral-200 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Phone
                    className="text-primary"
                    size={34}
                  />
                </div>

                <h2 className="mt-6 text-2xl font-black">
                  Call Our Clinic
                </h2>

                <p className="mt-4 leading-7 text-neutral-600">
                  Speak directly with our patient care team.
                </p>

                <a
                  href="tel:08186992818"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-white"
                >
                  <Phone size={18} />
                  Call 08186992818
                </a>
              </div>

              {/* WhatsApp */}

              <div className="rounded-[32px] bg-primary p-8 text-center shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white">
                  <MessageCircle
                    className="text-primary"
                    size={34}
                  />
                </div>

                <h2 className="mt-6 text-2xl font-black text-white">
                  WhatsApp Booking
                </h2>

                <p className="mt-4 text-white/90">
                  Chat with our booking team instantly.
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-primary"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Online */}

              <div className="rounded-[32px] border border-neutral-200 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <CalendarDays
                    className="text-primary"
                    size={34}
                  />
                </div>

                <h2 className="mt-6 text-2xl font-black">
                  Online Booking
                </h2>

                <p className="mt-4 text-neutral-600">
                  Complete the form below to request an appointment.
                </p>

                <a
                  href="#appointment-form"
                  className="mt-8 inline-flex rounded-full border-2 border-primary px-7 py-4 font-semibold text-primary"
                >
                  Appointment Form
                </a>
              </div>
            </div>

            {/* Appointment Form */}

            <div
              id="appointment-form"
              className="mt-20"
            >
              <AppointmentForm />
            </div>

            {/* Why Choose Us */}

            <div className="mt-20">
              <h2 className="text-center text-4xl font-black">
                Why Choose FORST Eye Clinic?
              </h2>

              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Experienced Eye Care Professionals",
                  "Modern Diagnostic Equipment",
                  "Comprehensive Eye Examinations",
                  "Multiple Clinic Locations",
                  "Quality Optical Services",
                  "Personalized Patient Care",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-6"
                  >
                    <CheckCircle2
                      className="text-primary"
                      size={22}
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}

            <div className="mt-20 rounded-[36px] bg-primary p-10 text-white">
              <div className="grid gap-10 lg:grid-cols-3">
                <div>
                  <Clock size={32} />

                  <h3 className="mt-4 text-2xl font-bold">
                    Opening Hours
                  </h3>

                  <p className="mt-3">
                    Monday – Saturday
                    <br />
                    8:00 AM – 6:00 PM
                  </p>
                </div>

                <div>
                  <MapPin size={32} />

                  <h3 className="mt-4 text-2xl font-bold">
                    Branches
                  </h3>

                  <p className="mt-3">
                    Ogba
                    <br />
                    Festac
                    <br />
                    Surulere
                    <br />
                    Agbara
                    <br />
                    Ibeju-Lekki
                    <br />
                    Magodo
                  </p>
                </div>

                <div>
                  <Phone size={32} />

                  <h3 className="mt-4 text-2xl font-bold">
                    Contact
                  </h3>

                  <p className="mt-3">
                    08186992818
                  </p>

                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}