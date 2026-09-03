export interface FAQ {
  id: string;
  question: string;
  question_bn: string;
  answer: string;
  answer_bn: string;
}

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "How do I book an appointment?",
    question_bn: "আমি কিভাবে অ্যাপয়েন্টমেন্ট বুক করব?",
    answer: "You can book an appointment by filling out our online form, calling us directly, or messaging us on WhatsApp. We'll confirm your appointment within 24 hours.",
    answer_bn: "আপনি আমাদের অনলাইন ফর্ম পূরণ করে, সরাসরি আমাদের ফোন করে, অথবা হোয়াটসঅ্যাপে মেসেজ পাঠিয়ে অ্যাপয়েন্টমেন্ট বুক করতে পারেন। আমরা ২৪ ঘণ্টার মধ্যে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করব।"
  },
  {
    id: "2",
    question: "How much does a consultation cost?",
    question_bn: "একটি পরামর্শের খরচ কত?",
    answer: "Our initial consultation fee is ৳ 1,500, which is adjustable against any treatment you proceed with. This includes a comprehensive examination and treatment planning discussion.",
    answer_bn: "আমাদের প্রাথমিক পরামর্শ ফি ১,৫০০ টাকা, যা আপনি যেকোনো চিকিৎসা গ্রহণ করলে সেই খরচ থেকে সমন্বয় করা হবে। এতে একটি বিস্তারিত পরীক্ষা এবং চিকিৎসা পরিকল্পনা আলোচনা অন্তর্ভুক্ত।"
  },
  {
    id: "3",
    question: "Do you offer dental implants?",
    question_bn: "আপনারা কি ডেন্টাল ইমপ্ল্যান্ট প্রদান করেন?",
    answer: "Yes, we specialize in dental implant procedures using advanced technology and techniques. Our experienced oral surgeons provide single tooth, multiple tooth, and full arch implant solutions.",
    answer_bn: "হ্যাঁ, আমরা উন্নত প্রযুক্তি এবং কৌশল ব্যবহার করে ডেন্টাল ইমপ্ল্যান্ট পদ্ধতিতে বিশেষজ্ঞ। আমাদের অভিজ্ঞ ওরাল সার্জনরা একক দাঁত, একাধিক দাঁত এবং সম্পূর্ণ চাপের ইমপ্ল্যান্ট সমাধান প্রদান করেন।"
  },
  {
    id: "4",
    question: "Do you provide orthodontic treatment?",
    question_bn: "আপনারা কি অর্থোডন্টিক চিকিৎসা প্রদান করেন?",
    answer: "We offer comprehensive orthodontic care including traditional braces, ceramic braces, and clear aligner treatments like Invisalign. Our specialist orthodontist creates personalized treatment plans for optimal results.",
    answer_bn: "আমরা ঐতিহ্যবাহী ব্রেস, সিরামিক ব্রেস এবং ইনভিসালাইনের মতো ক্লিয়ার অ্যালাইনার চিকিৎসা সহ ব্যাপক অর্থোডন্টিক যত্ন প্রদান করি। আমাদের বিশেষজ্ঞ অর্থোডন্টিস্ট সর্বোত্তম ফলাফলের জন্য ব্যক্তিগতকৃত চিকিৎসা পরিকল্পনা তৈরি করেন।"
  },
  {
    id: "5",
    question: "Do you offer clear aligners?",
    question_bn: "আপনারা কি ক্লিয়ার অ্যালাইনার প্রদান করেন?",
    answer: "Yes, we are certified providers of clear aligner therapy including Invisalign and other leading brands. This treatment is ideal for adults and teens seeking discreet teeth straightening.",
    answer_bn: "হ্যাঁ, আমরা ইনভিসালাইন এবং অন্যান্য শীর্ষ ব্র্যান্ডের ক্লিয়ার অ্যালাইনার থেরাপির প্রত্যয়িত প্রদানকারী। এই চিকিৎসা বয়স্ক এবং কিশোর-কিশোরীদের জন্য আদর্শ যারা সূক্ষ্মভাবে দাঁত সোজা করতে চান।"
  },
  {
    id: "6",
    question: "Is emergency dental care available?",
    question_bn: "জরুরি দন্ত চিকিৎসা কি পাওয়া যায়?",
    answer: "We provide emergency dental care during our clinic hours for situations like severe tooth pain, broken teeth, or lost fillings. For life-threatening emergencies, please visit the nearest hospital emergency department.",
    answer_bn: "আমরা ক্লিনিকের সময়সূচীতে তীব্র দাঁতের ব্যথা, ভাঙা দাঁত, বা হারানো ফিলিংয়ের মতো পরিস্থিতিতে জরুরি দন্ত চিকিৎসা প্রদান করি। জীবন-হুমকিমূলক জরুরি অবস্থার জন্য, অনুগ্রহ করে নিকটস্থ হাসপাতালের জরুরি বিভাগে যান।"
  },
  {
    id: "7",
    question: "How long does a smile makeover take?",
    question_bn: "স্মাইল মেকওভারে কত সময় লাগে?",
    answer: "A complete smile makeover typically takes 2-4 weeks depending on the treatments involved. This timeline includes consultation, preparation, treatment placement, and follow-up adjustments.",
    answer_bn: "একটি সম্পূর্ণ স্মাইল মেকওভার সাধারণত জড়িত চিকিৎসার উপর নির্ভর করে ২-৪ সপ্তাহ সময় নেয়। এই সময়সীমার মধ্যে পরামর্শ, প্রস্তুতি, চিকিৎসা স্থাপন এবং ফলো-আপ সমন্বয় অন্তর্ভুক্ত।"
  },
  {
    id: "8",
    question: "Do you treat children?",
    question_bn: "আপনারা কি শিশুদের চিকিৎসা করেন?",
    answer: "Yes, we have a dedicated pediatric dentist who specializes in making dental visits comfortable and educational for children. We focus on preventive care and creating positive dental experiences from an early age.",
    answer_bn: "হ্যাঁ, আমাদের একজন নিবেদিত শিশু দন্ত চিকিৎসক রয়েছেন যিনি শিশুদের জন্য দন্ত পরিদর্শনকে আরামদায়ক এবং শিক্ষামূলক করার ক্ষেত্রে বিশেষজ্ঞ। আমরা প্রতিরোধমূলক যত্ন এবং ছোট বয়স থেকেই ইতিবাচক দন্ত অভিজ্ঞতা তৈরির উপর মনোযোগ দিই।"
  },
  {
    id: "9",
    question: "What payment methods do you accept?",
    question_bn: "আপনারা কোন কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?",
    answer: "We accept cash, all major credit/debit cards, mobile banking (bKash, Nagad, Rocket), and bank transfers. We also offer flexible payment plans for extensive treatments.",
    answer_bn: "আমরা নগদ, সকল প্রধান ক্রেডিট/ডেবিট কার্ড, মোবাইল ব্যাঙ্কিং (বিকাশ, নগদ, রকেট) এবং ব্যাংক ট্রান্সফার গ্রহণ করি। আমরা বিস্তৃত চিকিৎসার জন্য নমনীয় পেমেন্ট পরিকল্পনাও অফার করি।"
  },
  {
    id: "10",
    question: "Can I consult before deciding on treatment?",
    question_bn: "চিকিৎসা সিদ্ধান্ত নেওয়ার আগে কি আমি পরামর্শ নিতে পারি?",
    answer: "Absolutely! We encourage all patients to schedule a consultation first to discuss their concerns, explore treatment options, and get a personalized treatment plan with transparent pricing before making any decisions.",
    answer_bn: "অবশ্যই! আমরা সকল রোগীকে প্রথমে একটি পরামর্শ নির্ধারণ করতে উৎসাহিত করি যাতে তারা তাদের উদ্বেগগুলি আলোচনা করতে পারেন, চিকিৎসার বিকল্পগুলি অন্বেষণ করতে পারেন এবং যেকোনো সিদ্ধান্ত নেওয়ার আগে স্বচ্ছ মূল্য সহ একটি ব্যক্তিগতকৃত চিকিৎসা পরিকল্পনা পেতে পারেন।"
  }
];
