"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  navigation,
  services,
  branches,
} from "@/data/navigation";

export default function DesktopMenu() {
  return (
    <nav className="hidden items-center gap-7 xl:flex">
      {navigation
        .filter(
          (item) =>
            ![
              "Home",
              "Conditions",
              "HMOs",
              "Blog",
              "Contact",
            ].includes(item.title)
        )
        .map((item) => {
          /* ================= SERVICES ================= */

          if (item.title === "Services") {
            return (
              <div
                key={item.title}
                className="group relative"
              >
                <button className="flex items-center gap-1 text-[15px] font-semibold text-neutral-700 transition duration-300 hover:text-primary">
                  {item.title}

                  <ChevronDown
                    size={16}
                    className="transition duration-300 group-hover:rotate-180"
                  />
                </button>

                <div
                  className="
                    invisible absolute left-1/2 top-full z-50 mt-5
                    w-[340px] -translate-x-1/2 rounded-3xl
                    border border-neutral-100 bg-white
                    p-5 opacity-0 shadow-xl
                    transition-all duration-300
                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
                    Eye Care Services
                  </h3>

                  <div className="space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block rounded-xl px-4 py-3 text-[15px] font-medium text-neutral-700 transition hover:bg-primary/5 hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/services"
                    className="mt-5 block rounded-2xl py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
                    }}
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            );
          }

          /* ================= BRANCHES ================= */

          if (item.title === "Branches") {
            return (
              <div
                key={item.title}
                className="group relative"
              >
                <button className="flex items-center gap-1 text-[15px] font-semibold text-neutral-700 transition duration-300 hover:text-primary">
                  {item.title}

                  <ChevronDown
                    size={16}
                    className="transition duration-300 group-hover:rotate-180"
                  />
                </button>

                <div
                  className="
                    invisible absolute left-1/2 top-full z-50 mt-5
                    w-[390px] -translate-x-1/2 rounded-3xl
                    border border-neutral-100 bg-white
                    p-5 opacity-0 shadow-xl
                    transition-all duration-300
                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
                    Our Branches
                  </h3>

                  <div className="space-y-2">
                    {branches.map((branch) => (
                      <Link
                        key={branch.slug}
                        href={`/branches/${branch.slug}`}
                        className="block rounded-2xl p-3 transition hover:bg-primary/5"
                      >
                        <p className="font-semibold text-neutral-800">
                          {branch.name}
                        </p>

                        <p className="mt-1 text-sm text-neutral-500">
                          {branch.phone}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/branches"
                    className="mt-5 block rounded-2xl py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(135deg,#FF5A34 0%,#FF3B1F 55%,#D92E12 100%)",
                    }}
                  >
                    View All Branches
                  </Link>
                </div>
              </div>
            );
          }

          /* ================= NORMAL LINKS ================= */

          return (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-semibold text-neutral-700 transition duration-300 hover:text-primary"
            >
              {item.title}
            </Link>
          );
        })}
    </nav>
  );
}