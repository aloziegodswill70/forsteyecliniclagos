export interface Blog {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  publishedAt: string;
  author: string;
  content: string[];
}

export const blogs: Blog[] = [
  {
    slug: "10-signs-you-need-an-eye-test",
    title: "10 Signs You Need a Comprehensive Eye Test",
    description:
      "Discover the common warning signs that indicate it's time to schedule a comprehensive eye examination at FORST EYE CLINIC.",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/fec5_swlqvl.png",
    category: "Eye Examination",
    publishedAt: "2026-01-10",
    author: "FORST EYE CLINIC",
    content: [
      "Routine eye examinations help detect eye diseases before symptoms appear.",
      "Persistent headaches, blurred vision, eye strain, squinting, poor night vision and difficulty reading are common warning signs.",
      "Children, adults above 40 years and people living with diabetes or hypertension should have regular eye examinations.",
      "At FORST EYE CLINIC we perform comprehensive eye examinations using modern diagnostic equipment including Optical Coherence Tomography (OCT).",
      "Early diagnosis is the key to preserving lifelong vision.",
    ],
  },

  {
    slug: "glaucoma-the-silent-thief-of-sight",
    title: "Glaucoma: The Silent Thief of Sight",
    description:
      "Glaucoma develops silently and can permanently damage vision if not detected early.",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782948981/Untitled_design_33_ugpsn6.png",
    category: "Glaucoma",
    publishedAt: "2026-01-18",
    author: "FORST EYE CLINIC",
    content: [
      "Glaucoma is one of the leading causes of irreversible blindness worldwide.",
      "Most patients experience no symptoms until significant vision has already been lost.",
      "Routine eye pressure checks and optic nerve examinations are essential.",
      "Individuals above 40 years or with a family history should be screened regularly.",
      "FORST EYE CLINIC provides advanced glaucoma diagnosis, treatment and monitoring.",
    ],
  },

  {
    slug: "understanding-cataracts",
    title: "Understanding Cataracts and Their Treatment",
    description:
      "Learn what cataracts are, common symptoms and available treatment options.",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782948988/Untitled_design_37_fo8wgm.png",
    category: "Cataract",
    publishedAt: "2026-01-25",
    author: "FORST EYE CLINIC",
    content: [
      "A cataract occurs when the natural lens of the eye becomes cloudy.",
      "Symptoms include blurred vision, glare from lights, faded colours and difficulty driving at night.",
      "Regular eye examinations allow cataracts to be detected early.",
      "Modern cataract surgery is safe, effective and restores clear vision for most patients.",
      "Our specialists provide comprehensive cataract evaluation and referral for surgery when appropriate.",
    ],
  },

  {
    slug: "protect-your-eyes-from-dry-eye",
    title: "Dry Eye Syndrome: Causes, Symptoms and Treatment",
    description:
      "Dry eye syndrome affects millions of people. Learn how to recognize and manage it.",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782948979/Untitled_design_34_cvwrwx.png",
    category: "Dry Eye",
    publishedAt: "2026-02-02",
    author: "FORST EYE CLINIC",
    content: [
      "Dry Eye Syndrome occurs when the eyes do not produce enough quality tears.",
      "Symptoms include burning, itching, redness, watering and blurred vision.",
      "Excessive screen time and certain medications can worsen dry eyes.",
      "Treatment ranges from lubricating eye drops to advanced dry eye management.",
      "FORST EYE CLINIC offers comprehensive dry eye evaluation and treatment.",
    ],
  },

  {
    slug: "diabetic-retinopathy-what-you-need-to-know",
    title: "Diabetic Retinopathy: Protecting Your Sight",
    description:
      "People living with diabetes should have regular eye examinations to prevent vision loss.",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782948982/Untitled_design_35_bav2qa.png",
    category: "Diabetic Eye Care",
    publishedAt: "2026-02-11",
    author: "FORST EYE CLINIC",
    content: [
      "Diabetic retinopathy damages the blood vessels inside the retina.",
      "Early stages usually have no symptoms.",
      "Routine diabetic eye screening can detect problems before vision is affected.",
      "Good blood sugar control combined with regular eye examinations significantly reduces the risk of blindness.",
      "FORST EYE CLINIC provides diabetic eye screening using modern retinal imaging technology.",
    ],
  },

  {
    slug: "modern-eye-scans-with-oct",
    title: "Why OCT Scans Are Important for Eye Health",
    description:
      "Optical Coherence Tomography (OCT) allows eye specialists to detect diseases much earlier than standard examinations.",
    image:
      "https://res.cloudinary.com/dut0fvswc/image/upload/v1782943797/fec5_swlqvl.png",
    category: "Technology",
    publishedAt: "2026-02-20",
    author: "FORST EYE CLINIC",
    content: [
      "Optical Coherence Tomography (OCT) creates detailed cross-sectional images of the retina.",
      "It helps detect glaucoma, diabetic retinopathy, macular degeneration and other retinal diseases.",
      "The scan is painless, quick and highly accurate.",
      "Our clinic uses OCT technology to improve diagnosis and treatment planning.",
      "Modern technology enables earlier intervention and better visual outcomes.",
    ],
  },
];