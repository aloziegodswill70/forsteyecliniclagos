export interface Branch {
  slug: string;
  name: string;
  shortName: string;

  image: string;

  phone: string;
  whatsapp: string;
  email: string;

  address: string;

  city: string;
  state: string;

  latitude: number;
  longitude: number;

  directionsUrl: string;
  mapEmbedUrl: string;

  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };

  services: string[];

  seo: {
    title: string;
    description: string;
  };
}

const defaultServices = [
  "Comprehensive Eye Examination",
  "Glaucoma Management",
  "Cataract Care",
  "Dry Eye Treatment",
  "Low Vision Rehabilitation",
  "Pediatric Eye Care",
  "Digital Lenses",
  "Optical Services",
];

export const branches: Branch[] = [
  {
    slug: "ogba",

    name: "FORST EYE CLINIC - Ogba",

    shortName: "Ogba (Head Branch)",

    image: "/images/branches/ogba.jpg",

    phone: "08186992818",

    whatsapp: "2348186992818",

    email: "firsteyeclinic@gmail.com",

    address:
      "No. 14 Kayode Street, Off Ijaiye Road, Between Tastee Fried Chicken and Normal Children School, By Caterpillar Bus Stop, Ogba, Ikeja, Lagos.",

    city: "Ogba",

    state: "Lagos",

    latitude: 0,

    longitude: 0,

    directionsUrl:
      "https://maps.app.goo.gl/fWDwmcWg71EkZvAz5",

    mapEmbedUrl: "",

    openingHours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "Closed",
    },

    services: defaultServices,

    seo: {
      title:
        "FORST EYE CLINIC Ogba | Head Eye Clinic in Ikeja Lagos",

      description:
        "Visit FORST EYE CLINIC Ogba for comprehensive eye examinations, glaucoma management, cataract care, dry eye treatment, pediatric eye care, optical services and more.",
    },
  },

  {
    slug: "magodo",

    name: "FORST EYE CLINIC - Magodo",

    shortName: "Magodo",

    image: "/images/branches/magodo.jpg",

    phone: "",

    whatsapp: "2348186992818",

    email: "firsteyeclinic@gmail.com",

    address:
      "4A Old Olowora Road, Isheri Bus Stop, Magodo Isheri, Lagos.",

    city: "Magodo",

    state: "Lagos",

    latitude: 0,

    longitude: 0,

    directionsUrl:
      "https://maps.app.goo.gl/4psZahdYSqkH5Eft5",

    mapEmbedUrl: "",

    openingHours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "Closed",
    },

    services: defaultServices,

    seo: {
      title:
        "FORST EYE CLINIC Magodo | Eye Clinic in Magodo Lagos",

      description:
        "Professional eye care services including eye examinations, glaucoma management, cataract care and optical services in Magodo Lagos.",
    },
  },

  {
    slug: "festac",

    name: "FORST EYE CLINIC - Festac",

    shortName: "Festac",

    image: "/images/branches/festac.jpg",

    phone: "08127109644",

    whatsapp: "2348127109644",

    email: "firsteyeclinic@gmail.com",

    address:
      "5th Avenue, U Close, House 1, Festac Town, Lagos.",

    city: "Festac",

    state: "Lagos",

    latitude: 0,

    longitude: 0,

    directionsUrl:
      "https://maps.app.goo.gl/JWMhpXtk3NenSz6d7",

    mapEmbedUrl: "",

    openingHours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "Closed",
    },

    services: defaultServices,

    seo: {
      title:
        "FORST EYE CLINIC Festac | Eye Clinic in Festac Lagos",

      description:
        "Trusted eye clinic in Festac offering glaucoma care, cataract care, eye examinations, pediatric eye care and optical services.",
    },
  },

  {
    slug: "surulere",

    name: "FORST EYE CLINIC - Surulere",

    shortName: "Surulere",

    image: "/images/branches/surulere.jpg",

    phone: "08026428800",

    whatsapp: "2348026428800",

    email: "firsteyeclinic@gmail.com",

    address:
      "3 Onisemo Street, By Adegoke Gate, Near Masha Bus Stop, Opposite X-Serve Children's Hospital, Surulere, Lagos.",

    city: "Surulere",

    state: "Lagos",

    latitude: 0,

    longitude: 0,

    directionsUrl:
      "https://maps.app.goo.gl/kXGdJvUF8LXBzXrW6",

    mapEmbedUrl: "",

    openingHours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "Closed",
    },

    services: defaultServices,

    seo: {
      title:
        "FORST EYE CLINIC Surulere | Eye Clinic in Surulere Lagos",

      description:
        "Comprehensive eye examinations, glaucoma management, cataract care, pediatric eye care and optical services in Surulere Lagos.",
    },
  },

  {
    slug: "agbara",

    name: "FORST EYE CLINIC - Agbara",

    shortName: "Agbara",

    image: "/images/branches/agbara.jpg",

    phone: "08163912783",

    whatsapp: "2348163912783",

    email: "firsteyeclinic@gmail.com",

    address:
      "KM 32, Lagos-Badagry Expressway, Mobil Filling Station, Morogbo, Agbara Bus Stop, Lagos.",

    city: "Agbara",

    state: "Lagos",

    latitude: 0,

    longitude: 0,

    directionsUrl:
      "https://maps.app.goo.gl/pC4nwFEAQkVvnRRN7",

    mapEmbedUrl: "",

    openingHours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "Closed",
    },

    services: defaultServices,

    seo: {
      title:
        "FORST EYE CLINIC Agbara | Eye Clinic in Agbara Lagos",

      description:
        "FORST EYE CLINIC Agbara provides comprehensive eye examinations, glaucoma management, cataract treatment, dry eye care and optical services.",
    },
  },

  {
    slug: "eleko",

    name: "FORST EYE CLINIC - Eleko",

    shortName: "Eleko",

    image: "/images/branches/eleko.jpg",

    phone: "09073209487",

    whatsapp: "2349073209487",

    email: "firsteyeclinic@gmail.com",

    address:
      "Suite 4, Nice Place Plaza, KM 52 Lekki-Epe Expressway, Eleko Junction, Ibeju-Lekki, Lagos.",

    city: "Ibeju-Lekki",

    state: "Lagos",

    latitude: 0,

    longitude: 0,

    directionsUrl:
      "https://maps.app.goo.gl/QbJFo8qxqFpDe1Bv6",

    mapEmbedUrl: "",

    openingHours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "Closed",
    },

    services: defaultServices,

    seo: {
      title:
        "FORST EYE CLINIC Eleko | Eye Clinic in Ibeju-Lekki",

      description:
        "Professional eye examinations, glaucoma management, cataract care, pediatric eye care and optical services in Eleko, Ibeju-Lekki.",
    },
  },
];