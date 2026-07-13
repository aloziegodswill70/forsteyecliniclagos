"use client";

import { ShieldCheck, Award } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-primary/20
          bg-primary/10
          px-5
          py-2.5
          text-sm
          font-semibold
          text-primary
        "
      >
        <ShieldCheck size={18} />

        Trusted Eye Care Clinic In Lagos
      </div>

      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-secondary/30
          bg-secondary/10
          px-5
          py-2.5
          text-sm
          font-semibold
          text-secondary
        "
      >
        <Award size={18} />

        20,000+ Happy Patients
      </div>
    </div>
  );
}