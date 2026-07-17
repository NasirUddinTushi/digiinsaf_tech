// Lightweight, original line-icon glyphs for social platforms not covered by
// lucide-react's generic icon set (it intentionally excludes brand marks).
// These are simple monogram/shape abstractions, not reproductions of any
// platform's trademarked logo artwork.

const baseProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function LinkedinGlyph({ className }) {
  return (
    <svg className={className} {...baseProps} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16" />
      <circle cx="7.5" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
      <line x1="12" y1="16" x2="12" y2="10.5" />
      <path d="M12 13c0-1.4 1-2.5 2.3-2.5S16.5 11.6 16.5 13v3" />
    </svg>
  );
}

export function InstagramGlyph({ className }) {
  return (
    <svg className={className} {...baseProps} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XGlyph({ className }) {
  return (
    <svg className={className} {...baseProps} aria-hidden="true">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function WhatsappGlyph({ className }) {
  return (
    <svg className={className} {...baseProps} aria-hidden="true">
      <path d="M6.5 17.5 5 20l2.6-1.4A7.9 7.9 0 1 0 4.2 12 7.9 7.9 0 0 0 6.5 17.5Z" />
      <path d="M9 9.7c0-.6.5-1.1 1-1.1s.7.2.9.6l.4.9c.1.3.1.6-.1.8l-.5.6c-.1.2-.1.4 0 .6.4.7 1.2 1.5 1.9 1.9.2.1.4.1.6 0l.6-.5c.2-.2.5-.2.8-.1l.9.4c.4.2.6.5.6.9 0 .5-.5 1-1.1 1-2.5 0-5-2.5-5-5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
