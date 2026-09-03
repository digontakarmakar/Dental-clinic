import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Scan, Palette, Layers, Camera, Shield, Zap, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function Technology() {
  const technologies = [
    {
      icon: Scan,
      title_en: 'Digital X-Ray',
      title_bn: 'ডিজিটাল এক্স-রে',
      description_en: 'High-resolution digital radiography with significantly reduced radiation exposure. Instant image capture for faster diagnosis.',
      description_bn: 'উচ্চ-রেজোলিউশন ডিজিটাল রেডিওগ্রাফি যা উল্লেখযোগ্যভাবে হ্রাসকৃত বিকিরণ এক্সপোজার সহ। দ্রুত নির্ণয়ের জন্য তাৎক্ষণিক ইমেজ ক্যাপচার।',
      benefits_en: ['Up to 90% less radiation', 'Instant image viewing', 'Enhanced diagnostic accuracy'],
      benefits_bn: ['৯০% কম বিকিরণ', 'তাৎক্ষণিক ইমেজ দেখা', 'উন্নত নির্ণয়ের নির্ভুলতা'],
    },
    {
      icon: Layers,
      title_en: 'Intraoral Scanner',
      title_bn: 'ইন্ট্রাওরাল স্ক্যানার',
      description_en: 'Advanced 3D scanning technology that eliminates the need for traditional dental impressions. Faster, more comfortable, and more precise.',
      description_bn: 'উন্নত 3D স্ক্যানিং প্রযুক্তি যা প্রচলিত ডেন্টাল ছাপের প্রয়োজনীয়তা দূর করে। দ্রুত, আরো আরামদায়ক এবং আরো সুনির্দিষ্ট।',
      benefits_en: ['No messy impressions', 'Instant 3D models', 'Improved patient comfort'],
      benefits_bn: ['কোনো অবাঞ্ছিত ছাপ নেই', 'তাৎক্ষণিক 3D মডেল', 'উন্নত রোগীর আরাম'],
    },
    {
      icon: Palette,
      title_en: 'Digital Smile Design',
      title_bn: 'ডিজিটাল স্মাইল ডিজাইন',
      description_en: 'Computer-aided smile design that allows you to preview your new smile before treatment begins. Plan your perfect smile digitally.',
      description_bn: 'কম্পিউটার-সহায়তায় স্মাইল ডিজাইন যা আপনাকে চিকিৎসা শুরু হওয়ার আগেই আপনার নতুন হাসির প্রিভিউ দেখতে দেয়।',
      benefits_en: ['Visual treatment preview', 'Customized outcomes', 'Informed decision-making'],
      benefits_bn: ['ভিজ্যুয়াল চিকিৎসা প্রিভিউ', 'কাস্টমাইজড ফলাফল', 'অবহিত সিদ্ধান্ত নেওয়া'],
    },
    {
      icon: Cpu,
      title_en: 'CAD/CAM Technology',
      title_bn: 'CAD/CAM প্রযুক্তি',
      description_en: 'Computer-aided design and manufacturing for precision dental restorations. Same-day crowns and restorations with exceptional fit.',
      description_bn: 'প্রিসিশন ডেন্টাল রিস্টোরেশনের জন্য কম্পিউটার-সহায়তায় ডিজাইন এবং উৎপাদন। ব্যতিক্রমী ফিট সহ একই দিনে ক্রাউন এবং রিস্টোরেশন।',
      benefits_en: ['Same-day restorations', 'Precision fit', 'Natural-looking results'],
      benefits_bn: ['একই দিনে রিস্টোরেশন', 'সুনির্দিষ্ট ফিট', 'প্রাকৃতিক দেখতে ফলাফল'],
    },
    {
      icon: Camera,
      title_en: '3D Imaging',
      title_bn: '3D ইমেজিং',
      description_en: 'Cone Beam CT scanning for detailed 3D views of teeth, bone, and nerve pathways. Essential for implant planning and complex cases.',
      description_bn: 'দাঁত, হাড় এবং স্নায়ু পথের বিস্তারিত 3D দৃশ্যের জন্য কোন বিম CT স্ক্যানিং। ইমপ্ল্যান্ট পরিকল্পনা এবং জটিল ক্ষেত্রে অপরিহার্য।',
      benefits_en: ['3D bone assessment', 'Accurate implant planning', 'Comprehensive diagnosis'],
      benefits_bn: ['3D হাড় মূল্যায়ন', 'সঠিক ইমপ্ল্যান্ট পরিকল্পনা', 'ব্যাপক নির্ণয়'],
    },
    {
      icon: Shield,
      title_en: 'Modern Sterilization',
      title_bn: 'আধুনিক স্টেরিলাইজেশন',
      description_en: 'Hospital-grade sterilization protocols and equipment. Autoclave systems, barrier methods, and rigorous protocols for your safety.',
      description_bn: 'হাসপাতাল-গ্রেড স্টেরিলাইজেশন প্রোটোকল এবং সরঞ্জাম। আপনার নিরাপত্তার জন্য অটোক্লেভ সিস্টেম, ব্যারিয়ার পদ্ধতি এবং কঠোর প্রোটোকল।',
      benefits_en: ['Hospital-grade protocols', 'Strict infection control', 'Patient safety first'],
      benefits_bn: ['হাসপাতাল-গ্রেড প্রোটোকল', 'কঠোর সংক্রমণ নিয়ন্ত্রণ', 'রোগীর নিরাপত্তা প্রথম'],
    },
    {
      icon: Zap,
      title_en: 'Laser Dentistry',
      title_bn: 'লেজার ডেন্টিস্ট্রি',
      description_en: 'State-of-the-art dental lasers for precise, minimally invasive treatments. Faster healing, less discomfort, and excellent results.',
      description_bn: 'সুনির্দিষ্ট, ন্যূনতম আক্রমণকারী চিকিৎসার জন্য আধুনিক ডেন্টাল লেজার। দ্রুত নিরাময়, কম অস্বস্তি এবং চমৎকার ফলাফল।',
      benefits_en: ['Minimally invasive', 'Faster healing', 'Reduced discomfort'],
      benefits_bn: ['ন্যূনতম আক্রমণকারী', 'দ্রুত নিরাময়', 'হ্রাসকৃত অস্বস্তি'],
    },
  ];

  const steps = [
    { num: '01', title_en: 'Diagnosis', title_bn: 'নির্ণয়', desc_en: 'Digital imaging and 3D scanning for precise assessment.', desc_bn: 'সুনির্দিষ্ট মূল্যায়নের জন্য ডিজিটাল ইমেজিং এবং 3D স্ক্যানিং।' },
    { num: '02', title_en: 'Planning', title_bn: 'পরিকল্পনা', desc_en: 'Computer-aided design for optimal treatment planning.', desc_bn: 'অপ্টিমাল চিকিৎসা পরিকল্পনার জন্য কম্পিউটার-সহায়তায় ডিজাইন।' },
    { num: '03', title_en: 'Treatment', title_bn: 'চিকিৎসা', desc_en: 'Precise execution using advanced surgical guides.', desc_bn: 'উন্নত সার্জিক্যাল গাইড ব্যবহার করে সুনির্দিষ্ট বাস্তবায়ন।' },
    { num: '04', title_en: 'Recovery', title_bn: 'পুনরুদ্ধার', desc_en: 'Minimally invasive techniques for faster healing.', desc_bn: 'দ্রুত নিরাময়ের জন্য ন্যূনতম আক্রমণকারী কৌশল।' },
  ];

  return (
    <>
      <PageHero />
      <TechnologyGrid technologies={technologies} />
      <ProcessTechnology steps={steps} />
      <TechnologyCTA />
    </>
  );
}

function PageHero() {
  const { isBangla } = useLanguage();
  return (
    <section className="relative pt-32 pb-20 bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-accent/5 to-transparent" />
      </div>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">{isBangla ? 'হোম' : 'Home'}</Link>
            <span>/</span>
            <span className="text-foreground">{isBangla ? 'প্রযুক্তি' : 'Technology'}</span>
          </nav>
          <span className="eyebrow block mb-4">{isBangla ? 'উন্নত প্রযুক্তি' : 'Advanced Technology'}</span>
          <h1 className="heading-xl text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'উন্নত প্রযুক্তি। আরো ভালো ডেন্টাল অভিজ্ঞতা।' : 'Advanced technology. Better dental experiences.'}
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'প্রতিটি রোগীর জন্য নিরাপদ, আরো সঠিক এবং আরো আরামদায়ক চিকিৎসা প্রদান করতে আমরা সর্বশেষ ডেন্টাল প্রযুক্তিতে বিনিয়োগ করি।' : 'We invest in the latest dental technology to deliver safer, more accurate, and more comfortable treatments for every patient.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface TechItem {
  icon: typeof Cpu;
  title_en: string;
  title_bn: string;
  description_en: string;
  description_bn: string;
  benefits_en: string[];
  benefits_bn: string[];
}

function TechnologyGrid({ technologies }: { technologies: TechItem[] }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <tech.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? tech.title_bn : tech.title_en}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? tech.description_bn : tech.description_en}
              </p>
              <ul className="space-y-2">
                {(isBangla ? tech.benefits_bn : tech.benefits_en).map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTechnology({ steps }: { steps: Array<{num: string, title_en: string, title_bn: string, desc_en: string, desc_bn: string}> }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'প্রযুক্তি সুবিধা' : 'The Technology Advantage'}
          title={isBangla ? 'প্রতিটি ধাপে প্রযুক্তি।' : 'Technology at every step.'}
          subtitle={isBangla ? 'আপনার প্রথম পরামর্শ থেকে শুরু করে চূড়ান্ত ফলাফল পর্যন্ত, উন্নত প্রযুক্তি আপনার যত্নের প্রতিটি দিক উন্নত করে।' : 'From your first consultation to final results, advanced technology enhances every aspect of your care.'}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-display font-semibold">{step.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? step.title_bn : step.title_en}</h3>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? step.desc_bn : step.desc_en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyCTA() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="heading-md mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'প্রযুক্তি প্রথম হাতে অনুভব করুন।' : 'Experience our technology firsthand.'}
          </h2>
          <p className="body-lg opacity-80 mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'একটি পরামর্শ বুক করুন এবং দেখুন কীভাবে উন্নত প্রযুক্তি আপনার ডেন্টাল অভিজ্ঞতাকে আরো নিরাপদ, দ্রুত এবং আরামদায়ক করে তোলে।' : 'Book a consultation and see how advanced technology makes your dental experience safer, faster, and more comfortable.'}
          </p>
          <Link to="/book-appointment">
            <Button variant="accent" size="lg" icon={Calendar}>
              <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'পরামর্শ বুক করুন' : 'Book a Consultation'}
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
