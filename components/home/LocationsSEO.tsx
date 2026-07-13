import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Navigation,
} from "lucide-react";

const locations = [
  {
    title: "Eye Clinic in Ogba",
    href: "/best-eye-clinic-in-ogba",
  },
  {
    title: "Eye Clinic in Ikeja",
    href: "/best-eye-clinic-in-ikeja",
  },
  {
    title: "Eye Clinic in Festac",
    href: "/best-eye-clinic-in-festac",
  },
  {
    title: "Eye Clinic in Surulere",
    href: "/best-eye-clinic-in-surulere",
  },
  {
    title: "Eye Clinic in Agbara",
    href: "/best-eye-clinic-in-agbara",
  },
  {
    title: "Eye Clinic in Ibeju-Lekki",
    href: "/best-eye-clinic-in-ibeju-lekki",
  },
];

export default function LocationsSEO() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Our Locations
          </span>

          <h2 className="mt-6 text-3xl font-black text-neutral-900 md:text-5xl">
            Professional Eye Care
            <span className="block text-primary">
              Across Lagos
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600">
            FORST EYE CLINIC provides comprehensive eye examinations,
            glaucoma management, cataract evaluation, diabetic eye care,
            children's eye care and optical services through multiple
            convenient locations across Lagos.
          </p>

        </div>

        {/* Locations */}

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {locations.map((location) => (

            <Link
              key={location.href}
              href={location.href}
              className="group rounded-3xl border border-neutral-200 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-lg"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition group-hover:bg-primary group-hover:text-white">

                <MapPin
                  size={28}
                  className="text-primary group-hover:text-white"
                />

              </div>

              <h3 className="mt-6 text-xl font-bold text-neutral-900">
                {location.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Comprehensive eye care, routine eye examinations,
                glaucoma screening and optical services.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
                Learn More

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </span>

            </Link>

          ))}

        </div>

        {/* CTA */}

        <div className="mx-auto mt-20 max-w-5xl rounded-[32px] border border-primary/10 bg-primary/5 p-8 text-center lg:p-12">

          <div className="mx-auto max-w-3xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">

              <Navigation size={30} />

            </div>

            <h3 className="mt-6 text-3xl font-black text-neutral-900">
              Find Your Nearest FORST EYE CLINIC
            </h3>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
              Visit any of our conveniently located branches for
              comprehensive eye examinations, glaucoma screening,
              cataract evaluation, diabetic eye care, children's eye
              care and premium optical services.
            </p>

            <Link
              href="/branches"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              View All Branches

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

        {/* SEO Text */}

        <div className="mx-auto mt-20 max-w-5xl text-center">

          <h3 className="text-2xl font-bold text-neutral-900">
            Trusted Eye Care Throughout Lagos
          </h3>

          <p className="mx-auto mt-5 max-w-4xl leading-8 text-neutral-600">
            Whether you're looking for an eye clinic in Ogba, Ikeja,
            Festac, Surulere, Agbara or Ibeju-Lekki, FORST EYE CLINIC
            offers modern diagnostic technology, experienced eye care
            professionals and patient-focused treatment. From routine eye
            tests and glaucoma screening to cataract evaluation,
            pediatric eye care, diabetic eye examinations and optical
            services, we are committed to helping you maintain healthy
            vision for life.
          </p>

        </div>

      </div>
    </section>
  );
}