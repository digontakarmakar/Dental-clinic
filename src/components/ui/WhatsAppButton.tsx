import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CLINIC_CONFIG } from '@/data/clinic-config';

export function WhatsAppButton() {
  const handleClick = () => {
    window.open(`https://wa.me/${CLINIC_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.button>
  );
}