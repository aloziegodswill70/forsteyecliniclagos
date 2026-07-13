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
    <section className="mt-8 w-full">

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">

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
              {/* Icon */}

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition group-hover:bg-primary">

                <Icon
                  size={18}
                  className="text-primary transition group-hover:text-white"
                />

              </div>

              {/* Number */}

              <h3 className="mt-3 text-xl font-extrabold leading-none text-neutral-900 sm:text-2xl">
                {item.title}
              </h3>

              {/* Label */}

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