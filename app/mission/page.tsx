import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  HeartHandshake,
  Users,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Mission | FORST EYE CLINIC",
  description:
    "Discover the mission of FORST EYE CLINIC and our commitment to delivering professional, patient-centred eye care while promoting awareness of preventable eye diseases.",
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "Professional Excellence",
    description:
      "We provide comprehensive eye care using evidence-based clinical practices, modern diagnostic technology and experienced eye care professionals.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Every patient deserves respect, empathy and personalized attention throughout their eye care journey.",
  },
  {
    icon: GraduationCap,
    title: "Eye Health Education",
    description:
      "We believe informed patients make healthier decisions, which is why education is part of every consultation.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Through outreach programmes and preventive eye care awareness, we strive to improve vision and quality of life within our communities.",
  },
];

export default function MissionPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="border-b border-neutral-100 bg-gradient-to-b from-primary/5 to-white">

        <div className="container-site py-20 lg:py-28">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
              Our Mission
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
              Delivering Professional
              <span className="block text-primary">
                Eye Care With Purpose
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Everything we do is centred on protecting vision, improving lives
              and ensuring every patient receives quality eye care in a warm,
              professional and welcoming environment.
            </p>

          </div>

        </div>

      </section>

      {/* Mission Statement */}

      <section className="py-16 lg:py-24">

        <div className="container-site">

          <div className="mx-auto max-w-5xl rounded-[32px] border border-primary/10 bg-white p-8 text-center shadow-sm lg:p-14">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">

              <Target
                size={40}
                className="text-primary"
              />

            </div>

            <h2 className="mt-8 text-3xl font-bold text-neutral-900">
              Our Mission Statement
            </h2>

            <blockquote className="mx-auto mt-8 max-w-4xl text-2xl font-semibold leading-relaxed text-primary lg:text-4xl">
              "To provide eye care services with utmost professionalism and
              create a platform for raising awareness on preventable eye
              diseases."
            </blockquote>

          </div>

        </div>

      </section>

      {/* Mission Pillars */}

      <section className="bg-neutral-50 py-16 lg:py-24">

        <div className="container-site">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
              Our Core Focus
            </span>

            <h2 className="mt-6 text-4xl font-bold text-neutral-900">
              How We Fulfil Our Mission
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Our mission shapes the way we diagnose, treat and educate every
              patient who visits any FORST EYE CLINIC branch across Lagos.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                    <Icon
                      size={30}
                      className="text-primary"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 leading-8 text-neutral-600">
                    {pillar.description}
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
              Our Commitment to Every Patient
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              We are committed to providing comprehensive eye examinations,
              glaucoma screening, cataract assessment, diabetic eye screening,
              dry eye treatment, children's eye care, low vision rehabilitation,
              premium optical services and advanced diagnostic technology with
              the highest level of professionalism.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Beyond treating eye conditions, we are passionate about educating
              individuals, families and communities on preventive eye health,
              encouraging regular eye examinations and reducing avoidable
              blindness through early detection and timely intervention.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-neutral-200 bg-neutral-50 py-20">

        <div className="container-site">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
              Your Eye Health Matters
            </span>

            <h2 className="mt-6 text-4xl font-bold text-neutral-900">
              Let Us Help Protect Your Vision
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              Schedule a comprehensive eye examination with our experienced eye
              care professionals and experience compassionate, patient-centred
              care backed by modern technology and clinical excellence.
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