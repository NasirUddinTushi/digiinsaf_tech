import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import siteConfig from '@/config/siteConfig';

function setMetaTag(attr, key, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setLinkTag(rel, href) {
  if (!href) return;
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

// Lightweight, dependency-free SEO manager. Mount once per page/route;
// it updates <title>, description, canonical link and Open Graph tags.
// Swap for a CMS-driven title/description once a backend exists.
export default function SEO({ title, description, image, noIndex = false }) {
  const location = useLocation();

  useEffect(() => {
    const { seo } = siteConfig;
    const pageTitle = title ? seo.titleTemplate.replace('%s', title) : seo.defaultTitle;
    const pageDescription = description || seo.defaultDescription;
    const canonicalUrl = `${seo.siteUrl}${location.pathname}`;
    const ogImage = image ? `${seo.siteUrl}${image}` : `${seo.siteUrl}${seo.ogImage}`;

    document.title = pageTitle;

    setMetaTag('name', 'description', pageDescription);
    setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDescription);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', pageDescription);
    setMetaTag('name', 'twitter:site', seo.twitterHandle);

    setLinkTag('canonical', canonicalUrl);
  }, [title, description, image, noIndex, location.pathname]);

  return null;
}
