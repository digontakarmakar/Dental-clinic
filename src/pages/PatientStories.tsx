import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote, Share2, PencilLine } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TESTIMONIALS } from '@/data/testimonials';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function PatientStories() {
  return (
    <>
      <PageHero />
      <TestimonialsList />
      <GoogleReviews />
      <ShareStory />
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
            <span className="text-foreground">{isBangla ? 'রোগীদের গল্প' : 'Patient Stories'}</span>
          </nav>
          <span className="eyebrow block mb-4">{isBangla ? 'রোগীদের গল্প' : 'Patient Stories'}</span>
          <h1 className="heading-xl text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমাদের রোগীদের কাছ থেকে প্রকৃত গল্প।' : 'Real stories from our patients.'}
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'প্রতিটি রোগীর যাত্রা অনন্য। আমাদের যত্নে বিশ্বাস করে এমন রোগীদের অভিজ্ঞতা সম্পর্কে পড়ুন।' : 'Every patient\'s journey is unique. Read about the experiences of those who trusted Dental Harmony with their care.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsList() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'প্রশংসাপত্র' : 'Testimonials'}
          title={isBangla ? 'বিশ্বাসের কণ্ঠস্বর।' : 'Voices of trust.'}
          subtitle={isBangla ? 'আমরা বাংলাদেশ জুড়ে রোগীদের বিশ্বাস অর্জন করতে পেরে গর্বিত।' : 'We\'re proud to have earned the trust of patients across Bangladesh.'}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-sm text-foreground leading-relaxed mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? testimonial.text_bn : testimonial.text}
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(testimonial.rating)
                        ? 'fill-accent text-accent'
                        : 'text-muted'
                    }`}
                  />
                ))}
                <span className="ml-2 text-xs text-muted-foreground">{testimonial.rating}/5</span>
              </div>
              <div className="pt-4 border-t border-border/60">
                <p className="text-sm font-semibold text-foreground">{isBangla ? testimonial.name_bn : testimonial.name}</p>
                <p className="text-xs text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? testimonial.treatment_bn : testimonial.treatment} · {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://www.google.com/maps/place/Promident+Dental+Clinic,Banani/@23.7947555,90.4057056,2406m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3755c70c15ea1de1:0x97856381e88fb311!2sBanani,+Dhaka!3b1!8m2!3d23.7936706!4d90.4066082!16s%2Fg%2F11bxfypk48!3m5!1s0x3755c70c13490aef:0x2ab50d0552b00c6f!8m2!3d23.7900237!4d90.4092151!16s%2Fg%2F1pzpq4b8g?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg" icon={PencilLine}>
              <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'রিভিউ যোগ করুন' : 'Add Review'}
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function GoogleReviews() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="heading-md text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'গুগলে আমাদের খুঁজুন' : 'Find Us on Google'}
          </h2>
          <p className="body-md text-muted-foreground mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমরা আপনাকে আমাদের Google Business প্রোফাইলে যাচাইকৃত রোগীদের পর্যালোচনা পড়তে আমন্ত্রণ জানাই। প্রকৃত রোগীদের কাছ থেকে প্রকৃত অভিজ্ঞতা।' : 'We invite you to read reviews from verified patients on our Google Business profile. Real experiences from real patients.'}
          </p>
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-2xl font-display font-semibold text-foreground mb-1">4.9/5</p>
            <p className="text-sm text-muted-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'Google পর্যালোচনার ভিত্তিতে' : 'Based on Google reviews'}
            </p>
            <p className="text-xs text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              [Google পর্যালোচনা ইন্টিগ্রেশন প্লেসহোল্ডার - প্রকৃত Google Business রিভিউ লিংক দিয়ে প্রতিস্থাপন করুন]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ShareStory() {
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
          <Share2 className="w-10 h-10 mx-auto mb-6 text-accent" />
          <h2 className="heading-md mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আপনার ডেন্টাল হার্মনি গল্প শেয়ার করুন।' : 'Share your Dental Harmony story.'}
          </h2>
          <p className="body-lg opacity-80 mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমরা আমাদের রোগীদের কাছ থেকে শুনতে পছন্দ করি। আমাদের সাথে ইতিবাচক অভিজ্ঞতা হয়ে থাকলে, আমরা আপনার গল্প শেয়ার করতে সম্মানিত হব।' : 'We love hearing from our patients. If you\'ve had a positive experience with us, we\'d be honored to share your story.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'আপনার গল্প শেয়ার করুন' : 'Share Your Story'}
                </span>
              </Button>
            </Link>
            <Link to="/book-appointment">
              <Button variant="ghost" size="lg" className="!text-primary-foreground hover:!bg-primary-foreground/10">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'আপনার যাত্রা শুরু করুন' : 'Start Your Journey'}
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
