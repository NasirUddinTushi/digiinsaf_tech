// Defensive input handling for chatbot (and any other free-text) input.
// Messages are always rendered as plain text via JSX (React escapes string
// children automatically) — dangerouslySetInnerHTML must never be used for
// visitor-supplied content. This module adds a second layer: stripping
// control characters and capping length before a message is stored or sent.

export const MAX_MESSAGE_LENGTH = 1000;
const CONTROL_CHAR_PATTERN = new RegExp(
  `[${String.fromCharCode(0)}-${String.fromCharCode(31)}${String.fromCharCode(127)}]`,
  'g'
);

export function sanitizeUserInput(value) {
  if (typeof value !== 'string') return '';
  return value.replace(CONTROL_CHAR_PATTERN, '').trim().slice(0, MAX_MESSAGE_LENGTH);
}

// Patterns that suggest a visitor is about to paste sensitive information
// the chatbot must never ask for or store (see Data Safety requirements).
const SENSITIVE_PATTERNS = [
  /\bpassword\b/i,
  /\bpasscode\b/i,
  /\botp\b/i,
  /\bcvv\b/i,
  /\bcvc\b/i,
  /\bcard\s?number\b/i,
  /\biban\b/i,
  /\bswift\s?code\b/i,
  /\bbank\s?login\b/i,
  /\bssn\b/i,
  /\bsocial\s?security\b/i,
  /\bpassport\s?(number|no\.?)\b/i,
  /\bnational\s?id\b/i,
  /\bapi\s?key\b/i,
  /\baccess\s?token\b/i,
  /\bsecret\s?key\b/i,
  /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{2,4}\b/, // looks like a card number
];

export function containsSensitiveInfo(value) {
  if (typeof value !== 'string') return false;
  return SENSITIVE_PATTERNS.some((pattern) => pattern.test(value));
}
