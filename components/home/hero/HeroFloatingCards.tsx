"use client";

import {
  Eye,
  ShieldCheck,
  ScanEye,
  Glasses,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    title: "Comprehensive Eye Examination",
    subtitle: "Early Detection Saves Vision",
    icon: Eye,
    top: "top-6 left-6",
  },
  {
    title: "Glaucoma Screening",
    subtitle: "Detect Before Vision Loss",
    icon: ShieldCheck,
    top: "top-8 right-6",
  },
  {
    title: "OCT Scan",
    subtitle: "Advanced Eye Imaging",
    icon: ScanEye,
    top: "bottom-44 left-4",
  },
  {
    title: "Premium Optical",
    subtitle: "Frames & Lenses",
    icon: Glasses,
    top: "bottom-8 left-12",
  },
  {
    title: "Retina Care",
    subtitle: "Diabetic Eye Screening",
    icon: HeartPulse,
    top: "bottom-20 right-4",
  },
  {
    title: "20,000+ Happy Patients",
    subtitle: "Trusted Across Lagos",
    icon: Sparkles,
    top: "top-1/2 right-8 -translate-y-1/2",
  },
];

export default function HeroFloatingCards() {
  return (
    <>
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`
              absolute
              ${card.top}
              hidden
              xl:flex
              items-center
              gap-3
              rounded-2xl
              border
              border-neutral-200
              bg-white/95
              backdrop-blur
              px-4
              py-3
              shadow-xl
              animate-float
            `}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Icon size={22} className="text-primary" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-neutral-900">
                {card.title}
              </h4>

              <p className="text-xs text-neutral-500">
                {card.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}