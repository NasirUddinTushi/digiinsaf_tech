import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandName from './BrandName';
import Logo from './Logo';
import siteConfig from '@/config/siteConfig';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

// Brand intro shown every time the site is freshly opened/reloaded (this
// component is mounted once at the top of the app, outside the router's
// route-switching tree, so it never re-appears from in-app link clicks —
// only from an actual page load).
// Respects prefers-reduced-motion by cutting the hold time down sharply
// rather than skipping the visual entirely.
export default function IntroSplash() {
  const [visible, setVisible] = useState(true);
  useLockBodyScroll(visible);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const holdDuration = prefersReducedMotion ? 300 : 1500;

    const timer = setTimeout(() => setVisible(false), holdDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-950"
        >
          <div className="absolute inset-0 bg-grid-glow" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative"
          >
            <Logo size="lg" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
            className="notranslate relative mt-4 font-heading text-2xl font-bold text-white sm:text-3xl"
            translate="no"
          >
            {siteConfig.brand.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36, ease: 'easeOut' }}
            className="relative mt-2 max-w-xs text-center text-sm text-mist-200/70"
          >
            {siteConfig.brand.tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
