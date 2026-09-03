import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrow_bn?: string;
  title: string;
  title_bn?: string;
  subtitle?: string;
  subtitle_bn?: string;
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrow_bn,
  title,
  title_bn,
  subtitle,
  subtitle_bn,
  align = 'center',
  children,
  className = '',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-3xl ${alignClasses[align]} ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow block mb-4">{eyebrow}</span>
      )}
      {eyebrow_bn && (
        <span className="eyebrow block mb-4 font-bengali" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>{eyebrow_bn}</span>
      )}
      <h2 className="heading-lg text-foreground mb-4">{title}</h2>
      {title_bn && (
        <h2 className="heading-lg text-foreground mb-4 font-bengali" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>{title_bn}</h2>
      )}
      {subtitle && (
        <p className="body-lg text-muted-foreground">{subtitle}</p>
      )}
      {subtitle_bn && (
        <p className="body-lg text-muted-foreground font-bengali" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>{subtitle_bn}</p>
      )}
      {children}
    </motion.div>
  );
}