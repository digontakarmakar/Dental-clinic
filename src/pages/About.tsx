import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Lightbulb, ShieldCheck, Stethoscope, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { DOCTORS } from '@/data/doctors';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function About() {
  return (
    <>
      <PageHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <TrustStats />
      <WhyChooseUs />
      <TeamPreview />
      <TechnologyPreview />
      <AboutCTA />
    </>
  );
}

function PageHero() {
  const { isBangla } = useLanguage();
  return (
    <section className="relative pt-32 pb-20 bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
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
            <span className="text-foreground">{isBangla ? 'আমাদের সম্পর্কে' : 'About'}</span>
          </nav>
          <span className="eyebrow block mb-4">{isBangla ? 'ডেন্টাল হারমনি সম্পর্কে' : 'About Dental Harmony'}</span>
          <h1 className="heading-xl text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'বাংলাদেশে এক দশকের দন্ত চিকিৎসার শ্রেষ্ঠত্ব।' : 'A decade of dental excellence in Bangladesh.'}
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? '২০১৪ সাল থেকে, ডেন্টাল হারমনি প্রিমিয়াম দন্ত চিকিৎসার অগ্রভাগে রয়েছে, বিশ্বমানের প্রযুক্তি এবং উষ্ণ, রোগী-প্রথম পদ্ধতির সমন্বয়ে।' : 'Since 2014, Dental Harmony has been at the forefront of premium dental care, combining world-class technology with a warm, patient-first approach.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function OurStory() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80"
                  alt="Dental Harmony clinic"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-2xl">
                <p className="text-4xl font-display font-semibold">2014</p>
                <p className="text-sm" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'প্রতিষ্ঠিত' : 'Established'}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="eyebrow block mb-4">{isBangla ? 'আমাদের গল্প' : 'Our Story'}</span>
            <h2 className="heading-lg text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'বিশ্বাসের উপর প্রতিষ্ঠিত। শ্রেষ্ঠত্ব দ্বারা চালিত।' : 'Built on trust. Driven by excellence.'}
            </h2>
            <div className="space-y-4 text-muted-foreground body-md mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              <p>
                {isBangla ? 'ডেন্টাল হারমনি একটি সাধারণ বিশ্বাস নিয়ে প্রতিষ্ঠিত হয়েছিল: প্রতিটি মানুষের উষ্ণতা এবং প্রতিটি রোগীর সুস্থতার প্রতি জেনুইন উদ্বেগ সহ বিশ্ব-মানের দন্ত চিকিৎসা পাওয়ার যোগ্য।' : 'Dental Harmony was founded with a simple belief: everyone deserves access to world-class dental care delivered with warmth and genuine concern for each patient\'s wellbeing.'}
              </p>
              <p>
                {isBangla ? 'বনানীতে একটি ছোট প্র্যাকটিস হিসাবে শুরু হয়ে এটি ঢাকার সবচেয়ে বিশ্বস্ত দন্ত গন্তব্যগুলির একটিতে পরিণত হয়েছে — বাংলাদেশ এবং তার বাইরে থেকে ১৫,০০০ এরও বেশি রোগীদের সেবা দিচ্ছে।' : 'What started as a small practice in Banani has grown into one of Dhaka\'s most trusted dental destinations — serving over 15,000 patients from across Bangladesh and beyond.'}
              </p>
              <p>
                {isBangla ? 'আমাদের নাম আমাদের দর্শন প্রতিফলিত করে: দন্ত চিকিৎসা শুধু সমস্যা সমাধান করা উচিত নয় — এটি স্বাস্থ্য, কার্যকারিতা এবং নান্দনিকতাকে এমন হাসিতে সামঞ্জস্য করা উচিত যা রোগীরা ভাগ করতে গর্ব অনুভব করে।' : 'Our name reflects our philosophy: dental care should not just fix problems — it should harmonize health, function, and aesthetics into smiles that patients are proud to share.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const { isBangla } = useLanguage();
  const items = [
    {
      icon: Heart,
      title_en: 'Our Mission',
      title_bn: 'আমাদের মিশন',
      desc_en: 'To deliver exceptional dental care that exceeds international standards, in an environment where patients feel genuinely cared for, informed, and confident in their treatment.',
      desc_bn: 'আন্তর্জাতিক মান অতিক্রম করে যে পরিবেশে রোগীরা প্রকৃতপক্ষে যত্নশীল, অবহিত এবং তাদের চিকিৎসায় আত্মবিশ্বাসী বোধ করে সেই পরিবেশে ব্যতিক্রমী দন্ত চিকিৎসা প্রদান করা।',
    },
    {
      icon: Lightbulb,
      title_en: 'Our Vision',
      title_bn: 'আমাদের দৃষ্টি',
      desc_en: 'To be the most trusted name in advanced dentistry across Bangladesh — setting the benchmark for clinical excellence, technology, and patient experience.',
      desc_bn: 'বাংলাদেশ জুড়ে উন্নত দন্ত চিকিৎসায় সবচেয়ে বিশ্বস্ত নাম হওয়া — ক্লিনিক্যাল এক্সিলেন্স, প্রযুক্তি এবং রোগীর অভিজ্ঞতার জন্য মানদণ্ড নির্ধারণ করা।',
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-3xl p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-sm text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? item.title_bn : item.title_en}</h3>
              <p className="body-md text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? item.desc_bn : item.desc_en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const { isBangla } = useLanguage();
  const values = [
    { icon: Stethoscope, title_en: 'Expertise', title_bn: 'দক্ষতা', desc_en: 'Continuous learning, rigorous standards, and clinical excellence in every procedure.', desc_bn: 'প্রতিটি পদ্ধতিতে ক্রমাগত শিক্ষা, কঠোর মান এবং ক্লিনিক্যাল এক্সিলেন্স।' },
    { icon: Heart, title_en: 'Compassion', title_bn: 'সহানুভূতি', desc_en: 'Genuine care for each patient — understanding their concerns and making treatment comfortable.', desc_bn: 'প্রতিটি রোগীর প্রতি জেনুইন যত্ন — তাদের উদ্বেগ বোঝা এবং চিকিৎসা আরামদায়ক করা।' },
    { icon: Sparkles, title_en: 'Innovation', title_bn: 'উদ্ভাবন', desc_en: 'Adopting the latest technology and techniques to deliver better outcomes.', desc_bn: 'ভালো ফলাফল দিতে সর্বশেষ প্রযুক্তি এবং কৌশল গ্রহণ করা।' },
    { icon: ShieldCheck, title_en: 'Integrity', title_bn: 'সততা', desc_en: 'Transparent pricing, honest recommendations, and ethical practice at all times.', desc_bn: 'সর্বদা স্বচ্ছ মূল্য, সৎ সুপারিশ এবং নৈতিক অনুশীলন।' },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'আমাদের মূল্যবোধ' : 'Our Values'}
          title={isBangla ? 'যা আমাদের সবকিছু নির্দেশ দেয়।' : 'What guides everything we do.'}
          subtitle={isBangla ? 'চারটি নীতি যা প্রতিটি রোগীর মিথস্ক্রিয়া এবং ক্লিনিক্যাল সিদ্ধান্তকে আকার দেয়।' : 'Four principles that shape every patient interaction and clinical decision.'}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? value.title_bn : value.title_en}</h3>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? value.desc_bn : value.desc_en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStats() {
  const { isBangla } = useLanguage();
  const stats = [
    { value: 10, suffix: '+', label_en: 'Years Experience', label_bn: 'বছরের অভিজ্ঞতা' },
    { value: 15000, suffix: '+', label_en: 'Happy Patients', label_bn: 'সুখী রোগী' },
    { value: 25, suffix: '+', label_en: 'Advanced Treatments', label_bn: 'উন্নত চিকিৎসা' },
    { value: 4.9, suffix: '/5', label_en: 'Patient Rating', label_bn: 'রোগীর রেটিং' },
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center lg:border-r lg:border-primary-foreground/20 lg:last:border-r-0"
            >
              <p className="text-4xl lg:text-5xl font-display font-medium mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
              </p>
              <p className="text-sm opacity-70 uppercase tracking-wider" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? stat.label_bn : stat.label_en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const { isBangla } = useLanguage();
  const reasons = [
    { en: 'BMDC-certified specialist dentists', bn: 'BMDC-সার্টিফাইড বিশেষজ্ঞ দন্ত চিকিৎসক' },
    { en: 'Internationally trained clinical team', bn: 'আন্তর্জাতিকভাবে প্রশিক্ষিত ক্লিনিক্যাল টিম' },
    { en: 'Advanced digital imaging & diagnostics', bn: 'উন্নত ডিজিটাল ইমেজিং ও ডায়াগনস্টিক্স' },
    { en: 'Hospital-grade sterilization protocols', bn: 'হাসপাতাল-গ্রেড জীবাণুমুক্তকরণ প্রোটোকল' },
    { en: 'Transparent, itemized pricing', bn: 'স্বচ্ছ, আইটেমাইজড মূল্য' },
    { en: 'Comfortable, modern clinic environment', bn: 'আরামদায়ক, আধুনিক ক্লিনিক পরিবেশ' },
    { en: 'Flexible appointment scheduling', bn: 'নমনীয় অ্যাপয়েন্টমেন্ট শিডিউলিং' },
    { en: 'Accessible in Dhaka and Chattogram', bn: 'ঢাকা এবং চট্টগ্রামে অ্যাক্সেসযোগ্য' },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow block mb-4">{isBangla ? 'কেন ডেন্টাল হারমনি' : 'Why Dental Harmony'}</span>
            <h2 className="heading-lg text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'যে পছন্দ পার্থক্য তৈরি করে।' : 'The choice that makes a difference.'}
            </h2>
            <p className="body-lg text-muted-foreground mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'যখন আপনি ডেন্টাল হারমনি বেছে নেন, আপনি এমন একটি অনুশীলন বেছে নিচ্ছেন যা সেরা মানুষ, প্রযুক্তি এবং সিস্টেমে বিনিয়োগ করেছে — তাই আপনি এমন যত্ন পান যার উপর আপনি সত্যিই আস্থা রাখতে পারেন।' : 'When you choose Dental Harmony, you\'re choosing a practice that has invested in the best people, technology, and systems — so you receive care you can truly trust.'}
            </p>
            <Link to="/book-appointment">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'পরামর্শ নির্ধারণ করুন' : 'Schedule a Consultation'}</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? reason.bn : reason.en}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamPreview() {
  const { isBangla } = useLanguage();
  const doctors = DOCTORS.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'টিমের সাথে দেখা করুন' : 'Meet the Team'}
          title={isBangla ? 'আপনার যত্নের পেছনের বিশেষজ্ঞরা।' : 'The specialists behind your care.'}
          subtitle={isBangla ? 'আমাদের ডাক্তাররা বছরের পর বছর প্রশিক্ষণ এবং রোগীর সুস্থতার প্রতি genuine আবেগ নিয়ে আসেন।' : 'Our doctors bring years of training and a genuine passion for patient wellbeing.'}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link to={`/doctors/${doctor.slug}`} className="group block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-muted">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-sm text-muted-foreground">{doctor.title}</p>
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

function TechnologyPreview() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80"
                alt="Advanced dental technology"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="eyebrow block mb-4">{isBangla ? 'প্রযুক্তি' : 'Technology'}</span>
            <h2 className="heading-lg text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'ভালো ফলাফলের জন্য উন্নত সরঞ্জাম।' : 'Advanced tools for better outcomes.'}
            </h2>
            <p className="body-lg text-muted-foreground mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'আমরা সর্বশেষ দন্ত প্রযুক্তিতে বিনিয়োগ করি যাতে আরও সঠিক নির্ণয়, সুনির্দিষ্ট চিকিৎসা এবং দ্রুত পুনরুদ্ধারের সময় দেওয়া যায়।' : 'We invest in the latest dental technology to deliver more accurate diagnoses, precise treatments, and faster recovery times.'}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { en: 'Digital X-Ray', bn: 'ডিজিটাল এক্স-রে' },
                { en: 'Intraoral Scanner', bn: 'ইন্ট্রাওরাল স্ক্যানার' },
                { en: 'CAD/CAM', bn: 'CAD/CAM' },
                { en: '3D Imaging', bn: '৩D ইমেজিং' },
                { en: 'Laser Dentistry', bn: 'লেজার ডেন্টিস্ট্রি' }
              ].map((tech) => (
                <span key={tech.en} className="px-3 py-1.5 text-sm bg-accent/10 text-accent rounded-full" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? tech.bn : tech.en}
                </span>
              ))}
            </div>
            <Link to="/technology">
              <Button variant="secondary" size="md" icon={ArrowRight} iconPosition="right">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'আমাদের প্রযুক্তি অন্বেষণ করুন' : 'Explore Our Technology'}</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="heading-lg mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'ডেন্টাল হারমনি অনুভব করতে প্রস্তুত?' : 'Ready to experience Dental Harmony?'}
          </h2>
          <p className="body-lg opacity-80 mb-10" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমাদের টিমের সাথে একটি পরামর্শ বুক করুন এবং আবিষ্কার করুন প্রিমিয়াম দন্ত চিকিৎসা আসলে কেমন অনুভব করে।' : 'Book a consultation with our team and discover what premium dental care really feels like.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button variant="accent" size="lg">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book an Appointment'}</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="lg" className="!text-primary-foreground hover:!bg-primary-foreground/10">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'যোগাযোগ করুন' : 'Contact Us'}</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
