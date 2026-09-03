import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, CheckCircle2, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TREATMENTS } from '@/data/treatments';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  const related = TREATMENTS.filter((t) => t.id !== treatment.id && t.category === treatment.category).slice(0, 3);
  const fallbackRelated = TREATMENTS.filter((t) => t.id !== treatment.id).slice(0, 3);
  const displayRelated = related.length >= 2 ? related : fallbackRelated;

  return (
    <>
      <PageHero treatment={treatment} />
      <TreatmentOverview treatment={treatment} />
      <TechnologySection treatment={treatment} />
      <ProcessSection treatment={treatment} />
      <RelatedTreatments treatments={displayRelated} />
      <TreatmentCTA treatment={treatment} />
    </>
  );
}

function PageHero({ treatment }: { treatment: typeof TREATMENTS[0] }) {
  const { isBangla } = useLanguage();
  return (
    <section className="pt-32 pb-0 bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'চিকিৎসার তালিকায় ফিরে যান' : 'Back to Treatments'}
            </span>
          </Link>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
        <div className="relative h-[400px] lg:h-[500px]">
          <img
            src={treatment.image}
            alt={isBangla ? treatment.title_bn : treatment.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-20 -mt-48 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-4">
              {isBangla ? treatment.category_bn : treatment.category}
            </span>
            <h1 className="heading-xl text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? treatment.title_bn : treatment.title}
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? treatment.description_bn : treatment.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TreatmentOverview({ treatment }: { treatment: typeof TREATMENTS[0] }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="heading-sm text-foreground mb-6">{isBangla ? 'চিকিৎসার ওভারভিউ' : 'Treatment Overview'}</h2>
            <p className="body-lg text-muted-foreground mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? treatment.description_bn : treatment.description}
            </p>
            <Link to="/book-appointment">
              <Button variant="primary" size="lg" icon={Calendar}>
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'পরামর্শ বুক করুন' : 'Book Consultation'}
                </span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'কী আশা করবেন' : 'What to Expect'}
              </h3>
              <ul className="space-y-3">
                {treatment.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              {treatment.price_range && (
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{isBangla ? 'আনুমানিক মূল্য সীমা' : 'Estimated Price Range'}</p>
                  <p className="text-xl font-semibold text-foreground">{treatment.price_range}</p>
                  <p className="text-xs text-muted-foreground mt-1" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? 'পরামর্শের পরে চূড়ান্ত মূল্য নির্ধারণ করা হয়' : 'Final price determined after consultation'}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection({ treatment }: { treatment: typeof TREATMENTS[0] }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'প্রযুক্তি' : 'Technology'}
          title={isBangla ? 'সুনির্দিষ্ট ফলাফলের জন্য উন্নত সরঞ্জাম।' : 'Advanced tools for precision results.'}
          subtitle={isBangla ? `${treatment.title_bn} প্রক্রিয়াটি নিরাপদ, আরো সঠিক ফলাফলের জন্য আধুনিক সরঞ্জাম ব্যবহার করে।` : `The ${treatment.title} procedure uses state-of-the-art equipment for safer, more accurate outcomes.`}
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {treatment.technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ treatment }: { treatment: typeof TREATMENTS[0] }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'প্রক্রিয়া' : 'The Process'}
          title={isBangla ? 'আপনার চিকিৎসা যাত্রা।' : 'Your treatment journey.'}
          subtitle={isBangla ? 'আপনার আরাম এবং আত্মবিশ্বাসের জন্য ডিজাইন করা একটি স্পষ্ট, ধাপে ধাপে প্রক্রিয়া।' : 'A clear, step-by-step process designed for your comfort and confidence.'}
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatment.process_steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative bg-card border border-border rounded-2xl p-6"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-sm font-bold text-accent-foreground">{idx + 1}</span>
              </div>
              <p className="text-sm font-medium text-foreground pt-2 leading-relaxed" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedTreatments({ treatments }: { treatments: typeof TREATMENTS }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="heading-sm text-foreground mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
          {isBangla ? 'সম্পর্কিত চিকিৎসা' : 'Related Treatments'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {treatments.slice(0, 3).map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link
                to={`/treatments/${treatment.slug}`}
                className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={isBangla ? treatment.title_bn : treatment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? treatment.title_bn : treatment.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentCTA({ treatment }: { treatment: typeof TREATMENTS[0] }) {
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
            {isBangla
              ? `${treatment.title_bn}-এর জন্য প্রস্তুত?`
              : `Ready for your ${treatment.title}?`}
          </h2>
          <p className="body-lg opacity-80 mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'একটি পরামর্শ বুক করুন এবং আমাদের বিশেষজ্ঞদের আপনার জন্য একটি ব্যক্তিগতকৃত চিকিৎসা পরিকল্পনা তৈরি করতে দিন।' : 'Book a consultation and let our specialists create a personalized treatment plan for you.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button variant="accent" size="lg" icon={Calendar}>
                {isBangla ? treatment.cta_bn : treatment.cta}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="lg" className="!text-primary-foreground hover:!bg-primary-foreground/10">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'একটি প্রশ্ন জিজ্ঞাসা করুন' : 'Ask a Question'}
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
