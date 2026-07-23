import { useEffect, useState } from 'react';
import Logo from './Logo';
import siteConfig from '@/config/siteConfig';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { cn } from '@/utils/cn';

// Mounted once at the app root (outside the router's route tree — see
// App.jsx), so it only ever appears on a genuine first page load and never
// remounts on internal navigation. Plain CSS transitions rather than
// framer-motion — this is a fire-and-forget overlay, not app state, so it
// doesn't need the animation library. Total time on screen stays under
// ~1.1s so it reads as a brand beat, not a loading gate.
export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [entered, setEntered] = useState(false);
  const [exiting, setExiting] = useState(false);
  useLockBodyScroll(visible);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const holdMs = reduced ? 150 : 550;
    const exitMs = reduced ? 100 : 350;

    const raf = requestAnimationFrame(() => setEntered(true));
    const exitTimer = setTimeout(() => setExiting(true), holdMs);
    const removeTimer = setTimeout(() => setVisible(false), holdMs + exitMs);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        'fixed inset-0 z-[200] flex flex-col items-center justify-center bg-sea-950 transition-opacity duration-300 ease-out',
        exiting ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div
        className={cn(
          'flex flex-col items-center transition-all duration-500 ease-out',
          entered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
      >
        <Logo size="lg" />
        <p className="notranslate mt-4 font-heading text-xl font-bold text-white" translate="no">
          {siteConfig.brand.name}
        </p>
        <p className="mt-2 max-w-xs text-center text-sm text-white/50">{siteConfig.brand.tagline}</p>
      </div>
    </div>
  );
}
