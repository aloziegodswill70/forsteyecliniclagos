export interface FeaturedLowVisionProduct {
  id: string;
  slug: string;

  name: string;
  brand: string;

  image: string;

  description: string;

  category: string;

  availability:
    | "Available"
    | "Available on Request";

  rating: number;

  featured: boolean;
}

export const featuredLowVisionProducts: FeaturedLowVisionProduct[] = [
  {
    id: "1",
    slug: "optelec-handheld-magnifier",

    name: "Optelec Handheld Magnifier",

    brand: "Optelec",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943922/Untitled_design_ww6qjn.png",

    description:
      "Premium illuminated handheld magnifier designed to provide comfortable reading and enhanced near vision for everyday activities.",

    category: "Handheld Magnifiers",

    availability: "Available",

    rating: 5,

    featured: true,
  },

  {
    id: "2",
    slug: "carson-7x-handheld-magnifier",

    name: "Carson 7X Handheld Magnifier",

    brand: "Carson",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943921/Untitled_design_7_t11stg.png",

    description:
      "Compact handheld optical magnifier offering excellent clarity for reading books, prescriptions and labels.",

    category: "Handheld Magnifiers",

    availability: "Available",

    rating: 4.9,

    featured: true,
  },

  {
    id: "3",
    slug: "schweizer-handheld-magnifier",

    name: "Schweizer Handheld Magnifier",

    brand: "Schweizer",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943921/Untitled_design_6_rccgpc.png",

    description:
      "Professional-grade handheld magnifier delivering distortion-free optical performance for daily low vision care.",

    category: "Handheld Magnifiers",

    availability: "Available",

    rating: 4.9,

    featured: true,
  },

  {
    id: "4",
    slug: "eschenbach-powerlux-3-5x",

    name: "Eschenbach PowerLux 3.5X",

    brand: "Eschenbach",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943898/Untitled_design_3_tfxkcb.png",

    description:
      "Premium LED illuminated magnifier providing bright, high-contrast viewing with superior optical quality.",

    category: "Illuminated Magnifiers",

    availability: "Available",

    rating: 5,

    featured: true,
  },

  {
    id: "5",
    slug: "optelec-compact-mini",

    name: "Optelec Compact Mini",

    brand: "Optelec",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943897/Untitled_design_29_qtnvra.png",

    description:
      "Portable electronic video magnifier featuring adjustable magnification and high-definition display for reading and daily tasks.",

    category: "Digital Video Magnifiers",

    availability: "Available on Request",

    rating: 5,

    featured: true,
  },

  {
    id: "6",
    slug: "full-hd-7-inch-video-magnifier",

    name: "Full HD 7-Inch Video Magnifier",

    brand: "Eschenbach",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943853/Untitled_design_24_rjcf7w.png",

    description:
      "Large-screen portable electronic magnifier offering Full HD viewing with multiple magnification levels and enhanced contrast.",

    category: "Digital Video Magnifiers",

    availability: "Available on Request",

    rating: 5,

    featured: true,
  },
];