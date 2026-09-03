import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQS } from '@/data/faq';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function FAQ() {
  return (
    <>
      <PageHero />
      <FAQAccordion />
      <StillHaveQuestions />
      <FAQCTA />
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
            <span className="text-foreground">FAQ</span>
          </nav>
          <span className="eyebrow block mb-4">{isBangla ? 'প্রশ্ন?' : 'Questions?'}</span>
          <h1 className="heading-xl text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'প্রায়শই জিজ্ঞাসিত প্রশ্ন।' : 'Frequently asked questions.'}
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমাদের দন্ত চিকিৎসা, অ্যাপয়েন্টমেন্ট, চিকিৎসা এবং পেমেন্ট অপশন সম্পর্কে সাধারণ প্রশ্নের উত্তর দিন।' : 'Find answers to common questions about our dental services, appointments, treatments, and payment options.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const { isBangla } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="FAQ"
            title={isBangla ? 'সাধারণ প্রশ্ন।' : 'Common questions.'}
            subtitle={isBangla ? 'আমাদের সেবা সম্পর্কে এবং কী আশা করতে হবে তা জানতে আপনার যা জানা দরকার।' : 'Everything you need to know about our services and what to expect.'}
            className="mb-12"
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-base font-semibold text-foreground pr-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? faq.question_bn : faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === idx ? 'auto' : 0,
                    opacity: openIndex === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                      {isBangla ? faq.answer_bn : faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StillHaveQuestions() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow={isBangla ? 'আরো সাহায্য প্রয়োজন?' : 'Need More Help?'}
            title={isBangla ? 'আমরা সাহায্য করতে এখানে আছি।' : "We're here to help."}
            subtitle={isBangla ? "আপনি যে উত্তর খুঁজছেন তা খুঁজে পাচ্ছেন না? যোগাযোগ করুন এবং আমাদের টিম আপনার সাথে যোগাযোগ করবে।" : "Can't find the answer you're looking for? Reach out and our team will get back to you."}
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'আমাদের কল করুন' : 'Call Us'}</h3>
              <p className="text-xs text-muted-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'শনি–বৃহ: সকাল ১০টা – রাত ৯টা' : 'Mon–Sat, 10AM–9PM'}</p>
              <a href="tel:+880212345678" className="text-sm text-accent hover:underline">
                +880 2 1234 5678
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>WhatsApp</h3>
              <p className="text-xs text-muted-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'দ্রুত প্রতিক্রিয়া' : 'Quick response'}</p>
              <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                {isBangla ? 'আমাদের সাথে চ্যাট করুন' : 'Chat with us'}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'অনলাইন বুক করুন' : 'Book Online'}</h3>
              <p className="text-xs text-muted-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'একটি ভিজিট শিডিউল করুন' : 'Schedule a visit'}</p>
              <Link to="/book-appointment" className="text-sm text-accent hover:underline">
                {isBangla ? 'এখনই বুক করুন' : 'Book Now'}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQCTA() {
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
            {isBangla ? 'আপনার হাসি রূপান্তরিত করতে প্রস্তুত?' : 'Ready to transform your smile?'}
          </h2>
          <p className="body-lg opacity-80 mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমাদের বিশেষজ্ঞদের সাথে একটি পরামর্শ নির্ধারণ করুন এবং স্বাস্থ্যকর, আরও আত্মবিশ্বাসী হাসির দিকে প্রথম পদক্ষেপ নিন।' : 'Schedule a consultation with our specialists and take the first step towards a healthier, more confident smile.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button variant="accent" size="lg" icon={Calendar}>
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'ফ্রি পরামর্শ বুক করুন' : 'Book Free Consultation'}</span>
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
