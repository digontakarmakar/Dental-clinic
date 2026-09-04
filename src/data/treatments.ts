export interface Treatment {
  id: string;
  slug: string;
  title: string;
  title_bn: string;
  category: string;
  category_bn: string;
  description: string;
  description_bn: string;
  image: string;
  benefits: string[];
  technologies: string[];
  process_steps: string[];
  price_range: string;
  cta: string;
  cta_bn: string;
}

export const TREATMENTS: Treatment[] = [
  {
    id: "implants",
    slug: "dental-implants",
    title: "Dental Implants",
    title_bn: "ডেন্টাল ইমপ্ল্যান্ট",
    category: "Implants",
    category_bn: "ইমপ্ল্যান্ট",
    description:
      "Restore missing teeth with advanced titanium implants designed for long-term comfort and function.",
    description_bn:
      "দীর্ঘমেয়াদী আরাম এবং কার্যকারিতা নিশ্চিত করে আধুনিক টাইটানিয়াম ইমপ্ল্যান্টস ব্যবহার করে অনুপস্থিত দাঁত পুনরুদ্ধার করুন।",
    image:
      "https://www.implantdentistrylansing.com/wp-content/uploads/implant-service-graphic.jpeg",
    benefits: [
      "Natural look and feel",
      "Long-lasting solution",
      "Improved speech and eating",
      "Prevents bone loss",
      "Enhanced confidence",
    ],
    technologies: [
      "3D Digital X-Ray",
      "Guided Implant Surgery",
      "CAD/CAM Technology",
      "Osstem Implant System",
      "Digital Treatment Planning",
    ],
    process_steps: [
      "Initial Consultation & Treatment Planning",
      "Implant Placement Surgery",
      "Osseointegration Period",
      "Abutment Placement",
      "Crown Placement",
    ],
    price_range: "৳ 150,000 - ৳ 350,000",
    cta: "Book Implant Consultation",
    cta_bn: "ইমপ্ল্যান্ট কনসাল্টেশন বুক করুন",
  },
  {
    id: "clear-aligners",
    slug: "clear-aligners",
    title: "Clear Aligners",
    title_bn: "ক্লিয়ার অ্যালাইনার",
    category: "Orthodontics",
    category_bn: "অর্থোডন্টিক্স",
    description:
      "Discreet, removable aligners for straightening teeth without traditional braces.",
    description_bn:
      "প্রচলিত ব্রেস ছাড়া দাঁত সোজা করার জন্য সূক্ষ্ম, সরানো যায় এমন অ্যালাইনার।",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjb3HrtJDpGwOhYUaLmiVLtFRk72m7ynqOIHmjgaKDxQ&s=10",
    benefits: [
      "Invisible appearance",
      "Removable for eating and cleaning",
      "Fewer office visits",
      "Comfortable and smooth",
      "Predictable results",
    ],
    technologies: [
      "Invisalign System",
      "Digital Treatment Planning",
      "3D Tooth Scanning",
      "SmartTrack Material",
      "AI-Powered Progress Tracking",
    ],
    process_steps: [
      "Initial Consultation & Digital Scan",
      "Custom Treatment Plan Creation",
      "Aligners Manufacture",
      "Wear Aligners in Sequence",
      "Regular Progress Checkups",
    ],
    price_range: "৳ 80,000 - ৳ 180,000",
    cta: "Book Clear Aligner Consultation",
    cta_bn: "ক্লিয়ার অ্যালাইনার কনসাল্টেশন বুক করুন",
  },
  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    title_bn: "কসমেটিক ডেন্টিস্ট্রি",
    category: "Cosmetic",
    category_bn: "কসমেটিক",
    description:
      "Enhance your smile with professional cosmetic treatments tailored to your aesthetic goals.",
    description_bn:
      "আপনার হাসির সৌন্দর্য আপনার নান্দনিক লক্ষ্য অনুযায়ী পেশাদার কসমেটিক চিকিৎসার মাধ্যমে উন্নত করুন।",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSX2YIZwIIisP_b4LwVLW5y0GEODDOUHT_wtd6JcO0A&s=10",
    benefits: [
      "Improved appearance",
      "Enhanced self-confidence",
      "Natural-looking results",
      "Long-lasting aesthetic outcomes",
      "Personalized treatment approach",
    ],
    technologies: [
      "Digital Smile Design",
      "3D Tooth Contouring",
      "Porcelain Veneers",
      "Teeth Whitening",
      "Composite Bonding",
    ],
    process_steps: [
      "Consultation & Smile Analysis",
      "Digital Treatment Planning",
      "Tooth Preparation",
      "Restoration Placement",
      "Final Evaluation",
    ],
    price_range: "৳ 50,000 - ৳ 150,000",
    cta: "Book Cosmetic Consultation",
    cta_bn: "কসমেটিক কনসাল্টেশন বুক করুন",
  },
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    title_bn: "দাঁত উজ্জ্বন",
    category: "Cosmetic",
    category_bn: "কসমেটিক",
    description:
      "Professional whitening treatments to brighten your smile and remove stains.",
    description_bn:
      "আপনার হাসি উজ্জ্বল করতে এবং দাঁতের দাগ দূর করতে পেশাদার উজ্জ্বন চিকিৎসা।",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdiUd-Ju4WexQPq8Jvj2cAayD8lkO3TyxZUTy4mpyzQ&s=10",
    benefits: [
      "Noticeable whitening",
      "Stain removal",
      "Safe and effective",
      "Long-lasting results",
      "Immediate effects",
    ],
    technologies: [
      "Laser Whitening",
      "In-Office Whitening",
      "Take-Home Whitening Kits",
      "Bleach-Free Options",
      "Sensitivity Management",
    ],
    process_steps: [
      "Consultation & Shade Analysis",
      "Tooth Preparation",
      "Whitening Treatment",
      "Aftercare Instructions",
      "Follow-up Evaluation",
    ],
    price_range: "৳ 25,000 - ৳ 60,000",
    cta: "Book Whitening Consultation",
    cta_bn: "উজ্জ্বন কনসাল্টেশন বুক করুন",
  },
  {
    id: "root-canal",
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    title_bn: "রুট ক্যানাল ট্রিটমেন্ট",
    category: "Restorative",
    category_bn: "রিস্টোরেটিভ",
    description:
      "Save natural teeth with advanced root canal therapy using modern techniques.",
    description_bn:
      "আধুনিক পদ্ধতি ব্যবহার করে রুট ক্যানাল থেরাপি দিয়ে প্রাকৃতিক দাঁত বাঁচান।",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GIYm6dvT0SSubMUFYUd38fF9gxLeVa1C6_v0fcjUeA&s=10",
    benefits: [
      "Preserve natural tooth",
      "Eliminate pain and infection",
      "High success rate",
      "Minimal discomfort",
      "Long-term functionality",
    ],
    technologies: [
      "Digital Radiography",
      "Microscopic Endodontics",
      "Nickel-Titanium Instruments",
      "Apex Locator",
      "3D Cone Beam Imaging",
    ],
    process_steps: [
      "Diagnosis & Treatment Planning",
      "Local Anesthesia Administration",
      "Access Opening",
      "Cleaning & Shaping",
      "Filling & Sealing",
      "Restoration Placement",
    ],
    price_range: "৳ 40,000 - ৳ 80,000",
    cta: "Book Root Canal Consultation",
    cta_bn: "রুট ক্যানাল কনসাল্টেশন বুক করুন",
  },
  {
    id: "pediatric-dentistry",
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    title_bn: "শিশু ডেন্টিস্ট্রি",
    category: "General",
    category_bn: "সাধারণ",
    description: "Gentle, child-friendly dental care for growing smiles.",
    description_bn: "বর্ধনশীল হাসির জন্য দরাজ, শিশু-বান্ধব ডেন্টাল কেয়ার।",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStY6BWLMHIRcpgLWNVZ-t4W4v39z6XH6o-CwIglD5SVbDJ8BBr5BiN-7o&s=10",
    benefits: [
      "Preventive care",
      "Early detection",
      "Child-friendly environment",
      "Pain-free procedures",
      "Parental guidance",
    ],
    technologies: [
      "Digital X-Ray",
      "Intraoral Camera",
      "Child-Safe Anesthesia",
      "Behavior Management Techniques",
      "Preventive Sealants",
    ],
    process_steps: [
      "Child-Friendly Consultation",
      "Oral Examination",
      "Preventive Cleaning",
      "Fluoride Application",
      "Sealant Placement",
      "Parental Guidance",
    ],
    price_range: "৳ 15,000 - ৳ 35,000",
    cta: "Book Pediatric Consultation",
    cta_bn: "শিশু কনসাল্টেশন বুক করুন",
  },
  {
    id: "gum-treatment",
    slug: "gum-treatment",
    title: "Gum Treatment",
    title_bn: "গাম চিকিৎসা",
    category: "Periodontal",
    category_bn: "পেরিওডেন্টাল",
    description: "Advanced treatments for gum health and disease management.",
    description_bn: "গাম স্বাস্থ্যের জন্য উন্নত চিকিৎসা এবং রোগ ব্যবস্থাপনা।",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkdeERYZF3PeU2ec-YK2A6qvoVuc-uxyArHllkjVS0w&s=10",
    benefits: [
      "Healthy gum restoration",
      "Infection control",
      "Reduced bleeding",
      "Improved tooth support",
      "Long-term gum health",
    ],
    technologies: [
      "Laser Gum Therapy",
      "Scaling & Root Planing",
      "Digital Periodontal Charting",
      "Bone Grafting",
      "Soft Tissue Management",
    ],
    process_steps: [
      "Periodontal Assessment",
      "Scaling & Root Planing",
      "Laser Therapy",
      "Bone Grafting (if needed)",
      "Maintenance Schedule",
    ],
    price_range: "৳ 30,000 - ৳ 100,000",
    cta: "Book Gum Consultation",
    cta_bn: "গাম কনসাল্টেশন বুক করুন",
  },
  {
    id: "smile-makeover",
    slug: "smile-makeover",
    title: "Smile Makeover",
    title_bn: "স্মাইল মেকোভার",
    category: "Cosmetic",
    category_bn: "কসমেটিক",
    description: "Comprehensive treatment to transform your smile completely.",
    description_bn: "আপনার হাসি সম্পূর্ণ রূপান্তর করতে ব্যাপক চিকিৎসা।",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFIreEFNGpjurKAcCeC9RBgH5jBz9ehUVujI6UiNUrQ&s=10",
    benefits: [
      "Complete smile transformation",
      "Confidence boost",
      "Functional improvement",
      "Long-lasting results",
      "Personalized aesthetic design",
    ],
    technologies: [
      "Digital Smile Design",
      "3D Facial Analysis",
      "Porcelain Veneers",
      "Teeth Whitening",
      "Full Mouth Rehabilitation",
    ],
    process_steps: [
      "Comprehensive Smile Analysis",
      "Digital Treatment Planning",
      "Tooth Preparation",
      "Restoration Placement",
      "Final Evaluation & Adjustment",
    ],
    price_range: "৳ 200,000 - ৳ 500,000",
    cta: "Book Smile Makeover Consultation",
    cta_bn: "স্মাইল মেকোভার কনসাল্টেশন বুক করুন",
  },
  {
    id: "veneers",
    slug: "veneers",
    title: "Veneers",
    title_bn: "ভেনিয়ারস",
    category: "Cosmetic",
    category_bn: "কসমেটিক",
    description:
      "Thin porcelain shells to enhance the appearance of your teeth.",
    description_bn: "আপনার দাঁতের চেহারা উন্নত করতে পাতলা পোরসেলিন শেল।",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOJozgOTWbZftsQ8_50TenBpi3WOuW1ba0ZEHaSIHnQ&s=10",
    benefits: [
      "Natural appearance",
      "Stain resistant",
      "Durable and long-lasting",
      "Minimal tooth reduction",
      "Quick treatment",
    ],
    technologies: [
      "Digital Design",
      "CAD/CAM Technology",
      "Lithium Disilicate Veneers",
      "Zirconia Veneers",
      "Precise Fitting",
    ],
    process_steps: [
      "Consultation & Design",
      "Tooth Preparation",
      "Veneer Fabrication",
      "Bonding & Finishing",
      "Final Evaluation",
    ],
    price_range: "৳ 30,000 - ৳ 80,000",
    cta: "Book Veneer Consultation",
    cta_bn: "ভেনিয়ার কনসাল্টেশন বুক করুন",
  },
];
