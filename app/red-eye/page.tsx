import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye,
  AlertCircle,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  ShieldPlus,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Red Eye Treatment in Lagos | FORST EYE CLINIC",
  description:
    "Get expert diagnosis and treatment for red eyes at FORST EYE CLINIC. We treat eye infections, allergies, dry eyes, conjunctivitis and other causes of red eyes using modern diagnostic technology.",
  keywords: [
    "Red Eye Treatment Lagos",
    "Red Eyes",
    "Eye Infection",
    "Conjunctivitis",
    "Pink Eye",
    "Dry Eye",
    "Eye Allergy",
    "Eye Clinic Lagos",
    "FORST EYE CLINIC",
  ],
  alternates: {
    canonical: "/red-eye",
  },
};

const causes = [
  "Conjunctivitis (Pink Eye)",
  "Dry Eye Disease",
  "Eye Allergies",
  "Eye Infection",
  "Foreign Body in the Eye",
  "Eye Injury",
  "Corneal Disease",
  "Glaucoma (Emergency Cases)",
];

const symptoms = [
  "Redness of one or both eyes",
  "Eye irritation or burning sensation",
  "Watery or sticky discharge",
  "Itching",
  "Blurred vision",
  "Pain or light sensitivity",
];

export default function RedEyePage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="container-site max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Red Eye Treatment
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 lg:text-6xl">
            Professional Care for
            <span className="block text-primary">
              Red Eyes
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Red eyes may be caused by infections, allergies, dry eye disease,
            injuries or other eye conditions. At <strong>FORST EYE CLINIC</strong>,
            we accurately diagnose the underlying cause and provide appropriate
            treatment to restore your eye comfort and protect your vision.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white hover:opacity-90"
            >
              <CalendarDays size={20} />
              Book Appointment
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-primary px-8 py-4 font-semibold text-primary hover:bg-primary hover:text-white"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Causes */}

      <section className="py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">
              Common Causes of Red Eyes
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              A red eye is a symptom—not a disease. Proper diagnosis is essential
              because treatment depends on the underlying cause.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {causes.map((cause) => (
              <div
                key={cause}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary"
              >
                <AlertCircle className="mx-auto text-primary" size={34} />

                <p className="mt-4 font-medium text-neutral-700">
                  {cause}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms */}

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-site max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900">
                Symptoms That Require Immediate Attention
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                If your red eye is accompanied by pain, blurred vision or light
                sensitivity, seek professional eye care immediately.
              </p>

              <div className="mt-8 space-y-4">
                {symptoms.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 text-primary"
                    />

                    <span className="text-neutral-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldPlus className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                How We Treat Red Eyes
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Comprehensive eye examination",
                  "Digital eye health assessment",
                  "Treatment of infections",
                  "Dry eye evaluation",
                  "Allergy management",
                  "Follow-up care when necessary",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <Eye className="mt-1 text-primary" size={20} />
                    <p className="text-neutral-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20">
        <div className="container-site">
          <div className="mx-auto max-w-5xl rounded-3xl border border-primary/10 bg-white p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-neutral-900 lg:text-4xl">
              Don't Ignore a Red Eye
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              While some causes are minor, others can threaten your vision.
              Visit FORST EYE CLINIC for a comprehensive eye examination and
              receive prompt, professional treatment.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-eye-appointment"
                className="rounded-xl bg-primary px-8 py-4 font-semibold text-white hover:opacity-90"
              >
                Book Appointment
              </Link>

              <Link
                href="/eye-examination"
                className="rounded-xl border border-primary px-8 py-4 font-semibold text-primary hover:bg-primary hover:text-white"
              >
                Eye Examination
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}