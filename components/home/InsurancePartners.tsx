"use client";

import Image from "next/image";

const partners = [
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

export default function InsurancePartners() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
            Our Partners
          </span>

          <h2 className="mt-6 text-3xl font-black text-neutral-900 md:text-5xl">
            HMOs & Insurance
            <span className="block text-primary">
              We Work With
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600">
            We partner with leading Health Maintenance Organizations
            (HMOs), insurance companies and corporate organizations to
            make quality eye care more accessible, affordable and
            convenient for individuals and families across Nigeria.
          </p>
        </div>

        {/* Logos */}

        <div className="relative mt-16 overflow-hidden">
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-partners">
            {partners.concat(partners).map((logo, index) => (
              <div
            key={index}
            className="
              flex
              items-center
              justify-center
              rounded-2xl
              border
              border-neutral-200
              bg-white
              p-2
              sm:p-3
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/20
              hover:shadow-lg
            "
          >
            <div className="relative h-8 w-full sm:h-10 md:h-12 lg:h-14">
              <Image
                src={logo}
                alt="Insurance Partner"
                fill
                className="object-contain"
              />
            </div>
          </div>
               
            ))}
          </div>
        </div>

        {/* Bottom Text */}

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="leading-8 text-neutral-600">
            Don't see your HMO listed? Contact our team to confirm
            coverage before your visit. We continue to expand our
            partnerships to provide accessible and affordable eye care
            services for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}