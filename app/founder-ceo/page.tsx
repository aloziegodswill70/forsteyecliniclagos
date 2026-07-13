import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Dr. Veronica Akuete (OD, FAAO) | Founder & Chief Medical Director | FORST Eye Clinic",

  description:
    "Meet Dr. Veronica Akuete (OD, FAAO), Founder and Chief Medical Director of FORST Eye Clinic. Learn about her remarkable career, achievements and vision for advancing eye care across Nigeria.",

  keywords: [
    "Dr Veronica Akuete",
    "Founder FORST Eye Clinic",
    "Chief Medical Director",
    "Optometrist Nigeria",
    "Eye Specialist Lagos",
    "FAAO",
    "Healthcare Leader Nigeria",
    "FORST Eye Clinic",
  ],

  alternates: {
    canonical: "/founder-ceo",
  },
};

const achievements = [
  {
    icon: <Building2 size={28} />,
    title: "Founder of FORST Eye Clinic",
    description:
      "Established FORST Eye Clinic in 1992 with a vision to deliver world-class eye care services across Nigeria.",
  },

  {
    icon: <Award size={28} />,
    title: "Founder of Iven Optics Laboratory",
    description:
      "Established Nigeria's first cut-to-polish optical laboratory, helping strengthen local optical manufacturing.",
  },

  {
    icon: <GraduationCap size={28} />,
    title: "Fellow of the American Academy of Optometry",
    description:
      "Earned the prestigious FAAO distinction in recognition of professional excellence.",
  },

  {
    icon: <Users size={28} />,
    title: "Mentor & Healthcare Leader",
    description:
      "Passionate about mentoring young optometrists while advancing quality eye care across Nigeria.",
  },
];

const facts = [
  "Founder & Chief Medical Director, FORST Eye Clinic",

  "More than 35 Years of Clinical Experience",

  "Fellow, American Academy of Optometry (FAAO)",

  "Founder, Iven Optics Laboratory",

  "Healthcare Entrepreneur",

  "Community Eye Health Advocate",

  "Mentor to Young Eye Care Professionals",

  "Leader in Clinical Excellence",
];

export default function FounderCEOPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary/5 to-white py-24 lg:py-32">

        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-primary/10 blur-3xl" />

        <div className="container-site relative z-10">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">

                <Sparkles size={16} />

                Founder • Visionary • Eye Care Leader

              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-neutral-900 lg:text-6xl">

                Dr. Veronica Akuete

                <span className="mt-3 block text-primary">
                  OD, FAAO
                </span>

              </h1>

              <p className="mt-6 text-xl font-semibold text-neutral-700">

                Founder & Chief Medical Director

                <br />

                FORST Eye Clinic

              </p>

              <p className="mt-8 text-lg leading-8 text-neutral-600">

                Dr. Veronica Akuete is one of Nigeria's most respected
                optometrists and healthcare entrepreneurs. Through
                visionary leadership, clinical excellence and a lifelong
                commitment to quality eye care, she has transformed
                FORST Eye Clinic into one of Nigeria's trusted eye care
                institutions, restoring sight and improving the lives of
                thousands of patients.

              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CalendarDays size={20} />

                  Book Appointment
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  About FORST Eye Clinic

                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            {/* IMAGE */}

            <div className="relative">

              <div className="overflow-hidden rounded-[40px] shadow-2xl">

                <Image
                  src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_39_u6qbly.png"
                  alt="Dr Veronica Akuete"
                  width={900}
                  height={1100}
                  priority
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="absolute -bottom-8 left-8 rounded-[28px] bg-white p-6 shadow-xl">

                <h3 className="text-5xl font-black text-primary">
                  35+
                </h3>

                <p className="mt-2 font-semibold text-neutral-700">
                  Years of Professional Excellence
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= BIO ================= */}

      <section className="container-site py-24">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              About Our Founder
            </span>

            <h2 className="mt-6 text-4xl font-black lg:text-5xl">

              A Life Dedicated To

              <span className="block text-primary">
                Restoring Vision
              </span>

            </h2>

          </div>

          <div className="mt-14 space-y-8 text-lg leading-9 text-neutral-600">

            <p>

              Dr. Veronica Akuete has dedicated more than three decades
              to advancing eye care in Nigeria through clinical
              excellence, innovation and compassionate patient care. Her
              work has positively impacted thousands of individuals,
              families and communities by providing accessible,
              affordable and world-class vision care.

            </p>

            <p>

              As the Founder and Chief Medical Director of FORST Eye
              Clinic, she has built a culture centred on professionalism,
              integrity, continuous learning and patient satisfaction.
              Her leadership has inspired generations of healthcare
              professionals while expanding access to comprehensive eye
              care services throughout Lagos.

            </p>

            <p>

              Beyond her clinical responsibilities, Dr. Akuete continues
              to mentor young optometrists, champion public eye health
              education and support innovations that strengthen Nigeria's
              optical and eye care industries.

            </p>

          </div>

        </div>

      </section>

      {/* ================= QUICK FACTS ================= */}

      <section className="bg-neutral-50 py-24">

        <div className="container-site">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                Professional Highlights
              </span>

              <h2 className="mt-6 text-4xl font-black">
                Quick Facts
              </h2>

              <div className="mt-10 grid gap-5">

                {facts.map((fact) => (

                  <div
                    key={fact}
                    className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5"
                  >

                    <ShieldCheck
                      className="mt-1 text-primary"
                      size={22}
                    />

                    <span className="text-lg text-neutral-700">
                      {fact}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_39_u6qbly.png"
                alt="Founder of FORST Eye Clinic"
                width={900}
                height={1100}
                className="rounded-[40px] object-cover shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section className="container-site py-24">

        <div className="text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Leadership & Excellence
          </span>

          <h2 className="mt-6 text-4xl font-black">

            Building A Legacy That

            <span className="block text-primary">
              Continues To Inspire
            </span>

          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item) => (

            <div
              key={item.title}
              className="rounded-[30px] border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                {item.icon}

              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>
            {/* ================= PROFESSIONAL JOURNEY ================= */}

      <section className="bg-neutral-50 py-24">

        <div className="container-site">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              Professional Journey
            </span>

            <h2 className="mt-6 text-4xl font-black lg:text-5xl">

              A Career Built On

              <span className="block text-primary">
                Vision, Service & Excellence
              </span>

            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {[
              {
                year: "1992",
                title: "Founded FORST Eye Clinic",
                desc: "Established FORST Eye Clinic with a vision of delivering affordable, patient-centred and world-class eye care.",
              },
              {
                year: "2000+",
                title: "Expanded Clinical Services",
                desc: "Introduced advanced diagnostic equipment, comprehensive eye examinations and specialist eye care services.",
              },
              {
                year: "Professional Growth",
                title: "Mentorship & Leadership",
                desc: "Mentored numerous optometrists while promoting excellence in clinical practice and healthcare leadership.",
              },
              {
                year: "Today",
                title: "Growing Across Lagos",
                desc: "FORST Eye Clinic continues to expand its impact through multiple branches and thousands of satisfied patients.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-[30px] border border-neutral-200 bg-white p-8"
              >

                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  {item.year}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= BUILDING FORST ================= */}

      <section className="container-site py-24">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <Image
              src="https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_39_u6qbly.png"
              alt="Dr Veronica Akuete"
              width={900}
              height={1100}
              className="rounded-[40px] object-cover shadow-2xl"
            />

          </div>

          <div>

            <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              Building FORST Eye Clinic
            </span>

            <h2 className="mt-6 text-4xl font-black">

              From One Vision

              <span className="block text-primary">
                To A Trusted Eye Care Brand
              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">

              Under Dr. Veronica Akuete's leadership, FORST Eye Clinic has
              grown into one of Nigeria's respected independent eye care
              providers. The clinic now offers comprehensive eye
              examinations, glaucoma management, cataract care, diabetic
              eye screening, children's eye care, contact lenses,
              low-vision rehabilitation and premium optical services.

            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">

              Every patient who walks through our doors benefits from a
              culture of professionalism, compassion, innovation and
              evidence-based clinical practice that has remained unchanged
              since the clinic was founded.

            </p>

          </div>

        </div>

      </section>

      {/* ================= LEADERSHIP ================= */}

      <section className="bg-primary py-24 text-white">

        <div className="container-site">

          <div className="mx-auto max-w-4xl text-center">

            <Award
              size={60}
              className="mx-auto"
            />

            <h2 className="mt-8 text-4xl font-black lg:text-5xl">

              Leadership That

              <span className="block">
                Inspires Excellence
              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90">

              Dr. Veronica Akuete believes that outstanding healthcare is
              built on compassion, innovation, continuous learning and
              integrity. These principles continue to shape the culture,
              standards and patient experience at FORST Eye Clinic.

            </p>

          </div>

        </div>

      </section>

      {/* ================= VALUES ================= */}

      <section className="container-site py-24">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Clinical Excellence",
              desc: "Delivering evidence-based eye care using modern diagnostic technology.",
            },
            {
              title: "Innovation",
              desc: "Continuously embracing new ideas that improve patient outcomes.",
            },
            {
              title: "Compassion",
              desc: "Treating every patient with dignity, empathy and personalised care.",
            },
            {
              title: "Mentorship",
              desc: "Developing the next generation of eye care professionals in Nigeria.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-[30px] border border-neutral-200 bg-white p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                <Users
                  size={28}
                  className="text-primary"
                />

              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="container-site pb-24">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-primary to-red-600 px-10 py-20 text-center text-white">

          <h2 className="text-4xl font-black lg:text-5xl">

            Experience Eye Care

            <span className="block">
              Led By Excellence
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90">

            Discover why thousands of patients trust FORST Eye Clinic for
            comprehensive eye examinations, advanced diagnostics,
            specialist treatments and premium optical services under the
            leadership of Dr. Veronica Akuete.

          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-primary transition hover:scale-105"
            >

              <CalendarDays size={20} />

              Book Appointment

            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary"
            >

              Learn More

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}