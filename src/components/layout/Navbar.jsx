import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, ExternalLink } from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import { getFeaturedServices } from '@/data/services';
import { products } from '@/data/products';
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
  const solid = scrolled || !isHome;
  const [openDropdown, setOpenDropdown] = useState(null); // 'services' | 'products' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-all duration-300',
          solid ? 'border-hairline bg-paper/95 shadow-elevation-sm backdrop-blur-md' : 'border-transparent bg-sea-950'
        )}
      >
        <nav className="container-xl flex min-h-18 items-center justify-between gap-5 py-3" aria-label="Primary">
          <Link to="/" className="focus-ring flex min-w-[150px] items-center rounded" aria-label="Digiinsaf home">
            <BrandName onDark={!solid} />
          </Link>

          <div
            className={cn(
              'hidden items-center gap-0.5 rounded-full p-1 xl:gap-1 lg:flex',
              solid ? 'border border-hairline bg-white/60' : 'border border-white/10 bg-white/[0.04]'
            )}
            ref={dropdownRef}
          >
            {siteConfig.nav.primary.map((item) => {
              const dropdownType = item.to === '/services' ? 'services' : item.to === '/products' ? 'products' : null;
              const isDropdownOpen = openDropdown === dropdownType;

              return item.hasDropdown ? (
                <div key={item.to} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(isDropdownOpen ? null : dropdownType)}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    className={cn(
                      'focus-ring flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4',
                      solid ? 'text-charcoal-muted hover:bg-white hover:text-charcoal' : 'text-white/80 hover:bg-white/10 hover:text-white',
                      location.pathname.startsWith(item.to) && (solid ? 'bg-white text-charcoal shadow-elevation-sm' : 'bg-white/10 text-white')
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn('h-4 w-4 transition-transform', isDropdownOpen && 'rotate-180')} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && dropdownType === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full mt-2 grid w-[min(720px,94vw)] -translate-x-1/2 grid-cols-1 gap-4 rounded-xl2 border border-white/10 bg-sea-950 p-5 shadow-elevation-lg sm:grid-cols-2"
                      >
                        <div className="col-span-2 border-b border-white/10 pb-3 flex items-center justify-between text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                          <span>Full-Service Digital Product Development</span>
                          <span className="text-[10px] text-graphite-400 font-normal">Global • Serving Worldwide</span>
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

                    {isDropdownOpen && dropdownType === 'products' && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full mt-2 grid w-[min(640px,94vw)] -translate-x-1/2 grid-cols-1 gap-4 rounded-xl2 border border-white/10 bg-sea-950 p-5 shadow-elevation-lg"
                      >
                        <div className="border-b border-white/10 pb-3 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                          In-House SaaS Products
                        </div>

                        <div className="space-y-3">
                          {products.map((product) => (
                            <Link
                              key={product.slug}
                              to="/products"
                              className="focus-ring group flex items-start gap-3.5 rounded-xl border border-white/5 bg-white/[0.03] p-3.5 transition-all hover:border-cyan-500/40 hover:bg-white/[0.08]"
                            >
                              <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 transition-transform duration-300 group-hover:scale-105">
                                <Icon name={product.icon} className="h-5 w-5" />
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="block text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    {product.name}
                                  </span>
                                  <span className="rounded-full bg-cyan-900/60 px-2 py-0.5 text-[10px] font-medium text-cyan-300 border border-cyan-500/30">
                                    {product.status}
                                  </span>
                                </div>
                                <p className="mt-1 text-xs text-graphite-400 line-clamp-2">
                                  {product.shortDescription}
                                </p>
                                <div className="mt-2 flex items-center gap-2 text-[11px] text-cyan-300/80 font-medium">
                                  <span>{product.category}</span>
                                  <span>•</span>
                                  <span className="flex items-center gap-1 text-cyan-400 group-hover:underline">
                                    View Deployment Details <ExternalLink className="h-3 w-3" />
                                  </span>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-1 pt-3 border-t border-white/10 flex items-center justify-between">
                          <Link
                            to="/products"
                            className="focus-ring text-xs font-bold text-cyan-300 hover:text-white transition-colors"
                          >
                            Explore All SaaS Products →
                          </Link>
                          <Link
                            to="/contact"
                            className="text-xs text-graphite-400 hover:text-white transition-colors"
                          >
                            Deploy SaaS for your Business
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
                      solid ? 'text-charcoal-muted hover:bg-white hover:text-charcoal' : 'text-white/80 hover:bg-white/10 hover:text-white',
                      isActive && (solid ? 'bg-white text-charcoal shadow-elevation-sm' : 'bg-white/10 text-white')
                    )
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
            <LanguageSwitcher showWidgetHost solid={solid} />
            <Button to="/contact" variant="primary" size="md">
              {siteConfig.cta.primary}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher size="mobile" solid={solid} />
            <motion.button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              whileTap={{ scale: 0.9 }}
              className={cn(
                'focus-ring flex h-10 w-10 items-center justify-center rounded-full transition-all',
                solid
                  ? 'text-charcoal bg-sea-50 border border-hairline hover:bg-sea-100'
                  : 'text-white bg-white/10 border border-white/20 hover:bg-white/20'
              )}
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
