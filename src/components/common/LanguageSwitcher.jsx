import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/utils/cn';

const languages = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'et', label: 'Estonian', shortLabel: 'ET' },
  { code: 'bn', label: 'Bangla', shortLabel: 'BN' },
  { code: 'fr', label: 'French', shortLabel: 'FR' },
  { code: 'ru', label: 'Russian', shortLabel: 'RU' },
  { code: 'es', label: 'Spanish', shortLabel: 'ES' },
  { code: 'zh-CN', label: 'Chinese', shortLabel: 'ZH' },
  { code: 'ar', label: 'Arabic', shortLabel: 'AR' },
  { code: 'hi', label: 'Hindi', shortLabel: 'HI' },
];

const COOKIE_NAME = 'googtrans';
const STORAGE_KEY = 'digiinsafe_language';
const includedLanguages = languages.map((language) => language.code).join(',');

function setTranslateCookie(languageCode) {
  const value = `/en/${languageCode}`;
  const expires = 'expires=Fri, 31 Dec 9999 23:59:59 GMT';
  document.cookie = `${COOKIE_NAME}=${value}; ${expires}; path=/`;

  if (window.location.hostname.includes('.')) {
    document.cookie = `${COOKIE_NAME}=${value}; ${expires}; path=/; domain=.${window.location.hostname}`;
  }
}

function readLanguageFromCookie() {
  const cookie = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${COOKIE_NAME}=`));

  return cookie?.split('/').pop() || 'en';
}

function loadGoogleTranslate() {
  if (window.google?.translate?.TranslateElement) {
    return;
  }

  window.googleTranslateElementInit = () => {
    if (!document.getElementById('google_translate_element')) return;

    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages,
        autoDisplay: false,
      },
      'google_translate_element'
    );
  };

  if (document.getElementById('google-translate-script')) return;

  const script = document.createElement('script');
  script.id = 'google-translate-script';
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);
}

// Drives the actual translation. Google's widget only translates the page
// when its own hidden <select class="goog-te-combo"> receives a real
// `change` event — setting the googtrans cookie alone (the previous
// implementation) just persists the choice for the *next* full reload, it
// doesn't trigger a translation on the current page, which is why picking a
// language looked like it did nothing until you happened to reload.
function dispatchGoogleTranslateChange(languageCode) {
  const combo = document.querySelector('select.goog-te-combo');
  if (!combo) return false;

  combo.value = languageCode;
  combo.dispatchEvent(new Event('change'));
  return true;
}

// The widget needs a moment after script injection before `.goog-te-combo`
// exists in the DOM — poll briefly instead of assuming it's ready, and only
// fall back to a full reload (which re-applies the language from the
// googtrans cookie on next load) if it never shows up.
function applyGoogleTranslate(languageCode, onExhausted, attemptsLeft = 20) {
  if (dispatchGoogleTranslateChange(languageCode)) return;
  if (attemptsLeft <= 0) {
    onExhausted();
    return;
  }
  window.setTimeout(() => applyGoogleTranslate(languageCode, onExhausted, attemptsLeft - 1), 150);
}

function hideGoogleTranslateBanner() {
  const body = document.body;
  const html = document.documentElement;

  // Reset only the top/margin offset that GT injects — do NOT touch position
  // (GT needs position:relative on body to render translations correctly).
  if (body.style.top && body.style.top !== '0px') body.style.top = '0px';
  if (body.style.marginTop && body.style.marginTop !== '0px') body.style.marginTop = '0px';
  if (html.style.marginTop && html.style.marginTop !== '0px') html.style.marginTop = '0px';

  // Hide the visible GT toolbar banner & iframe overlay
  document.querySelectorAll(
    '.goog-te-banner-frame, iframe.skiptranslate, .goog-te-balloon-frame, #goog-gt-tt'
  ).forEach((el) => {
    if (el.style.display !== 'none') {
      el.style.display = 'none';
      el.style.visibility = 'hidden';
      el.style.height = '0';
    }
  });

  // Keep .goog-te-gadget off-screen so <select> stays accessible
  const gadget = document.querySelector('.goog-te-gadget');
  if (gadget && gadget.style.left !== '-9999px') {
    gadget.style.position = 'absolute';
    gadget.style.left = '-9999px';
    gadget.style.top = '0';
    gadget.style.opacity = '0';
    gadget.style.pointerEvents = 'none';
    gadget.style.height = '0';
    gadget.style.overflow = 'hidden';
  }
}



export default function LanguageSwitcher({ className, showWidgetHost = false, size = 'compact', solid = false }) {
  const selectId = useId();
  const switcherRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const selected = useMemo(
    () => languages.find((language) => language.code === selectedLanguage) || languages[0],
    [selectedLanguage]
  );
  const isMobile = size === 'mobile';
  const isFull = size === 'full';

  useEffect(() => {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    const initialLanguage = storedLanguage || readLanguageFromCookie();
    setSelectedLanguage(languages.some((language) => language.code === initialLanguage) ? initialLanguage : 'en');
    loadGoogleTranslate();

    // Poll at 100ms — fast enough to catch GT's body.style.top injection
    // before the user starts scrolling and sees a white gap.
    const cleanupTimer = window.setInterval(hideGoogleTranslateBanner, 100);
    return () => window.clearInterval(cleanupTimer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleLanguageChange(nextLanguage) {
    setOpen(false);
    if (nextLanguage === selectedLanguage) return;

    setSelectedLanguage(nextLanguage);
    localStorage.setItem(STORAGE_KEY, nextLanguage);
    setTranslateCookie(nextLanguage);
    applyGoogleTranslate(nextLanguage, () => window.location.reload());
  }

  return (
    <div
      ref={switcherRef}
      className={cn(
        'language-switcher notranslate relative',
        solid ? 'text-charcoal' : 'text-white',
        isFull && 'w-full',
        className
      )}
      translate="no"
    >
      {/* `solid` mirrors the Navbar's own light/dark state so the chip reads
          as part of the bar instead of a dark block floating on a light
          header — dropdown panel stays dark regardless (an overlay, not
          part of the bar). */}
      <button
        type="button"
        id={selectId}
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Translate website. Current language: ${selected.label}`}
        className={cn(
          'focus-ring group relative flex items-center overflow-hidden rounded-full border text-sm font-semibold transition-colors duration-200',
          solid
            ? 'border-hairline bg-white text-charcoal-muted hover:bg-sea-50 hover:text-charcoal'
            : 'border-white/15 bg-white/10 text-white hover:bg-white/20',
          isMobile ? 'h-10 w-[82px] gap-1.5 px-2.5' : 'gap-2 px-3.5 py-2.5',
          isFull && 'h-12 w-full justify-between rounded-xl px-4'
        )}
      >
        <span className="relative flex items-center gap-2">
          <span
            className={cn(
              'flex items-center justify-center rounded-full',
              solid ? 'bg-sea-50 text-sea-700' : 'bg-white/10 text-sea-300',
              isMobile ? 'h-6 w-6' : 'h-7 w-7'
            )}
          >
            <Globe className={cn('h-4 w-4', isMobile && 'h-3.5 w-3.5')} aria-hidden="true" />
          </span>
          <span className={cn('leading-none', isMobile ? 'text-xs' : 'text-sm')}>
            {isMobile ? selected.shortLabel : selected.label}
          </span>
        </span>
        <ChevronDown
          className={cn(
            'relative h-4 w-4 transition-transform',
            solid ? 'text-charcoal-muted' : 'text-white/60',
            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            role="listbox"
            aria-label="Website language"
            className={cn(
              'z-[90] overflow-hidden border border-white/[0.12] bg-sea-950 p-1.5 shadow-elevation-lg',
              isMobile
                ? 'fixed left-4 right-4 top-[4.75rem] grid grid-cols-2 gap-1.5 rounded-xl2 p-2'
                : 'absolute right-0 top-full mt-2 w-52 rounded-xl',
              isFull && 'left-0 right-auto w-full'
            )}
          >
            {languages.map((language) => {
              const active = language.code === selectedLanguage;

              return (
                <button
                  key={language.code}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => handleLanguageChange(language.code)}
                  className={cn(
                    'focus-ring flex w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition-colors',
                    isMobile ? 'min-h-12 py-2' : 'py-2.5',
                    active ? 'bg-white/[0.12] text-white' : 'text-white/70 hover:bg-white/[0.07] hover:text-white'
                  )}
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <span className="flex h-7 w-8 items-center justify-center rounded-md bg-white/[0.07] text-xs font-semibold text-sea-400">
                      {language.shortLabel}
                    </span>
                    <span className="truncate">{language.label}</span>
                  </span>
                  {active && <Check className="h-4 w-4 text-sea-400" aria-hidden="true" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {showWidgetHost && <div id="google_translate_element" aria-hidden="true" />}
    </div>
  );
}
