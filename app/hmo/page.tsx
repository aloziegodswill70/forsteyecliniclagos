import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, CalendarDays } from "lucide-react";

export default function HMOPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
            FORST Eye Clinic
          </span>

          <h1 className="mt-5 text-3xl font-black text-neutral-900 sm:text-5xl">
            HMO & Health Insurance
          </h1>

          <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base">
            FORST Eye Clinic partners with selected Health Maintenance
            Organizations (HMOs) to provide quality and affordable eye care.
            Eligible patients can access comprehensive eye examinations,
            consultations and selected treatments using their approved health
            insurance plans.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl">
          <Image
            src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782943898/wellness_avtydn.jpg"
            alt="HMO Eye Care"
            width={1400}
            height={700}
            className="h-[260px] w-full object-cover"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <Building2 className="mb-4 text-primary" size={28} />

            <h2 className="text-xl font-bold text-neutral-900">
              HMO Services
            </h2>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">
              <li>• Comprehensive Eye Examination</li>
              <li>• Eye Consultation</li>
              <li>• Vision Assessment</li>
              <li>• Glaucoma Screening</li>
              <li>• Cataract Evaluation</li>
              <li>• Professional Referral Services</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6">
            <BadgeCheck className="mb-4 text-primary" size={28} />

            <h2 className="text-xl font-bold text-neutral-900">
              Before Your Visit
            </h2>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">
              <li>• Bring your HMO ID Card.</li>
              <li>• Present a valid referral if required.</li>
              <li>• Carry a means of identification.</li>
              <li>• Confirm your HMO eligibility before visiting.</li>
              <li>• Contact us if you have any questions.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-primary px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-black">
            Verify Your HMO Before Visiting
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Our team will gladly confirm whether your HMO plan is accepted and
            guide you through the appointment process for a smooth clinic
            experience.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-eye-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:shadow-lg"
            >
              <CalendarDays size={18} />
              Book Appointment
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}