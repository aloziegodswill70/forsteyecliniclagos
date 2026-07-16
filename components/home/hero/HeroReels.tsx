"use client";

const videos = [
  "/videos/hero.mp4",
  "/videos/eyetest.mp4",
  "/videos/hero.mp4",
  "/videos/eyetest.mp4",
];

export default function HeroReels() {
  return (
    <section className="mt-4 w-full sm:mt-8">
      <div
        className="
          flex
          gap-2
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          pb-2
          px-1
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="
              snap-start
              shrink-0
              overflow-hidden
              rounded-2xl
              border-2
              border-primary
              bg-black
              shadow-md

              w-[23%]
              aspect-[9/16]

              sm:w-[140px]
              sm:h-[245px]

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
              <source
                src={video}
                type="video/mp4"
              />
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}