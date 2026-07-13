"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

import { socialLinks } from "@/data/socials";

const items = [
  {
    name: "Facebook",
    href: socialLinks?.facebook ?? "#",
    icon: FaFacebookF,
    color:
      "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white",
  },
  {
    name: "Instagram",
    href: socialLinks?.instagram ?? "#",
    icon: FaInstagram,
    color:
      "hover:bg-[#E1306C] hover:border-[#E1306C] hover:text-white",
  },
  {
    name: "TikTok",
    href: socialLinks?.tiktok ?? "#",
    icon: FaTiktok,
    color:
      "hover:bg-black hover:border-black hover:text-white",
  },
  {
    name: "WhatsApp",
    href: socialLinks?.whatsapp ?? "#",
    icon: MessageCircle,
    color:
      "hover:bg-green-600 hover:border-green-600 hover:text-white",
  },
];

export default function HeroSocials() {
  return (
    <section className="mt-6">

      {/* Social Icons */}

      <div className="flex flex-col items-center">

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Connect With Us
        </p>

        <div className="flex items-center justify-center gap-3">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className={`group flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.color}`}
              >
                <Icon
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            );
          })}

        </div>

      </div>

      {/* Trust Badges */}

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">

        <span className="rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary">
          20K+ Patients
        </span>

        <span className="rounded-full bg-green-100 px-3 py-1.5 text-[11px] font-semibold text-green-700">
          WhatsApp Booking
        </span>

        <span className="rounded-full bg-[#D4AF37]/10 px-3 py-1.5 text-[11px] font-semibold text-[#B8860B]">
          HMO Accepted
        </span>

      </div>

    </section>
  );
}