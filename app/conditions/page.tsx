import type { Metadata } from "next";
import Link from "next/link";

import {
  Eye,
  ShieldAlert,
  Droplets,
  ScanEye,
  Glasses,
  Monitor,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { generateSEO } from "@/lib/seo";

import {
  LocalBusinessSchema,
  BreadcrumbSchema,
} from "@/components/seo";

export const metadata: Metadata = generateSEO({
  title: "Eye Conditions We Treat | Forst Eye Clinic Lagos",
  description:
    "Learn about glaucoma, cataracts, dry eye disease, diabetic retinopathy, myopia, hyperopia, astigmatism, keratoconus and other eye conditions treated at Forst Eye Clinic.",
  path: "/conditions",
});

const conditions = [
  {
    name: "Glaucoma",
    icon: ShieldAlert,
    href: "/conditions/glaucoma",
    description:
      "A group of eye diseases that damage the optic nerve and may lead to permanent vision loss.",
  },

  {
    name: "Cataract",
    icon: ScanEye,
    href: "/conditions/cataract",
    description:
      "Clouding of the eye's natural lens causing blurred vision and reduced visual quality.",
  },

  {
    name: "Dry Eye Disease",
    icon: Droplets,
    href: "/conditions/dry-eye",
    description:
      "A common condition that occurs when tears cannot adequately lubricate the eyes.",
  },

  {
    name: "Myopia (Short Sightedness)",
    icon: Glasses,
    href: "/conditions/myopia",
    description:
      "Difficulty seeing distant objects clearly due to refractive error.",
  },

  {
    name: "Hyperopia (Long Sightedness)",
    icon: Eye,
    href: "/conditions/hyperopia",
    description:
      "Difficulty focusing on nearby objects due to refractive error.",
  },

  {
    name: "Astigmatism",
    icon: Eye,
    href: "/conditions/astigmatism",
    description:
      "Blurred or distorted vision caused by an irregularly shaped cornea.",
  },

  {
    name: "Presbyopia",
    icon: Glasses,
    href: "/conditions/presbyopia",
    description:
      "Age-related difficulty focusing on near objects.",
  },

  {
    name: "Diabetic Retinopathy",
    icon: Eye,
    href: "/conditions/diabetic-retinopathy",
    description:
      "Damage to retinal blood vessels caused by diabetes.",
  },

  {
    name: "Macular Degeneration",
    icon: Eye,
    href: "/conditions/macular-degeneration",
    description:
      "Progressive deterioration of the macula affecting central vision.",
  },

  {
    name: "Keratoconus",
    icon: Eye,
    href: "/conditions/keratoconus",
    description:
      "Progressive thinning and bulging of the cornea causing distorted vision.",
  },

  {
    name: "Amblyopia",
    icon: Eye,
    href: "/conditions/amblyopia",
    description:
      "Reduced vision in one eye due to abnormal visual development.",
  },

  {
    name: "Strabismus",
    icon: Eye,
    href: "/conditions/strabismus",
    description:
      "Misalignment of the eyes affecting binocular vision.",
  },

  {
    name: "Computer Vision Syndrome",
    icon: Monitor,
    href: "/conditions/computer-vision-syndrome",
    description:
      "Digital eye strain associated with prolonged screen use.",
  },
];

export default function ConditionsPage() {
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
            name: "Conditions",
            url: "https://www.forsteyeclinic.com/conditions",
          },
        ]}
      />

      <main className="bg-white">
        {/* Hero */}

        <section className="py-16 lg:py-24">
          <div className="container-site max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-primary px-4 py-2 text-primary text-sm font-semibold">
              Eye Conditions
            </span>

            <h1 className="mt-5 text-primary">
              Eye Conditions We Diagnose And Manage
            </h1>

            <p className="mt-6 text-lg text-neutral-700 leading-8">
              Early detection and treatment of eye diseases can help
              preserve vision and prevent complications. Learn about
              common eye conditions managed at Forst Eye Clinic.
            </p>
          </div>
        </section>

        {/* Conditions Grid */}

        <section className="pb-20">
          <div className="container-site">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {conditions.map((condition) => {
                const Icon = condition.icon;

                return (
                  <Link
                    key={condition.name}
                    href={condition.href}
                    className="card card-hover p-8 group"
                  >
                    <Icon
                      size={48}
                      className="text-primary"
                    />

                    <h2 className="mt-6 text-xl font-bold">
                      {condition.name}
                    </h2>

                    <p className="mt-4 text-neutral-600 leading-7">
                      {condition.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
                      Learn More

                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Symptoms Section */}

            <div className="mt-20 rounded-3xl bg-primary p-8 lg:p-12">
              <h2 className="text-white text-center">
                Symptoms You Should Never Ignore
              </h2>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {[
                  "Blurred Vision",
                  "Sudden Vision Loss",
                  "Eye Pain",
                  "Double Vision",
                  "Persistent Headaches",
                  "Flashes And Floaters",
                  "Red Eyes",
                  "Difficulty Seeing At Night",
                  "Excessive Tearing",
                  "Light Sensitivity",
                ].map((symptom) => (
                  <div
                    key={symptom}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 size={20} />

                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}

            <div className="mt-20 text-center">
              <h2 className="text-primary">
                Concerned About Your Vision?
              </h2>

              <p className="mt-4 max-w-3xl mx-auto text-neutral-700 leading-8">
                If you are experiencing symptoms affecting your vision,
                schedule a comprehensive eye examination with our team
                for proper diagnosis and treatment recommendations.
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
                Eye Disease Diagnosis And Management In Lagos
              </h2>

              <p className="mt-5 text-neutral-700 leading-8">
                Patients searching for glaucoma treatment in Lagos,
                cataract evaluations, dry eye treatment, diabetic eye
                examinations, keratoconus management, myopia control,
                pediatric eye care, and comprehensive eye examinations
                can access professional eye care services at Forst Eye
                Clinic. Early diagnosis remains one of the most effective
                ways to protect long-term vision.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}