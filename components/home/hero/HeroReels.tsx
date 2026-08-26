"use client";

const videos = [
  "/videos/eyetest1.mp4",
  "/videos/frames.mp4",
  "/videos/fec1.mp4",
   "/videos/hero.mp4",
];

export default function HeroReels() {
  return (
    <section className="mt-4 w-full sm:mt-8">
      <div
        className="
          flex
          items-center
          gap-1.5
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
              shadow-lg

              w-[88px]
              h-[156px]

              sm:w-[125px]
              sm:h-[220px]

              lg:w-[150px]
              lg:h-[270px]

              xl:w-[165px]
              xl:h-[295px]
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