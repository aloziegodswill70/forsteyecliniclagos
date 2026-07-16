"use client";

import {
  Users,
  Star,
  Building2,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    title: "20K+",
    subtitle: "Patients",
    icon: Users,
  },
  {
    title: "4.9★",
    subtitle: "Rating",
    icon: Star,
  },
  {
    title: "7",
    subtitle: "Branches",
    icon: Building2,
  },
  {
    title: "15+",
    subtitle: "Services",
    icon: ShieldCheck,
  },
];

export default function HeroStats() {
  return (
    <section className="mt-5 w-full">

      {/* ================= Mobile ================= */}

      <div className="sm:hidden">
        <div
          className="
            flex
            gap-3
            overflow-x-auto
            px-1
            pb-2
            scrollbar-hide
          "
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex
                  h-[90px]
                  w-[90px]
                  min-w-[90px]
                  flex-shrink-0
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-primary/15
                  bg-white
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary
                  hover:shadow-md
                "
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Icon
                    size={18}
                    className="text-primary"
                  />
                </div>

                <h3 className="mt-2 text-sm font-extrabold leading-none text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-[10px] leading-none text-neutral-500">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= Desktop ================= */}

      <div className="hidden gap-3 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group
                flex
                flex-col
                items-center
                rounded-2xl
                border
                border-neutral-200
                bg-white
                px-3
                py-4
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/20
                hover:shadow-lg
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition group-hover:bg-primary">
                <Icon
                  size={18}
                  className="text-primary transition group-hover:text-white"
                />
              </div>

              <h3 className="mt-3 text-xl font-extrabold leading-none text-neutral-900 sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-1 text-xs font-medium tracking-wide text-neutral-500 sm:text-sm">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}