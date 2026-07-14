"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  GraduationCap,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const achievements = [
  {
    icon: <Stethoscope size={20} />,
    title: "35+ Years of Clinical Excellence",
    description:
      "Over three decades of comprehensive eye care, glaucoma management and vision rehabilitation.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Founder of FORST Eye Clinic",
    description:
      "Established FORST Eye Clinic in 1992 to make quality eye care accessible.",
  },
  {
    icon: <Award size={20} />,
    title: "Founder of Iven Optics Laboratory",
    description:
      "Pioneered Nigeria's first cut-to-polish optical laboratory.",
  },
  {
    icon: <GraduationCap size={20} />,
    title: "FAAO",
    description:
      "Fellow of the American Academy of Optometry.",
  },
];

export default function FounderCEO() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white py-14 lg:py-20">

      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-site relative z-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">

            <Sparkles size={14} />

            Leadership • Vision • Excellence

          </span>

          <h2 className="mt-5 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">

            Meet Our Founder &

            <span className="block text-primary">

              Chief Medical Director

            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600">

            FORST Eye Clinic was founded on a simple but powerful mission—
            providing exceptional, affordable and accessible eye care using
            modern technology and compassionate service.

          </p>

        </div>

        {/* Founder */}

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">

          {/* Image */}

          <div className="mx-auto w-full max-w-sm">

            <div className="relative overflow-hidden rounded-3xl shadow-xl">

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_39_u6qbly.png"
                alt="Dr Veronica Akuete"
                width={600}
                height={760}
                priority
                className="w-full object-cover"
              />

            </div>

            <div className="-mt-6 mx-auto w-fit rounded-2xl bg-white px-5 py-4 text-center shadow-lg">

              <h3 className="text-3xl font-black text-primary">

                35+

              </h3>

              <p className="text-xs font-semibold text-neutral-600">

                Years of Excellence

              </p>

            </div>

          </div>

          {/* Biography */}

          <div className="text-center lg:text-left">

            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">

              Founder & Chief Medical Director

            </span>

            <h3 className="mt-5 text-2xl font-black text-neutral-900 sm:text-3xl">

              Dr. Veronica Akuete

              <span className="block text-primary">

                OD, FAAO

              </span>

            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-600">

              Dr. Veronica Akuete is one of Nigeria's most accomplished
              optometrists, healthcare entrepreneurs and visionary leaders.
              For more than three decades she has dedicated her career to
              restoring sight, preventing avoidable blindness and improving
              access to quality eye care.

            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-600">

              Through clinical excellence, innovation and compassionate care,
              she has transformed FORST Eye Clinic into one of Nigeria's
              leading independent eye care institutions serving thousands of
              patients every year.

            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-600">

              Beyond clinical practice, she continues mentoring young
              professionals while advancing optometry and optical
              manufacturing across Nigeria.

            </p>

            <Link
              href="/founder-ceo"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:shadow-xl"
            >
              Read Full Biography

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>
                {/* ================= Achievements ================= */}

        <div className="mt-14">

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

            {achievements.map((item) => (

              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white
                  p-4
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-lg
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  "
                >
                  {item.icon}
                </div>

                <h4 className="mt-3 text-sm font-bold leading-5 text-neutral-900">

                  {item.title}

                </h4>

                <p className="mt-2 text-xs leading-6 text-neutral-600">

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* ================= Statistics ================= */}

        <div className="mx-auto mt-14 max-w-5xl">

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

            {[
              {
                value: "35+",
                label: "Years",
              },
              {
                value: "20K+",
                label: "Patients",
              },
              {
                value: "7",
                label: "Branches",
              },
              {
                value: "FAAO",
                label: "Recognition",
              },
            ].map((item) => (

              <div
                key={item.label}
                className="
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white
                  p-4
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-lg
                "
              >

                <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[#C9A227]" />

                <h3 className="text-2xl font-black text-primary">

                  {item.value}

                </h3>

                <p className="mt-1 text-xs font-medium text-neutral-600">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* ================= Bottom CTA ================= */}

        <div className="mx-auto mt-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">

            Discover More

          </span>

          <h3 className="mt-4 text-2xl font-black text-neutral-900 sm:text-3xl">

            Learn More About

            <span className="block text-primary">

              Dr. Veronica Akuete

            </span>

          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600">

            Discover the inspiring journey of one of Nigeria's foremost eye
            care leaders and how her vision continues to transform eye care
            through innovation, education and compassionate service.

          </p>

          <Link
            href="/founder-ceo"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-primary
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            View Full Biography

            <ArrowRight size={16} />

          </Link>

        </div>

      </div>

    </section>
  );
}