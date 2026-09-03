import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isBangla: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isBangla: language === 'bn' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { setLanguage, isBangla } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span>{isBangla ? 'বাংলা' : 'EN'}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50"
            >
              <button
                onClick={() => toggleLanguage('en')}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors ${!isBangla ? 'bg-muted font-medium' : ''}`}
              >
                English
              </button>
              <button
                onClick={() => toggleLanguage('bn')}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors ${isBangla ? 'bg-muted font-medium' : ''}`}
                style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
              >
                বাংলা
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
