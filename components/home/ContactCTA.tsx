"use client";

import Link from "next/link";
import {
  Phone,
  CalendarDays,
  MessageCircle,
  Mail,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Book Your Appointment
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-neutral-900 md:text-5xl">
            Protect Your Vision
            <span className="block text-neutral-700">
              With Professional Eye Care
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-600">
            At <strong>FORST EYE CLINIC</strong>, we combine experienced eye
            care professionals with modern diagnostic technology to deliver
            comprehensive eye examinations, early diagnosis and personalized
            treatment for every patient.
          </p>

        </div>

        {/* Main Card */}

        <div className="mx-auto mt-14 max-w-6xl rounded-[32px] border border-neutral-200 bg-white p-8 shadow-lg lg:p-12">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left */}

            <div className="text-center lg:text-left">

              <h3 className="text-3xl font-bold text-neutral-900">
                Ready to Book Your Eye Examination?
              </h3>

              <p className="mt-5 leading-8 text-neutral-600">
                Whether you need a routine eye test, glaucoma screening,
                cataract evaluation, diabetic eye examination or children's eye
                care, our team is ready to help you maintain healthy vision.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-start justify-center">

                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-7 py-4 font-semibold text-white transition hover:bg-neutral-800"
                >
                  <CalendarDays size={20} />
                  Book Appointment
                </Link>

                <Link
                  href="https://wa.me/2348186992818"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 px-7 py-4 font-semibold text-neutral-800 transition hover:border-primary hover:text-primary"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl bg-neutral-50 p-8">

              <h3 className="text-2xl font-bold text-neutral-900 text-center">
                Contact Information
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-primary/10 p-3">
                    <Phone className="text-primary" size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900">
                      Phone Number
                    </h4>

                    <a
                      href="tel:08186992818"
                      className="mt-1 block text-neutral-600 hover:text-primary"
                    >
                      0818 699 2818
                    </a>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-primary/10 p-3">
                    <Mail className="text-primary" size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900">
                      Email Address
                    </h4>

                    <a
                      href="mailto:firsteyeclinic@gmail.com"
                      className="mt-1 block text-neutral-600 hover:text-primary"
                    >
                      firsteyeclinic@gmail.com
                    </a>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-primary/10 p-3">
                    <Clock3 className="text-primary" size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900">
                      Opening Hours
                    </h4>

                    <p className="mt-1 text-neutral-600">
                      Monday – Friday: 9:00 AM – 6:00 PM
                    </p>

                    <p className="text-neutral-600">
                      Saturday: 9:00 AM – 6:00 PM
                    </p>

                    <p className="text-neutral-600">
                      Sunday: Closed
                    </p>
                  </div>

                </div>

              </div>

              <div className="mt-8 text-center">

                <Link
                  href="/branches"
                  className="inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
                >
                  View All Branches

                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "6 Convenient Branches",
              text: "Accessible locations across Lagos providing quality eye care close to you.",
            },
            {
              title: "Comprehensive Eye Care",
              text: "Eye examinations, glaucoma care, cataract evaluation, diabetic screening and optical services.",
            },
            {
              title: "Trusted Professionals",
              text: "Experienced eye care specialists committed to preserving and improving your vision.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:shadow-md"
            >
              <h4 className="text-xl font-bold text-neutral-900">
                {item.title}
              </h4>

              <p className="mt-4 leading-7 text-neutral-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}