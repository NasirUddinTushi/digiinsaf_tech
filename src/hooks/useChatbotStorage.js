import { useCallback, useEffect, useRef, useState } from 'react';
import { saveConversationLocally, loadConversationLocally, clearConversationLocally } from '@/utils/chatbotStorage';

/**
 * Thin hook wrapper around src/utils/chatbotStorage.js. Reads any saved
 * conversation once on mount (for restoring after a refresh) and exposes a
 * debounced-by-effect `persist` you can call on every state change without
 * worrying about localStorage failures — they're swallowed by the
 * underlying util and never break the chat UI.
 */
export function useChatbotStorage() {
  const [restored] = useState(() => {
    try {
      return loadConversationLocally();
    } catch {
      return null;
    }
  });
  const hasRestoredRef = useRef(Boolean(restored));

  const persist = useCallback((snapshot) => {
    saveConversationLocally(snapshot);
  }, []);

  const clear = useCallback(() => {
    clearConversationLocally();
  }, []);

  return { restored, hasRestoredConversation: hasRestoredRef.current, persist, clear };
}

export default useChatbotStorage;
