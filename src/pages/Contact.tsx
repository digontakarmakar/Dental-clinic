import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Send, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CLINIC_CONFIG } from '@/data/clinic-config';
import { toast } from '@/components/ui/Toaster';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function Contact() {
  const { isBangla } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast(isBangla ? 'অনুগ্রহ করে সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন।' : 'Please fill in all required fields.', 'error');
      return;
    }
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast(isBangla ? 'বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।' : 'Message sent successfully! We\'ll get back to you soon.', 'success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <>
      <PageHero />
      <ContactCards />
      <ContactForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
      <MapSection />
      <EmergencyContact />
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
            <span className="text-foreground">{isBangla ? 'যোগাযোগ' : 'Contact'}</span>
          </nav>
          <span className="eyebrow block mb-4">{isBangla ? 'যোগাযোগ করুন' : 'Get in Touch'}</span>
          <h1 className="heading-xl text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমরা আপনার কথা শুনতে চাই।' : 'We\'d love to hear from you.'}
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমাদের সেবা সম্পর্কে আপনার কোন প্রশ্ন আছে, অ্যাপয়েন্টমেন্ট বুক করতে হবে, বা শুধু হ্যালো বলতে চান — আমরা আপনার জন্য এখানে আছি।' : 'Whether you have a question about our services, need to book an appointment, or simply want to say hello — we\'re here for you.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCards() {
  const { isBangla } = useLanguage();
  const cards = [
    {
      icon: MapPin,
      title_en: 'Visit Us',
      title_bn: 'আমাদের কাছে আসুন',
      lines_en: ['Banani, Dhaka 1205', 'Bangladesh'],
      lines_bn: ['বনানী, ঢাকা ১২০৫', 'বাংলাদেশ'],
    },
    {
      icon: Phone,
      title_en: 'Call Us',
      title_bn: 'আমাদের কল করুন',
      lines_en: [CLINIC_CONFIG.phone],
      lines_bn: [CLINIC_CONFIG.phone],
      href: `tel:${CLINIC_CONFIG.phone}`,
    },
    {
      icon: Mail,
      title_en: 'Email Us',
      title_bn: 'আমাদের ইমেল করুন',
      lines_en: [CLINIC_CONFIG.email],
      lines_bn: [CLINIC_CONFIG.email],
      href: `mailto:${CLINIC_CONFIG.email}`,
    },
    {
      icon: MessageCircle,
      title_en: 'WhatsApp',
      title_bn: 'হোয়াটসঅ্যাপ',
      lines_en: [CLINIC_CONFIG.whatsapp],
      lines_bn: [CLINIC_CONFIG.whatsapp],
      href: `https://wa.me/${CLINIC_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`,
    },
    {
      icon: Clock,
      title_en: 'Opening Hours',
      title_bn: 'খোলার সময়',
      lines_en: ['Sat–Thu: 10AM – 9PM', 'Friday: Closed'],
      lines_bn: ['শনি–বৃহ: সকাল ১০টা – রাত ৯টা', 'শুক্রবার: বন্ধ'],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <card.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? card.title_bn : card.title_en}
              </h3>
              {card.href ? (
                <a href={card.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {(isBangla ? card.lines_bn : card.lines_en).map((line, i) => <p key={i}>{line}</p>)}
                </a>
              ) : (
                <div className="text-sm text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {(isBangla ? card.lines_bn : card.lines_en).map((line, i) => <p key={i}>{line}</p>)}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ContactFormProps {
  formData: { name: string; email: string; phone: string; subject: string; message: string };
  setFormData: (data: ContactFormProps['formData']) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

function ContactForm({ formData, setFormData, handleSubmit, isSubmitting }: ContactFormProps) {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={isBangla ? 'বার্তা পাঠান' : 'Send a Message'}
              title={isBangla ? 'আমাদের একটি বার্তা পাঠান।' : 'Send us a message.'}
              subtitle={isBangla ? 'ফর্মটি পূরণ করুন এবং আমরা ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করব।' : 'Fill out the form and we\'ll get back to you within 24 hours.'}
              align="left"
              className="mb-8"
            />
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <a href={`tel:${CLINIC_CONFIG.phone}`} className="text-muted-foreground hover:text-foreground">
                  {CLINIC_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-accent" />
                </div>
                <a href={`https://wa.me/${CLINIC_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'হোয়াটসঅ্যাপ করুন' : 'WhatsApp Us'}</span>
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label-field" htmlFor="name">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'পুরো নাম *' : 'Full Name *'}</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input-field"
                    placeholder={isBangla ? 'আপনার পুরো নাম' : 'Your full name'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="label-field" htmlFor="phone">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'ফোন নম্বর *' : 'Phone Number *'}</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="input-field"
                    placeholder="+880 1XXX XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label-field" htmlFor="email">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'ইমেল' : 'Email'}</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input-field"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="label-field" htmlFor="subject">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'বিষয়' : 'Subject'}</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="input-field"
                    placeholder={isBangla ? 'আমরা কিভাবে সাহায্য করতে পারি?' : 'How can we help?'}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="label-field" htmlFor="message">
                  <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'বার্তা *' : 'Message *'}</span>
                </label>
                <textarea
                  id="message"
                  className="input-field min-h-[150px] resize-none"
                  placeholder={isBangla ? 'আমরা কিভাবে সাহায্য করতে পারি তা বলুন...' : 'Tell us how we can help...'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" variant="primary" size="lg" icon={Send} loading={isSubmitting} fullWidth>
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'বার্তা পাঠান' : 'Send Message'}</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'আমাদের খুঁজুন' : 'Find Us'}
          title={isBangla ? 'আমাদের ক্লিনিক দেখুন।' : 'Visit our clinic.'}
          subtitle={isBangla ? 'বনানী, ঢাকার কেন্দ্রস্থলে অবস্থিত। খুঁজে পাওয়া সহজ, পৌঁছানো সহজ।' : 'Located in the heart of Banani, Dhaka. Easy to find, easy to reach.'}
          className="mb-12"
        />
        <div className="rounded-3xl overflow-hidden border border-border shadow-xl aspect-[21/9]">
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
    </section>
  );
}

function EmergencyContact() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'জরুরী ডেন্টাল কেয়ার প্রয়োজন?' : 'Need urgent dental care?'}
              </h3>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'ক্লিনিক খোলা থাকার সময় ডেন্টাল ইমার্জেন্সি হলে, অবিলম্বে আমাদের কল করুন।' : 'If you\'re experiencing a dental emergency during clinic hours, call us immediately.'}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${CLINIC_CONFIG.phone}`}>
              <Button variant="primary" size="md" icon={Phone}>
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'এখনই কল করুন' : 'Call Now'}</span>
              </Button>
            </a>
            <Link to="/book-appointment">
              <Button variant="secondary" size="md" icon={Calendar}>
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'জরুরী ভিজিট বুক করুন' : 'Book Urgent Visit'}</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
