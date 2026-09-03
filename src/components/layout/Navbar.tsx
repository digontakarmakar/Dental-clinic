import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { CLINIC_CONFIG } from '@/data/clinic-config';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

const NAV_LINKS = [
  { href: '/', label_en: 'Home', label_bn: 'হোম' },
  { href: '/about', label_en: 'About', label_bn: 'আমাদের সম্পর্কে' },
  { href: '/doctors', label_en: 'Doctors', label_bn: 'ডাক্তাররা' },
  { href: '/treatments', label_en: 'Treatments', label_bn: 'চিকিৎসা' },
  { href: '/technology', label_en: 'Technology', label_bn: 'প্রযুক্তি' },
  { href: '/before-after', label_en: 'Before & After', label_bn: 'আগে ও পরে' },
  { href: '/patient-stories', label_en: 'Patient Stories', label_bn: 'রোগীদের গল্প' },
  { href: '/contact', label_en: 'Contact', label_bn: 'যোগাযোগ' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isBangla } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <svg
                  viewBox="0 0 40 40"
                  className="w-10 h-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="18" className="fill-primary" />
                  <path
                    d="M12 16c0-1.5 1.5-3 3-3.5M28 16c0-1.5-1.5-3-3-3.5M14 22h12M16 28c0 2 2 4 4 4s4-2 4-4"
                    className="stroke-accent"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="14" r="2" className="fill-accent" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-display font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                  {CLINIC_CONFIG.name}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? link.label_bn : link.label_en}
                  </span>
                  {location.pathname === link.href && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 -z-10 bg-muted rounded-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <Link to="/book-appointment">
                <Button variant="primary" size="md">
                  <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? 'অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book Appointment'}
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mobile Right Side */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <button
                className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={NAV_LINKS.map(link => ({ href: link.href, label: isBangla ? link.label_bn : link.label_en }))}
      />
    </>
  );
}
