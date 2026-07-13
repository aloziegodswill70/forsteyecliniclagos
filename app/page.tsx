import type { Metadata } from "next";



import Hero from "@/components/home/hero/Hero";

import Services from "@/components/home/Services";

import WhyChooseUs from "@/components/home/WhyChooseUs";

import OpticalStore from "@/components/home/OpticalStore";

import DigitalLens from "@/components/home/DigitalLens";

import LowVisionProducts from "@/components/home/LowVisionProducts";

import FounderCEO from "@/components/home/FounderCEO";

import Branches from "@/components/home/Branches";

import InsurancePartners from "@/components/home/InsurancePartners";

import Testimonials from "@/components/home/Testimonials";

import Conditions from "@/components/home/Conditions";

import GoogleReviews from "@/components/home/GoogleReviews";

import BlogPreview from "@/components/home/BlogPreview";

import FAQs from "@/components/home/FAQs";

import ContactCTA from "@/components/home/ContactCTA";

import LocationsSEO from "@/components/home/LocationsSEO";



export const metadata: Metadata = {

  title:

    "FORST Eye Clinic | Best Eye Clinic in Lagos | Eye Test, Cataract, Glaucoma, Optical Store & Contact Lenses",



  description:

    "FORST Eye Clinic provides comprehensive eye examinations, glaucoma management, cataract care, children's eye care, contact lenses, premium optical products, digital lenses, low vision rehabilitation and advanced eye care services across Lagos, Nigeria.",



  keywords: [

    "Forst Eye Clinic",

    "Eye Clinic Lagos",

    "Best Eye Clinic Nigeria",

    "Eye Test Lagos",

    "Eye Hospital Lagos",

    "Optometrist Lagos",

    "Ophthalmology Clinic",

    "Glaucoma Treatment",

    "Cataract Surgery",

    "Dry Eye Clinic",

    "Children Eye Care",

    "Pediatric Eye Clinic",

    "Contact Lenses Lagos",

    "Contact Lens Centre",

    "Digital Lens",

    "Blue Light Glasses",

    "Progressive Lenses",

    "Prescription Glasses",

    "Designer Frames",

    "Optical Store Lagos",

    "Low Vision Devices",

    "Magnifiers",

    "Electronic Magnifier",

    "Vision Rehabilitation",

    "Eye Care Nigeria",

    "Eye Doctor Near Me",

  ],



  metadataBase: new URL("https://forsteyeclinic.com"),



  alternates: {

    canonical: "/",

  },



  openGraph: {

    title: "FORST Eye Clinic | Trusted Eye Care Specialists",



    description:

      "Professional eye examinations, glaucoma care, cataract management, contact lenses, premium eyewear and advanced eye care services.",



    url: "https://forsteyeclinic.com",



    siteName: "FORST Eye Clinic",



    locale: "en_NG",



    type: "website",



    images: [

      {

        url: "https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_39_u6qbly.png",

        width: 1200,

        height: 630,

        alt: "FORST Eye Clinic",

      },

    ],

  },



  twitter: {

    card: "summary_large_image",



    title: "FORST Eye Clinic",



    description:

      "Trusted eye care specialists providing comprehensive eye care, optical services and contact lenses.",



    images: [

      "https://res.cloudinary.com/dut0fvswc/image/upload/v1783801568/Untitled_design_39_u6qbly.png",

    ],

  },



  robots: {

    index: true,

    follow: true,

  },

};



export default function HomePage() {

  return (

    <main className="overflow-x-hidden bg-white">


      {/* Hero */}
      <Hero />


      {/* Comprehensive Eye Care Services */}
      <Services />


      {/* Why Choose FORST */}
      <WhyChooseUs />


      {/* Premium Optical Store */}
      <OpticalStore />


      {/* Digital Lens Technology */}
      <DigitalLens />


      {/* Low Vision Centre */}
      <LowVisionProducts />


      {/* Founder & Chief Medical Director */}
      <FounderCEO />


      {/* Our Clinic Branches */}
      <Branches />


      {/* HMO & Insurance Partners */}
      <InsurancePartners />

      {/* Patient Testimonials */}
      <Testimonials />

      {/* Eye Conditions We Treat */}
      <Conditions />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Eye Health Articles */}
      <BlogPreview />

      {/* Frequently Asked Questions */}
      <FAQs />

      {/* Book Appointment */}
      <ContactCTA />

      {/* SEO Content */}
      <LocationsSEO />



    </main>

  );

}