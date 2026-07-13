import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  ScanEye,
  ShieldCheck,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Diabetic Eye Screening in Lagos | FORST EYE CLINIC",

  description:
    "Protect your vision with comprehensive diabetic eye screening at FORST EYE CLINIC. Early detection of diabetic retinopathy and other diabetes-related eye diseases using advanced diagnostic technology.",

  keywords: [
    "Diabetic Eye Screening Lagos",
    "Diabetic Retinopathy",
    "Diabetes Eye Test",
    "Retinal Examination",
    "Eye Clinic Lagos",
    "FORST Eye Clinic",
    "Diabetic Eye Care",
  ],
};

const services = [
  "Comprehensive Eye Examination",
  "Dilated Retinal Examination",
  "Digital Retinal Imaging",
  "Optic Nerve Assessment",
  "Macular Evaluation",
  "Vision Assessment",
  "Regular Monitoring",
  "Specialist Referral When Necessary",
];

const benefits = [
  "Early Detection of Diabetic Retinopathy",
  "Prevent Vision Loss",
  "Protect Central Vision",
  "Monitor Disease Progression",
  "Improve Long-term Eye Health",
  "Personalized Treatment Plan",
];

export default function DiabeticEyeScreeningPage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
                Diabetic Eye Care
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-neutral-900 lg:text-6xl">
                Diabetic
                <span className="block text-primary">
                  Eye Screening
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Diabetes can silently damage the retina before symptoms appear.
                Regular diabetic eye screening helps detect vision-threatening
                complications early and protects your sight through timely
                treatment and continuous monitoring.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/book-eye-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  <CalendarDays size={20} />
                  Book Screening
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-7 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto h-[340px] w-full max-w-lg overflow-hidden rounded-[32px] border border-neutral-200 shadow-lg lg:h-[520px]">
              <Image
                src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948981/Untitled_design_33_ugpsn6.png"
                alt="Diabetic Eye Screening"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black text-neutral-900 lg:text-5xl">
              What Your Screening Includes
            </h2>

            <p className="mt-6 leading-8 text-neutral-600">
              Every diabetic eye examination is designed to detect early
              retinal changes before permanent vision loss occurs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <ScanEye
                    size={28}
                    className="text-primary"
                  />
                </div>

                <h3 className="mt-5 font-bold text-neutral-900">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-neutral-900">
                Why Regular Screening Matters
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                Diabetic eye disease often develops without pain or noticeable
                symptoms. Routine eye examinations help preserve vision and
                reduce the risk of blindness.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-primary"
                    />

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldCheck
                  size={30}
                  className="text-primary"
                />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-neutral-900">
                Advanced Retinal Evaluation
              </h3>

              <p className="mt-6 leading-8 text-neutral-600">
                Our experienced eye care professionals carefully assess your
                retina, optic nerve and macula using modern diagnostic
                technology to detect diabetic eye disease as early as possible.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <Activity
                    size={24}
                    className="text-primary"
                  />

                  <span className="font-semibold">
                    Annual Eye Examination Recommended
                  </span>
                </div>

                <p className="mt-4 leading-7 text-neutral-600">
                  Every person living with diabetes should have a comprehensive
                  dilated eye examination at least once every year, even if
                  vision appears normal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 lg:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black text-neutral-900 lg:text-5xl">
              Protect Your Vision
              <span className="block text-primary">
                Before Symptoms Begin
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              Early diagnosis is the best defense against diabetic eye disease.
              Book your diabetic eye screening today at FORST EYE CLINIC and
              take an important step toward preserving your vision for years to
              come.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-eye-appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                <CalendarDays size={20} />
                Book Screening
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}