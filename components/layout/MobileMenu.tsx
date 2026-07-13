"use client";

import Link from "next/link";
import { useState } from "react";
import {
  X,
  ChevronDown,
  Phone,
  CalendarDays,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import {
  services,
  branches,
  navigation,
  clinicInfo,
} from "@/data/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [branchesOpen, setBranchesOpen] =
    useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white lg:hidden">
      <div className="mx-auto flex h-full max-w-md flex-col overflow-y-auto px-5 py-5">

        {/* ================= Header ================= */}

        <div className="flex items-center justify-between border-b border-neutral-100 pb-5">

          <div>

            <h2 className="text-lg font-bold tracking-tight text-primary">
              FORST EYE CLINIC
            </h2>

            <p className="mt-1 text-xs text-neutral-500">
              Your Vision. Our Mission.
            </p>

          </div>

          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="rounded-xl border border-neutral-200 p-2 transition hover:border-primary hover:bg-primary hover:text-white"
          >
            <X size={22} />
          </button>

        </div>

        {/* ================= Quick Actions ================= */}

        <div className="mt-6 space-y-3">

          <Link
            href="/book-eye-appointment"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-semibold text-white shadow-primary transition hover:opacity-95"
          >
            <CalendarDays size={18} />
            Book Appointment
          </Link>

          <div className="grid grid-cols-2 gap-3">

            <a
              href={`tel:${clinicInfo.phone}`}
              className="flex items-center justify-center gap-2 rounded-2xl border border-primary py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              <Phone size={17} />
              Call
            </a>

            <a
              href={clinicInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-green-600 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

        </div>

        {/* ================= Navigation ================= */}

        <div className="mt-8 space-y-1">

          {navigation.map((item) => {

            if (item.title === "Services") {

              return (

                <div
                  key={item.title}
                  className="border-b border-neutral-100"
                >

                  <button
                    onClick={() =>
                      setServicesOpen(!servicesOpen)
                    }
                    className="flex w-full items-center justify-between py-4 text-[15px] font-semibold"
                  >
                    {item.title}

                    <ChevronDown
                      size={18}
                      className={`transition ${
                        servicesOpen
                          ? "rotate-180 text-primary"
                          : ""
                      }`}
                    />

                  </button>

                  {servicesOpen && (

                    <div className="pb-3 pl-4">

                      {services.map((service) => (

                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={onClose}
                          className="block rounded-lg py-2 text-sm text-neutral-600 transition hover:text-primary"
                        >
                          {service.title}
                        </Link>

                      ))}

                    </div>

                  )}

                </div>

              );
            }

            if (item.title === "Branches") {

              return (

                <div
                  key={item.title}
                  className="border-b border-neutral-100"
                >

                  <button
                    onClick={() =>
                      setBranchesOpen(!branchesOpen)
                    }
                    className="flex w-full items-center justify-between py-4 text-[15px] font-semibold"
                  >
                    {item.title}

                    <ChevronDown
                      size={18}
                      className={`transition ${
                        branchesOpen
                          ? "rotate-180 text-primary"
                          : ""
                      }`}
                    />

                  </button>

                  {branchesOpen && (

                    <div className="space-y-3 pb-3 pl-4">

                      {branches.map((branch) => (

                        <Link
                          key={branch.slug}
                          href={`/branches/${branch.slug}`}
                          onClick={onClose}
                          className="block rounded-xl border border-neutral-100 p-3 transition hover:border-primary/30"
                        >

                          <p className="text-sm font-semibold">
                            {branch.name}
                          </p>

                          <p className="mt-1 text-xs text-neutral-500">
                            {branch.phone}
                          </p>

                        </Link>

                      ))}

                    </div>

                  )}

                </div>

              );
            }

            return (

              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block border-b border-neutral-100 py-4 text-[15px] font-semibold transition hover:text-primary"
              >
                {item.title}
              </Link>

            );

          })}

        </div>

        {/* ================= Contact Card ================= */}

        <div className="mt-8 rounded-3xl border border-primary/10 bg-orange-50 p-5">

          <h3 className="text-base font-bold text-primary">
            Contact Us
          </h3>

          <div className="mt-4 space-y-3">

            <div className="flex items-center gap-3 text-sm">

              <Mail
                size={16}
                className="text-primary"
              />

              {clinicInfo.email}

            </div>

            <div className="flex items-center gap-3 text-sm">

              <Phone
                size={16}
                className="text-primary"
              />

              {clinicInfo.phone}

            </div>

            <div className="pt-2 text-xs leading-6 text-neutral-600">

              <p>{clinicInfo.hours.weekdays}</p>

              <p>{clinicInfo.hours.saturday}</p>

              <p>{clinicInfo.hours.sunday}</p>

            </div>

          </div>

        </div>

        {/* ================= Social ================= */}

        <div className="mt-8 flex justify-center gap-4 pb-5">

          <Link
            href={clinicInfo.social.facebook}
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:text-white"
          >
            <FaFacebookF />
          </Link>

          <Link
            href={clinicInfo.social.instagram}
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:text-white"
          >
            <FaInstagram />
          </Link>

          <Link
            href={clinicInfo.social.tiktok}
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:text-white"
          >
            <FaTiktok />
          </Link>

          <Link
            href={clinicInfo.whatsapp}
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white transition hover:scale-105"
          >
            <FaWhatsapp />
          </Link>

        </div>

      </div>
    </div>
  );
}