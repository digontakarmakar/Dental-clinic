import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, GraduationCap, Award as Badge, Globe, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { DOCTORS } from '@/data/doctors';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function DoctorProfile() {
  const { slug } = useParams<{ slug: string }>();
  const doctor = DOCTORS.find((d) => d.slug === slug);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  const relatedDoctors = DOCTORS.filter((d) => d.id !== doctor.id).slice(0, 2);

  return (
    <>
      <PageHero doctor={doctor} />
      <DoctorDetails doctor={doctor} />
      <DoctorCTA doctor={doctor} />
      <RelatedDoctors doctors={relatedDoctors} />
    </>
  );
}

function PageHero({ doctor }: { doctor: typeof DOCTORS[0] }) {
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
            to="/doctors"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'ডাক্তারদের তালিকায় ফিরে যান' : 'Back to Doctors'}
            </span>
          </Link>
        </motion.div>
      </div>

      <div className="bg-card border-b border-border">
        <div className="container-custom py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-[300px] mx-auto lg:mx-0">
                <img
                  src={doctor.photo}
                  alt={isBangla ? doctor.name_bn : doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-9"
            >
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div>
                  <h1 className="heading-lg text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? doctor.name_bn : doctor.name}
                  </h1>
                  <p className="text-lg text-accent font-medium mb-1">{doctor.title}</p>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                </div>
                <div className="ml-auto flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-full">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-sm text-accent font-semibold">
                    {doctor.experience} {isBangla ? 'বছর' : 'Years'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{isBangla ? 'যোগ্যতা' : 'Qualifications'}</p>
                  <p className="text-sm font-semibold text-foreground">{doctor.qualifications}</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{isBangla ? 'ভাষা' : 'Languages'}</p>
                  <p className="text-sm font-semibold text-foreground">{doctor.languages.join(', ')}</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">BMDC</p>
                  <p className="text-sm font-semibold text-foreground">{doctor.bmdc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorDetails({ doctor }: { doctor: typeof DOCTORS[0] }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-sm text-foreground mb-4">{isBangla ? 'সম্পর্কে' : 'About'}</h2>
              <p className="body-md text-muted-foreground leading-relaxed" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? doctor.bio_bn : doctor.bio}
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-sm text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-accent" />
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'শিক্ষা ও প্রশিক্ষণ' : 'Education & Training'}
                </span>
              </h2>
              <div className="space-y-4">
                {doctor.education.map((edu, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-semibold text-accent">{idx + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground mt-1">{isBangla ? 'বছর' : 'Year'}: {edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-sm text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'দক্ষতার ক্ষেত্র' : 'Areas of Expertise'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {doctor.expertise.map((item, idx) => (
                  <span key={idx} className="px-4 py-2 text-sm bg-secondary rounded-full text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-sm text-foreground mb-4 flex items-center gap-3">
                <Badge className="w-5 h-5 text-accent" />
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'সার্টিফিকেশন ও নিবন্ধন' : 'Certifications & Registrations'}
                </span>
              </h2>
              <ul className="space-y-3">
                {doctor.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Memberships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-sm text-foreground mb-4 flex items-center gap-3">
                <Users className="w-5 h-5 text-accent" />
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'পেশাদার সদস্যপদ' : 'Professional Memberships'}
                </span>
              </h2>
              <ul className="space-y-2">
                {doctor.memberships.map((membership, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {membership}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Schedule Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-accent" />
                  <h3 className="text-base font-semibold text-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? 'পরামর্শ সময়সূচী' : 'Consultation Schedule'}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{doctor.schedule}</p>
                <Link to="/book-appointment" className="block mt-4">
                  <Button variant="primary" size="md" fullWidth>
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                      {isBangla ? `${doctor.name_bn.split(' ').slice(-1)[0]}-এর সাথে বুক করুন` : `Book with ${doctor.name.split(' ').slice(-1)[0]}`}
                    </span>
                  </Button>
                </Link>
              </motion.div>

              {/* Languages Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-accent" />
                  <h3 className="text-base font-semibold text-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? 'কথিত ভাষা' : 'Languages Spoken'}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground">
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorCTA({ doctor }: { doctor: typeof DOCTORS[0] }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="heading-md mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla
              ? `${doctor.name_bn.split(' ').slice(-1)[0]}-এর সাথে একটি পরামর্শ নির্ধারণ করুন।`
              : `Schedule a consultation with ${doctor.name.split(' ').slice(-1)[0]}.`}
          </h2>
          <p className="body-lg opacity-80 mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আপনার অ্যাপয়েন্টমেন্ট বুক করুন এবং একটি স্বাস্থ্যকর, আরও আত্মবিশ্বাসী হাসির দিকে প্রথম পদক্ষেপ নিন।' : 'Book your appointment and take the first step toward a healthier, more confident smile.'}
          </p>
          <Link to="/book-appointment">
            <Button variant="accent" size="lg">
              <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book an Appointment'}
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function RelatedDoctors({ doctors }: { doctors: typeof DOCTORS }) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="heading-sm text-foreground mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
          {isBangla ? 'অন্যান্য বিশেষজ্ঞরা' : 'Other Specialists'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctors.map((doctor) => (
            <Link
              key={doctor.id}
              to={`/doctors/${doctor.slug}`}
              className="group flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={doctor.photo}
                  alt={isBangla ? doctor.name_bn : doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? doctor.name_bn : doctor.name}
                </h3>
                <p className="text-sm text-muted-foreground">{doctor.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{doctor.qualifications}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
