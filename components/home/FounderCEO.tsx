"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  Building2,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const achievements = [
  {
    icon: <Stethoscope size={24} />,
    title: "35+ Years of Clinical Excellence",
    description:
      "More than three decades dedicated to comprehensive eye care, glaucoma management, vision rehabilitation, and community eye health.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Founder of FORST Eye Clinic",
    description:
      "Established FORST Eye Clinic in 1992 with a vision of making world-class eye care accessible to every Nigerian.",
  },
  {
    icon: <Award size={24} />,
    title: "Founder of Iven Optics Laboratory",
    description:
      "Pioneered Nigeria's first cut-to-polish optical laboratory, advancing local optical manufacturing and lens production.",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "FAAO",
    description:
      "Fellow of the American Academy of Optometry, a globally respected recognition of professional excellence.",
  },
];

export default function FounderCEO() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white py-24">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-site relative z-10">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

            <Sparkles size={16} />

            Leadership • Vision • Excellence

          </span>

          <h2 className="mt-6 text-4xl font-black text-neutral-900 md:text-5xl">

            Meet Our Founder &

            <span className="block text-primary">

              Chief Medical Director

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">

            FORST Eye Clinic was founded on a simple but powerful mission—
            to provide exceptional, affordable and accessible eye care
            using modern technology, compassionate service and clinical
            excellence. Today, that vision continues to transform lives
            across Nigeria.

          </p>

        </div>

        {/* Main Content */}

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_39_u6qbly.png"
                alt="Dr Veronica Akuete - Founder of FORST Eye Clinic"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />

            </div>

            <div className="absolute -bottom-8 left-8 rounded-3xl bg-white p-6 shadow-xl">

              <p className="text-5xl font-black text-primary">

                35+

              </p>

              <p className="mt-2 font-semibold text-neutral-700">

                Years of Eye Care Excellence

              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

              Founder & Chief Medical Director

            </span>

            <h3 className="mt-6 text-4xl font-black text-neutral-900">

              Dr. Veronica Akuete

              <span className="block text-primary">

                OD, FAAO

              </span>

            </h3>

            <p className="mt-8 text-lg leading-8 text-neutral-600">

              Dr. Veronica Akuete is one of Nigeria's most accomplished
              optometrists, healthcare entrepreneurs and visionary leaders.
              For more than three decades, she has dedicated her career to
              restoring sight, preventing avoidable blindness and improving
              access to high-quality eye care for individuals and families
              across Nigeria.

            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">

              As the Founder and Chief Medical Director of FORST Eye Clinic,
              she has built one of Nigeria's leading independent eye care
              institutions through a relentless commitment to clinical
              excellence, innovation, ethical practice and compassionate
              patient care. Under her leadership, FORST Eye Clinic has grown
              into a trusted multi-branch eye care provider serving thousands
              of patients every year.

            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">

              Beyond clinical practice, Dr. Akuete has played a significant
              role in advancing optometry in Nigeria through mentorship,
              professional development and pioneering innovations in optical
              manufacturing, helping shape the next generation of eye care
              professionals.

            </p>

            <Link
              href="/founder-ceo"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 font-semibold text-white transition duration-300 hover:shadow-xl"
            >
              Read Full Biography

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>
                {/* Achievement Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item) => (

            <div
              key={item.title}
              className="group rounded-[30px] border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">

                {item.icon}

              </div>

              <h4 className="mt-6 text-xl font-bold text-neutral-900">

                {item.title}

              </h4>

              <p className="mt-4 leading-7 text-neutral-600">

                {item.description}

              </p>

            </div>

          ))}

        </div>

        {/* Leadership Banner */}

        <div className="mt-24 overflow-hidden rounded-[40px] bg-primary">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div className="px-10 py-16 text-white lg:px-14">

              <HeartHandshake
                size={60}
                className="text-white"
              />

              <h3 className="mt-8 text-4xl font-black leading-tight">

                A Legacy Built On
                <span className="block">

                  Compassion, Innovation
                  & Excellence

                </span>

              </h3>

              <p className="mt-8 text-lg leading-8 text-white/90">

                For over three decades, Dr. Veronica Akuete has remained
                committed to providing exceptional eye care while inspiring
                excellence across the optometry profession. Her leadership
                continues to shape FORST Eye Clinic into one of Nigeria's
                most respected destinations for comprehensive eye care,
                advanced diagnostics, glaucoma management, cataract care,
                paediatric eye care, low vision rehabilitation, premium
                optical services and preventive eye health.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur">

                  <p className="text-sm uppercase tracking-wide text-white/70">

                    Experience

                  </p>

                  <p className="text-2xl font-black">

                    35+ Years

                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur">

                  <p className="text-sm uppercase tracking-wide text-white/70">

                    Founded

                  </p>

                  <p className="text-2xl font-black">

                    Since 1992

                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur">

                  <p className="text-sm uppercase tracking-wide text-white/70">

                    Recognition

                  </p>

                  <p className="text-2xl font-black">

                    FAAO

                  </p>

                </div>

              </div>

            </div>

            <div className="relative h-full min-h-[620px]">

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_39_u6qbly.png"
                alt="Dr Veronica Akuete"
                fill
                className="object-cover object-top"
              />

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

            Discover More

          </span>

          <h3 className="mt-6 text-4xl font-black text-neutral-900">

            Learn More About
            <span className="block text-primary">

              Dr. Veronica Akuete

            </span>

          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">

            Discover the inspiring journey of one of Nigeria's foremost
            eye care leaders and learn how her passion for excellence
            continues to transform vision care through innovation,
            education and compassionate patient-centred practice.

          </p>

          <Link
            href="/founder-ceo"
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >

            View Full Biography

            <ArrowRight size={20} />

          </Link>

        </div>

      </div>

    </section>

  );
}