# Digiinsaf â€” Marketing Website (Frontend)

A complete, responsive marketing website for **Digiinsaf**, an Estonia-based
digital product studio. This is a **frontend-only** React application: there
is no backend yet, but the codebase is structured so a CMS, database,
authentication and a real contact/quote API can be dropped in later without
restructuring pages or components.

All portfolio projects, testimonials and metrics in this repository are
**demo/placeholder content**, clearly labelled as such in the UI. Replace them
with verified, real content before launch â€” see [Content editing guide](#content-editing-guide).

## Technology stack

- **React 19** + **Vite** â€” build tooling and dev server
- **React Router DOM v7** â€” routing
- **Tailwind CSS 3** â€” design system, implemented as Tailwind theme tokens
- **Framer Motion** â€” page transitions, scroll reveals, micro-interactions
- **Lucide React** â€” icon set (imported via an explicit registry, see below)
- **React Hook Form** + **Zod** â€” form state and schema validation
- No CSS-in-JS, no UI kit, no jQuery, no Bootstrap.

Includes a self-contained chatbot widget (**Digi Assistant**) â€” see
[Chatbot architecture](#chatbot-architecture) below.

## Getting started

```bash
npm install
cp .env.example .env   # already present with placeholder values
npm run dev            # start the dev server (http://localhost:5173)
```

### Production build

```bash
npm run build           # outputs to /dist
npm run preview          # preview the production build locally
```

> **Note:** this project pins `vite@^6` and `@vitejs/plugin-react@^4`. Newer
> Vite majors (7/8) currently ship an optional native `rolldown` binding that
> can fail to install correctly on some Windows/npm combinations. If you
> upgrade Vite, verify `npm run build` still succeeds after a clean install.
> For the same reason, no linter is wired up by default (the scaffolded
> `oxlint` had the identical native-binding issue) â€” add ESLint or your
> preferred linter if you want one enforced in CI.

## Folder structure

```
src/
  components/
    common/          generic UI primitives (Button, Input, Modal, SEO, FAQAccordion, Icon, ...)
    cards/            ServiceCard, ProjectCard, CaseStudyCard, IndustryCard, ValueCard, TestimonialCard, BlogCard
    layout/            Navbar, MobileMenu, Footer, Layout
    home/              one component per Home page section
    forms/              MultiStepQuoteForm, ContactForm, NewsletterForm, steps/*
    chatbot/            ChatbotWidget (root), ChatbotErrorBoundary, ChatbotLauncher, ChatbotNotification,
                        ChatbotWindow, ChatbotHeader, ChatMessageList, ChatMessage, ChatInput,
                        ChatbotFormStep, ProjectSummary, QuickReplies, TypingIndicator, ChatFeedbackButtons
  pages/              one file per route (see Routes below)
  data/               editable mock content (services, projects, process, faqs, blogs, testimonials,
                      industries, quoteOptions, chatbotFaqs, chatbotServices, chatbotFlows, chatbotQuickReplies)
  config/             siteConfig.js, chatbotConfig.js â€” brand/contact/CTA copy and chatbot settings in one place
  hooks/              useScrolled, useLockBodyScroll, useChatbot, useChatbotFlow, useChatbotStorage
  services/           apiClient.js, inquiryService.js â€” site forms
                      chatbotApi.js, chatbotService.js â€” chatbot backend/AI boundary (mocked until a backend exists)
  utils/               cn.js, validationSchemas.js, sanitize.js, chatbotEngine.js, chatbotValidation.js,
                      chatbotHelpers.js, chatbotStorage.js, chatbotAnalytics.js
```

Route definitions live inline in `src/App.jsx` (React Router v7 `<Routes>`),
and global styles live in `src/index.css` (Tailwind layers + base styles).

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services overview |
| `/services/:slug` | Service detail (see `src/data/services.js` for slugs) |
| `/work` | Portfolio |
| `/work/:slug` | Case study (see `src/data/projects.js` for slugs) |
| `/process` | Process |
| `/insights` | Blog |
| `/insights/:slug` | Blog article (see `src/data/blogs.js` for slugs) |
| `/contact` | Contact & Get a Quote |
| `/privacy-policy` | Privacy Policy (draft) |
| `/terms-and-conditions` | Terms & Conditions (draft) |
| `*` | 404 |

## Content editing guide

Almost everything editorial lives in `src/data/*` and `src/config/siteConfig.js` â€”
you should rarely need to touch a component to change copy.

- **Brand name, tagline, contact details, social links, nav labels, CTA text**
  â†’ `src/config/siteConfig.js`
- **Services, subservices, service page content** â†’ `src/data/services.js`
- **Portfolio / case studies** â†’ `src/data/projects.js` (mark real projects by
  removing `isDemo` and `clientLabel`)
- **"How We Work" steps** â†’ `src/data/process.js`
- **FAQ** â†’ `src/data/faqs.js`
- **Blog posts** â†’ `src/data/blogs.js`
- **Testimonials** â†’ `src/data/testimonials.js` â€” **replace with verified
  client feedback before launch**; the UI displays a "sample layout" notice
  until you do
- **Industries / engagement models / value props** â†’ `src/data/industries.js`
- **Quote form dropdown options** â†’ `src/data/quoteOptions.js`

Icons are referenced by name (e.g. `icon: 'PenTool'`) and resolved through
`src/components/common/Icon.jsx`, which keeps an explicit import registry
(rather than importing the whole `lucide-react` package) so unused icons are
tree-shaken out of the production bundle. If you add a new icon name to a
data file, add the matching import to that registry too.

## Environment variables

See `.env.example`:

```
VITE_API_BASE_URL=       # backend base URL â€” leave empty to keep using mocked form submissions
VITE_SITE_URL=           # public URL, used for canonical links and Open Graph tags
VITE_CONTACT_EMAIL=      # fallback contact email
VITE_CHATBOT_ENABLED=true    # set to "false" to hide the chat widget entirely
VITE_CHATBOT_API_URL=        # chatbot's own backend/AI-proxy base URL (separate from VITE_API_BASE_URL)
VITE_CHATBOT_PROVIDER=local  # local | openai | claude | gemini | custom
```

## Backend integration guide

The frontend is deliberately backend-agnostic today:

1. **Form submissions** (`src/services/inquiryService.js`) already export
   `submitProjectInquiry`, `submitContactMessage` and `submitNewsletterSignup`.
   Each one checks `VITE_API_BASE_URL` â€” if it's unset, it resolves a mocked
   success response after a short delay; if it's set, it calls
   `apiRequest()` (`src/services/apiClient.js`), a thin `fetch` wrapper.
   Point `VITE_API_BASE_URL` at your backend and these functions start
   hitting real endpoints with no component changes required.
2. **Content** (`src/data/*.js`) is structured to mirror a typical CMS/API
   response shape (flat arrays of objects with `slug` keys). Swapping local
   arrays for `fetch`/`useEffect` (or React Query, if you add it later) is a
   contained change inside each data module or page.
3. **Auth / admin dashboard**: none of the current routes assume a logged-out
   state, so adding an authenticated `/admin` section under a new route group
   later won't require touching the public site's routing.

## Chatbot architecture

**Digi Assistant** (bottom-right on every page) is a self-contained feature
with its own data, config and service layer â€” UI components never hardcode
chatbot copy or decide how content is sourced. It ships today with local,
rule-based logic only; no AI API is connected.

### How a message gets answered

For free-text input, `src/utils/chatbotEngine.js` resolves it in this order
â€” rule-based matches are prioritised so most answers are instant, accurate
and free, and not every message needs an AI round-trip:
1. Match against `src/data/chatbotFaqs.js` (keyword + question matching)
2. Match against `src/data/chatbotServices.js` (service keyword matching)
3. *(if a guided flow is active â€” Start a Project, Get a Quote, Book a
   Consultation, Talk to the Team â€” the message instead answers that
   flow's current step; see `src/hooks/useChatbotFlow.js`)*
4. Search the future backend knowledge base / 5. AI provider fallback â€”
   folded into one call, `sendMessageToAI()` in `src/services/chatbotApi.js`;
   a no-op until `VITE_CHATBOT_API_URL` is set
6. A fixed "ask the team" fallback message â€” the chatbot never invents a
   confident answer when nothing matched

### Guided flows and the summary step

"Start a Project", "Get a Quote" (same flow, introduced with a pricing
disclaimer), "Book a Consultation" and "Talk to the Team" are step-by-step
flows defined in `src/data/chatbotFlows.js` â€” one question at a time, driven
by `src/hooks/useChatbotFlow.js`. Contact-method options are shared with the
`/contact` quote form (`src/data/quoteOptions.js`) so the two can't disagree.
Flows marked `showSummaryBeforeSubmit: true` end with a `ProjectSummary` card
(Submit Request / Edit Details / Restart) showing every collected answer and
the required privacy note â€” submitting it is the consent action.

### Editing chatbot content

- **FAQ answers** â†’ `src/data/chatbotFaqs.js` (add/edit objects; `keywords`
  drive matching, `isActive: false` hides one without deleting it)
- **Service descriptions the bot gives** â†’ `src/data/chatbotServices.js`
- **Guided flow questions/steps** â†’ `src/data/chatbotFlows.js`
- **Quick-reply labels/initial menu** â†’ `src/data/chatbotQuickReplies.js`
  (`initialQuickReplyIds` controls the seven starter buttons)
- **Bot name, welcome message, fallback text, privacy note** â†’
  `src/config/chatbotConfig.js`

### Modes and connecting a real backend/AI provider later

Controlled by `VITE_CHATBOT_ENABLED` / `VITE_CHATBOT_API_URL` /
`VITE_CHATBOT_PROVIDER` (see `src/config/chatbotConfig.js`):
- No `VITE_CHATBOT_API_URL` â†’ fully local: rule-based answers only,
  simulated network delay, and a visible dev-only note ("Demo submission
  completedâ€¦") after any mock submission. This note never shows once a
  backend is connected.
- `VITE_CHATBOT_API_URL` set, `VITE_CHATBOT_PROVIDER=local` â†’ chatbot
  config/FAQs/services load from your backend and inquiries/consultations/
  feedback are POSTed to it (falls back to local content if a request
  fails, so a flaky backend doesn't break the widget).
- `VITE_CHATBOT_PROVIDER` set to `openai` / `claude` / `gemini` / `custom` â†’
  same as above, plus unresolved free-text questions are POSTed to your
  backend's `/message` endpoint, which decides server-side how to call that
  provider. **The browser never calls OpenAI/Claude/Gemini directly and no
  API key for them ever belongs in this codebase** â€” only your backend
  holds those credentials.

All backend/AI-facing calls live in `src/services/chatbotApi.js`
(`fetchChatbotConfig`, `sendMessageToAI`, `submitProjectInquiry`,
`submitConsultationRequest`) â€” this is the one file that changes to connect
a real backend. `src/services/chatbotService.js` handles the remaining
content/conversation/feedback endpoints and delegates to `chatbotApi.js` for
the rest. It's written against these (not yet existing) routes:
```
GET   /config                  (chatbotApi.js)
POST  /message                 (chatbotApi.js)
POST  /project-inquiries       (chatbotApi.js)
POST  /consultation-requests   (chatbotApi.js)
GET   /api/chatbot/faqs
GET   /api/chatbot/services
GET   /api/chatbot/suggested-questions
POST  /api/chatbot/conversations
PATCH /api/chatbot/conversations/:id
POST  /api/chatbot/feedback
```
UI components and the chatbot hooks do not change when a backend is connected.

### Disabling the chatbot

Set `VITE_CHATBOT_ENABLED=false` â€” `ChatbotWidget` renders nothing.

### Data & admin-panel readiness

`chatbotFaqs.js` and `chatbotServices.js` use flat, `id`/`isActive`/
`displayOrder`/timestamp-bearing shapes designed to map directly onto
records an admin dashboard would manage later.

### Safety, privacy and storage

- `src/utils/sanitize.js` strips control characters and flags messages that
  look like passwords, card numbers, OTPs, API keys, etc. â€” these trigger a
  safety notice instead of being processed normally, and the chatbot never
  asks for this information itself.
- All message content is rendered as plain text via JSX (React escapes it
  automatically); `dangerouslySetInnerHTML` is never used for chat content.
- The privacy note ("By submitting your information, you agree that
  Digiinsaf may contact you regarding your project request.") is shown on
  every summary card before submission.
- Conversation history in `localStorage` (`src/utils/chatbotStorage.js`)
  excludes any field matching sensitive patterns, auto-expires
  (`chatbotConfig.conversationExpiryHours`, 24h by default), and every
  read/write is wrapped so a storage failure never breaks the chat UI. The
  "Restart conversation" header button clears it on demand.
- `src/utils/chatbotAnalytics.js` has placeholder tracking functions
  (`chatbot_opened`, `quick_reply_selected`, `project_inquiry_submitted`,
  etc.) that currently only log in dev â€” wire a real provider inside its
  single `track()` function.

## Deployment

### Vercel

1. Import the repository in Vercel.
2. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`.
3. Add the environment variables from `.env.example` in the Vercel project
   settings.
4. Because this is a client-side-routed SPA, Vercel's default Vite preset
   already rewrites unknown paths to `index.html` â€” no extra config needed.

### Netlify

1. Build command: `npm run build`. Publish directory: `dist`.
2. Add a `_redirects` file (or `netlify.toml` redirect rule) so client-side
   routes resolve on refresh:
   ```
   /*    /index.html   200
   ```
3. Add the environment variables from `.env.example` in Netlify's site
   settings.

## Accessibility & performance notes

- Skip-to-content link, semantic landmarks, labelled form fields, visible
  focus rings (`focus-ring` utility), keyboard-accessible accordion and
  mobile menu, `prefers-reduced-motion` support in `src/index.css`.
- All pages are bundled eagerly (no route-level lazy loading) so navigating
  the site â€” and the initial Home render after the intro splash â€” never
  shows an intermediate loading state. Vendor code is still split into
  separate cacheable chunks (`react`, `framer-motion`, form libraries) via
  `vite.config.js` `manualChunks`.
- The chatbot widget lazy-loads its own content (FAQs, services, suggested
  questions) after mount rather than blocking the initial page render.
