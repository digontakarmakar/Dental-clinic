import beforemakeover from "../assets/images/teeth before makeover.jpeg";

export interface BeforeAfter {
  id: string;
  title: string;
  title_bn: string;
  category: string;
  treatment: string;
  treatment_bn: string;
  description: string;
  description_bn: string;
  before_image: string;
  after_image: string;
  disclaimer: string;
  disclaimer_bn: string;
}

export const BEFORE_AFTER_CASES: BeforeAfter[] = [
  {
    id: "1",
    title: "Smile Makeover Transformation",
    title_bn: "স্মাইল মেকোভার রূপান্তর",
    category: "Cosmetic",
    treatment: "Smile Makeover",
    treatment_bn: "স্মাইল মেকোভার",
    description:
      "Complete smile rehabilitation using porcelain veneers and teeth whitening.",
    description_bn:
      "পোর্সেলেন ভেনিয়ারস এবং দাঁত উজ্জ্বলতার মাধ্যমে সম্পূর্ণ হাসির পুনর্নির্মাণ।",
    before_image: beforemakeover,
    after_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlbIbmwvHldJx1Vs37d34PG8B11OD13UJc0ajLmqrdg&s=10",
    disclaimer: "Individual results may vary.",
    disclaimer_bn: "ব্যক্তিগত ফলাফল পরিবর্তিত হতে পারে।",
  },
  {
    id: "2",
    title: "Teeth Whitening Results",
    title_bn: "দাঁত উজ্জ্বন ফলাফল",
    category: "Cosmetic",
    treatment: "Teeth Whitening",
    treatment_bn: "দাঁত উজ্জ্বন",
    description:
      "Professional in-office whitening for a brighter, more confident smile.",
    description_bn:
      "অফিসে পেশাদার উজ্জ্বন জলপাই আরও উজ্জ্বল এবং আত্মবিশ্বাসী হাসির জন্য।",
    before_image:
      "https://images.unsplash.com/photo-1571772992031-d9a1d4a1d9a4?w=600&q=80",
    after_image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    disclaimer: "Individual results may vary.",
    disclaimer_bn: "ব্যক্তিগত ফলাফল পরিবর্তিত হতে পারে।",
  },
  {
    id: "3",
    title: "Orthodontic Alignment",
    title_bn: "অর্থোডন্টিক এলাইনমেন্ট",
    category: "Orthodontics",
    treatment: "Clear Aligners",
    treatment_bn: "ক্লিয়ার অ্যালাইনার",
    description:
      "Teeth straightened using clear aligner technology over 12 months.",
    description_bn:
      "১২ মাসের সময়কালে ক্লিয়ার অ্যালাইনার প্রযুক্তি ব্যবহার করে দাঁত সোজা করা হয়েছে।",
    before_image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
    after_image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    disclaimer: "Individual results may vary.",
    disclaimer_bn: "ব্যক্তিগত ফলাফল পরিবর্তিত হতে পারে।",
  },
  {
    id: "4",
    title: "Dental Implant Restoration",
    title_bn: "ডেন্টাল ইমপ্ল্যান্ট পুনর্নির্মাণ",
    category: "Implants",
    treatment: "Dental Implants",
    treatment_bn: "ডেন্টাল ইমপ্ল্যান্ট",
    description: "Missing tooth replaced with a dental implant and crown.",
    description_bn:
      "অবস্থানহীন দাঁত ডেন্টাল ইমপ্ল্যান্ট এবং ক্রাউন দিয়ে বদলে দেওয়া হয়েছে।",
    before_image:
      "https://images.unsplash.com/photo-1551076805-e186900ba0e6?w=600&q=80",
    after_image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    disclaimer: "Individual results may vary.",
    disclaimer_bn: "ব্যক্তিগত ফলাফল পরিবর্তিত হতে পারে।",
  },
  {
    id: "5",
    title: "Gum Contouring",
    title_bn: "গাম কনটারিং",
    category: "Periodontal",
    treatment: "Gum Treatment",
    treatment_bn: "গাম চিকিৎসা",
    description: "Gum reshaping for a more balanced and aesthetic smile.",
    description_bn:
      "গাম পুনরায় আকৃতি দেওয়া হলে আরও সমতুল্য এবং সুন্দর হাসি তৈরি হয়।",
    before_image:
      "https://images.unsplash.com/photo-1518155052368-7e3f321775b6?w=600&q=80",
    after_image:
      "https://images.unsplash.com/photo-1544715104-355909501076?w=600&q=80",
    disclaimer: "Individual results may vary.",
    disclaimer_bn: "ব্যক্তিগত ফলাফল পরিবর্তিত হতে পারে।",
  },
];
