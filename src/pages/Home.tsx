import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles, Award, Users, Heart, Stethoscope, ShieldCheck, Star, CheckCircle2, Quote, MapPin, PencilLine } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useLanguage } from '@/components/ui/LanguageSwitcher';
import { CLINIC_CONFIG } from '@/data/clinic-config';
import { DOCTORS } from '@/data/doctors';
import { TREATMENTS } from '@/data/treatments';
import { TESTIMONIALS } from '@/data/testimonials';
import { FAQS } from '@/data/faq';
import { useState, useEffect } from 'react';

// ============================================================
// HERO
// ============================================================
function Hero() {
  const { isBangla } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  const t = {
    eyebrow: isBangla ? 'বাংলাদেশের প্রিমিয়াম ডেন্টাল কেয়ার' : 'Premium Dental Care in Bangladesh',
    title1: isBangla ? 'আপনার হাসি,' : 'Your Smile,',
    title2: isBangla ? 'উন্নত।' : 'Elevated.',
    subtitle: isBangla ? 'উন্নত ডেন্টিস্ট্রি, অভিজ্ঞ বিশেষজ্ঞ এবং আপনার হাসির যত্ন নেওয়ার একটি আরও আরামদায়ক উপায়।' : 'Advanced dentistry, experienced specialists, and a more comfortable way to care for your smile.',
    bookBtn: isBangla ? 'অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book an Appointment',
    exploreBtn: isBangla ? 'চিকিৎসা দেখুন' : 'Explore Treatments',
    patients: isBangla ? '১৫,০০০+ রোগী' : '15,000+ Patients',
    patientsSub: isBangla ? 'বাংলাদেশজুড়ে আস্থাভাজন' : 'Trusted across Bangladesh',
    scroll: isBangla ? 'স্ক্রল' : 'Scroll',
    specialists: isBangla ? 'বিশেষজ্ঞ' : 'Specialists',
    certified: isBangla ? 'BMDC সার্টিফাইড' : 'BMDC Certified',
    rating: isBangla ? 'রোগীর রেটিং' : 'Patient Rating',
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="eyebrow block mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{t.eyebrow}</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="heading-xl text-foreground mb-6 text-balance"
            >
              {t.title1} <br />
              <span className="text-gradient">{t.title2}</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="body-lg text-muted-foreground max-w-lg mb-10"
              style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link to="/book-appointment">
                <Button variant="primary" size="lg" icon={Calendar}>
                  <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{t.bookBtn}</span>
                </Button>
              </Link>
              <Link to="/treatments">
                <Button variant="secondary" size="lg">
                  <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{t.exploreBtn}</span>
                </Button>
              </Link>
            </motion.div>

            {/* Quick Trust Indicators */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border/60"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-background"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{t.patients}</p>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{t.patientsSub}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
                <span className="ml-2 text-sm font-semibold text-foreground">4.9/5</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Hero Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative lg:h-[600px] h-[400px]"
            style={{ y, opacity }}
          >
            <HeroCarousel />

            {/* Floating Detail Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -right-4 lg:top-8 lg:right-8 bg-card border border-border rounded-2xl p-4 shadow-xl backdrop-blur-sm max-w-[200px] z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Specialists</p>
                  <p className="text-sm font-semibold text-foreground">BMDC Certified</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Detail Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 lg:bottom-12 lg:left-12 bg-card border border-border rounded-2xl p-5 shadow-xl backdrop-blur-sm z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Patient Rating</p>
                  <p className="text-2xl font-display font-semibold text-foreground">4.9/5</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  );
}

// ============================================================
// HERO CAROUSEL
// ============================================================
function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=85&fit=crop",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=85&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=85&fit=crop",
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=85&fit=crop",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&q=85&fit=crop",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=85&fit=crop",
  ];

  const heroCaptions = [
    "Modern Dental Suite",
    "Expert Dental Care",
    "Advanced Technology",
    "Comfortable Environment",
    "Precision Treatment",
    "Confident Smiles",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden">
      {heroImages.map((src, idx) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={src}
            alt={heroCaptions[idx]}
            className="w-full h-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
        </motion.div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-white/90"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium z-10">
        {currentIndex + 1} / {heroImages.length}
      </div>
    </div>
  );
}

// ============================================================
// TRUST STATS
// ============================================================
function TrustStats() {
  const { isBangla } = useLanguage();
  const stats = [
    { value: 10, suffix: '+', label_en: 'Years Experience', label_bn: 'বছরের অভিজ্ঞতা' },
    { value: 15000, suffix: '+', label_en: 'Happy Patients', label_bn: 'সুখী রোগী' },
    { value: 25, suffix: '+', label_en: 'Advanced Treatments', label_bn: 'উন্নত চিকিৎসা' },
    { value: 4.9, suffix: '/5', label_en: 'Patient Rating', label_bn: 'রোগীর রেটিং', decimals: 1 },
  ];

  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center lg:border-r lg:border-border/60 lg:last:border-r-0"
            >
              <p className="text-4xl lg:text-5xl font-display font-medium text-foreground mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? stat.label_bn : stat.label_en}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TRUST INTRODUCTION
// ============================================================
function TrustIntroduction() {
  const { isBangla } = useLanguage();

  const t = {
    eyebrow: isBangla ? 'ডেন্টাল হারমনি সম্পর্কে' : 'About Dental Harmony',
    title: isBangla ? 'আপনার আত্মবিশ্বাসের চারপাশে নির্মিত ডেন্টিস্ট্রি।' : 'Dentistry built around your confidence.',
    subtitle: isBangla ? 'আমরা উন্নত প্রযুক্তি, আন্তর্জাতিকভাবে প্রশিক্ষিত বিশেষজ্ঞ এবং শান্ত, আতিথেয়তা-চালিত পরিবেশকে একত্রিত করি আপনার বিশ্বাসযোগ্য ডেন্টাল কেয়ার প্রদান করতে।' : 'We combine advanced technology, internationally trained specialists, and a calm, hospitality-driven environment to deliver dental care worth trusting.',
    learnMore: isBangla ? 'আমাদের সম্পর্কে আরও জানুন' : 'Learn More About Us',
    items: [
      { icon: Stethoscope, title_en: 'Experienced Specialists', title_bn: 'অভিজ্ঞ বিশেষজ্ঞ', text_en: 'BMDC-certified dentists with international training and years of clinical excellence.', text_bn: 'আন্তর্জাতিক প্রশিক্ষণ এবং বছরের পর বছর ক্লিনিক্যাল এক্সিলেন্স সহ BMDC-সার্টিফাইড ডেন্টিস্ট।' },
      { icon: Sparkles, title_en: 'Modern Equipment', title_bn: 'আধুনিক সরঞ্জাম', text_en: 'State-of-the-art digital technology for safer, more accurate, and more comfortable treatment.', text_bn: 'নিরাপদ, আরও সঠিক এবং আরও আরামদায়ক চিকিৎসার জন্য সর্বশেষ ডিজিটাল প্রযুক্তি।' },
      { icon: ShieldCheck, title_en: 'Sterilization Standards', title_bn: 'জীবাণুমুক্তকরণ মান', text_en: 'Hospital-grade sterilization protocols that exceed international benchmarks.', text_bn: 'আন্তর্জাতিক মানদণ্ড অতিক্রমকারী হাসপাতাল-গ্রেড জীবাণুমুক্তকরণ প্রোটোকল।' },
      { icon: Heart, title_en: 'Personalized Care', title_bn: 'ব্যক্তিগতকৃত যত্ন', text_en: 'Treatment plans tailored to your goals, comfort, and timeline — never one-size-fits-all.', text_bn: 'আপনার লক্ষ্য, আরাম এবং সময়সীমা অনুযায়ী তৈরি চিকিৎসা পরিকল্পনা — কখনোই এক-আকার-ফিটস-অল নয়।' },
    ]
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80"
                alt="Modern dental clinic interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:right-8 bg-card border border-border rounded-2xl p-6 shadow-2xl max-w-[220px]">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? '২০১৪ থেকে' : 'Since 2014'}
              </p>
              <p className="text-2xl font-display font-semibold text-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'এক দশকের শ্রেষ্ঠত্ব' : 'A Decade of Excellence'}
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow={t.eyebrow}
              title={t.title}
              subtitle={t.subtitle}
              align="left"
              className="mb-10"
            />

            <div className="space-y-4 mb-10">
              {t.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                      {isBangla ? item.title_bn : item.title_en}
                    </h3>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? item.text_bn : item.text_en}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{t.learnMore}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SERVICES GRID
// ============================================================
function ServicesGrid() {
  const { isBangla } = useLanguage();
  const services = [
    { icon: Stethoscope, title_en: 'General Dentistry', title_bn: 'সাধারণ দন্তচিকিৎসা', slug: 'general-dentistry', desc_en: 'Comprehensive care for everyday dental health.', desc_bn: 'প্রতিদিনের দাঁতের স্বাস্থ্যের জন্য ব্যাপক যত্ন।' },
    { icon: ShieldCheck, title_en: 'Dental Implants', title_bn: 'ডেন্টাল ইমপ্ল্যান্ট', slug: 'dental-implants', desc_en: 'Restore missing teeth with precision-placed implants.', desc_bn: 'নির্ভুলভাবে স্থাপিত ইমপ্ল্যান্ট দিয়ে অনুপস্থিত দাঁত পুনরুদ্ধার করুন।' },
    { icon: Award, title_en: 'Orthodontics', title_bn: 'অর্থোডন্টিক্স', slug: 'orthodontics', desc_en: 'Braces and aligners for a beautifully aligned smile.', desc_bn: 'সুন্দরভাবে সারিবদ্ধ হাসির জন্য ব্রেস এবং অ্যালাইনার।' },
    { icon: Sparkles, title_en: 'Clear Aligners', title_bn: 'স্বচ্ছ অ্যালাইনার', slug: 'clear-aligners', desc_en: 'Discreetly straighten teeth with invisible aligners.', desc_bn: 'অদৃশ্য অ্যালাইনার দিয়ে সূক্ষ্মভাবে দাঁত সোজা করুন।' },
    { icon: Heart, title_en: 'Cosmetic Dentistry', title_bn: 'কসমেটিক ডেন্টিস্ট্রি', slug: 'cosmetic-dentistry', desc_en: 'Veneers, bonding, and aesthetic refinements.', desc_bn: 'ভেনিয়ার, বন্ডিং এবং নান্দনিক পরিমার্জন।' },
    { icon: Users, title_en: 'Smile Makeover', title_bn: 'স্মাইল মেকওভার', slug: 'smile-makeover', desc_en: 'Complete smile transformation, designed just for you.', desc_bn: 'সম্পূর্ণ হাসি রূপান্তর, শুধুমাত্র আপনার জন্য ডিজাইন করা।' },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'আমাদের সেবা' : 'Our Services'}
          title={isBangla ? 'সম্পূর্ণ ডেন্টাল কেয়ার। একটি বিশ্বস্ত গন্তব্য।' : 'Complete Dental Care. One Trusted Destination.'}
          subtitle={isBangla ? 'রুটিন চেক-আপ থেকে উন্নত কসমেটিক এবং সার্জিক্যাল পদ্ধতি পর্যন্ত, আমরা এক ছাদের নিচে প্রতিটি পরিষেবা অফার করি।' : 'From routine check-ups to advanced cosmetic and surgical procedures, we offer every service under one roof.'}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                to={`/treatments/${service.slug}`}
                className="group block h-full bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? service.title_bn : service.title_en}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? service.desc_bn : service.desc_en}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'আরও জানুন' : 'Learn More'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/treatments">
            <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
              <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'সমস্ত চিকিৎসা দেখুন' : 'View All Treatments'}</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FEATURED TREATMENTS
// ============================================================
function FeaturedTreatments() {
  const { isBangla } = useLanguage();
  const featured = TREATMENTS.filter(t => ['dental-implants', 'clear-aligners', 'smile-makeover'].includes(t.slug)).slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow block mb-4">{isBangla ? 'প্রিমিয়াম চিকিৎসা' : 'Premium Treatments'}</span>
          <h2 className="heading-lg text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আপনার সবচেয়ে গুরুত্বপূর্ণ হাসির জন্য উন্নত যত্ন।' : 'Advanced care for your most important smile.'}
          </h2>
          <p className="body-lg text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমাদের সিগনেচার চিকিৎসাগুলি সেই রোগীদের জন্য ডিজাইন করা হয়েছে যারা দন্ত চিকিৎসার সর্বোচ্চ মান চান।' : 'Our signature treatments are designed for patients who want the very best in dental excellence.'}
          </p>
        </div>

        <div className="space-y-20">
          {featured.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-4">
                  {treatment.category}
                </span>
                <h3 className="heading-md text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{treatment.title}</h3>
                <p className="body-lg text-muted-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{treatment.description}</p>

                <ul className="space-y-2 mb-8">
                  {treatment.benefits.slice(0, 4).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={`/treatments/${treatment.slug}`}>
                    <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                      <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{treatment.cta}</span>
                    </Button>
                  </Link>
                  <Link to="/book-appointment">
                    <Button variant="secondary" size="lg">
                      <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'পরামর্শ বুক করুন' : 'Book Consultation'}</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DOCTORS PREVIEW
// ============================================================
function DoctorsPreview() {
  const { isBangla } = useLanguage();
  const doctors = DOCTORS.slice(0, 3);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'আমাদের বিশেষজ্ঞ' : 'Our Specialists'}
          title={isBangla ? 'আপনার হাসির পেছনের মানুষদের সাথে দেখা করুন।' : 'Meet the people behind your smile.'}
          subtitle={isBangla ? 'আন্তর্জাতিকভাবে প্রশিক্ষিত, BMDC-সার্টিফাইড বিশেষজ্ঞদের একটি দল যারা সর্বোচ্চ মানের দন্ত চিকিৎসা প্রদানে প্রতিশ্রুতিবদ্ধ।' : 'A team of internationally trained, BMDC-certified specialists committed to delivering dental care of the highest standard.'}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                to={`/doctors/${doctor.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-muted">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{doctor.title}</p>
                <p className="text-xs text-muted-foreground">{doctor.qualifications}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/doctors">
            <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
              <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'সকল ডাক্তারদের সাথে দেখা করুন' : 'Meet All Doctors'}</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PATIENT JOURNEY
// ============================================================
function PatientJourney() {
  const { isBangla } = useLanguage();
  const steps = [
    { num: '01', title_en: 'Book Consultation', title_bn: 'পরামর্শ বুক করুন', desc_en: 'Easy online booking or call us directly.', desc_bn: 'সহজ অনলাইন বুকিং বা সরাসরি কল করুন।' },
    { num: '02', title_en: 'Meet Your Dentist', title_bn: 'আপনার ডেন্টিস্টের সাথে দেখা করুন', desc_en: 'Comprehensive evaluation and discussion.', desc_bn: 'ব্যাপক মূল্যায়ন এবং আলোচনা।' },
    { num: '03', title_en: 'Personalized Plan', title_bn: 'ব্যক্তিগত পরিকল্পনা', desc_en: 'Custom treatment plan with transparent pricing.', desc_bn: 'স্বচ্ছ মূল্য নির্ধারণ সহ কাস্টম চিকিৎসা পরিকল্পনা।' },
    { num: '04', title_en: 'Begin Treatment', title_bn: 'চিকিৎসা শুরু করুন', desc_en: 'Comfortable, modern procedures in our clinic.', desc_bn: 'আমাদের ক্লিনিকে আরামদায়ক, আধুনিক পদ্ধতি।' },
    { num: '05', title_en: 'Follow-up & Care', title_bn: 'ফলো-আপ এবং যত্ন', desc_en: 'Ongoing support to maintain your smile.', desc_bn: 'আপনার হাসি বজায় রাখতে চলমান সহায়তা।' },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'আপনার যাত্রা' : 'Your Journey'}
          title={isBangla ? 'স্বাস্থ্যকর হাসির দিকে আপনার যাত্রা।' : 'Your journey to a healthier smile.'}
          subtitle={isBangla ? 'আপনার প্রথম কল থেকে চূড়ান্ত ফলাফল পর্যন্ত একটি স্পষ্ট, আরামদায়ক প্রক্রিয়া।' : 'A clear, comfortable process from your first call to your final result.'}
          className="mb-16"
        />

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 rounded-full bg-card border-2 border-accent flex items-center justify-center mb-5 z-10">
                    <span className="text-2xl font-display font-semibold text-accent">{step.num}</span>
                  </div>
                  <h3 className="text-base font-display font-semibold text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? step.title_bn : step.title_en}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-[200px]" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? step.desc_bn : step.desc_en}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TESTIMONIALS PREVIEW
// ============================================================
function TestimonialsPreview() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'রোগীদের গল্প' : 'Patient Stories'}
          title={isBangla ? 'হাজার হাজার রোগীর আস্থা।' : 'Trusted by thousands of patients.'}
          subtitle={isBangla ? 'যারা তাদের যত্নের জন্য ডেন্টাল হারমনি বেছে নিয়েছেন তাদের থেকে প্রকৃত অভিজ্ঞতা।' : 'Real experiences from patients who chose Dental Harmony for their care.'}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.slice(0, 3).map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-sm text-foreground leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3.5 h-3.5 ${
                      star <= Math.round(testimonial.rating)
                        ? 'fill-accent text-accent'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <div className="pt-4 border-t border-border/60">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.treatment} · {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/patient-stories">
            <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
              <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'আরও গল্প পড়ুন' : 'Read More Stories'}</span>
            </Button>
          </Link>
          <a href="https://www.google.com/maps/place/Promident+Dental+Clinic,Banani/@23.7947555,90.4057056,2406m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3755c70c15ea1de1:0x97856381e88fb311!2sBanani,+Dhaka!3b1!8m2!3d23.7936706!4d90.4066082!16s%2Fg%2F11bxfypk48!3m5!1s0x3755c70c13490aef:0x2ab50d0552b00c6f!8m2!3d23.7900237!4d90.4092151!16s%2Fg%2F1pzpq4b8g?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" icon={PencilLine}>
              <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'রিভিউ যোগ করুন' : 'Add Review'}</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ PREVIEW
// ============================================================
function FAQPreview() {
  const { isBangla } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = FAQS.slice(0, 5);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow block mb-4">{isBangla ? 'সাধারণ প্রশ্ন' : 'Common Questions'}</span>
            <h2 className="heading-md text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'আপনার প্রশ্নের উত্তর।' : 'Answers to your questions.'}
            </h2>
            <p className="body-md text-muted-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'আরো প্রশ্ন আছে? আমাদের সম্পূর্ণ FAQ দেখুন বা সরাসরি আমাদের টিমের সাথে যোগাযোগ করুন।' : 'Have more questions? Visit our complete FAQ or reach out to our team directly.'}
            </p>
            <Link to="/faq">
              <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'সমস্ত FAQ দেখুন' : 'View All FAQs'}</span>
              </Button>
            </Link>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-sm font-semibold text-foreground pr-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? faq.question_bn : faq.question}
                  </span>
                  <span
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-45' : ''
                    }`}
                  >
                    <span className="absolute w-5 h-0.5 bg-foreground rotate-0" />
                    <span className="absolute w-0.5 h-5 bg-foreground" />
                  </span>
                </button>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed"
                    style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}
                  >
                    {isBangla ? faq.answer_bn : faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// MAP LOCATION
// ============================================================
function MapLocation() {
  const { isBangla } = useLanguage();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <span className="eyebrow block mb-4">{isBangla ? 'আমাদের খুঁজুন' : 'Find Us'}</span>
            <h2 className="heading-md text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'আমাদের ক্লিনিকে আসুন।' : 'Visit Our Clinic.'}
            </h2>
            <p className="body-md text-muted-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla
                ? 'আমরা বানানী, ঢাকা ১২০৫-এ অবস্থিত। সহজে যাতায়াতের জায়গায় এবং পার্কিং সুবিধা আছে।'
                : 'We are located in Banani, Dhaka 1205. Easy to access with parking available.'}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {CLINIC_CONFIG.address}
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Banani,Dhaka,Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}
            >
              {isBangla ? 'গুগল ম্যাপে দেখুন' : 'View on Google Maps'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-8">
            <div className="rounded-3xl overflow-hidden border border-border shadow-xl h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5850379126!2d90.40216531498295!3d23.793736993596947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe023!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental Harmony Location - Banani, Dhaka"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// APPOINTMENT CTA
// ============================================================
function AppointmentCTA() {
  const { isBangla } = useLanguage();

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="eyebrow block mb-6 !text-accent">{isBangla ? 'আপনার যাত্রা শুরু করুন' : 'Begin Your Journey'}</span>
          <h2 className="heading-lg mb-6 text-balance" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আপনার স্বাস্থ্যকর, আরও আত্মবিশ্বাসী হাসি এখানে শুরু হয়।' : 'Your healthier, more confident smile starts here.'}
          </h2>
          <p className="body-lg mb-10 opacity-80 max-w-2xl mx-auto" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমাদের বিশেষজ্ঞদের সাথে একটি পরামর্শ নির্ধারণ করুন। আমরা একটি ব্যক্তিগতকৃত চিকিৎসা পরিকল্পনা তৈরি করব যা আপনার লক্ষ্য, আরাম এবং সময়সীমার সাথে মানানসই।' : 'Schedule a consultation with our specialists. We\'ll create a personalized treatment plan that fits your goals, comfort, and timeline.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button variant="accent" size="lg" icon={Calendar}>
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'আপনার অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book Your Appointment'}</span>
              </Button>
            </Link>
            <a href={`tel:${CLINIC_CONFIG.phone.replace(/[^0-9+]/g, '')}`}>
              <Button
                variant="ghost"
                size="lg"
                className="!text-primary-foreground hover:!bg-primary-foreground/10"
              >
                {isBangla ? 'কল করুন ' : 'Call '}{CLINIC_CONFIG.phone}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <TrustIntroduction />
      <ServicesGrid />
      <FeaturedTreatments />
      <DoctorsPreview />
      <PatientJourney />
      <TestimonialsPreview />
      <FAQPreview />
      <MapLocation />
      <AppointmentCTA />
    </>
  );
}