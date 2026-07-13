export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category:
    | "General Eye Care"
    | "Medical Eye Care"
    | "Surgical Eye Care"
    | "Optical Services"
    | "Specialty Clinics";

  icon: string;
  image: string;

  shortDescription: string;
  description: string;

  benefits: string[];
  procedures: string[];
  conditions: string[];

  featured: boolean;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const services: Service[] = [
  {
    slug: "comprehensive-eye-examination",
    name: "Comprehensive Eye Examination",
    shortName: "Eye Examination",
    category: "General Eye Care",
    icon: "Eye",
    image: "/images/services/comprehensive-eye-examination.jpg",

    shortDescription:
      "Complete eye examinations using modern diagnostic equipment.",

    description:
      "Our comprehensive eye examination evaluates your vision, eye health and detects eye diseases at an early stage. Every examination is performed by experienced eye care professionals using modern technology.",

    benefits: [
      "Early disease detection",
      "Accurate vision assessment",
      "Updated spectacle prescription",
      "Complete eye health evaluation",
    ],

    procedures: [
      "Visual acuity test",
      "Refraction",
      "Eye pressure measurement",
      "Slit lamp examination",
      "Dilated eye examination",
    ],

    conditions: [
      "Blurred vision",
      "Eye strain",
      "Routine eye check",
      "Refractive errors",
    ],

    featured: true,

    seo: {
      title: "Comprehensive Eye Examination | FORST EYE CLINIC",
      description:
        "Book a comprehensive eye examination at FORST EYE CLINIC for accurate diagnosis and professional eye care.",
      keywords: [
        "eye test",
        "eye examination",
        "vision test",
        "eye clinic Lagos",
      ],
    },
  },

  {
    slug: "glaucoma-management",
    name: "Glaucoma Management",
    shortName: "Glaucoma Clinic",
    category: "Medical Eye Care",
    icon: "ShieldPlus",
    image: "/images/services/glaucoma-management.jpg",

    shortDescription:
      "Early diagnosis and long-term glaucoma management.",

    description:
      "Our glaucoma clinic provides screening, diagnosis, treatment and continuous monitoring to preserve vision and prevent blindness.",

    benefits: [
      "Early diagnosis",
      "Vision preservation",
      "Regular monitoring",
      "Personalized treatment plans",
    ],

    procedures: [
      "Tonometry",
      "Visual field testing",
      "OCT scan",
      "Optic nerve assessment",
    ],

    conditions: [
      "Open-angle glaucoma",
      "Angle-closure glaucoma",
      "Ocular hypertension",
    ],

    featured: true,

    seo: {
      title: "Glaucoma Clinic | FORST EYE CLINIC",
      description:
        "Professional glaucoma screening, diagnosis and treatment at FORST EYE CLINIC.",
      keywords: [
        "glaucoma clinic",
        "glaucoma treatment",
        "eye pressure",
      ],
    },
  },

  {
    slug: "cataract-care",
    name: "Cataract Care",
    shortName: "Cataract",
    category: "Surgical Eye Care",
    icon: "Sun",
    image: "/images/services/cataract-care.jpg",

    shortDescription:
      "Diagnosis, counselling and cataract surgery referral.",

    description:
      "We diagnose cataracts early and provide professional management, surgical evaluation and post-operative follow-up.",

    benefits: [
      "Improved vision",
      "Early detection",
      "Surgical counselling",
      "Post-operative care",
    ],

    procedures: [
      "Lens examination",
      "Visual assessment",
      "Pre-operative evaluation",
      "Post-operative review",
    ],

    conditions: [
      "Age-related cataract",
      "Traumatic cataract",
      "Secondary cataract",
    ],

    featured: true,

    seo: {
      title: "Cataract Care | FORST EYE CLINIC",
      description:
        "Professional cataract diagnosis, treatment and surgery referral in Lagos.",
      keywords: [
        "cataract",
        "cataract surgery",
        "cloudy vision",
      ],
    },
  },

  {
    slug: "dry-eye-treatment",
    name: "Dry Eye Treatment",
    shortName: "Dry Eye Clinic",
    category: "Medical Eye Care",
    icon: "Droplets",
    image: "/images/services/dry-eye-treatment.jpg",

    shortDescription:
      "Modern diagnosis and treatment for dry eye syndrome.",

    description:
      "Persistent eye irritation, burning or watering may indicate dry eye disease. We offer comprehensive evaluation and effective treatment.",

    benefits: [
      "Reduced irritation",
      "Better comfort",
      "Improved tear quality",
      "Healthier eyes",
    ],

    procedures: [
      "Dry eye assessment",
      "Tear film evaluation",
      "Lid examination",
      "Treatment planning",
    ],

    conditions: [
      "Dry eye syndrome",
      "Blepharitis",
      "Meibomian gland dysfunction",
    ],

    featured: true,

    seo: {
      title: "Dry Eye Treatment | FORST EYE CLINIC",
      description:
        "Professional dry eye diagnosis and treatment for lasting comfort.",
      keywords: [
        "dry eye clinic",
        "eye irritation",
        "dry eyes Lagos",
      ],
    },
  },

  {
    slug: "low-vision-rehabilitation",
    name: "Low Vision Rehabilitation",
    shortName: "Low Vision",
    category: "Specialty Clinics",
    icon: "Glasses",
    image: "/images/services/low-vision.jpg",

    shortDescription:
      "Helping patients maximize remaining vision.",

    description:
      "Our low vision clinic assists patients whose sight cannot be fully corrected with glasses, medication or surgery.",

    benefits: [
      "Improved independence",
      "Visual aids",
      "Better quality of life",
      "Personalized rehabilitation",
    ],

    procedures: [
      "Low vision assessment",
      "Magnifier prescription",
      "Visual rehabilitation",
    ],

    conditions: [
      "Macular degeneration",
      "Advanced glaucoma",
      "Retinal diseases",
    ],

    featured: true,

    seo: {
      title: "Low Vision Clinic | FORST EYE CLINIC",
      description:
        "Professional low vision rehabilitation services in Lagos.",
      keywords: [
        "low vision",
        "vision rehabilitation",
      ],
    },
  },

  {
    slug: "pediatric-eye-care",
    name: "Pediatric Eye Care",
    shortName: "Children's Eye Care",
    category: "Specialty Clinics",
    icon: "Baby",
    image: "/images/services/pediatric-eye-care.jpg",

    shortDescription:
      "Specialized eye care for infants and children.",

    description:
      "Healthy vision is essential for learning and development. Our pediatric eye clinic provides complete eye care for children.",

    benefits: [
      "Early detection",
      "Healthy visual development",
      "School vision screening",
      "Child-friendly examinations",
    ],

    procedures: [
      "Children's eye examination",
      "Vision screening",
      "Squint assessment",
    ],

    conditions: [
      "Lazy eye",
      "Squint",
      "Refractive errors",
    ],

    featured: true,

    seo: {
      title: "Pediatric Eye Care | FORST EYE CLINIC",
      description:
        "Professional children's eye examinations and pediatric eye care.",
      keywords: [
        "children eye clinic",
        "pediatric ophthalmology",
      ],
    },
  },

  {
    slug: "diabetic-eye-screening",
    name: "Diabetic Eye Screening",
    shortName: "Diabetic Eye Care",
    category: "Medical Eye Care",
    icon: "Activity",
    image: "/images/services/diabetic-eye-screening.jpg",

    shortDescription:
      "Routine diabetic retinal examinations.",

    description:
      "Regular retinal screening helps prevent vision loss caused by diabetic eye disease.",

    benefits: [
      "Early diabetic retinopathy detection",
      "Vision preservation",
      "Routine monitoring",
    ],

    procedures: [
      "Retinal examination",
      "Dilated fundoscopy",
      "Retinal photography",
    ],

    conditions: [
      "Diabetic retinopathy",
      "Macular edema",
    ],

    featured: true,

    seo: {
      title: "Diabetic Eye Screening | FORST EYE CLINIC",
      description:
        "Protect your eyesight with regular diabetic eye screening.",
      keywords: [
        "diabetic eye screening",
        "retina examination",
      ],
    },
  },

  {
    slug: "refraction-and-prescription",
    name: "Refraction & Prescription",
    shortName: "Refraction",
    category: "General Eye Care",
    icon: "ScanEye",
    image: "/images/services/refraction.jpg",

    shortDescription:
      "Accurate spectacle and contact lens prescriptions.",

    description:
      "Professional refraction ensures the correct prescription for clear and comfortable vision.",

    benefits: [
      "Sharper vision",
      "Reduced headaches",
      "Comfortable reading",
    ],

    procedures: [
      "Objective refraction",
      "Subjective refraction",
    ],

    conditions: [
      "Myopia",
      "Hyperopia",
      "Astigmatism",
      "Presbyopia",
    ],

    featured: false,

    seo: {
      title: "Eye Refraction | FORST EYE CLINIC",
      description:
        "Professional eye refraction and prescription services.",
      keywords: [
        "eye prescription",
        "refraction",
      ],
    },
  },

  {
    slug: "optical-services",
    name: "Optical Services",
    shortName: "Optical",
    category: "Optical Services",
    icon: "Glasses",
    image: "/images/services/optical-services.jpg",

    shortDescription:
      "Quality frames, lenses and professional dispensing.",

    description:
      "Choose from premium frames and lenses with expert fitting by our optical team.",

    benefits: [
      "Premium frames",
      "Quality lenses",
      "Professional fitting",
    ],

    procedures: [
      "Frame selection",
      "Lens fitting",
      "Dispensing",
    ],

    conditions: [
      "Refractive errors",
    ],

    featured: true,

    seo: {
      title: "Optical Services | FORST EYE CLINIC",
      description:
        "Premium optical services including frames, lenses and dispensing.",
      keywords: [
        "optical shop",
        "eyeglasses",
        "frames",
      ],
    },
  },

  {
    slug: "digital-lenses",
    name: "Digital Lenses",
    shortName: "Digital Lenses",
    category: "Optical Services",
    icon: "Monitor",
    image: "/images/services/digital-lenses.jpg",

    shortDescription:
      "Modern lenses designed for digital lifestyles.",

    description:
      "Reduce digital eye strain with premium lenses designed for prolonged screen use.",

    benefits: [
      "Reduced eye strain",
      "Comfortable computer use",
      "Sharper vision",
    ],

    procedures: [
      "Lens consultation",
      "Prescription fitting",
    ],

    conditions: [
      "Digital eye strain",
    ],

    featured: false,

    seo: {
      title: "Digital Lenses | FORST EYE CLINIC",
      description:
        "Premium digital lenses for computer and smartphone users.",
      keywords: [
        "digital lenses",
        "computer glasses",
      ],
    },
  },

  {
    slug: "contact-lens-services",
    name: "Contact Lens Services",
    shortName: "Contact Lenses",
    category: "Optical Services",
    icon: "Circle",
    image: "/images/services/contact-lenses.jpg",

    shortDescription:
      "Professional contact lens fitting and care.",

    description:
      "Comprehensive contact lens assessment, fitting and aftercare for safe, comfortable wear.",

    benefits: [
      "Comfortable fitting",
      "Expert guidance",
      "Safe lens wear",
    ],

    procedures: [
      "Contact lens assessment",
      "Lens fitting",
      "Aftercare",
    ],

    conditions: [
      "Myopia",
      "Hyperopia",
      "Astigmatism",
    ],

    featured: false,

    seo: {
      title: "Contact Lens Clinic | FORST EYE CLINIC",
      description:
        "Professional contact lens fitting and consultation.",
      keywords: [
        "contact lenses",
        "lens fitting",
      ],
    },
  },
];

export const featuredServices = services.filter(
  (service) => service.featured
);