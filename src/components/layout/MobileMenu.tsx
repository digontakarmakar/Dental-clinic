import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { CLINIC_CONFIG } from '@/data/clinic-config';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const { isBangla } = useLanguage();
  const handleCall = () => {
    window.location.href = `tel:${CLINIC_CONFIG.phone.replace(/[^0-9+]/g, '')}`;
    onClose();
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CLINIC_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background z-[70] lg:hidden shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-display font-semibold text-foreground">
                    {CLINIC_CONFIG.name}
                  </span>
                  <LanguageSwitcher />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto py-4">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="block px-6 py-4 text-base font-medium text-foreground hover:bg-muted transition-colors"
                      onClick={onClose}
                      style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Buttons */}
              <div className="p-6 border-t border-border space-y-3">
                <Link to="/book-appointment" onClick={onClose}>
                  <Button variant="primary" size="lg" fullWidth>
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                      {isBangla ? 'অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book Appointment'}
                    </span>
                  </Button>
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="secondary"
                    size="md"
                    icon={Phone}
                    onClick={handleCall}
                    fullWidth
                  >
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                      {isBangla ? 'কল' : 'Call'}
                    </span>
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    icon={MessageCircle}
                    onClick={handleWhatsApp}
                    fullWidth
                    className="!bg-[#25D366] !text-white hover:!bg-[#25D366]/90"
                  >
                    <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                      WhatsApp
                    </span>
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground pt-2">
                  {CLINIC_CONFIG.phone}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
