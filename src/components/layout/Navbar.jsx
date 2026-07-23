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
  const scrolled = useScrolled(48);
  const location = useLocation();
  const isHome = location.pathname === '/';
  // Only the home route opens on a dark hero, so only there does the header
  // start transparent — everywhere else it's solid from the first paint.
  const solid = scrolled || !isHome;
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
          'sticky top-0 z-50 border-b transition-colors duration-300',
          // Explicit bg-sea-950 rather than bg-transparent — the hero below
          // is a flat colour, not imagery, so an explicit match looks
          // identical but doesn't depend on Layout's background bleeding
          // through (which needs to stay light for every other route).
          solid ? 'border-hairline bg-paper/95 backdrop-blur-md' : 'border-transparent bg-sea-950'
        )}
      >
        <nav className="container-xl flex h-18 items-center justify-between gap-5 py-4" aria-label="Primary">
          <Link to="/" className="focus-ring flex min-w-[150px] items-center rounded" aria-label="Digiinsaf home">
            <BrandName onDark={!solid} />
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
                      'focus-ring flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4',
                      solid ? 'text-charcoal-muted hover:text-charcoal' : 'text-white/80 hover:text-white',
                      location.pathname.startsWith('/services') && (solid ? 'text-charcoal' : 'text-white')
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
                        className="absolute left-1/2 top-full mt-2 grid w-[min(720px,94vw)] -translate-x-1/2 grid-cols-1 gap-4 rounded-xl2 border border-white/10 bg-sea-950/95 p-5 shadow-elevation-lg backdrop-blur-2xl sm:grid-cols-2"
                      >
                        <div className="col-span-2 border-b border-white/10 pb-3 flex items-center justify-between text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                          <span>Full-Service Digital Product Development</span>
                          <span className="text-[10px] text-graphite-400 font-normal">Tallinn • Estonia</span>
                        </div>
                        {featuredServices.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="focus-ring group flex items-start gap-3.5 rounded-xl p-3 transition-all hover:bg-white/10 hover:border hover:border-cyan-500/30"
                          >
                            <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                              <Icon name={service.icon} className="h-4 w-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                                {service.name}
                              </span>
                              <span className="mt-0.5 block text-xs text-graphite-400 leading-snug">
                                {service.subservices.slice(0, 3).join(' • ')}
                              </span>
                            </span>
                          </Link>
                        ))}
                        <div className="col-span-2 mt-1 pt-3 border-t border-white/10 flex items-center justify-between">
                          <Link
                            to="/services"
                            className="focus-ring text-xs font-bold text-cyan-300 hover:text-white transition-colors"
                          >
                            Explore All Services & Tech Stack →
                          </Link>
                          <Link
                            to="/contact"
                            className="text-xs text-graphite-400 hover:text-white transition-colors"
                          >
                            Need a custom solution? Talk to CTO
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'focus-ring relative rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4',
                      solid ? 'text-charcoal-muted hover:text-charcoal' : 'text-white/80 hover:text-white',
                      isActive && (solid ? 'text-charcoal' : 'text-white')
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className={cn('absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full', solid ? 'bg-sea-700' : 'bg-white')}
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
              className={cn(
                'focus-ring flex h-10 w-10 items-center justify-center rounded-full transition-colors',
                solid ? 'text-charcoal' : 'text-white'
              )}
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
