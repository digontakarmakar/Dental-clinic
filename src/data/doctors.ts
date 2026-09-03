export interface Doctor {
  id: string;
  slug: string;
  name: string;
  name_bn: string;
  title: string;
  specialty: string;
  qualifications: string;
  experience: number;
  bio: string;
  bio_bn: string;
  education: { degree: string; institution: string; year: string }[];
  certifications: string[];
  expertise: string[];
  languages: string[];
  memberships: string[];
  schedule: string;
  photo: string;
  bmdc: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "1",
    slug: "dr-ahmed-rahman",
    name: "Dr. Ahmed Rahman",
    name_bn: "ডা. আহমেদ রহমান",
    title: "Consultant Dental Surgeon",
    specialty: "Cosmetic & Restorative Dentistry",
    qualifications: "BDS, FCPS (Dentistry)",
    experience: 14,
    bio: "Dr. Ahmed Rahman is a highly experienced consultant dental surgeon with over 14 years in the field of cosmetic and restorative dentistry. He trained at Dhaka Dental College and completed his FCPS from the Bangladesh College of Physicians and Surgeons. He is known for his patient-centered approach and meticulous attention to detail.",
    bio_bn: "ডা. আহমেদ রহমান ১৪ বছরেরও বেশি সময় ধরে কসমেটিক এবং রিস্টোরেটিভ ডেন্টিস্ট্রিতে দক্ষ একজন পরামর্শদাতা ডেন্টাল সার্জন।",
    education: [
      { degree: "BDS", institution: "Dhaka Dental College & Hospital", year: "2008" },
      { degree: "FCPS (Dentistry)", institution: "Bangladesh College of Physicians and Surgeons", year: "2014" },
    ],
    certifications: [
      "BMDC Registered (BD-XXXXX — placeholder, to be filled)",
      "Certified in Cosmetic Dentistry",
      "Advanced Implantology Certification",
    ],
    expertise: [
      "Smile Makeover",
      "Dental Implants",
      "Porcelain Veneers",
      "Teeth Whitening",
      "Full Mouth Rehabilitation",
    ],
    languages: ["English", "বাংলা"],
    memberships: [
      "Bangladesh Dental Society",
      "Bangladesh Medical & Dental Council",
    ],
    schedule: "Saturday – Wednesday: 10:00 AM – 6:00 PM",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    bmdc: "BD-XXXXX (placeholder)",
  },
  {
    id: "2",
    slug: "dr-farida-islam",
    name: "Dr. Farida Islam",
    name_bn: "ডা. ফরিদা ইসলাম",
    title: "Specialist Orthodontist",
    specialty: "Orthodontics & Clear Aligners",
    qualifications: "BDS, MDS (Orthodontics)",
    experience: 10,
    bio: "Dr. Farida Islam is a specialist orthodontist with a decade of expertise in corrective dental alignment. She pursued her Masters in Orthodontics and is one of the leading practitioners of clear aligner therapy in Bangladesh. She brings a gentle and reassuring manner to every patient visit.",
    bio_bn: "ডা. ফরিদা ইসলাম একজন অভিজ্ঞ অর্থোডন্টিস্ট যিনি ক্লিয়ার অ্যালাইনার থেরাপিতে বিশেষ দক্ষতা রাখেন।",
    education: [
      { degree: "BDS", institution: "Chittagong Medical College & Hospital", year: "2011" },
      { degree: "MDS (Orthodontics)", institution: "Bangabandhu Sheikh Mujib Medical University", year: "2016" },
    ],
    certifications: [
      "BMDC Registered (BD-XXXXX — placeholder, to be filled)",
      "Certified Clear Aligner Provider",
      "Advanced Orthodontics Fellowship",
    ],
    expertise: [
      "Clear Aligners",
      "Metal & Ceramic Braces",
      "Invisible Orthodontics",
      "Malocclusion Correction",
      "Pediatric Orthodontics",
    ],
    languages: ["English", "বাংলা"],
    memberships: [
      "Bangladesh Orthodontic Society",
      "Bangladesh Medical & Dental Council",
    ],
    schedule: "Saturday – Thursday: 12:00 PM – 8:00 PM",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    bmdc: "BD-XXXXX (placeholder)",
  },
  {
    id: "3",
    slug: "dr-rashed-hossain",
    name: "Dr. Rashed Hossain",
    name_bn: "ডা. রাশেদ হোসেন",
    title: "Consultant Oral & Maxillofacial Surgeon",
    specialty: "Oral Surgery & Implantology",
    qualifications: "BDS, FDSRCS",
    experience: 12,
    bio: "Dr. Rashed Hossain is a fellowship-trained oral and maxillofacial surgeon specializing in dental implants and complex oral surgery. With 12 years of clinical experience and international training, he delivers precision surgical care in a safe and comfortable setting.",
    bio_bn: "ডা. রাশেদ হোসেন ডেন্টাল ইমপ্ল্যান্ট এবং জটিল ওরাল সার্জারিতে বিশেষজ্ঞ একজন অভিজ্ঞ সার্জন।",
    education: [
      { degree: "BDS", institution: "Sir Salimullah Medical College", year: "2009" },
      { degree: "FDSRCS (Oral Surgery)", institution: "Royal College of Surgeons, Edinburgh", year: "2015" },
    ],
    certifications: [
      "BMDC Registered (BD-XXXXX — placeholder, to be filled)",
      "Fellowship of the Dental Faculty – Royal College of Surgeons",
      "Advanced Implantology Diploma",
    ],
    expertise: [
      "Dental Implants",
      "Wisdom Tooth Extraction",
      "Bone Grafting",
      "Sinus Lift",
      "Full Arch Restoration",
    ],
    languages: ["English", "বাংলা"],
    memberships: [
      "Bangladesh Association of Oral & Maxillofacial Surgeons",
      "International Association of Oral and Maxillofacial Surgeons",
      "Bangladesh Medical & Dental Council",
    ],
    schedule: "Sunday – Thursday: 2:00 PM – 8:00 PM",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
    bmdc: "BD-XXXXX (placeholder)",
  },
  {
    id: "4",
    slug: "dr-nadia-chowdhury",
    name: "Dr. Nadia Chowdhury",
    name_bn: "ডা. নাদিয়া চৌধুরী",
    title: "Consultant Pedodontist",
    specialty: "Pediatric Dentistry",
    qualifications: "BDS, MCPS (Paediatric Dentistry)",
    experience: 8,
    bio: "Dr. Nadia Chowdhury is a specialist in pediatric dentistry with a warm, child-friendly approach. She is dedicated to making dental visits a positive experience for young patients and helping families build lifelong oral health habits.",
    bio_bn: "ডা. নাদিয়া চৌধুরী শিশু দন্তচিকিৎসায় বিশেষজ্ঞ এবং শিশুদের সাথে তার ব্যবহার অত্যন্ত আন্তরিক।",
    education: [
      { degree: "BDS", institution: "Dhaka Dental College & Hospital", year: "2013" },
      { degree: "MCPS (Paediatric Dentistry)", institution: "Bangladesh College of Physicians and Surgeons", year: "2018" },
    ],
    certifications: [
      "BMDC Registered (BD-XXXXX — placeholder, to be filled)",
      "Certified in Pediatric Sedation Dentistry",
      "Child Dental Health Specialist",
    ],
    expertise: [
      "Pediatric Preventive Dentistry",
      "Children's Tooth Restoration",
      "Space Maintainers",
      "Dental Sealants",
      "Early Orthodontic Assessment",
    ],
    languages: ["English", "বাংলা"],
    memberships: [
      "Bangladesh Pedodontic Society",
      "Bangladesh Medical & Dental Council",
    ],
    schedule: "Saturday – Wednesday: 10:00 AM – 4:00 PM",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    bmdc: "BD-XXXXX (placeholder)",
  },
];
