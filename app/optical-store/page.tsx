import Link from "next/link";
import {
  Glasses,
  ShoppingBag,
  ArrowRight,
  Eye,
  ShieldCheck,
} from "lucide-react";

const categories = [
  {
    title: "Eyeglasses & Frames",
    description:
      "Premium prescription frames, designer eyewear and everyday spectacles for adults and children.",
    href: "/eyeglasses",
  },
  {
    title: "Contact Lenses",
    description:
      "Daily, monthly, toric and multifocal contact lenses professionally fitted by our optometrists.",
    href: "/contact-lenses",
  },
  {
    title: "Low Vision Devices",
    description:
      "Magnifiers, telescopes, video magnifiers and daily living aids for people with low vision.",
    href: "/low-vision-store",
  },
];

export default function OpticalStorePage() {
  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="bg-gradient-to-b from-primary/5 to-white py-20">
        <div className="container-site text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            <ShoppingBag size={16} />
            FORST Eye Clinic Optical Store
          </span>

          <h1 className="mt-6 text-4xl font-black text-neutral-900 md:text-5xl">
            Premium Optical Products
            <span className="block text-primary">
              For Better Vision
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Explore our carefully selected range of prescription glasses,
            premium contact lenses, sunglasses and low vision devices.
            Every product is professionally recommended by our experienced
            eye care team to ensure comfort, quality and excellent vision.
          </p>
        </div>
      </section>

      {/* Categories */}

      <section className="py-20">
        <div className="container-site">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-primary hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Glasses
                    className="text-primary"
                    size={30}
                  />
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-neutral-600">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
                >
                  Explore Collection
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-neutral-50 py-20">
        <div className="container-site">

          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-4xl font-black text-neutral-900">
              Why Buy From FORST Eye Clinic?
            </h2>

            <p className="mt-6 text-lg text-neutral-600">
              We combine professional eye care with high-quality optical
              products to ensure every patient enjoys clearer, healthier
              vision.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <Eye
                className="text-primary"
                size={34}
              />

              <h3 className="mt-5 text-xl font-bold">
                Professional Advice
              </h3>

              <p className="mt-3 text-neutral-600">
                Every product is recommended by qualified eye care
                professionals.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <Glasses
                className="text-primary"
                size={34}
              />

              <h3 className="mt-5 text-xl font-bold">
                Premium Quality
              </h3>

              <p className="mt-3 text-neutral-600">
                Authentic optical products from trusted international
                manufacturers.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <ShieldCheck
                className="text-primary"
                size={34}
              />

              <h3 className="mt-5 text-xl font-bold">
                Aftercare Support
              </h3>

              <p className="mt-3 text-neutral-600">
                Continuous support and follow-up to keep your vision at
                its best.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}