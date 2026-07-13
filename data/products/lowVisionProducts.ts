export interface Product {
  id: string;
  slug: string;

  name: string;
  brand: string;

  category: string;

  description: string;

  image: string;

  featured: boolean;

  availability: "Available" | "Available on Request";
}
export interface Product {
  id: string;
  slug: string;

  name: string;
  brand: string;

  category: string;

  description: string;

  image: string;

  availability:
    | "Available"
    | "Available on Request";

  featured: boolean;
}

export const LOW_VISION_WHATSAPP =
  "+2348033435554";

export const lowVisionProducts: Product[] = [
  {
    id: "1",

    slug: "optelec-handheld-magnifier",

    name: "Optelec Handheld Magnifier",

    brand: "Optelec",

    category: "Handheld Magnifiers",

    description:
      "Premium illuminated handheld magnifier designed to improve reading, medication identification, newspapers, books and everyday close-up visual tasks for individuals living with low vision.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943922/Untitled_design_ww6qjn.png",

    availability: "Available",

    featured: true,
  },

  {
    id: "2",

    slug: "carson-7x-handheld-magnifier",

    name: "Carson 7X Handheld Magnifier",

    brand: "Carson",

    category: "Handheld Magnifiers",

    description:
      "High-quality optical handheld magnifier providing sharp image clarity for reading books, labels, prescriptions, newspapers and fine print.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943921/Untitled_design_7_t11stg.png",

    availability: "Available",

    featured: true,
  },

  {
    id: "3",

    slug: "schweizer-handheld-magnifier",

    name: "Schweizer Handheld Magnifier",

    brand: "Schweizer",

    category: "Handheld Magnifiers",

    description:
      "Professional handheld optical magnifier delivering excellent brightness and distortion-free magnification for daily reading and detailed visual work.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943921/Untitled_design_6_rccgpc.png",

    availability: "Available",

    featured: true,
  },

  {
    id: "4",

    slug: "eschenbach-powerlux-3-5x",

    name: "Eschenbach PowerLux 3.5X",

    brand: "Eschenbach",

    category: "Handheld Magnifiers",

    description:
      "Premium German-engineered LED illuminated magnifier offering exceptional optical clarity, comfort and superior reading performance.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943898/Untitled_design_3_tfxkcb.png",

    availability: "Available",

    featured: true,
  },

  {
    id: "5",

    slug: "schweizer-premium-magnifier",

    name: "Schweizer Premium Magnifier",

    brand: "Schweizer",

    category: "Handheld Magnifiers",

    description:
      "High-quality illuminated magnifier suitable for reading, writing, crafts, hobbies and everyday activities requiring enhanced near vision.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943898/Untitled_design_2_pw6xij.png",

    availability: "Available",

    featured: false,
  },

  {
    id: "6",

    slug: "blue-talking-clock",

    name: "Blue Talking Clock",

    brand: "Reizen",

    category: "Talking Devices",

    description:
      "Accessible voice-enabled talking clock with clear audible announcements, specially designed for individuals with blindness or low vision.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943897/Untitled_design_32_cwq48l.png",

    availability: "Available",

    featured: false,
  },
    {
    id: "7",

    slug: "black-talking-clock",

    name: "Black Talking Clock",

    brand: "Reizen",

    category: "Talking Devices",

    description:
      "Voice-enabled talking clock with clear audio announcements and easy-to-use tactile controls for people with blindness and low vision.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943897/Untitled_design_31_vdeoys.png",

    availability: "Available",

    featured: false,
  },

  {
    id: "8",

    slug: "yellow-talking-clock",

    name: "Yellow Talking Clock",

    brand: "Reizen",

    category: "Talking Devices",

    description:
      "Brightly coloured talking clock that announces the time aloud, helping users maintain independence in daily activities.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943897/Untitled_design_30_xny3q7.png",

    availability: "Available",

    featured: false,
  },

  {
    id: "9",

    slug: "optelec-compact-mini",

    name: "Optelec Compact Mini",

    brand: "Optelec",

    category: "Digital Video Magnifiers",

    description:
      "Portable electronic video magnifier featuring adjustable magnification, multiple viewing modes and high-definition image quality for reading and everyday visual tasks.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943897/Untitled_design_29_qtnvra.png",

    availability: "Available on Request",

    featured: true,
  },

  {
    id: "10",

    slug: "optelec-medium-video-magnifier",

    name: "Optelec Medium Video Magnifier",

    brand: "Optelec",

    category: "Digital Video Magnifiers",

    description:
      "Advanced portable digital magnifier offering crystal-clear image quality, adjustable zoom and enhanced contrast for individuals with low vision.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943878/Untitled_design_28_p2cxeo.png",

    availability: "Available on Request",

    featured: true,
  },

  {
    id: "11",

    slug: "envelope-writing-guide",

    name: "Envelope Writing Guide",

    brand: "MaxiAids",

    category: "Writing Aids",

    description:
      "Practical writing guide that helps individuals with visual impairment write neatly on envelopes and address documents independently.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943878/Untitled_design_27_jps0ul.png",

    availability: "Available",

    featured: false,
  },

  {
    id: "12",

    slug: "full-hd-7-inch-video-magnifier",

    name: "Full HD 7-Inch Video Magnifier",

    brand: "Eschenbach",

    category: "Digital Video Magnifiers",

    description:
      "Premium Full HD electronic magnifier with a large 7-inch display, delivering exceptional image quality for reading, writing, viewing photographs and detailed visual tasks.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943853/Untitled_design_24_rjcf7w.png",

    availability: "Available on Request",

    featured: true,
  },
    {
    id: "13",

    slug: "max-tv-glasses",

    name: "Max TV Glasses",

    brand: "Eschenbach",

    category: "Low Vision Spectacles",

    description:
      "Specially designed distance-viewing spectacles that make television, presentations, classrooms and sporting events clearer and more enjoyable for individuals with reduced vision.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943853/Untitled_design_23_ziaubf.png",

    availability: "Available",

    featured: false,
  },

  {
    id: "14",

    slug: "max-tv-glasses-pro",

    name: "Max TV Glasses Pro",

    brand: "Eschenbach",

    category: "Low Vision Spectacles",

    description:
      "Premium low vision television glasses providing sharper distance viewing with superior optical quality and long-wearing comfort.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943853/Untitled_design_22_ljh4ds.png",

    availability: "Available",

    featured: true,
  },

  {
    id: "15",

    slug: "clip-on-monocular-telescope",

    name: "Clip-On Monocular Telescope",

    brand: "Eschenbach",

    category: "Telescopes",

    description:
      "Compact clip-on telescope that attaches easily to spectacles, helping users recognize distant objects, signs and classroom boards with greater clarity.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943832/Untitled_design_17_z5ijbc.png",

    availability: "Available on Request",

    featured: false,
  },

  {
    id: "16",

    slug: "liquid-level-indicator",

    name: "Liquid Level Indicator",

    brand: "MaxiAids",

    category: "Daily Living Aids",

    description:
      "Simple electronic aid that alerts users when a cup or container is nearly full, helping prevent spills and improving confidence during everyday activities.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943832/Untitled_design_16_uaampb.png",

    availability: "Available",

    featured: false,
  },

  {
    id: "17",

    slug: "monocular-telescope",

    name: "Monocular Telescope",

    brand: "Eschenbach",

    category: "Telescopes",

    description:
      "Lightweight handheld telescope that enhances distance vision for reading signs, classroom learning, outdoor activities and daily mobility.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943832/Untitled_design_14_vcofdj.png",

    availability: "Available",

    featured: false,
  },

  {
    id: "18",

    slug: "binocular-telescope",

    name: "Binocular Telescope",

    brand: "Daylight",

    category: "Telescopes",

    description:
      "Professional binocular telescope offering bright, sharp distance vision for individuals with low vision who require improved visual performance outdoors or during events.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943832/Untitled_design_15_roa86w.png",

    availability: "Available on Request",

    featured: true,
  },
    {
    id: "19",

    slug: "magnifying-lamp-stand",

    name: "Magnifying Lamp Stand",

    brand: "Daylight",

    category: "Stand Magnifiers",

    description:
      "Illuminated stand magnifier with bright LED lighting, ideal for reading, sewing, crafts, writing and prolonged near work.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943799/Untitled_design_10_gj0b3v.png",

    availability: "Available",

    featured: false,
  },

  {
    id: "20",

    slug: "illuminated-stand-magnifier",

    name: "Illuminated Stand Magnifier",

    brand: "Eschenbach",

    category: "Stand Magnifiers",

    description:
      "Premium illuminated stand magnifier designed to reduce eye strain while providing distortion-free magnification for extended reading sessions.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943799/Untitled_design_12_xewyo8.png",

    availability: "Available",

    featured: false,
  },

  {
    id: "21",

    slug: "electronic-reading-aid",

    name: "Electronic Reading Aid",

    brand: "MaxiAids",

    category: "Reading Aids",

    description:
      "Portable electronic reading device that provides adjustable magnification and high-contrast viewing for people with moderate to severe low vision.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943799/Untitled_design_11_tpp5jf.png",

    availability: "Available on Request",

    featured: true,
  },

  {
    id: "22",

    slug: "braille-stickers",

    name: "Braille Stickers",

    brand: "MaxiAids",

    category: "Daily Living Aids",

    description:
      "Durable self-adhesive Braille labels that help individuals organize household, office and personal items independently.",

    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943831/Untitled_design_13_z1kyim.png",

    availability: "Available",

    featured: false,
  },
];