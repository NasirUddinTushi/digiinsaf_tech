import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DISMISSED_KEY = 'digiinsafe-chatbot-notification-dismissed';

function readDismissed() {
  try {
    return window.localStorage.getItem(DISMISSED_KEY) === 'true';
  } catch {
    return false;
  }
}

function persistDismissed() {
  try {
    window.localStorage.setItem(DISMISSED_KEY, 'true');
  } catch {
    // non-blocking — a failed write just means the bubble may reappear later
  }
}

// The one-time greeting bubble shown above the launcher button for
// first-time visitors. Dismissing it (or opening the chat) hides it for
// good — it never reappears and is never a blocking/aggressive popup.
export default function ChatbotNotification({ show, greeting, onOpen }) {
  const [dismissed, setDismissed] = useState(readDismissed);

  const dismiss = (event) => {
    event.stopPropagation();
    setDismissed(true);
    persistDismissed();
  };

  const visible = show && !dismissed;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          className="relative max-w-[220px] rounded-2xl rounded-br-sm border border-white/10 bg-ink-800 pr-7 shadow-card-dark"
        >
          <button
            type="button"
            onClick={onOpen}
            className="focus-ring w-full rounded-2xl px-4 py-3 text-left text-sm text-white"
          >
            {greeting}
          </button>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss notification"
            className="focus-ring absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-graphite-400 hover:bg-white/10 hover:text-white"
          >
            <X className="h-3 w-3" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
