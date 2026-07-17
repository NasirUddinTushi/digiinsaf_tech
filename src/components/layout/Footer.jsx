import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, GitBranch } from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import NewsletterForm from '@/components/forms/NewsletterForm';
import BrandName from '@/components/common/BrandName';
import { LinkedinGlyph, InstagramGlyph, XGlyph } from '@/components/common/SocialIcons';

const socialLinks = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: LinkedinGlyph },
  { label: 'X (Twitter)', href: siteConfig.social.x, icon: XGlyph },
  { label: 'Instagram', href: siteConfig.social.instagram, icon: InstagramGlyph },
  { label: 'GitHub', href: siteConfig.social.github, icon: GitBranch },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="theme-footer border-t border-white/10 bg-ink-950 pt-16 text-muted-ondark-strong">
      <div className="container-xl grid gap-12 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="focus-ring mb-4 flex items-center rounded">
            <BrandName />
          </Link>
          <p className="mb-6 max-w-sm text-sm leading-relaxed">{siteConfig.brand.supportingMessage}</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: SocialIcon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-200/70 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <SocialIcon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.nav.footer.services.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="focus-ring rounded transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.nav.footer.company.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="focus-ring rounded transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.nav.footer.legal.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="focus-ring rounded transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Stay in the loop</h3>
          <p className="mb-4 text-sm">Occasional notes on shipping digital products well. No noise.</p>
          <NewsletterForm />

          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
              <div className="space-y-1.5">
                <a href={`mailto:${siteConfig.contact.email}`} className="focus-ring block rounded hover:text-white">
                  <span className="text-muted-ondark-soft">Info: </span>
                  {siteConfig.contact.email}
                </a>
                <a href={`mailto:${siteConfig.contact.supportEmail}`} className="focus-ring block rounded hover:text-white">
                  <span className="text-muted-ondark-soft">Support: </span>
                  {siteConfig.contact.supportEmail}
                </a>
                <a href={`mailto:${siteConfig.contact.billingEmail}`} className="focus-ring block rounded hover:text-white">
                  <span className="text-muted-ondark-soft">Billing: </span>
                  {siteConfig.contact.billingEmail}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 flex-shrink-0 text-cyan-400" />
              <span>{siteConfig.contact.phone}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 flex-shrink-0 text-cyan-400" />
              <span>{siteConfig.company.locationLabel}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="theme-footer-bottom border-t border-white/10 py-6">
        <div className="container-xl flex flex-col items-center justify-between gap-3 text-caption text-muted-ondark-soft sm:flex-row">
          <p>
            © {year} {siteConfig.brand.name}. All rights reserved.
          </p>
          <p>{siteConfig.company.country} — {siteConfig.company.region}</p>
        </div>
      </div>
    </footer>
  );
}
