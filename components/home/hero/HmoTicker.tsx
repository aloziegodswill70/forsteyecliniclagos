"use client";

import Image from "next/image";

const hmos = [
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943898/wellness_avtydn.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/tht_wmv7ds.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/policehmo_hggv8l.png",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/reliance_c9dy2k.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/oceanic_vgpmxj.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943798/novo_ydshzk.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/hallmark_qphklt.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/greenbay_g5lcgp.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/nem_qlcmhs.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943796/metro_azi6hb.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943796/clearline_dd7xey.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943796/bastion_f1abke.png",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943796/leadway_enzp7s.png",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943795/hygeia_sfuozd.png",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943795/axa_vsbyob.png",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943795/avon_nbtmaz.jpg",
  "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943795/anchor_ud9svr.jpg",
];

const logos = [...hmos, ...hmos];

export default function HmoTicker() {
  return (
    <section className="overflow-hidden border-y border-primary/10 bg-white py-5">

      <div className="mb-5 text-center">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          HMOs We Partner With
        </p>

      </div>

      <div className="relative overflow-hidden">

        <div className="flex w-max animate-hmoTicker">

          {logos.map((logo, index) => (

            <div
              key={index}
              className="mx-3 flex h-16 w-32 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md sm:mx-5 sm:h-20 sm:w-40"
            >
              <div className="relative h-full w-full">

                <Image
                  src={logo}
                  alt="HMO Logo"
                  fill
                  sizes="(max-width:640px) 128px, 160px"
                  className="object-contain"
                />

              </div>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}