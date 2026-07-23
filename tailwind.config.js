/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Fixed single dark palette (approved brief) — the site no longer
        // has a light theme, so these are the only background/accent
        // values in play (named "cyan" for historical reasons — every
        // component already references this token, so retuning the hex
        // here cascades the palette everywhere without touching each
        // file). ink-950/900/800 are the brief's Primary/Secondary/Card
        // backgrounds; cyan-600/400 are its Primary Accent Blue / Light
        // Blue Glow.
        ink: {
          950: '#07131D',
          900: '#0E2433',
          800: '#102A3A',
          700: '#1A3B52',
          600: '#2A5570',
          500: '#3F7292',
          400: '#6B93AC',
        },
        cyan: {
          50: '#EEF7FC',
          100: '#D9EDF8',
          200: '#B0D8F0',
          300: '#85C2E9',
          400: '#6CB6E8',
          500: '#4A99D0',
          600: '#2E7DBA',
          700: '#24628F',
          800: '#1B4A6D',
        },
        violet: {
          50: '#f7f8f9',
          100: '#eceef1',
          200: '#d7dbe1',
          300: '#b8bfc9',
          400: '#8b93a0',
          500: '#6b7280',
          600: '#525862',
          700: '#3d4148',
          800: '#2a2d32',
        },
        amber: {
          300: '#ffdd8a',
          400: '#ffc94d',
          500: '#f5b021',
          600: '#d99416',
          700: '#b3760f',
        },
        mist: {
          50: '#f8f9fc',
          100: '#eef0f6',
          200: '#e1e4ee',
          300: '#c6cbdc',
          400: '#aab0c7',
        },
        // Flipped to light tones (was designed for text on light backgrounds)
        // since the site has a single fixed dark theme now — 400 is the
        // brief's exact Secondary Text (#B8C5D1).
        graphite: {
          300: '#e2e8ee',
          400: '#b8c5d1',
          500: '#96a5b3',
          600: '#7c8ca0',
          700: '#64738a',
          800: '#4c5a70',
        },
        signal: {
          green: '#3ddc97',
          amber: '#f5b021',
          red: '#f0473f',
        },
        // New restrained light-first system (redesign, additive only — the
        // tokens above stay untouched so pages not yet migrated keep
        // rendering exactly as before). One blue family spanning a light
        // surface tint through to the primary dark navy, per the approved
        // brief. 200/900 are derived in-between stops, not in the brief.
        sea: {
          50: '#EAF2F6',
          100: '#DCEAF1',
          200: '#BFDCE8',
          400: '#2A93B8',
          600: '#0E7490',
          700: '#075985',
          800: '#073B5C',
          900: '#052A42',
          950: '#071A2B',
        },
        paper: '#F8F7F3',
        charcoal: {
          DEFAULT: '#12202B',
          muted: '#5C6973',
        },
      },
      fontFamily: {
        // Single family sitewide (redesign) — Manrope for both roles so the
        // existing font-heading/font-body call sites repoint automatically.
        heading: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        // Semantic type scale layered on top of Tailwind's default scale
        // (text-sm/text-3xl/etc. still work) — reach for these on new or
        // touched markup so heading/body rhythm stays consistent site-wide.
        display: ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h2: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h3: ['1.5rem', { lineHeight: '1.25' }],
        h4: ['1.25rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.65' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(47, 126, 245, 0.45)',
        'glow-violet': '0 0 40px -10px rgba(139, 147, 160, 0.35)',
        'glow-amber': '0 0 36px -8px rgba(245, 176, 33, 0.45)',
        card: '0 4px 24px -8px rgba(5, 7, 13, 0.12)',
        'card-dark': '0 4px 24px -8px rgba(0, 0, 0, 0.45)',
        'elevation-sm': '0 1px 2px rgba(5, 7, 13, 0.06), 0 1px 1px rgba(5, 7, 13, 0.04)',
        'elevation-md': '0 8px 24px -12px rgba(5, 7, 13, 0.18)',
        'elevation-lg': '0 24px 48px -16px rgba(5, 7, 13, 0.24)',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(47,126,245,0.2), transparent 40%), radial-gradient(circle at 80% 0%, rgba(108,182,232,0.14), transparent 40%)',
        // Deep-navy-to-bright-blue diagonal — the button gradient direction
        // adopted from the ArnTech reference for primary CTAs.
        'cta-gradient': 'linear-gradient(135deg, #13275A 0%, #2F7EF5 100%)',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      borderColor: {
        hairline: 'rgba(7, 59, 92, 0.12)',
      },
      maxWidth: {
        container: '1320px',
      },
      spacing: {
        18: '4.5rem',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        'scale-in': 'scale-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};
