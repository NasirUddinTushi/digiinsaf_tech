// localStorage persistence for the chatbot widget.
//
// Rules this file enforces:
//  - only ever stores the chat transcript + in-progress flow answers
//    (never anything resembling a password, card number, OTP, etc. —
//    see sanitizePayloadForStorage below)
//  - entries expire automatically (see chatbotConfig.conversationExpiryHours)
//  - every read/write is wrapped so a storage failure (quota, privacy mode,
//    disabled storage) never breaks the chat UI
import chatbotConfig from '@/config/chatbotConfig';

const STORAGE_KEY = 'digiinsafe-chatbot-conversation';

const SENSITIVE_FIELD_PATTERN = /(password|passcode|otp|card|cvv|cvc|iban|swift|ssn|passport|national.?id|api.?key|secret|token)/i;

function sanitizePayloadForStorage(payload) {
  if (!payload || typeof payload !== 'object') return payload;
  const clean = {};
  for (const [key, value] of Object.entries(payload)) {
    if (SENSITIVE_FIELD_PATTERN.test(key)) continue;
    clean[key] = value;
  }
  return clean;
}

export function saveConversationLocally(conversation) {
  try {
    const activeFlow = conversation.flow?.activeFlow;
    const sanitizedConversation = {
      ...conversation,
      flow: conversation.flow && {
        ...conversation.flow,
        activeFlow: activeFlow && { ...activeFlow, answers: sanitizePayloadForStorage(activeFlow.answers) },
      },
    };

    const record = {
      savedAt: Date.now(),
      expiresAt: Date.now() + chatbotConfig.conversationExpiryHours * 60 * 60 * 1000,
      conversation: sanitizedConversation,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    return true;
  } catch {
    // Non-blocking by design — storage may be unavailable (private
    // browsing, quota exceeded, disabled by the user).
    return false;
  }
}

export function loadConversationLocally() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const record = JSON.parse(raw);
    if (!record?.expiresAt || Date.now() > record.expiresAt) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return record.conversation ?? null;
  } catch {
    return null;
  }
}

export function clearConversationLocally() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
