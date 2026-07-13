export interface Review {
  id: number;
  name: string;
  location: string;
  branch: string;
  rating: number;
  title: string;
  review: string;
  service: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Chinwe O.",
    location: "Ogba",
    branch: "Ogba",
    rating: 5,
    title: "Excellent Eye Care",
    review:
      "The doctors were very professional and explained every part of my eye examination. The clinic was clean, organized and the staff were friendly.",
    service: "Comprehensive Eye Examination",
    date: "2025-11-15",
    verified: true,
  },

  {
    id: 2,
    name: "Samuel A.",
    location: "Ikeja",
    branch: "Ogba",
    rating: 5,
    title: "Highly Recommended",
    review:
      "I came for glaucoma screening and the entire process was smooth. The equipment looked modern and I received detailed explanations.",
    service: "Glaucoma Screening",
    date: "2025-11-08",
    verified: true,
  },

  {
    id: 3,
    name: "Blessing E.",
    location: "Festac",
    branch: "Festac",
    rating: 5,
    title: "Wonderful Experience",
    review:
      "The optometrist helped me choose the perfect lenses. My new glasses are comfortable and my vision is much clearer.",
    service: "Optical Services",
    date: "2025-10-28",
    verified: true,
  },

  {
    id: 4,
    name: "Michael O.",
    location: "Surulere",
    branch: "Surulere",
    rating: 5,
    title: "Professional Staff",
    review:
      "Everyone was courteous from reception to consultation. I didn't have to wait long before seeing the doctor.",
    service: "Eye Examination",
    date: "2025-10-16",
    verified: true,
  },

  {
    id: 5,
    name: "Ada N.",
    location: "Magodo",
    branch: "Magodo",
    rating: 5,
    title: "Very Thorough",
    review:
      "The doctor carefully examined my eyes and answered every question. I left feeling confident about my eye health.",
    service: "Comprehensive Eye Examination",
    date: "2025-09-30",
    verified: true,
  },

  {
    id: 6,
    name: "Joseph K.",
    location: "Agbara",
    branch: "Agbara",
    rating: 5,
    title: "Quality Service",
    review:
      "The clinic exceeded my expectations. Booking was easy and the consultation was worth every minute.",
    service: "General Eye Consultation",
    date: "2025-09-20",
    verified: true,
  },

  {
    id: 7,
    name: "Grace I.",
    location: "Eleko",
    branch: "Eleko",
    rating: 5,
    title: "Friendly Doctors",
    review:
      "I brought my daughter for a pediatric eye examination. The doctor was patient and made her feel comfortable throughout the visit.",
    service: "Pediatric Eye Care",
    date: "2025-09-10",
    verified: true,
  },

  {
    id: 8,
    name: "David U.",
    location: "Festac",
    branch: "Festac",
    rating: 5,
    title: "Modern Equipment",
    review:
      "I was impressed by the diagnostic equipment and the professionalism of the medical team.",
    service: "Digital Eye Examination",
    date: "2025-08-25",
    verified: true,
  },

  {
    id: 9,
    name: "Ruth C.",
    location: "Ogba",
    branch: "Ogba",
    rating: 5,
    title: "Great Customer Service",
    review:
      "The reception staff were welcoming and helped me through the registration process quickly.",
    service: "Eye Consultation",
    date: "2025-08-18",
    verified: true,
  },

  {
    id: 10,
    name: "Emmanuel B.",
    location: "Surulere",
    branch: "Surulere",
    rating: 5,
    title: "Worth Visiting",
    review:
      "I had persistent eye discomfort and finally got the right diagnosis. I'm grateful for the quality care.",
    service: "Dry Eye Treatment",
    date: "2025-08-04",
    verified: true,
  },

  {
    id: 11,
    name: "Victoria A.",
    location: "Magodo",
    branch: "Magodo",
    rating: 5,
    title: "Excellent Optical Department",
    review:
      "There was a good selection of frames and the staff helped me choose one that suited me perfectly.",
    service: "Prescription Glasses",
    date: "2025-07-25",
    verified: true,
  },

  {
    id: 12,
    name: "Ibrahim M.",
    location: "Agbara",
    branch: "Agbara",
    rating: 5,
    title: "Trusted Clinic",
    review:
      "This is now my family's preferred eye clinic. Professional doctors, quality care and affordable services.",
    service: "Family Eye Care",
    date: "2025-07-10",
    verified: true,
  },
];

export const reviewStats = {
  averageRating: 4.9,
  totalReviews: 500,
  recommendationRate: 98,
  satisfiedPatients: "10,000+",
};

export const reviewHighlights = [
  "Professional Doctors",
  "Modern Diagnostic Equipment",
  "Friendly Staff",
  "Affordable Eye Care",
  "Multiple Lagos Locations",
  "Trusted by Families",
  "HMO Accepted",
  "Comprehensive Eye Care",
];