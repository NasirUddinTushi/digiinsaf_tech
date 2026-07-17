import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu } from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import { getFeaturedServices } from '@/data/services';
import Button from '@/components/common/Button';
import BrandName from '@/components/common/BrandName';
import Icon from '@/components/common/Icon';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/utils/cn';
import MobileMenu from './MobileMenu';

const featuredServices = getFeaturedServices();

export default function Navbar() {
  const scrolled = useScrolled(32);
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={cn(
          'theme-navbar sticky top-0 z-50 border-b bg-ink-950/95 backdrop-blur-xl transition-shadow duration-300',
          scrolled ? 'border-white/10 shadow-card-dark' : 'border-white/5'
        )}
      >
        <nav className="container-xl flex h-18 items-center justify-between gap-5 py-4" aria-label="Primary">
          <Link to="/" className="focus-ring flex min-w-[150px] items-center rounded" aria-label="Digiinsaf home">
            <BrandName />
          </Link>

          <div className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
            {siteConfig.nav.primary.map((item) =>
              item.hasDropdown ? (
                <div key={item.to} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((open) => !open)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className={cn(
                      'nav-link focus-ring flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-mist-100/90 transition-colors hover:text-white xl:px-4',
                      location.pathname.startsWith('/services') && 'text-white'
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn('h-4 w-4 transition-transform', servicesOpen && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full mt-2 grid w-[min(560px,92vw)] -translate-x-1/2 grid-cols-1 gap-1 rounded-xl2 border border-white/10 bg-ink-900 p-3 shadow-card-dark sm:grid-cols-2"
                      >
                        {featuredServices.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="focus-ring group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                          >
                            <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                              <Icon name={service.icon} className="h-4 w-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-white">{service.name}</span>
                              <span className="mt-0.5 block text-xs text-mist-200/60">
                                {service.subservices.slice(0, 2).join(' · ')}
                              </span>
                            </span>
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="focus-ring col-span-2 mt-1 rounded-xl border border-white/10 px-3 py-2.5 text-center text-sm font-medium text-cyan-400 hover:bg-white/5"
                        >
                          View all services
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.to.includes('#') ? (
                // In-page anchor link (e.g. "Solutions" scrolls to a homepage
                // section) — a plain Link, since it isn't a distinct route
                // and shouldn't show the "current page" active indicator.
                <Link
                  key={item.to}
                  to={item.to}
                  className="nav-link focus-ring rounded-full px-3 py-2 text-sm font-medium text-mist-100/90 transition-colors hover:text-white xl:px-4"
                >
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'nav-link focus-ring relative rounded-full px-3 py-2 text-sm font-medium text-mist-100/90 transition-colors hover:text-white xl:px-4',
                      isActive && 'text-white'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-cyan-400"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )
            )}
          </div>

          <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
            <LanguageSwitcher showWidgetHost />
            <Button to="/contact" variant="primary" size="md">
              {siteConfig.cta.primary}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher size="mobile" />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="nav-icon-btn focus-ring flex h-10 w-10 items-center justify-center rounded-full text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
