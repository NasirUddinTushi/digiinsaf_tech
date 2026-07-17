// Low-level chatbot backend/AI-provider boundary.
//
// This is the ONLY file that would ever need to change to connect a real
// backend or AI provider — everything else (components, hooks, the
// chatbotService.js orchestration layer) calls the functions below and
// does not know or care whether the answer came from local data or a
// network request.
//
// IMPORTANT: no AI provider is ever called directly from the browser, and
// no API key for OpenAI/Claude/Gemini/etc. should ever be placed in
// frontend code. VITE_CHATBOT_API_URL points at a backend YOU control,
// which is the only thing allowed to hold provider credentials and decide
// (based on its own server-side config) which provider to call:
//
//   // Example server-side dispatch (NOT in this file):
//   // if (CHATBOT_PROVIDER === 'openai')  -> call OpenAI's Chat Completions API
//   // if (CHATBOT_PROVIDER === 'claude')  -> call Anthropic's Messages API
//   // if (CHATBOT_PROVIDER === 'gemini')  -> call Google's Gemini API
//   // if (CHATBOT_PROVIDER === 'custom')  -> call your own Node.js or
//   //                                         Python/Django backend logic
import chatbotConfig from '@/config/chatbotConfig';

const MOCK_DELAY_MS = 400;

function wait(ms = MOCK_DELAY_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function chatbotApiRequest(path, { method = 'GET', body } = {}) {
  if (!chatbotConfig.apiUrl) {
    throw new Error('VITE_CHATBOT_API_URL is not configured — no chatbot backend connected yet.');
  }

  const response = await fetch(`${chatbotConfig.apiUrl}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Chatbot API request to ${path} failed with status ${response.status}`);
  }

  return response.json();
}

/**
 * GET /config — remote chatbot configuration (name, messages, business
 * hours, etc). Falls back to the local config file when no backend exists.
 */
export async function fetchChatbotConfig() {
  if (!chatbotConfig.apiUrl) {
    await wait();
    return chatbotConfig;
  }
  try {
    return await chatbotApiRequest('/config');
  } catch {
    return chatbotConfig;
  }
}

/**
 * POST /message — sends a visitor's free-text question to the backend,
 * which may answer from its own knowledge base or forward it to an AI
 * provider (OpenAI/Claude/Gemini/custom) depending on VITE_CHATBOT_PROVIDER.
 * Only called for messages local FAQ/service matching could not resolve
 * (see src/utils/chatbotEngine.js) — never for every message, to keep
 * answers fast, accurate and free wherever possible.
 *
 * Returns `null` when there is no backend configured, so the caller falls
 * through to the chatbot's fixed fallback response instead of erroring.
 */
export async function sendMessageToAI(message, conversationId) {
  if (!chatbotConfig.apiUrl || chatbotConfig.provider === 'local') return null;
  try {
    return await chatbotApiRequest('/message', { method: 'POST', body: { message, conversationId, provider: chatbotConfig.provider } });
  } catch {
    return null;
  }
}

/**
 * Expected payload — see src/utils/chatbotValidation.js -> chatbotProjectInquirySchema.
 */
export async function submitProjectInquiry(payload) {
  if (!chatbotConfig.apiUrl) {
    await wait(900);
    return { success: true, mocked: true, devMessage: chatbotConfig.devModeMessage, referenceId: `INQ-${Date.now()}` };
  }
  return chatbotApiRequest('/project-inquiries', { method: 'POST', body: payload });
}

/**
 * Expected payload — see src/utils/chatbotValidation.js -> chatbotConsultationSchema.
 */
export async function submitConsultationRequest(payload) {
  if (!chatbotConfig.apiUrl) {
    await wait(900);
    return { success: true, mocked: true, devMessage: chatbotConfig.devModeMessage, referenceId: `CONSULT-${Date.now()}` };
  }
  return chatbotApiRequest('/consultation-requests', { method: 'POST', body: payload });
}
