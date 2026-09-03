export interface Testimonial {
  id: string;
  name: string;
  name_bn: string;
  rating: number;
  treatment: string;
  treatment_bn: string;
  location: string;
  text: string;
  text_bn: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ayesha Rahman",
    name_bn: " আয়শা রহমান",
    rating: 4.9,
    treatment: "Smile Makeover",
    treatment_bn: "স্মাইল মেকোভার",
    location: "Dhaka",
    text: "I had always been self-conscious about my smile, but after the smile makeover at Dental Harmony, I feel completely confident. The transformation is amazing!",
    text_bn: "আমার হাসির সুন্দরতা আমার আগে কখনোই সচেতন ছিলাম না, কিন্তু ডেন্টাল হার্মনিয়ায় স্মাইল মেকোভার করার পর আমি কখনোই পূর্ণভাবে আত্মবিশ্বাসী হয়ে উঠেছি। রূপান্তরটি চমৎকার!",
  },
  {
    id: "2",
    name: "Rahim Ahmed",
    name_bn: "রহিম আহমেদ",
    rating: 4.8,
    treatment: "Dental Implants",
    treatment_bn: "ডেন্টাল ইমপ্ল্যান্ট",
    location: "Chattogram",
    text: "The dental implant procedure was smooth and painless. Now I can eat, speak, and smile with confidence. Highly recommend Dr. Rashed Hossain!",
    text_bn: "ডেন্টাল ইমপ্ল্যান্ট প্রক্রিয়া মজ্জামাম এবং নিরাপদ ছিল। এখন আমি ভালোভাবে খাবার খেয়ে, কথা বলতে এবং হাসি করতে নিশ্চয়ই আত্মবিশ্বাসী হয়ে আছি। ডা. রাশেদ হোসেনকে খুব সুপারিশ করি!",
  },
  {
    id: "3",
    name: "Tasnim Islam",
    name_bn: "তাসনিম ইসলাম",
    rating: 4.9,
    treatment: "Clear Aligners",
    treatment_bn: "ক্লিয়ার অ্যালাইনার",
    location: "Sylhet",
    text: "The clear aligner treatment was discreet and comfortable. I'm so happy with my new smile and would recommend it to anyone looking for orthodontic treatment.",
    text_bn: "ক্লিয়ার অ্যালাইনার চিকিৎসা নিরাপদ এবং আরামদায়ক ছিল। আমার নতুন হাসির সাথে আমি খুব আনন্দিত, আর যেকোনো কোথাও ক্লিয়ার অ্যালাইনার চিকিৎসা চাহিদা থাকলে সুপারিশ করবো!",
  },
  {
    id: "4",
    name: "Dr. Farida Islam",
    name_bn: "ডা. ফরিদা ইসলাম",
    rating: 4.7,
    treatment: "Pediatric Consultation",
    treatment_bn: "শিশু কনসাল্টেশন",
    location: "Khulna",
    text: "My daughter was very nervous about her dental visit, but Dr. Nadia made her feel completely at ease. The experience was positive and educational.",
    text_bn: "আমার মেয়ে ডেন্টাল ভিজিটের আগে খুব নারিক ছিলাম, কিন্তু ডা. নাদিয়া তাকে সম্পূর্ণভাবে আরামদায়ক করে দিলেন। অভিজ্ঞতা পজিটিভ এবং শিক্ষামূলক ছিল।",
  },
  {
    id: "5",
    name: "Mizanur Rahman",
    name_bn: "মিজানুর রহমান",
    rating: 4.8,
    treatment: "Teeth Whitening",
    treatment_bn: "দাঁড়া উজ্জ্বন",
    location: "Dhaka",
    text: "The teeth whitening treatment was quick and effective. I can now show off my bright smile with pride. Worth every penny!",
    text_bn: "দাঁড়া উজ্জ্বন চিকিৎসা দ্রুত এবং কার্যকর ছিল। আমি এখন গর্বের সাথে আমার উজ্জ্বন হাসি দেখতে পারি। প্রতিক্ষাপূর্ণ!",
  }
];