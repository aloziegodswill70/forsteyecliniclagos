"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Chioma A.",
    location: "Ikeja",
    review:
      "The doctors were extremely professional and explained everything clearly. My eye examination was thorough and the staff made me feel comfortable throughout my visit.",
  },
  {
    name: "Adewale O.",
    location: "Ogba",
    review:
      "Excellent customer service with modern equipment. I came for glaucoma screening and was impressed by the professionalism of the entire team.",
  },
  {
    name: "Blessing E.",
    location: "Festac",
    review:
      "From reception to consultation, everything was seamless. I received quality eye care and my new glasses are perfect.",
  },
  {
    name: "Michael U.",
    location: "Surulere",
    review:
      "Very clean environment with experienced eye care professionals. I highly recommend FORST Eye Clinic to anyone seeking quality vision care.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Testimonials
          </span>

          <h2 className="mt-5 text-3xl font-black text-neutral-900 md:text-5xl">
            What Our Patients Say
          </h2>

          <p className="mt-5 leading-8 text-neutral-600">
            Thousands of patients trust FORST Eye Clinic for comprehensive
            eye examinations, glaucoma screening, cataract evaluation,
            children's eye care and quality optical services.
          </p>
        </div>

        {/* Controls */}

        <div className="mt-10 flex justify-end gap-3">

          <button
            onClick={scrollLeft}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white transition hover:border-primary hover:text-primary"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition hover:opacity-90"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Slider */}

        <div
          ref={sliderRef}
          className="
            mt-8
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            pb-4
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                min-w-[320px]
                max-w-[320px]
                rounded-3xl
                bg-white
                p-8
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <Quote
                size={34}
                className="text-primary"
              />

              <div className="mt-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-500"
                  />
                ))}
              </div>

              <p className="mt-6 leading-8 text-neutral-600">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-5">
                <h3 className="font-bold text-neutral-900">
                  {item.name}
                </h3>

                <p className="text-sm text-neutral-500">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}