import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { CLINIC_CONFIG } from '@/data/clinic-config';

export function FloatingCallButton() {
  const handleClick = () => {
    window.location.href = `tel:${CLINIC_CONFIG.phone.replace(/[^0-9+]/g, '')}`;
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group md:hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Call us"
    >
      <Phone className="w-6 h-6 text-primary-foreground" />
      <span className="absolute left-full ml-3 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Call us
      </span>
    </motion.button>
  );
}