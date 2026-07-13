import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  Eye,
  Glasses,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Optical Store & Low Vision Centre | FORST Eye Clinic Lagos",

  description:
    "FORST Eye Clinic Optical Store offers premium prescription glasses, designer frames, contact lenses, digital lenses and professionally recommended low vision devices in Lagos.",

  keywords: [
    "Optical Store Lagos",
    "Eye Glasses Lagos",
    "Prescription Glasses",
    "Designer Frames",
    "Low Vision Centre Lagos",
    "Low Vision Devices Nigeria",
    "Electronic Magnifiers",
    "Contact Lenses",
    "FORST Eye Clinic",
  ],

  alternates: {
    canonical: "/optical-store",
  },
};

const gallery = [
  {
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/FEC1_we5i61.png",
    title: "Premium Prescription Eyewear",
  },
  {
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943800/FEC2_uvmwgz.png",
    title: "Designer Optical Frames",
  },
  {
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/FEC3_vbulum.png",
    title: "FORST Eye Clinic Optical Store",
  },
];

export default function OpticalStorePage() {
  return (
    <main className="bg-white">

      {/* =======================================================
            HERO
      ======================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white">

        <div className="container-site py-20 lg:py-28">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

              <Sparkles size={16} />

              Premium Optical Store

            </span>

            <h1 className="mt-8 text-4xl font-black leading-tight text-neutral-900 md:text-5xl xl:text-6xl">

              Premium Prescription Glasses

              <span className="block text-primary">
                Frames, Lenses & Low Vision Devices
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">

              Discover premium prescription eyewear,
              designer frames, contact lenses,
              blue light lenses, progressive lenses
              and professionally recommended
              low vision devices carefully selected
              by our experienced optometrists.

            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <CalendarDays size={20} />

                Book Eye Examination

              </Link>

              <Link
                href="/low-vision-store"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                <Eye size={20} />

                Browse Low Vision Catalogue

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =======================================================
            IMAGE GALLERY
      ======================================================= */}

      <section className="container-site py-20">

        <div className="grid gap-6 lg:grid-cols-3">

          {gallery.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-[32px] bg-neutral-100 shadow-lg"
            >

              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={700}
                className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =======================================================
            WHY CHOOSE FORST
      ======================================================= */}

      <section className="container-site py-10">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

              Why Choose FORST Optical Store

            </span>

            <h2 className="mt-6 text-4xl font-black text-neutral-900">

              Better Vision Begins With

              <span className="block text-primary">

                The Right Eyewear

              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">

              Every pair of glasses starts with a
              comprehensive eye examination.
              Our experienced optometrists
              recommend lenses and frames that
              match your prescription,
              occupation, lifestyle and visual
              needs, ensuring clearer vision,
              excellent comfort and long-term
              eye health.

            </p>

            <div className="mt-10">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                Speak With Our Optical Team

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

          <div className="grid gap-6">

            {[
              {
                icon: Glasses,
                title: "Premium Designer Frames",
                desc:
                  "Authentic modern eyewear from trusted international manufacturers.",
              },
              {
                icon: Eye,
                title: "Professional Eye Examination",
                desc:
                  "Every prescription is based on a comprehensive eye examination by licensed optometrists.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Optical Products",
                desc:
                  "Premium lenses, coatings and frames designed for long-lasting comfort and clearer vision.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-3xl border border-neutral-200 p-6 transition hover:border-primary hover:shadow-lg"
                >

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">

                    <Icon
                      size={30}
                      className="text-primary"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-neutral-600">
                      {item.desc}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>
            {/* =======================================================
            FEATURED LOW VISION DEVICES
      ======================================================= */}

      <section className="container-site py-20">

        <div className="text-center">

          <span className="rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Low Vision Rehabilitation
          </span>

          <h2 className="mt-5 text-4xl font-black text-neutral-900">
            Featured Low Vision Devices
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Explore professionally recommended low vision aids including
            handheld magnifiers, electronic magnifiers, telescopes,
            reading devices and daily living aids that help individuals
            maximize their remaining vision and independence.
          </p>

        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {Array.from({ length: 8 })
            .map((_, index) => index)
            .map((index) => {
              const product = [
                "Optelec Compact",
                "Eschenbach Powerlux",
                "Digital Video Magnifier",
                "Portable Telescope",
                "Reading Magnifier",
                "Electronic Reader",
                "Talking Device",
                "Braille Labels",
              ][index];

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-[30px] border border-neutral-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-64 items-center justify-center bg-neutral-50">

                    <Eye
                      size={60}
                      className="text-primary/30"
                    />

                  </div>

                  <div className="p-6">

                    <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                      Low Vision Device
                    </span>

                    <h3 className="mt-3 text-xl font-bold">
                      {product}
                    </h3>

                    <p className="mt-3 leading-7 text-neutral-600">
                      Professionally recommended after a comprehensive
                      low vision assessment by our optometrists.
                    </p>

                    <Link
                      href="/low-vision-store"
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                    >
                      View Catalogue

                      <ArrowRight size={18} />

                    </Link>

                  </div>

                </div>
              );
            })}

        </div>

      </section>

      {/* =======================================================
            STATISTICS
      ======================================================= */}

      <section className="container-site py-20">

        <div className="rounded-[36px] bg-neutral-50 p-10 lg:p-14">

          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">

            <div>

              <h3 className="text-5xl font-black text-primary">
                20+
              </h3>

              <p className="mt-3 font-medium text-neutral-700">
                Low Vision Devices
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-black text-primary">
                6
              </h3>

              <p className="mt-3 font-medium text-neutral-700">
                Clinic Locations
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-black text-primary">
                100%
              </h3>

              <p className="mt-3 font-medium text-neutral-700">
                Professional Assessment
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-black text-primary">
                4.9★
              </h3>

              <p className="mt-3 font-medium text-neutral-700">
                Patient Satisfaction
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =======================================================
            SEO CONTENT
      ======================================================= */}

      <section className="container-site py-20">

        <div className="mx-auto max-w-5xl">

          <h2 className="text-4xl font-black text-neutral-900">
            Your Trusted Optical Store in Lagos
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-600">

            <p>

              FORST Eye Clinic Optical Store provides premium prescription
              glasses, designer frames, digital lenses, blue light lenses,
              progressive lenses, children's eyewear, sunglasses, contact
              lenses and professionally recommended low vision devices.

            </p>

            <p>

              Every recommendation begins with a comprehensive eye
              examination to ensure your prescription is accurate and your
              eyewear matches your visual needs, occupation and lifestyle.
              Patients living with permanent visual impairment also benefit
              from specialized low vision assessment and rehabilitation
              services.

            </p>

            <p>

              Our experienced optometrists carefully assess each patient
              before recommending magnifiers, telescopes, electronic video
              magnifiers or other visual rehabilitation devices that promote
              independence and improve quality of life.

            </p>

          </div>

        </div>

      </section>

      {/* =======================================================
            QUICK LINKS
      ======================================================= */}

      <section className="container-site pb-20">

        <div className="rounded-[32px] border border-neutral-200 bg-white p-10">

          <h2 className="text-3xl font-black">
            Explore More Eye Care Services
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">

            {[
              {
                title: "Book Eye Examination",
                href: "/book-eye-appointment",
              },
              {
                title: "Low Vision Catalogue",
                href: "/low-vision-store",
              },
              {
                title: "Children Eye Care",
                href: "/children-eye-care",
              },
              {
                title: "Glaucoma Clinic",
                href: "/glaucoma-clinic",
              },
              {
                title: "Contact Us",
                href: "/contact",
              },
            ].map((item) => (

              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 font-medium transition hover:border-primary hover:bg-primary hover:text-white"
              >

                {item.title}

                <ArrowRight size={18} />

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* =======================================================
            CTA
      ======================================================= */}

      <section className="bg-primary">

        <div className="container-site py-20 text-center">

          <MessageCircle
            size={60}
            className="mx-auto text-white"
          />

          <h2 className="mt-8 text-4xl font-black text-white lg:text-5xl">
            Need Help Choosing the Right Eyewear?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">

            Whether you need prescription glasses, designer frames,
            contact lenses or low vision devices, our experienced
            optometrists are available to assess your vision and
            recommend the most suitable solution for your lifestyle.

          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-primary transition hover:scale-105"
            >

              <CalendarDays size={20} />

              Book Eye Examination

            </Link>

            <Link
              href="/low-vision-store"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary"
            >

              <Eye size={20} />

              Browse Low Vision Catalogue

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}