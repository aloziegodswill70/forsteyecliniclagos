"use client";

import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mt-20 rounded-3xl bg-[#FCA400] p-8 lg:p-12">
          <h2 className="text-center text-3xl font-black text-white md:text-4xl">
            Why Regular Eye Care Matters
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Early Detection Of Eye Diseases",
              "Protection Against Vision Loss",
              "Improved Visual Performance",
              "Monitoring Chronic Eye Conditions",
              "Children's Vision Development",
              "Digital Eye Strain Management",
              "Glaucoma Detection",
              "Healthy Aging Vision Care",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-white"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}