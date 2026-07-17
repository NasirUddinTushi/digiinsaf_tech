// Small, pure helper functions shared across chatbot hooks/components.
import { MAX_MESSAGE_LENGTH } from './sanitize';

export { MAX_MESSAGE_LENGTH };

let messageCounter = 0;

export function generateMessageId() {
  messageCounter += 1;
  return `msg-${Date.now()}-${messageCounter}`;
}

export function generateConversationId() {
  return `conv-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/** "10:32 AM" — used under each message bubble. */
export function formatMessageTimestamp(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
}

export function charsRemaining(value) {
  return MAX_MESSAGE_LENGTH - (value?.length || 0);
}

/** True once a visitor is close enough to the limit to warrant a counter. */
export function isNearMessageLimit(value) {
  return charsRemaining(value) <= 120;
}

/** Formats a field name like "projectDescription" as "Project Description". */
export function humanizeFieldName(field) {
  return field
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (char) => char.toUpperCase());
}

function resolveOptionLabel(step, singleValue) {
  const match = step?.options?.find((option) => option.value === singleValue);
  return match ? match.label : String(singleValue);
}

/** Resolves a flow answer (which may be an option value, or an array of
 * them for a multi-choice step) back to its label(s) for display. */
export function resolveAnswerLabel(step, value) {
  if (!value) return '—';
  if (Array.isArray(value)) {
    return value.length ? value.map((item) => resolveOptionLabel(step, item)).join(', ') : '—';
  }
  return resolveOptionLabel(step, value);
}
