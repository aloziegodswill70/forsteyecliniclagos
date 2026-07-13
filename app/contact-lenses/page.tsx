import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Eye,
  CheckCircle2,
  CalendarDays,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Contact Lenses in Lagos | Professional Contact Lens Fitting | FORST Eye Clinic",
  description:
    "Looking for premium contact lenses in Lagos? FORST Eye Clinic provides professional contact lens fitting, soft contact lenses, toric lenses, multifocal lenses, coloured lenses and expert aftercare across our Lagos branches.",

  keywords: [
    "Contact lenses Lagos",
    "Contact lens fitting Ikeja",
    "Soft contact lenses Nigeria",
    "Multifocal contact lenses",
    "Toric contact lenses",
    "Daily disposable contact lenses",
    "Monthly contact lenses",
    "Eye clinic Lagos",
    "Optometrist Lagos",
    "FORST Eye Clinic",
  ],

  alternates: {
    canonical: "/contact-lenses",
  },
};

const lensTypes = [
  {
    title: "Daily Disposable Lenses",
    description:
      "Fresh lenses every day with maximum convenience, comfort and hygiene.",
  },
  {
    title: "Monthly Contact Lenses",
    description:
      "Reusable premium lenses suitable for everyday vision correction.",
  },
  {
    title: "Toric Contact Lenses",
    description:
      "Designed specifically for patients with astigmatism.",
  },
  {
    title: "Multifocal Contact Lenses",
    description:
      "Comfortable vision at near, intermediate and distance without reading glasses.",
  },
  {
    title: "Coloured Contact Lenses",
    description:
      "Enhance or change your eye colour safely under professional supervision.",
  },
  {
    title: "Digital Lifestyle Lenses",
    description:
      "Designed for people spending long hours on computers and digital devices.",
  },
];

const benefits = [
  "Natural appearance",
  "Excellent peripheral vision",
  "Comfort during sports",
  "No frame obstruction",
  "Premium oxygen permeability",
  "Professional fitting",
  "Comprehensive aftercare",
  "Wide range of lens brands",
];

export default function ContactLensesPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary/5 to-white py-20 lg:py-28">

        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-site relative z-10">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

                <Sparkles size={16} />

                Professional Contact Lens Clinic

              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-neutral-900 lg:text-6xl">

                Premium

                <span className="block text-primary">
                  Contact Lenses
                </span>

                For Clear, Comfortable Vision

              </h1>

              <p className="mt-8 text-lg leading-8 text-neutral-600">

                Experience freedom beyond spectacles with professionally
                fitted contact lenses from FORST Eye Clinic. We provide
                comprehensive eye examinations, contact lens fitting,
                premium lens brands and expert aftercare to ensure healthy,
                comfortable vision every day.

              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  <CalendarDays size={20} />

                  Book Lens Fitting

                </Link>

                <Link
                  href="/optical-store"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  Visit Optical Store

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="overflow-hidden rounded-[40px] shadow-xl">

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782943800/FEC2_uvmwgz.png"
                alt="Professional Contact Lens Fitting at FORST Eye Clinic"
                width={900}
                height={900}
                priority
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="container-site py-20">

        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

            Better Vision Starts Here

          </span>

          <h2 className="mt-6 text-4xl font-black text-neutral-900">

            Why Choose Contact Lenses?

          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">

            Contact lenses provide clear vision while allowing you to enjoy
            everyday life without depending on spectacles. Whether you are
            working, exercising, travelling or attending special occasions,
            professionally fitted contact lenses offer convenience,
            confidence and excellent visual performance.

          </p>

        </div>

      </section>

      {/* ================= TYPES ================= */}

      <section className="container-site pb-20">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {lensTypes.map((lens) => (

            <div
              key={lens.title}
              className="rounded-[30px] border border-neutral-200 bg-white p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                <Eye
                  size={30}
                  className="text-primary"
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold">

                {lens.title}

              </h3>

              <p className="mt-4 leading-7 text-neutral-600">

                {lens.description}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= BENEFITS ================= */}

      <section className="bg-neutral-50 py-20">

        <div className="container-site">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-4xl font-black">

              Benefits of Contact Lenses

            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (

              <div
                key={benefit}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >

                <CheckCircle2
                  className="text-primary"
                  size={24}
                />

                <p className="mt-4 font-medium">

                  {benefit}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* ================= CONTACT LENS FITTING PROCESS ================= */}

      <section className="container-site py-20">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-black text-neutral-900">
            Professional Contact Lens Fitting
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Every patient receives a comprehensive assessment before contact
            lenses are prescribed. This ensures excellent vision, maximum
            comfort and healthy eyes.
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              step: "01",
              title: "Comprehensive Eye Examination",
              desc: "A complete eye examination is performed to assess your vision and eye health.",
            },
            {
              step: "02",
              title: "Lens Selection",
              desc: "We recommend the best contact lens based on your prescription and lifestyle.",
            },
            {
              step: "03",
              title: "Professional Fitting",
              desc: "Your lenses are carefully fitted to ensure comfort, stability and clear vision.",
            },
            {
              step: "04",
              title: "Training & Aftercare",
              desc: "We teach insertion, removal, cleaning and proper lens care before follow-up visits.",
            },
          ].map((item) => (

            <div
              key={item.step}
              className="rounded-[30px] border border-neutral-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-lg"
            >

              <span className="text-5xl font-black text-primary/20">
                {item.step}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= WHO SHOULD WEAR ================= */}

      <section className="bg-neutral-50 py-20">

        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <Image
              src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/FEC3_vbulum.png"
              alt="Contact Lens Consultation"
              width={900}
              height={900}
              className="rounded-[36px] object-cover"
            />

          </div>

          <div>

            <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              Ideal Candidates
            </span>

            <h2 className="mt-6 text-4xl font-black">

              Who Can Benefit From
              <span className="block text-primary">
                Contact Lenses?
              </span>

            </h2>

            <div className="mt-8 space-y-5">

              {[
                "Students and professionals",
                "Athletes and active individuals",
                "Patients with myopia or hyperopia",
                "People with astigmatism",
                "Adults with presbyopia",
                "Anyone wanting freedom from spectacles",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    className="mt-1 text-primary"
                    size={20}
                  />

                  <span className="leading-7 text-neutral-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= LENS CARE ================= */}

      <section className="container-site py-20">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-4xl font-black">

            Contact Lens Care Tips

          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {[
              "Wash and dry your hands before handling lenses.",
              "Never sleep with lenses unless prescribed.",
              "Clean reusable lenses with recommended solutions.",
              "Replace lenses according to schedule.",
              "Never share contact lenses.",
              "Attend regular follow-up examinations.",
            ].map((tip) => (

              <div
                key={tip}
                className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-6"
              >

                <ShieldCheck
                  className="text-primary"
                  size={24}
                />

                <p className="leading-7 text-neutral-700">
                  {tip}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY FORST ================= */}

      <section className="container-site py-20">

        <div className="rounded-[40px] bg-primary px-8 py-16 text-center lg:px-20">

          <h2 className="text-4xl font-black text-white lg:text-5xl">

            Why Choose FORST Eye Clinic?

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">

            Our experienced optometrists provide comprehensive eye care,
            professional contact lens fitting, premium international lens
            brands and continuous aftercare to ensure safe, comfortable and
            healthy vision for every patient.

          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Experienced Optometrists",
              "Premium Contact Lens Brands",
              "Modern Eye Care Equipment",
              "Personalised Aftercare",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur"
              >

                <ShieldCheck
                  className="mx-auto text-white"
                  size={28}
                />

                <p className="mt-4 font-semibold text-white">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="container-site py-20">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-4xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-14 space-y-6">

            {[
              {
                q: "Can I wear contact lenses every day?",
                a: "Yes. Most patients can wear contact lenses daily when they are professionally fitted and used according to your optometrist's recommendations.",
              },
              {
                q: "Are contact lenses comfortable?",
                a: "Modern contact lenses are designed to be highly comfortable while providing excellent vision throughout the day.",
              },
              {
                q: "How long does a contact lens fitting take?",
                a: "A comprehensive fitting usually takes between 30 and 60 minutes depending on your prescription and eye health.",
              },
              {
                q: "Can children wear contact lenses?",
                a: "Yes. Selected children and teenagers may benefit from contact lenses following a professional assessment.",
              },
            ].map((faq) => (

              <div
                key={faq.q}
                className="rounded-3xl border border-neutral-200 bg-white p-8"
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

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-neutral-900">

        <div className="container-site py-20 text-center">

          <Eye
            className="mx-auto text-primary"
            size={60}
          />

          <h2 className="mt-8 text-4xl font-black text-white lg:text-5xl">

            Ready To Experience Better Vision?

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">

            Book a professional contact lens consultation today and let our
            experienced optometrists help you enjoy comfortable, clear and
            healthy vision with premium contact lenses.

          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <CalendarDays size={20} />

              Book Appointment

            </Link>

            <Link
              href="/optical-store"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-neutral-900"
            >
              Visit Optical Store

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}