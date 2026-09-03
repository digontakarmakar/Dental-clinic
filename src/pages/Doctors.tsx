import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { DOCTORS } from '@/data/doctors';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function Doctors() {
  return (
    <>
      <PageHero />
      <DoctorsGrid />
      <DoctorsCTA />
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
            <span className="text-foreground">{isBangla ? 'ডাক্তাররা' : 'Doctors'}</span>
          </nav>
          <span className="eyebrow block mb-4">{isBangla ? 'আমাদের বিশেষজ্ঞরা' : 'Our Specialists'}</span>
          <h1 className="heading-xl text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আপনার হাসির পেছনে মানুষদের সাথে পরিচিত হন।' : 'Meet the people behind your smile.'}
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আন্তর্জাতিকভাবে প্রশিক্ষিত, বিএমডিসি-সার্টিফাইড বিশেষজ্ঞদের টিম আপনার বিশ্বাসযোগ্য যত্ন প্রদান করতে দশকেরও বেশি ক্লিনিক্যাল দক্ষতা নিয়ে এসেছে।' : 'Our team of internationally trained, BMDC-certified specialists brings together decades of clinical expertise to deliver care you can trust.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DoctorsGrid() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DOCTORS.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                to={`/doctors/${doctor.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-3 gap-6 bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="sm:col-span-1 aspect-[3/4] sm:aspect-auto overflow-hidden bg-muted">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="sm:col-span-2 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-xl font-display font-semibold text-foreground group-hover:text-accent transition-colors mb-1" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                        {isBangla ? doctor.name_bn : doctor.name}
                      </h2>
                      <p className="text-sm text-accent font-medium">{doctor.title}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-full">
                      <Award className="w-3 h-3 text-accent" />
                      <span className="text-xs text-accent font-medium">{doctor.experience}y</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? doctor.bio_bn : doctor.bio.substring(0, 150)}...
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{isBangla ? 'যোগ্যতা' : 'Qualifications'}</p>
                    <p className="text-sm font-medium text-foreground">{doctor.qualifications}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                      {isBangla ? 'পূর্ণ প্রোফাইল দেখুন' : 'View Full Profile'}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorsCTA() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-3xl p-12 lg:p-16 text-center"
        >
          <h2 className="heading-md text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আপনার জন্য সঠিক ডাক্তার খুঁজছেন?' : 'Not sure which doctor is right for you?'}
          </h2>
          <p className="body-lg text-muted-foreground max-w-xl mx-auto mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমাদের টিম আপনার প্রয়োজনের ভিত্তিতে আপনাকে সঠিক বিশেষজ্ঞের সাথে মিলিয়ে দেবে। একটি পরামর্শ বুক করুন এবং আমাদের আপনাকে গাইড করতে দিন।' : 'Our team will match you with the right specialist based on your needs. Book a consultation and let us guide you.'}
          </p>
          <Link to="/book-appointment">
            <Button variant="primary" size="lg">
              <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'পরামর্শ নির্ধারণ করুন' : 'Schedule a Consultation'}
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
