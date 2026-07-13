export interface SEOPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  content: string[];
  keywords: string[];
  relatedLinks: {
    title: string;
    href: string;
  }[];
}

export const seoPages: SEOPage[] = [
  {
    slug: "best-eye-clinic-in-lagos",

    title: "Best Eye Clinic in Lagos",

    metaTitle:
      "Best Eye Clinic in Lagos | FORST EYE CLINIC (FEC)",

    metaDescription:
      "FORST EYE CLINIC provides comprehensive eye examinations, glaucoma management, cataract care, pediatric eye care, dry eye treatment, low vision rehabilitation and optical services across Lagos.",

    heading: "Best Eye Clinic in Lagos",

    intro:
      "FORST EYE CLINIC (FEC) is committed to providing professional, affordable and accessible eye care services through experienced eye care professionals, modern diagnostic technology and patient-centered treatment across Lagos.",

    content: [
      "At FORST EYE CLINIC, we are more than just an eye clinic—we are your lifelong partners in protecting, preserving and perfecting your vision. Our clinics combine modern technology with experienced professionals to deliver exceptional eye care.",

      "Our services include comprehensive eye examinations, glaucoma management, cataract assessment, pediatric eye care, dry eye treatment, diabetic eye screening, low vision rehabilitation and premium optical services.",

      "With branches strategically located across Lagos, patients can conveniently access quality eye care close to home while enjoying friendly service, accurate diagnosis and evidence-based treatment."
    ],

    keywords: [
      "Best Eye Clinic in Lagos",
      "Eye Clinic Lagos",
      "Eye Hospital Lagos",
      "Eye Test Lagos",
      "Optometrist Lagos",
      "Ophthalmology Clinic Lagos",
      "FORST EYE CLINIC",
      "FEC Lagos"
    ],

    relatedLinks: [
      {
        title: "Book Appointment",
        href: "/book-eye-appointment",
      },
      {
        title: "Our Branches",
        href: "/branches",
      },
      {
        title: "Eye Examination",
        href: "/services/comprehensive-eye-examination",
      },
    ],
  },

  {
    slug: "eye-clinic-near-me",

    title: "Eye Clinic Near Me",

    metaTitle:
      "Eye Clinic Near Me | FORST EYE CLINIC",

    metaDescription:
      "Looking for an eye clinic near you? Visit FORST EYE CLINIC at any of our branches in Ogba, Magodo, Surulere, Festac, Agbara or Eleko for comprehensive eye care.",

    heading: "Looking for an Eye Clinic Near You?",

    intro:
      "FORST EYE CLINIC has multiple branches across Lagos, making quality eye care easily accessible wherever you are.",

    content: [
      "Regular eye examinations are essential for detecting eye diseases early and protecting your vision.",

      "Whether you need a routine eye test, glaucoma screening, cataract evaluation, pediatric eye care or new prescription glasses, our experienced team is here to help.",

      "Book an appointment online or visit any FORST EYE CLINIC location for professional eye care."
    ],

    keywords: [
      "Eye Clinic Near Me",
      "Eye Test Near Me",
      "Optometrist Near Me",
      "Eye Hospital Near Me",
      "Best Eye Clinic Near Me"
    ],

    relatedLinks: [
      {
        title: "Find a Branch",
        href: "/branches",
      },
      {
        title: "Book Appointment",
        href: "/book-eye-appointment",
      },
    ],
  },

  {
    slug: "best-eye-clinic-in-ogba",

    title: "Best Eye Clinic in Ogba",

    metaTitle:
      "Best Eye Clinic in Ogba Ikeja | FORST EYE CLINIC",

    metaDescription:
      "Visit the FORST EYE CLINIC Head Branch in Ogba, Ikeja for comprehensive eye examinations, glaucoma management, cataract care and optical services.",

    heading: "FORST EYE CLINIC Ogba",

    intro:
      "Our Ogba branch is the Head Branch of FORST EYE CLINIC, providing comprehensive eye care using modern equipment and experienced professionals.",

    content: [
      "Conveniently located at No. 14 Kayode Street, Off Ijaiye Road, Ogba Ikeja, our head branch serves patients from Ogba, Ikeja, Agege, Allen, Ojodu and surrounding communities.",

      "Patients benefit from accurate diagnosis, personalized treatment plans and a welcoming environment dedicated to preserving healthy vision.",

      "We provide comprehensive eye examinations, glaucoma management, cataract assessment, pediatric eye care, dry eye treatment and optical services."
    ],

    keywords: [
      "Eye Clinic Ogba",
      "Eye Hospital Ogba",
      "Eye Test Ogba",
      "Optometrist Ogba",
      "Eye Clinic Ikeja"
    ],

    relatedLinks: [
      {
        title: "Ogba Branch",
        href: "/branches/ogba",
      },
      {
        title: "Book Appointment",
        href: "/book-eye-appointment",
      },
    ],
  },

  {
    slug: "glaucoma-clinic-lagos",

    title: "Glaucoma Clinic Lagos",

    metaTitle:
      "Glaucoma Clinic in Lagos | FORST EYE CLINIC",

    metaDescription:
      "FORST EYE CLINIC provides glaucoma screening, diagnosis, treatment and long-term management across all our Lagos branches.",

    heading: "Professional Glaucoma Care",

    intro:
      "Early detection is the best protection against glaucoma-related vision loss.",

    content: [
      "Glaucoma is often called the silent thief of sight because it may develop without noticeable symptoms during its early stages.",

      "FORST EYE CLINIC provides comprehensive glaucoma screening using modern diagnostic equipment together with long-term monitoring and treatment.",

      "Routine glaucoma screening is especially important for adults above 40 years and people with a family history of glaucoma."
    ],

    keywords: [
      "Glaucoma Clinic Lagos",
      "Glaucoma Test Lagos",
      "Eye Pressure Test",
      "Glaucoma Specialist Lagos"
    ],

    relatedLinks: [
      {
        title: "Glaucoma Management",
        href: "/services/glaucoma-management",
      },
      {
        title: "Book Appointment",
        href: "/book-eye-appointment",
      },
    ],
  },

  {
    slug: "comprehensive-eye-examination",

    title: "Comprehensive Eye Examination",

    metaTitle:
      "Comprehensive Eye Examination | FORST EYE CLINIC",

    metaDescription:
      "Book a comprehensive eye examination at FORST EYE CLINIC for accurate vision assessment and early detection of eye diseases.",

    heading: "Comprehensive Eye Examination",

    intro:
      "Routine eye examinations are the foundation of healthy vision and early disease detection.",

    content: [
      "Our comprehensive eye examinations evaluate your visual health, eye pressure, retina, optic nerve and overall eye function using advanced diagnostic equipment.",

      "Regular eye examinations help detect glaucoma, cataracts, diabetic eye disease and other vision-threatening conditions before symptoms appear.",

      "FORST EYE CLINIC recommends routine eye examinations for children, adults and seniors."
    ],

    keywords: [
      "Eye Examination Lagos",
      "Eye Test Lagos",
      "Vision Test",
      "Comprehensive Eye Examination"
    ],

    relatedLinks: [
      {
        title: "Book Appointment",
        href: "/book-eye-appointment",
      },
      {
        title: "All Services",
        href: "/services",
      },
    ],
  },
];