import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

import { services } from "@/data/services";
import { branches } from "@/data/branches";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Book Appointment", href: "/book-eye-appointment" },
  { name: "Eye Conditions", href: "/conditions" },
  { name: "Services", href: "/services" },
  { name: "Branches", href: "/branches" },
  { name: "HMO Partners", href: "/hmo" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">

      <div className="container-site py-16">

        <div className="grid gap-14 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left">

          {/* Brand */}

          <div className="flex flex-col items-center lg:items-start">

            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Forst Eye Clinic"
                width={190}
                height={70}
                priority
              />
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-neutral-600">
              <strong>FORST EYE CLINIC (FEC)</strong> delivers comprehensive,
              affordable and professional eye care through experienced eye
              doctors, advanced diagnostic technology and compassionate
              patient care across Lagos.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">

              {[
                {
                  href: "https://www.facebook.com/forsteyeclinic",
                  icon: <FaFacebookF />,
                },
                {
                  href: "https://www.instagram.com/forsteyeclinic",
                  icon: <FaInstagram />,
                },
                {
                  href: "https://www.tiktok.com/@forsteyeclinic",
                  icon: <FaTiktok />,
                },
                {
                  href: "https://wa.me/2348186992818",
                  icon: <FaWhatsapp />,
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full border border-primary/20
                    text-primary transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  {item.icon}
                </Link>
              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-neutral-900">
              Our Services
            </h3>

            <ul className="space-y-3">

              {services.slice(0, 8).map((service) => (

                <li key={service.slug}>

                  <Link
                    href={`/services/${service.slug}`}
                    className="text-neutral-600 transition hover:text-primary"
                  >
                    {service.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Branches */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-neutral-900">
              Our Branches
            </h3>

            <ul className="space-y-3">

              {branches.map((branch) => (

                <li key={branch.slug}>

                  <Link
                    href={`/branches/${branch.slug}`}
                    className="text-neutral-600 transition hover:text-primary"
                  >
                    {branch.shortName}
                  </Link>

                </li>

              ))}

            </ul>

            <h3 className="mb-5 mt-10 text-xl font-bold text-neutral-900">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((item) => (

                <li key={item.href}>

                  <Link
                    href={item.href}
                    className="text-neutral-600 transition hover:text-primary"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-neutral-900">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex items-start justify-center gap-4 lg:justify-start">

                <Phone
                  size={20}
                  className="mt-1 text-primary"
                />

                <div>

                  <p className="font-semibold">
                    Head Office
                  </p>

                  <p className="text-neutral-600">
                    0818 699 2818
                  </p>

                </div>

              </div>

              <div className="flex items-start justify-center gap-4 lg:justify-start">

                <Mail
                  size={20}
                  className="mt-1 text-primary"
                />

                <p className="text-neutral-600">
                  firsteyeclinic@gmail.com
                </p>

              </div>

              <div className="flex items-start justify-center gap-4 lg:justify-start">

                <MapPin
                  size={20}
                  className="mt-1 text-primary"
                />

                <p className="max-w-xs leading-7 text-neutral-600">
                  No.14 Kayode Street,
                  Off Ijaiye Road,
                  Caterpillar Bus Stop,
                  Ogba, Ikeja,
                  Lagos.
                </p>

              </div>

              <div className="flex items-start justify-center gap-4 lg:justify-start">

                <Clock3
                  size={20}
                  className="mt-1 text-primary"
                />

                <div className="text-neutral-600 leading-7">

                  <p>Mon – Fri: 9:00 AM – 6:00 PM</p>

                  <p>Saturday: 9:00 AM – 6:00 PM</p>

                  <p>Sunday: Closed</p>

                </div>

              </div>

              <Link
                href="/book-eye-appointment"
                className="
                  mt-4 inline-flex items-center justify-center
                  rounded-xl bg-E0402A px-6 py-3
                  font-semibold text-white
                  transition hover:opacity-90
                "
              >
                Book Appointment
              </Link>

            </div>

          </div>

        </div>

      </div>
            {/* SEO Section */}

      <div className="border-t border-neutral-200 bg-neutral-50">

        <div className="container-site py-14">

          <div className="mx-auto max-w-5xl text-center">

            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
              Your Vision. Our Mission.
            </span>

            <h3 className="mt-6 text-3xl font-bold text-neutral-900">
              Professional Eye Care Across Lagos
            </h3>

            <p className="mt-6 leading-8 text-neutral-600">
              <strong>FORST EYE CLINIC (FEC)</strong> provides comprehensive
              eye examinations, glaucoma management, cataract evaluation,
              diabetic eye screening, dry eye treatment, children's eye care,
              low vision rehabilitation, OCT imaging, optical dispensing,
              designer frames, prescription glasses and contact lenses.
              Our experienced eye care professionals are committed to
              preserving, protecting and improving vision through modern
              technology and compassionate patient care across our branches in
              Ogba, Magodo, Surulere, Festac, Agbara and Eleko (Ibeju-Lekki).
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-neutral-200 bg-white">

        <div className="container-site py-8">

          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">

            <p className="text-sm text-neutral-500">
              © {year} <strong>FORST EYE CLINIC (FEC)</strong>. All Rights
              Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 text-sm">

              <Link
                href="/privacy-policy"
                className="text-neutral-600 transition hover:text-primary"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-neutral-600 transition hover:text-primary"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="text-neutral-600 transition hover:text-primary"
              >
                Contact Us
              </Link>

              <Link
                href="/sitemap.xml"
                className="text-neutral-600 transition hover:text-primary"
              >
                Sitemap
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}