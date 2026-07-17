import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import BrandName from '@/components/common/BrandName';
import Button from '@/components/common/Button';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { cn } from '@/utils/cn';

export default function MobileMenu({ isOpen, onClose }) {
  const panelRef = useRef(null);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;
    panelRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] bg-ink-950/95 backdrop-blur-xl lg:hidden"
        >
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex h-full w-full flex-col overflow-y-auto px-6 pb-10 pt-6"
          >
            <div className="mb-10 flex items-center justify-between">
              <Link to="/" onClick={onClose} className="focus-ring flex items-center rounded">
                <BrandName />
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile primary">
              {siteConfig.nav.primary.map((item) =>
                item.to.includes('#') ? (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className="focus-ring rounded-xl px-4 py-3.5 text-lg font-medium text-mist-100/90 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        'focus-ring rounded-xl px-4 py-3.5 text-lg font-medium text-mist-100/90 transition-colors hover:bg-white/5 hover:text-white',
                        isActive && 'bg-white/5 text-white'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <LanguageSwitcher size="full" />
              <Button to="/contact" onClick={onClose} variant="primary" size="lg" className="w-full">
                {siteConfig.cta.primary}
              </Button>
              <p className="text-center text-xs text-mist-200/60">{siteConfig.company.locationLabel}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
