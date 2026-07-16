"use client";

import { useEffect, useRef } from "react";

const videos = [
  "/videos/hero.mp4",
  "/videos/eyetest.mp4",
  "/videos/hero.mp4",
  "/videos/eyetest.mp4",
];

export default function HeroReels() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const cardWidth = 112; // reel width + gap

      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 10
      ) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-4 w-full sm:mt-8">
      <div
        ref={sliderRef}
        className="
          flex
          gap-3
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          scrollbar-hide
          pb-2
        "
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="
              snap-center
              shrink-0
              overflow-hidden
              rounded-2xl
              border-2
              border-primary
              bg-black
              shadow-md
              w-[100px]
              h-[175px]
              sm:w-[135px]
              sm:h-[240px]
              lg:w-[180px]
              lg:h-[320px]
            "
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}