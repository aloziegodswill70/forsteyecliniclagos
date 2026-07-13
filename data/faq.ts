export interface FAQ {
  question: string;
  answer: string;
  category:
    | "General"
    | "Appointments"
    | "Eye Examination"
    | "Glaucoma"
    | "Cataract"
    | "Children"
    | "Optical"
    | "Insurance";
}

export const faqs: FAQ[] = [
  // ==========================
  // GENERAL
  // ==========================

  {
    category: "General",
    question: "What is FORST EYE CLINIC?",
    answer:
      "FORST EYE CLINIC (FEC) is a professional eye care provider dedicated to preserving and improving vision through comprehensive eye examinations, diagnosis, treatment and preventive eye care services across multiple branches in Lagos.",
  },

  {
    category: "General",
    question: "Where is FORST EYE CLINIC located?",
    answer:
      "FORST EYE CLINIC currently operates branches in Ogba (Head Branch), Magodo, Surulere, Festac, Agbara and Eleko (Ibeju-Lekki), with more locations coming soon.",
  },

  {
    category: "General",
    question: "Which branch is the head office?",
    answer:
      "Our Ogba branch is the official Head Branch of FORST EYE CLINIC.",
  },

  {
    category: "General",
    question: "What are your opening hours?",
    answer:
      "Monday to Friday: 9:00 AM – 6:00 PM. Saturday: 9:00 AM – 6:00 PM. Sunday: Closed.",
  },

  // ==========================
  // APPOINTMENTS
  // ==========================

  {
    category: "Appointments",
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended to reduce waiting time, although walk-in patients are also welcome depending on availability.",
  },

  {
    category: "Appointments",
    question: "How do I book an appointment?",
    answer:
      "Appointments can be booked online through our website, via WhatsApp, or by calling your preferred branch directly.",
  },

  {
    category: "Appointments",
    question: "Can I reschedule my appointment?",
    answer:
      "Yes. Contact the branch where your appointment was booked and our team will assist you with rescheduling.",
  },

  {
    category: "Appointments",
    question: "What should I bring to my appointment?",
    answer:
      "Bring any previous eye prescriptions, medications, glasses, contact lenses, referral letters and your HMO card if applicable.",
  },

  // ==========================
  // EYE EXAMINATION
  // ==========================

  {
    category: "Eye Examination",
    question: "How often should I have my eyes examined?",
    answer:
      "Adults should have a comprehensive eye examination every one to two years, while children, seniors and patients with eye conditions may require more frequent examinations.",
  },

  {
    category: "Eye Examination",
    question: "How long does a comprehensive eye examination take?",
    answer:
      "A complete eye examination usually takes between 30 and 60 minutes depending on the patient's needs.",
  },

  {
    category: "Eye Examination",
    question: "Do you perform digital eye tests?",
    answer:
      "Yes. FORST EYE CLINIC uses modern diagnostic equipment to provide accurate eye examinations and disease detection.",
  },

  {
    category: "Eye Examination",
    question: "Can children have eye examinations?",
    answer:
      "Yes. We provide comprehensive pediatric eye examinations for infants, children and teenagers.",
  },

  // ==========================
  // GLAUCOMA
  // ==========================

  {
    category: "Glaucoma",
    question: "What is glaucoma?",
    answer:
      "Glaucoma is a group of eye diseases that damage the optic nerve, usually due to increased eye pressure. Early detection helps prevent permanent vision loss.",
  },

  {
    category: "Glaucoma",
    question: "Can glaucoma be cured?",
    answer:
      "Glaucoma cannot be completely cured, but it can be effectively managed through medications, laser procedures and regular monitoring.",
  },

  {
    category: "Glaucoma",
    question: "Who should be screened for glaucoma?",
    answer:
      "Everyone above age 40, individuals with diabetes, hypertension, a family history of glaucoma or previous eye injuries should undergo regular glaucoma screening.",
  },

  {
    category: "Glaucoma",
    question: "Do you provide glaucoma follow-up care?",
    answer:
      "Yes. Our glaucoma clinic provides long-term monitoring, visual field testing, optic nerve evaluation and treatment adjustments.",
  },

  // ==========================
  // CATARACT
  // ==========================

  {
    category: "Cataract",
    question: "What is a cataract?",
    answer:
      "A cataract occurs when the natural lens of the eye becomes cloudy, causing blurred vision, glare and reduced visual clarity.",
  },

  {
    category: "Cataract",
    question: "Can cataracts be treated without surgery?",
    answer:
      "Early cataracts may be managed temporarily with updated glasses, but surgery is the only permanent treatment once vision becomes significantly affected.",
  },

  {
    category: "Cataract",
    question: "Do you evaluate patients for cataract surgery?",
    answer:
      "Yes. We provide complete cataract assessments, pre-operative evaluations and referrals for cataract surgery when necessary.",
  },

  // ==========================
  // CHILDREN
  // ==========================

  {
    category: "Children",
    question: "At what age should a child have their first eye examination?",
    answer:
      "Children should ideally receive their first comprehensive eye examination before starting school or earlier if parents notice vision concerns.",
  },

  {
    category: "Children",
    question: "Do you treat lazy eye and squints?",
    answer:
      "Yes. We diagnose and manage amblyopia (lazy eye), strabismus (squints) and other pediatric eye conditions.",
  },

  // ==========================
  // OPTICAL
  // ==========================

  {
    category: "Optical",
    question: "Do you sell prescription glasses?",
    answer:
      "Yes. Our optical department offers high-quality prescription glasses, lenses, frames, sunglasses and digital lenses.",
  },

  {
    category: "Optical",
    question: "Can I replace only my lenses?",
    answer:
      "Yes. If your existing frame is still suitable, we can replace only the lenses with your updated prescription.",
  },

  {
    category: "Optical",
    question: "Do you provide blue light lenses?",
    answer:
      "Yes. We offer blue-light filtering lenses designed to reduce digital eye strain for computer and smartphone users.",
  },

  // ==========================
  // INSURANCE
  // ==========================

  {
    category: "Insurance",
    question: "Do you accept HMOs?",
    answer:
      "Yes. FORST EYE CLINIC partners with numerous Health Maintenance Organizations (HMOs). Please contact your preferred branch to confirm your HMO coverage.",
  },

  {
    category: "Insurance",
    question: "Can I use NHIA/NHIS?",
    answer:
      "Yes. Eligible patients can access eye care services through approved NHIA/NHIS plans, subject to their provider's authorization.",
  },

  {
    category: "Insurance",
    question: "How do I confirm my HMO is accepted?",
    answer:
      "You can call any FORST EYE CLINIC branch or contact us via WhatsApp before your visit to verify your HMO eligibility.",
  },
];

// Helpful grouped categories
export const faqCategories = [
  "General",
  "Appointments",
  "Eye Examination",
  "Glaucoma",
  "Cataract",
  "Children",
  "Optical",
  "Insurance",
] as const;