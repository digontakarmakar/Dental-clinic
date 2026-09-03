import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TREATMENTS } from '@/data/treatments';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function Treatments() {
  const featured = TREATMENTS.filter(t => ['dental-implants', 'clear-aligners', 'smile-makeover'].includes(t.slug));
  const others = TREATMENTS.filter(t => !['dental-implants', 'clear-aligners', 'smile-makeover'].includes(t.slug));

  return (
    <>
      <PageHero />
      <FeaturedSection featured={featured} />
      <AllTreatments treatments={others} />
      <NotSureCTA />
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
            <span className="text-foreground">{isBangla ? 'চিকিৎসা' : 'Treatments'}</span>
          </nav>
          <span className="eyebrow block mb-4">{isBangla ? 'আমাদের চিকিৎসা' : 'Our Treatments'}</span>
          <h1 className="heading-xl text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'সম্পূর্ণ ডেন্টাল কেয়ার।' : 'Complete dental care.'}<br />{isBangla ? 'একটি বিশ্বস্ত গন্তব্য।' : 'One trusted destination.'}
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'রুটিন চেক-আপ থেকে শুরু করে উন্নত কসমেটিক এবং সার্জিক্যাল প্রক্রিয়া পর্যন্ত, আমরা একই ছাদের নিচে প্রতিটি সেবা অফার করি।' : 'From routine check-ups to advanced cosmetic and surgical procedures, we offer every service under one roof.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedSection({ featured }: { featured: typeof TREATMENTS }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'সিগনেচার চিকিৎসা' : 'Signature Treatments'}
          title={isBangla ? 'আমাদের সবচেয়ে চাহিদাসম্পন্ন প্রক্রিয়া।' : 'Our most-requested procedures.'}
          subtitle={isBangla ? 'ডেন্টাল এক্সিলেন্সে সেরা চান এমন রোগীদের জন্য প্রিমিয়াম কেয়ার।' : 'Premium care for patients who want the very best in dental excellence.'}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider rounded-full">
                {isBangla ? 'বৈশিষ্ট্যযুক্ত' : 'Featured'}
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={treatment.image}
                  alt={isBangla ? treatment.title_bn : treatment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-3">
                  {isBangla ? treatment.category_bn : treatment.category}
                </span>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? treatment.title_bn : treatment.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? treatment.description_bn : treatment.description}</p>
                <Link
                  to={`/treatments/${treatment.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors"
                >
                  <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'আরো জানুন' : 'Learn More'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AllTreatments({ treatments }: { treatments: typeof TREATMENTS }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'সব চিকিৎসা' : 'All Treatments'}
          title={isBangla ? 'আমাদের সম্পূর্ণ সেবা পরিসর অন্বেষণ করুন।' : 'Explore our complete service range.'}
          subtitle={isBangla ? 'প্রতিটি চিকিৎসা বিশেষজ্ঞরা দেন, উন্নত প্রযুক্তি ব্যবহার করে, একটি আরামদায়ক, আধুনিক পরিবেশে।' : 'Each treatment is delivered by specialists, using advanced technology, in a comfortable, modern environment.'}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Link
                to={`/treatments/${treatment.slug}`}
                className="group block h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={isBangla ? treatment.title_bn : treatment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-3">
                    {isBangla ? treatment.category_bn : treatment.category}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? treatment.title_bn : treatment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? treatment.description_bn : treatment.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotSureCTA() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-md mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'কোন চিকিৎসা আপনার প্রয়োজন তা নিশ্চিত নন?' : 'Not sure which treatment you need?'}
          </h2>
          <p className="body-lg opacity-80 mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'একটি পরামর্শ বুক করুন এবং আমাদের বিশেষজ্ঞদের আপনার নির্দিষ্ট প্রয়োজনের জন্য সঠিক চিকিৎসা সুপারিশ করতে দিন।' : 'Book a consultation and let our specialists recommend the right treatment for your specific needs.'}
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
