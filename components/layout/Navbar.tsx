"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Menu,
  Search,
  CalendarDays,
} from "lucide-react";

import TopBar from "./TopBar";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

import NavbarEnquiry from "@/components/store/NavbarEnquiry";

import { clinicInfo } from "@/data/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* ================= Top Bar ================= */}

      <TopBar />

      {/* ================= Navbar ================= */}

      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled
            ? "border-b border-neutral-200 shadow-md"
            : "border-b border-neutral-100"
        }`}
      >
        <div className="mx-auto flex h-[64px] w-full max-w-[1440px] items-center justify-between px-3 sm:h-[70px] sm:px-5 lg:px-6 xl:h-[78px] xl:px-10">

          {/* ================= Logo ================= */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/logo.png"
              alt={clinicInfo.name}
              width={175}
              height={70}
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled
                  ? "h-[34px] sm:h-[38px] xl:h-[44px]"
                  : "h-[40px] sm:h-[46px] xl:h-[52px]"
              }`}
            />
          </Link>

          {/* ================= Desktop Menu ================= */}

          <div className="hidden flex-1 justify-center xl:flex">
            <DesktopMenu />
          </div>

          {/* ================= Desktop Actions ================= */}

          <div className="hidden shrink-0 items-center gap-3 xl:flex">

            {/* Search */}

            <button
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <Search size={18} />
            </button>

            {/* Low Vision Enquiry */}

            <NavbarEnquiry />

            {/* Appointment */}

            <Link
              href="/book-eye-appointment"
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <CalendarDays size={18} />
              <span>Book Appointment</span>
            </Link>

          </div>

          {/* ================= Mobile Actions ================= */}

          <div className="flex items-center gap-2 xl:hidden">

            {/* Low Vision Enquiry */}

            <NavbarEnquiry />

            {/* Menu */}

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-[#FCA400] text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white sm:h-10 sm:w-10"
            >
              <Menu
                size={20}
                className="sm:h-5 sm:w-5"
              />
            </button>

          </div>

        </div>
      </header>

      {/* ================= Mobile Menu ================= */}

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}