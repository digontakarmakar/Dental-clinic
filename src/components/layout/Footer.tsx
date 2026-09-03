import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CLINIC_CONFIG } from '@/data/clinic-config';
import { LanguageSwitcher, useLanguage } from '@/components/ui/LanguageSwitcher';

export function Footer() {
  const { isBangla } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label_en: 'Home', label_bn: 'হোম' },
    { href: '/about', label_en: 'About', label_bn: 'আমাদের সম্পর্কে' },
    { href: '/doctors', label_en: 'Doctors', label_bn: 'ডাক্তাররা' },
    { href: '/treatments', label_en: 'Treatments', label_bn: 'চিকিৎসা' },
    { href: '/technology', label_en: 'Technology', label_bn: 'প্রযুক্তি' },
    { href: '/before-after', label_en: 'Before & After', label_bn: 'আগে ও পরে' },
    { href: '/patient-stories', label_en: 'Patient Stories', label_bn: 'রোগীদের গল্প' },
    { href: '/contact', label_en: 'Contact', label_bn: 'যোগাযোগ' },
    { href: '/faq', label_en: 'FAQ', label_bn: 'সাধারণ প্রশ্ন' },
  ];

  const treatmentLinks = [
    { href: '/treatments/dental-implants', label_en: 'Dental Implants', label_bn: 'ডেন্টাল ইমপ্ল্যান্ট' },
    { href: '/treatments/clear-aligners', label_en: 'Clear Aligners', label_bn: 'স্বচ্ছ অ্যালাইনার' },
    { href: '/treatments/cosmetic-dentistry', label_en: 'Cosmetic Dentistry', label_bn: 'কসমেটিক ডেন্টিস্ট্রি' },
    { href: '/treatments/teeth-whitening', label_en: 'Teeth Whitening', label_bn: 'টিথ হোয়াইটেনিং' },
    { href: '/treatments/smile-makeover', label_en: 'Smile Makeover', label_bn: 'স্মাইল মেকওভার' },
    { href: '/treatments/root-canal-treatment', label_en: 'Root Canal', label_bn: 'রুট ক্যানাল' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="18" className="fill-accent" />
                <path
                  d="M12 16c0-1.5 1.5-3 3-3.5M28 16c0-1.5-1.5-3-3-3.5M14 22h12M16 28c0 2 2 4 4 4s4-2 4-4"
                  className="stroke-background"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="14" r="2" className="fill-background" />
              </svg>
              <span className="text-xl font-display font-semibold">{CLINIC_CONFIG.name}</span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'বাংলাদেশে প্রিমিয়াম দন্ত চিকিৎসার জন্য আপনার বিশ্বস্ত গন্তব্য। আন্তর্জাতিক মানের যত্ন, উষ্ণ, রোগী-প্রথম পদ্ধতি।' : CLINIC_CONFIG.description}
            </p>
            <LanguageSwitcher className="[&_button]:text-background [&_button]:hover:bg-background/10" />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background/90 mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'নেভিগেশন' : 'Navigation'}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                    style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}
                  >
                    {isBangla ? link.label_bn : link.label_en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background/90 mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'জনপ্রিয় চিকিৎসা' : 'Popular Treatments'}
            </h3>
            <ul className="space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                    style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}
                  >
                    {isBangla ? link.label_bn : link.label_en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background/90 mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
              {isBangla ? 'যোগাযোগ' : 'Contact'}
            </h3>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'বনানী, ঢাকা ১২০৫, বাংলাদেশ' : CLINIC_CONFIG.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href={`tel:${CLINIC_CONFIG.phone}`} className="hover:text-accent transition-colors">
                  {CLINIC_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href={`mailto:${CLINIC_CONFIG.email}`} className="hover:text-accent transition-colors">
                  {CLINIC_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <div style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  <p>{isBangla ? 'শনি–বৃহ: সকাল ১০টা – রাত ৯টা' : 'Sat-Thu: 10:00 AM - 9:00 PM'}</p>
                  <p className="text-background/50">{isBangla ? 'শুক্রবার: বন্ধ' : 'Friday: Closed'}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a
                href={CLINIC_CONFIG.social_media.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a
                href={CLINIC_CONFIG.social_media.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a
                href={CLINIC_CONFIG.social_media.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-background/60">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'ব্যবহারের শর্তাবলী' : 'Terms & Conditions'}
              </Link>
              <p style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>© {currentYear} {CLINIC_CONFIG.name}. {isBangla ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
