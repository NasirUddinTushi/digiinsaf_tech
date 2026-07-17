import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll position on every route change so navigating between
// pages does not carry over the previous page's scroll offset. When the
// URL includes a hash (e.g. an in-page link like "/#solutions"), scrolls
// to that section instead — React Router's client-side navigation doesn't
// trigger the browser's native hash-scroll behaviour on its own.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (!el) return false;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      };
      // The target section may not be mounted yet right after a cross-page
      // navigation, so retry once shortly instead of failing silently.
      if (!scrollToHash()) {
        const timer = setTimeout(scrollToHash, 150);
        return () => clearTimeout(timer);
      }
      return undefined;
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}
