import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye,
  HeartHandshake,
  ShieldCheck,
  Microscope,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { generateSEO } from "@/lib/seo";
import {
  LocalBusinessSchema,
  BreadcrumbSchema,
} from "@/components/seo";

export const metadata: Metadata = generateSEO({
  title: "About Forst Eye Clinic | Professional Eye Care In Lagos",
  description:
    "Learn about Forst Eye Clinic, our mission, vision, values, eye care services, and commitment to delivering professional eye care across Lagos.",
  path: "/about",
});

const values = [
  {
    title: "Patient First",
    icon: HeartHandshake,
    description:
      "Every clinical decision is guided by the best interest of our patients.",
  },
  {
    title: "Clinical Excellence",
    icon: Microscope,
    description:
      "We utilize modern diagnostic technology and evidence-based eye care.",
  },
  {
    title: "Integrity",
    icon: ShieldCheck,
    description:
      "Transparency, professionalism, and ethical patient care remain central to our practice.",
  },
  {
    title: "Innovation",
    icon: Eye,
    description:
      "We continually improve our services through technology and ongoing learning.",
  },
];

export default function AboutPage() {
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
            name: "About",
            url: "https://www.forsteyeclinic.com/about",
          },
        ]}
      />

      <main className="bg-white">
        {/* Hero */}

        <section className="py-16 lg:py-24">
          <div className="container-site max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-primary px-4 py-2 text-primary text-sm font-semibold">
              About Forst Eye Clinic
            </span>

            <h1 className="mt-5 text-primary">
              Dedicated To Protecting And Improving Vision
            </h1>

            <p className="mt-6 text-lg text-neutral-700 leading-8">
              Forst Eye Clinic is committed to delivering
              comprehensive, patient-centered eye care services through
              clinical excellence, modern technology, and compassionate
              care across Lagos and surrounding communities.
            </p>
          </div>
        </section>

        {/* Story */}

        <section className="pb-20">
          <div className="container-site">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-primary">
                  Our Story
                </h2>

                <p className="mt-6 text-neutral-700 leading-8">
                  Forst Eye Clinic was established with a clear mission:
                  to make quality eye care accessible, affordable, and
                  professional for individuals and families.
                </p>

                <p className="mt-6 text-neutral-700 leading-8">
                  Through a combination of experienced eye care
                  professionals, advanced diagnostic technology, and a
                  patient-focused approach, we provide services that help
                  patients maintain healthy vision and improve their
                  quality of life.
                </p>

                <p className="mt-6 text-neutral-700 leading-8">
                  From routine eye examinations to glaucoma management,
                  dry eye treatment, pediatric eye care, low vision
                  rehabilitation, and optical services, our goal is to
                  support lifelong eye health.
                </p>
              </div>

              <div className="card p-10">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <Target
                      size={32}
                      className="text-primary"
                    />

                    <div>
                      <h3 className="font-bold text-xl">
                        Mission
                      </h3>

                      <p className="mt-2 text-neutral-600">
                        To provide exceptional eye care services that
                        improve vision, preserve eye health, and enhance
                        quality of life.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Users
                      size={32}
                      className="text-primary"
                    />

                    <div>
                      <h3 className="font-bold text-xl">
                        Vision
                      </h3>

                      <p className="mt-2 text-neutral-600">
                        To become one of the most trusted and respected
                        eye care providers in Nigeria through innovation,
                        expertise, and compassionate care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}

            <div className="mt-20">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-primary">
                  Our Core Values
                </h2>

                <p className="mt-4 text-neutral-600 leading-8">
                  These values guide every interaction, treatment
                  decision, and patient experience at Forst Eye Clinic.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {values.map((value) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={value.title}
                      className="card card-hover p-8"
                    >
                      <Icon
                        size={40}
                        className="text-primary"
                      />

                      <h3 className="mt-5 text-xl font-bold">
                        {value.title}
                      </h3>

                      <p className="mt-3 text-neutral-600 leading-7">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Trust Us */}

            <div className="mt-20 rounded-3xl bg-primary p-8 lg:p-12">
              <h2 className="text-white text-center">
                Why Patients Choose Forst Eye Clinic
              </h2>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {[
                  "Comprehensive Eye Examinations",
                  "Modern Diagnostic Equipment",
                  "Experienced Eye Care Team",
                  "Glaucoma Screening & Management",
                  "Dry Eye Treatment Solutions",
                  "Low Vision Rehabilitation",
                  "Pediatric Eye Care Services",
                  "Quality Optical Solutions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 size={20} />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}

            <div className="mt-20 text-center">
              <h2 className="text-primary">
                Experience Professional Eye Care
              </h2>

              <p className="mt-4 text-neutral-700 max-w-3xl mx-auto leading-8">
                Whether you need a routine eye examination, glaucoma
                consultation, dry eye evaluation, pediatric eye care, or
                optical services, our team is ready to help.
              </p>

              <div className="mt-8">
                <Link
                  href="/book-eye-appointment"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Book Appointment

                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* SEO Content */}

            <div className="mt-20 rounded-3xl border border-neutral-200 p-8">
              <h2 className="text-primary text-2xl font-bold">
                Professional Eye Care Services In Lagos
              </h2>

              <p className="mt-5 text-neutral-700 leading-8">
                Patients searching for the best eye clinic in Lagos,
                glaucoma clinic in Ikeja, dry eye clinic in Ogba,
                pediatric eye care services, low vision rehabilitation,
                cataract evaluation, eye examinations, and optical
                services can rely on Forst Eye Clinic for professional,
                patient-centered care supported by modern technology and
                experienced eye care professionals.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}