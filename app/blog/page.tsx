import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
            FORST Eye Clinic Blog
          </span>

          <h1 className="mt-5 text-3xl font-black text-neutral-900 sm:text-5xl">
            Eye Health Tips & Vision Care Resources
          </h1>

          <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base">
            Welcome to the FORST Eye Clinic Blog. We share practical eye care
            tips, information on common eye conditions, children's vision,
            glaucoma, cataracts, diabetic eye disease and lifestyle advice to
            help you maintain healthy eyesight for life.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl">
          <Image
            src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png"
            alt="Eye Health"
            width={1400}
            height={700}
            className="h-[260px] w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-5 text-neutral-700">
          <p>
            Regular eye examinations help detect vision problems and eye
            diseases before symptoms become noticeable. Early diagnosis of
            glaucoma, cataracts and diabetic eye disease can protect your sight
            and improve treatment outcomes.
          </p>

          <p>
            Whether you need a routine eye examination, children's eye care,
            prescription glasses or specialist treatment, our experienced eye
            care professionals are here to help with modern diagnostic
            equipment and personalized care.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/book-eye-appointment" className="rounded-xl border p-5 hover:border-primary">
            <CalendarDays className="mb-3 text-primary" size={22} />
            <h3 className="font-bold">Book Appointment</h3>
          </Link>

          <Link href="/branches" className="rounded-xl border p-5 hover:border-primary">
            <BookOpen className="mb-3 text-primary" size={22} />
            <h3 className="font-bold">Our Branches</h3>
          </Link>

          <Link href="/services" className="rounded-xl border p-5 hover:border-primary">
            <BookOpen className="mb-3 text-primary" size={22} />
            <h3 className="font-bold">Eye Care Services</h3>
          </Link>

          <Link href="/contact" className="rounded-xl border p-5 hover:border-primary">
            <BookOpen className="mb-3 text-primary" size={22} />
            <h3 className="font-bold">Contact Us</h3>
          </Link>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl">
          <Image
            src="https://res.cloudinary.com/dut0fvswc/image/upload/v1782943921/Untitled_design_7_t11stg.png"
            alt="Eye Examination"
            width={1400}
            height={700}
            className="h-[260px] w-full object-cover"
          />
        </div>

        <div className="mt-10 rounded-3xl bg-primary px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-black">
            Protect Your Vision Today
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Don't wait until your vision becomes blurry. Schedule a comprehensive
            eye examination with FORST Eye Clinic and keep your eyes healthy.
          </p>

          <Link
            href="/book-eye-appointment"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:shadow-lg"
          >
            Book an Eye Examination
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}