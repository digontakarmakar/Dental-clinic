import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BEFORE_AFTER_CASES } from '@/data/before-after';
import { useLanguage } from '@/components/ui/LanguageSwitcher';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <>
      <PageHero />
      <CasesGallery cases={BEFORE_AFTER_CASES} sliderRef={sliderRef} sliderPosition={sliderPosition} handleMouseDown={handleMouseDown} handleMouseMove={handleMouseMove} handleTouchMove={handleTouchMove} handleMove={handleMove} />
      <BeforeAfterCTA />
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
            <span className="text-foreground">{isBangla ? 'আগে ও পরে' : 'Before & After'}</span>
          </nav>
          <span className="eyebrow block mb-4">{isBangla ? 'প্রকৃত ফলাফল' : 'Real Results'}</span>
          <h1 className="heading-xl text-foreground mb-6" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'প্রকৃত রূপান্তর। প্রকৃত হাসি।' : 'Real transformations. Real smiles.'}
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আমাদের চিকিৎসা কী পার্থক্য করে তা দেখুন। প্রতিটি রূপান্তর আমাদের ক্লিনিক্যাল এক্সিলেন্স এবং রোগীর সন্তুষ্টির প্রতি প্রতিশ্রুতি প্রতিফলিত করে।' : 'See the difference our treatments make. Each transformation represents our commitment to clinical excellence and patient satisfaction.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface CasesGalleryProps {
  cases: typeof BEFORE_AFTER_CASES;
  sliderRef: React.RefObject<HTMLDivElement | null>;
  sliderPosition: number;
  handleMouseDown: () => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleMove: (clientX: number) => void;
}

function CasesGallery({ cases, sliderRef, sliderPosition, handleMouseDown, handleMouseMove, handleTouchMove }: CasesGalleryProps) {
  const { isBangla } = useLanguage();
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow={isBangla ? 'স্মাইল গ্যালারি' : 'Smile Gallery'}
          title={isBangla ? 'কী সম্ভব তা দেখুন।' : "See what's possible."}
          subtitle={isBangla ? 'প্রতিটি হাসি অনন্য। এই রূপান্তরগুলি ব্যক্তিগতকৃত, বিশেষজ্ঞ যত্নের প্রতি আমাদের সংকল্প প্রতিফলিত করে।' : 'Every smile is unique. These transformations reflect our dedication to personalized, expert care.'}
          className="mb-12"
        />

        {/* Case Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(idx)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeCase === idx
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
              style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}
            >
              {isBangla ? c.title_bn : c.title}
            </button>
          ))}
        </div>

        {/* Before/After Slider */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Image Comparison Slider */}
            <div
              ref={sliderRef}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchStart={handleMouseDown}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Full) */}
              <img
                src={cases[activeCase].after_image}
                alt={`${isBangla ? cases[activeCase].title_bn : cases[activeCase].title} - After`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={cases[activeCase].before_image}
                  alt={`${isBangla ? cases[activeCase].title_bn : cases[activeCase].title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: sliderRef.current ? `${sliderRef.current.offsetWidth}px` : '100%' }}
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <span className="w-0.5 h-4 bg-gray-400 rounded-full" />
                    <span className="w-0.5 h-4 bg-gray-400 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-sm" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'আগে' : 'Before'}
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-sm" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                {isBangla ? 'পরে' : 'After'}
              </div>
            </div>

            {/* Case Info */}
            <div className="mt-6 bg-card border border-border rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? cases[activeCase].title_bn : cases[activeCase].title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                    {isBangla ? cases[activeCase].description_bn : cases[activeCase].description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {isBangla ? cases[activeCase].treatment_bn : cases[activeCase].treatment}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground italic" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  * {isBangla ? cases[activeCase].disclaimer_bn : cases[activeCase].disclaimer}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(idx)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                activeCase === idx ? 'border-accent' : 'border-transparent hover:border-accent/30'
              }`}
            >
              <img
                src={c.after_image}
                alt={isBangla ? c.title_bn : c.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterCTA() {
  const { isBangla } = useLanguage();
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-3xl p-12 lg:p-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-md text-foreground mb-4" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'আপনার হাসি রূপান্তরিত করতে প্রস্তুত?' : 'Ready to transform your smile?'}
          </h2>
          <p className="body-lg text-muted-foreground mb-8" style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
            {isBangla ? 'প্রতিটি হাসি যাত্রা একটি পরামর্শ দিয়ে শুরু হয়। আমাদের বিশেষজ্ঞদের আপনার জন্য একটি ব্যক্তিগতকৃত পরিকল্পনা তৈরি করতে দিন।' : 'Every smile journey starts with a consultation. Let our specialists create a personalized plan for you.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button variant="primary" size="lg" icon={Calendar}>
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'আপনার হাসি নিয়ে আলোচনা করুন' : 'Discuss Your Smile'}
                </span>
              </Button>
            </Link>
            <Link to="/treatments">
              <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
                <span style={{ fontFamily: isBangla ? "'Noto Sans Bengali', sans-serif" : 'inherit' }}>
                  {isBangla ? 'চিকিৎসা অন্বেষণ করুন' : 'Explore Treatments'}
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
