// Central chatbot configuration. Mirrors the shape a future
// GET /api/chatbot/config response would return (see
// src/services/chatbotApi.js -> fetchChatbotConfig()), so swapping local
// config for a backend-managed record later is a one-file change.
import siteConfig from './siteConfig';

// VITE_CHATBOT_ENABLED  -> 'true' | 'false' (default enabled)
// VITE_CHATBOT_API_URL  -> base URL for the chatbot's own backend, kept
//                          separate from VITE_API_BASE_URL since a chatbot
//                          backend/AI proxy is often a different service
// VITE_CHATBOT_PROVIDER -> 'local' | 'openai' | 'claude' | 'gemini' | 'custom'
//   local  -> rule-based only, no network calls (default — see chatbotEngine.js)
//   other  -> unresolved questions are sent to VITE_CHATBOT_API_URL, which is
//             expected to proxy to that provider server-side. The browser
//             never calls OpenAI/Claude/Gemini directly (no API keys here).
const SUPPORTED_PROVIDERS = ['local', 'openai', 'claude', 'gemini', 'custom'];
const requestedProvider = (import.meta.env.VITE_CHATBOT_PROVIDER || 'local').toLowerCase();
const provider = SUPPORTED_PROVIDERS.includes(requestedProvider) ? requestedProvider : 'local';
const apiUrl = import.meta.env.VITE_CHATBOT_API_URL || '';
const isEnabled = (import.meta.env.VITE_CHATBOT_ENABLED ?? 'true') !== 'false';

export const chatbotConfig = {
  chatbotName: 'Digi Assistant',
  welcomeMessage:
    "Hi! I'm Digi Assistant 👋\nI can help you explore our services, understand our process or start a project with Digiinsaf. How can I help you today?",
  greetingBubble: 'Need help planning your digital project?',
  isEnabled,
  supportEmail: siteConfig.contact.supportEmail,
  supportPhone: siteConfig.contact.phone,
  whatsapp: siteConfig.contact.whatsapp,
  businessHours: 'Mon–Fri, 09:00–18:00 EET',
  fallbackMessage:
    "I'm not fully sure about that question yet. You can choose one of the options below or send your question directly to our team.",
  privacyMessage:
    'By submitting your information, you agree that Digiinsaf may contact you regarding your project request.',
  devModeMessage:
    'Demo submission completed. Connect the backend API before enabling production submissions.',
  statusLabel: 'Automated assistant',
  statusSubLabel: 'Usually replies instantly',
  provider,
  apiUrl,
  // Derived, backward-compatible mode used internally by chatbotService.js /
  // chatbotEngine.js: 'mock' (no backend), 'api' (backend content/submissions,
  // local-only matching for free text), 'ai' (backend also answers
  // unresolved free text via its AI proxy).
  mode: !apiUrl ? 'mock' : provider === 'local' ? 'api' : 'ai',
  conversationExpiryHours: 24,
};

export default chatbotConfig;
