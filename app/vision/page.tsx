import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye,
  Globe,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Vision | FORST EYE CLINIC",
  description:
    "Learn about the vision of FORST EYE CLINIC and our commitment to delivering quality eye care services through innovation, professionalism and global best practices.",
};

const pillars = [
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "Continuously adopting modern eye care technologies and evidence-based clinical practices to improve patient outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Care",
    description:
      "Maintaining the highest standards of clinical excellence, patient safety and professional ethics in every consultation.",
  },
  {
    icon: Globe,
    title: "Global Best Practices",
    description:
      "Building a future where our services align with internationally recognized standards in eye care delivery.",
  },
  {
    icon: HeartHandshake,
    title: "Accessible Eye Care",
    description:
      "Expanding quality eye care through innovative service delivery and strategic growth to reach more communities.",
  },
];

export default function VisionPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="border-b border-neutral-100 bg-gradient-to-b from-primary/5 to-white">

        <div className="container-site py-20 lg:py-28">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
              Our Vision
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
              Building the Future of
              <span className="block text-primary">
                Quality Eye Care
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              At <strong>FORST EYE CLINIC (FEC)</strong>, our vision guides
              every decision we make, every patient we serve and every
              community we reach. We are committed to raising the standard of
              eye care through innovation, excellence and compassionate service.
            </p>

          </div>

        </div>

      </section>

      {/* Vision Statement */}

      <section className="py-16 lg:py-24">

        <div className="container-site">

          <div className="mx-auto max-w-5xl rounded-[32px] border border-primary/10 bg-white p-8 text-center shadow-sm lg:p-14">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">

              <Eye className="text-primary" size={40} />

            </div>

            <h2 className="mt-8 text-3xl font-bold text-neutral-900">
              Our Vision Statement
            </h2>

            <blockquote className="mx-auto mt-8 max-w-4xl text-2xl font-semibold leading-relaxed text-primary lg:text-4xl">
              “To establish quality eye care services through innovative
              franchising with global best practices.”
            </blockquote>

          </div>

        </div>

      </section>

      {/* Vision Pillars */}

      <section className="bg-neutral-50 py-16 lg:py-24">

        <div className="container-site">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
              What Our Vision Means
            </span>

            <h2 className="mt-6 text-4xl font-bold text-neutral-900">
              Our Commitment to Excellence
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Every patient interaction reflects our dedication to delivering
              exceptional eye care services while continually improving the way
              we serve individuals, families and communities.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                    <Icon className="text-primary" size={30} />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-neutral-600">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Commitment */}

      <section className="py-16 lg:py-24">

        <div className="container-site">

          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-4xl font-bold text-neutral-900">
              Looking Ahead
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Our vision is more than a statement—it is our long-term commitment
              to transforming lives through accessible, affordable and
              world-class eye care. By investing in modern diagnostic
              technology, continuous professional development and patient-centred
              care, we aim to become one of the most trusted eye care providers
              in Nigeria and beyond.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Every consultation, every diagnosis and every treatment is another
              step toward a future where preventable blindness is reduced and
              more people enjoy healthy vision for life.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-neutral-200 bg-neutral-50 py-20">

        <div className="container-site">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
              Protect Your Vision
            </span>

            <h2 className="mt-6 text-4xl font-bold text-neutral-900">
              Experience Professional Eye Care
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              Join thousands of patients who trust FORST EYE CLINIC for
              comprehensive eye examinations, glaucoma care, cataract
              evaluation, diabetic eye screening, children's eye care, optical
              services and advanced diagnostic technology.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                <CalendarDays size={20} />
                Book Appointment
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}