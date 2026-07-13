"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  BriefcaseMedical,
  MapPin,
  CalendarDays,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { clinicInfo } from "@/data/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Services",
    href: "/services",
    icon: BriefcaseMedical,
  },
  {
    label: "Branches",
    href: "/branches",
    icon: MapPin,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-[999]
        border-t
        border-neutral-200
        bg-white
        shadow-[0_-6px_24px_rgba(0,0,0,.08)]
        lg:hidden
      "
    >
      <div className="relative flex h-[74px] items-center justify-around px-2">

        {/* Home */}
        {navItems.slice(0, 2).map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-1 flex-col items-center justify-center"
            >
              <Icon
                size={21}
                strokeWidth={2.3}
                className={
                  active
                    ? "text-[#FF3B1F]"
                    : "text-neutral-500"
                }
              />

              <span
                className={`mt-1 text-[10px] font-semibold ${
                  active
                    ? "text-[#FF3B1F]"
                    : "text-neutral-500"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Floating Appointment */}

        <Link
          href="/book-eye-appointment"
          className="
            absolute
            left-1/2
            -top-8
            -translate-x-1/2
            flex
            flex-col
            items-center
          "
        >
          <div
            className="
              flex
              h-[64px]
              w-[64px]
              items-center
              justify-center
              rounded-full
              text-white
              ring-4
              ring-white
              transition-all
              duration-300
              hover:scale-105
            "
            style={{
              background:
                "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 60%,#D92E12 100%)",
              boxShadow:
                "0 14px 30px rgba(255,59,31,.35)",
            }}
          >
            <CalendarDays size={28} />
          </div>

          <span className="mt-1 text-[10px] font-bold text-[#FF3B1F]">
            Book
          </span>
        </Link>

        {/* Branches */}

        <Link
          href="/branches"
          className="flex flex-1 flex-col items-center justify-center"
        >
          <MapPin
            size={21}
            strokeWidth={2.3}
            className={
              isActive("/branches")
                ? "text-[#FF3B1F]"
                : "text-neutral-500"
            }
          />

          <span
            className={`mt-1 text-[10px] font-semibold ${
              isActive("/branches")
                ? "text-[#FF3B1F]"
                : "text-neutral-500"
            }`}
          >
            Branches
          </span>
        </Link>

        {/* WhatsApp */}

        <Link
          href={clinicInfo.whatsapp}
          target="_blank"
          className="flex flex-1 flex-col items-center justify-center"
        >
          <div className="rounded-full bg-green-50 p-2">
            <FaWhatsapp
              size={20}
              className="text-[#25D366]"
            />
          </div>

          <span className="mt-1 text-[10px] font-semibold text-neutral-600">
            WhatsApp
          </span>
        </Link>

      </div>
    </nav>
  );
}