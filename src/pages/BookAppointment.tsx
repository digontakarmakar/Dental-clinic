import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CLINIC_CONFIG } from '@/data/clinic-config';
import { toast } from '@/components/ui/Toaster';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function BookAppointment() {
  const { isBangla } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    treatment: '',
    doctor: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const treatments_en = [
    'Dental Implants',
    'Clear Aligners',
    'Cosmetic Dentistry',
    'Teeth Whitening',
    'Root Canal Treatment',
    'Pediatric Dentistry',
    'Gum Treatment',
    'Smile Makeover',
    'Veneers',
    'General Consultation',
  ];

  const treatments_bn = [
    'ডেন্টাল ইমপ্ল্যান্ট',
    'স্বচ্ছ অ্যালাইনার',
    'কসমেটিক ডেন্টিস্ট্রি',
    'টিথ হোয়াইটেনিং',
    'রুট ক্যানাল ট্রিটমেন্ট',
    'পেডিয়াট্রিক ডেন্টিস্ট্রি',
    'গাম ট্রিটমেন্ট',
    'স্মাইল মেকওভার',
    'ভেনিয়ার',
    'সাধারণ পরামর্শ',
  ];

  const doctors_en = [
    'Dr. Ahmed Rahman (Cosmetic Surgeon)',
    'Dr. Farida Islam (Orthodontist)',
    'Dr. Rashed Hossain (Oral Surgeon)',
    'Dr. Nadia Chowdhury (Pedodontist)',
    'No preference',
  ];

  const doctors_bn = [
    'ড. আহমেদ রহমান (কসমেটিক সার্জন)',
    'ড. ফারিদা ইসলাম (অর্থোডন্টিস্ট)',
    'ড. রাশেদ হোসেন (ওরাল সার্জন)',
    'ড. নাদিয়া চৌধুরী (পেডোডন্টিস্ট)',
    'কোনো পছন্দ নেই',
  ];

  const timeSlots_en = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
  ];

  const timeSlots_bn = [
    'সকাল ১০:০০', 'সকাল ১০:৩০', 'সকাল ১১:০০', 'সকাল ১১:৩০',
    'দুপুর ১২:০০', 'দুপুর ১২:৩০', 'দুপুর ২:০০', 'দুপুর ২:৩০',
    'দুপুর ৩:০০', 'দুপুর ৩:৩০', 'দুপুর ৪:০০', 'দুপুর ৪:৩০',
    'দুপুর ৫:০০', 'দুপুর ৫:৩০', 'সন্ধ্যা ৬:০০', 'সন্ধ্যা ৬:৩০',
    'সন্ধ্যা ৭:০০', 'সন্ধ্যা ৭:৩০', 'রাত ৮:০০', 'রাত ৮:৩০',
  ];

  const treatments = isBangla ? treatments_bn : treatments_en;
  const doctors = isBangla ? doctors_bn : doctors_en;
  const timeSlots = isBangla ? timeSlots_bn : timeSlots_en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast(isBangla ? 'অনুগ্রহ করে সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন।' : 'Please fill in all required fields.', 'error');
      return;
    }
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast(isBangla ? 'অ্যাপয়েন্টমেন্ট অনুরোধ জমা দেওয়া হয়েছে! আমরা শীঘ্রই নিশ্চিত করব।' : 'Appointment request submitted! We\'ll confirm shortly.', 'success');
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Get minimum date (tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (isSuccess) {
    return <SuccessState name={formData.name} phone={formData.phone} date={formData.date} time={formData.time} />;
  }

  return (
    <>
      <PageHero />
      <BookingForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        treatments={treatments}
        doctors={doctors}
        timeSlots={timeSlots}
        minDate={getMinDate()}
      />
      <WhatToExpect />
      <AlternativeBooking />
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
            <span className="text-foreground">{isBangla ? 'অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book Appointment'}</span>
          </nav>
          <span className="eyebrow block mb-4">{isBangla ? 'একটি ভিজিট শিডিউল করুন' : 'Schedule a Visit'}</span>
          <h1 className="heading-xl text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আপনার অ্যাপয়েন্টমেন্ট বুক করুন।' : 'Book your appointment.'}
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'স্বাস্থ্যকর হাসির দিকে প্রথম পদক্ষেপ নিন। নিচের ফর্মটি পূরণ করুন এবং আমরা ২৪ ঘন্টার মধ্যে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করব।' : 'Take the first step towards a healthier smile. Fill out the form below and we\'ll confirm your appointment within 24 hours.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface BookingFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    treatment: string;
    doctor: string;
    notes: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  treatments: string[];
  doctors: string[];
  timeSlots: string[];
  minDate: string;
}

function BookingForm({ formData, handleChange, handleSubmit, isSubmitting, treatments, doctors, timeSlots, minDate }: BookingFormProps) {
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
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="label-field" htmlFor="name">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'পুরো নাম' : 'Full Name'} <span className="text-accent">*</span></span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="input-field pl-10"
                      placeholder={isBangla ? 'আপনার পুরো নাম' : 'Your full name'}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="label-field" htmlFor="phone">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'ফোন নম্বর' : 'Phone Number'} <span className="text-accent">*</span></span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="input-field pl-10"
                      placeholder="+880 1XXX XXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="label-field" htmlFor="email">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'ইমেল' : 'Email'}</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="input-field pl-10"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="label-field" htmlFor="treatment">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'চিকিৎসা' : 'Treatment'}</span>
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    className="input-field"
                    value={formData.treatment}
                    onChange={handleChange}
                  >
                    <option value="">{isBangla ? 'একটি চিকিৎসা নির্বাচন করুন' : 'Select a treatment'}</option>
                    {treatments.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="label-field" htmlFor="doctor">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'পছন্দের ডাক্তার' : 'Preferred Doctor'}</span>
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    className="input-field"
                    value={formData.doctor}
                    onChange={handleChange}
                  >
                    <option value="">{isBangla ? 'একজন ডাক্তার নির্বাচন করুন (ঐচ্ছিক)' : 'Select a doctor (optional)'}</option>
                    {doctors.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label-field" htmlFor="date">
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'পছন্দের তারিখ' : 'Preferred Date'} <span className="text-accent">*</span></span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="input-field pl-10"
                      min={minDate}
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="label-field" htmlFor="time">
                  <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'পছন্দের সময়' : 'Preferred Time'} <span className="text-accent">*</span></span>
                </label>
                <select
                  id="time"
                  name="time"
                  className="input-field"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">{isBangla ? 'একটি সময় স্লট নির্বাচন করুন' : 'Select a time slot'}</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label className="label-field" htmlFor="notes">
                  <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'অতিরিক্ত নোট' : 'Additional Notes'}</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  className="input-field min-h-[120px] resize-none"
                  placeholder={isBangla ? 'কোনো নির্দিষ্ট উদ্বেগ বা অনুরোধ...' : 'Any specific concerns or requests...'}
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" variant="primary" size="lg" icon={Calendar} loading={isSubmitting} fullWidth>
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'অ্যাপয়েন্টমেন্ট অনুরোধ করুন' : 'Request Appointment'}</span>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'আমরা ২৪ ঘন্টার মধ্যে ফোন বা ইমেলের মাধ্যমে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করব।' : "We'll confirm your appointment via phone or email within 24 hours."}
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="bg-secondary/50 rounded-2xl p-8 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'খোলার সময়' : 'Opening Hours'}</h3>
              <div className="space-y-3 text-sm" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{isBangla ? 'শনি–বৃহ' : 'Saturday – Wednesday'}</span>
                  <span className="text-foreground">{isBangla ? 'সকাল ১০টা – রাত ৯টা' : '10:00 AM – 9:00 PM'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{isBangla ? 'বৃহস্পতিবার' : 'Thursday'}</span>
                  <span className="text-foreground">{isBangla ? 'সকাল ১০টা – রাত ৯টা' : '10:00 AM – 9:00 PM'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{isBangla ? 'শুক্রবার' : 'Friday'}</span>
                  <span className="text-accent">{isBangla ? 'বন্ধ' : 'Closed'}</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-2xl p-8">
              <MessageCircle className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'জরুরি যত্ন প্রয়োজন?' : 'Need urgent care?'}
              </h3>
              <p className="text-sm text-muted-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'তাৎক্ষণিক সাহায্য বা একই দিনের অ্যাপয়েন্টমেন্টের জন্য, হোয়াটসঅ্যাপে সরাসরি আমাদের কাছে পৌঁছান।' : 'For immediate assistance or same-day appointments, reach us directly on WhatsApp.'}
              </p>
              <a href={`https://wa.me/${CLINIC_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md" icon={MessageCircle} fullWidth>
                  <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'হোয়াটসঅ্যাপে চ্যাট করুন' : 'Chat on WhatsApp'}</span>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhatToExpect() {
  const { isBangla } = useLanguage();
  const steps = [
    { icon: Phone, title_en: 'We confirm your request', title_bn: 'আমরা আপনার অনুরোধ নিশ্চিত করি', desc_en: 'Within 24 hours via phone or email', desc_bn: '২৪ ঘন্টার মধ্যে ফোন বা ইমেলের মাধ্যমে' },
    { icon: Check, title_en: 'Appointment confirmed', title_bn: 'অ্যাপয়েন্টমেন্ট নিশ্চিত', desc_en: 'You receive date, time, and location details', desc_bn: 'আপনি তারিখ, সময় এবং অবস্থানের বিবরণ পান' },
    { icon: Calendar, title_en: 'Visit the clinic', title_bn: 'ক্লিনিকে আসুন', desc_en: 'Arrive 10 minutes early for check-in', desc_bn: 'চেক-ইনের জন্য ১০ মিনিট আগে পৌঁছান' },
    { icon: ArrowRight, title_en: 'Consultation begins', title_bn: 'পরামর্শ শুরু হয়', desc_en: "Meet your doctor and discuss your needs", desc_bn: 'আপনার ডাক্তারের সাথে দেখা করুন এবং আপনার প্রয়োজন আলোচনা করুন' },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'পরে কী হবে' : 'What Happens Next'}
          title={isBangla ? 'আপনি বুক করার পর।' : 'After you book.'}
          subtitle={isBangla ? 'বুকিং থেকে প্রথম ভিজিট পর্যন্ত একটি সাধারণ, স্বচ্ছ প্রক্রিয়া।' : 'A simple, transparent process from booking to your first visit.'}
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? step.title_bn : step.title_en}</h3>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? step.desc_bn : step.desc_en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlternativeBooking() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow={isBangla ? 'বুক করার অন্যান্য উপায়' : 'Other Ways to Book'}
            title={isBangla ? 'কল করতে চান?' : 'Prefer to call?'}
            subtitle={isBangla ? 'সরাসরি আমাদের কল করে বা হোয়াটসঅ্যাপে বার্তা পাঠিয়ে আপনার অ্যাপয়েন্টমেন্ট বুক করুন।' : 'Book your appointment directly by calling us or messaging on WhatsApp.'}
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href={`tel:${CLINIC_CONFIG.phone}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'আমাদের কল করুন' : 'Call Us'}</h3>
                <p className="text-sm text-accent">{CLINIC_CONFIG.phone}</p>
              </motion.div>
            </a>
            <a href={`https://wa.me/${CLINIC_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-sm text-accent" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'দ্রুত ও সহজ' : 'Quick & Easy'}</p>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessState({ name, phone, date, time }: { name: string; phone: string; date: string; time: string }) {
  const { isBangla } = useLanguage();
  const formattedDate = new Date(date).toLocaleDateString(isBangla ? 'bn-BD' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="section-padding min-h-[60vh] flex items-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8"
          >
            <Check className="w-10 h-10 text-green-600" />
          </motion.div>
          <h1 className="heading-md text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'অ্যাপয়েন্টমেন্ট অনুরোধ করা হয়েছে!' : 'Appointment Requested!'}
          </h1>
          <p className="body-lg text-muted-foreground mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? `${name} কে ধন্যবাদ! আমরা আপনার অ্যাপয়েন্টমেন্ট অনুরোধ পেয়েছি। আমরা ${phone}-এ ফোনে ২৪ ঘন্টার মধ্যে আপনার ভিজিট নিশ্চিত করব।` : `Thank you, ${name}! We've received your appointment request. We'll confirm your visit via phone at ${phone} within 24 hours.`}
          </p>
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'আপনার অনুরোধ' : 'Your Request'}</h3>
            <div className="space-y-3 text-sm" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">{isBangla ? 'তারিখ:' : 'Date:'}</span>
                <span className="text-foreground">{formattedDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">{isBangla ? 'সময়:' : 'Time:'}</span>
                <span className="text-foreground">{time}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'হোমে ফিরে যান' : 'Back to Home'}</span>
              </Button>
            </Link>
            <a href={`https://wa.me/${CLINIC_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="md" icon={MessageCircle}>
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>{isBangla ? 'হোয়াটসঅ্যাপে চ্যাট করুন' : 'Chat on WhatsApp'}</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
