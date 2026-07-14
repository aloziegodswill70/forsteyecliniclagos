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
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary sm:px-4 sm:py-1.5 sm:text-xs">
            Our Locations
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl lg:text-5xl">
            Professional Eye Care
            <span className="block text-primary">
              Across Lagos
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Comprehensive eye examinations, glaucoma care, cataract
            evaluation, children's eye care and optical services across
            our Lagos branches.
          </p>

        </div>

        {/* Locations */}

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {locations.map((location) => (

            <Link
              key={location.href}
              href={location.href}
              className="group rounded-2xl border border-neutral-200 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg sm:p-5 lg:p-6"
            >

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition group-hover:bg-primary sm:h-14 sm:w-14">

                <MapPin
                  size={22}
                  className="text-primary group-hover:text-white"
                />

              </div>

              <h3 className="mt-4 text-base font-bold text-neutral-900 sm:text-lg">
                {location.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-neutral-600 sm:text-sm sm:leading-6">
                Eye examinations, glaucoma screening and optical services.
              </p>

              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn More

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />

              </span>

            </Link>

          ))}

        </div>

        {/* CTA */}

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-primary/10 bg-primary/5 p-5 text-center sm:p-8">

          <div className="mx-auto max-w-3xl">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white sm:h-14 sm:w-14">

              <Navigation size={22} />

            </div>

            <h3 className="mt-4 text-xl font-black text-neutral-900 sm:text-2xl">
              Find Your Nearest FORST EYE CLINIC
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
              Visit any of our Lagos branches for comprehensive eye care,
              eye examinations and premium optical services.
            </p>

            <Link
              href="/branches"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:px-6 sm:py-3"
            >
              View All Branches

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>

        {/* SEO Text */}

        <div className="mx-auto mt-12 max-w-4xl text-center">

          <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">
            Trusted Eye Care Throughout Lagos
          </h3>

          <p className="mx-auto mt-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Whether you're in Ogba, Ikeja, Festac, Surulere, Agbara or
            Ibeju-Lekki, FORST EYE CLINIC provides quality eye
            examinations, glaucoma screening, cataract evaluation,
            children's eye care and optical services.
          </p>

        </div>

      </div>
    </section>
  );
}