import { forwardRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import ChatbotNotification from './ChatbotNotification';

// forwardRef so ChatbotWindow can return focus here when the chat closes.
const ChatbotLauncher = forwardRef(function ChatbotLauncher({ isOpen, hasOpenedOnce, greeting, onClick }, ref) {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (hasOpenedOnce) {
      setShowBubble(false);
      return undefined;
    }
    const timer = setTimeout(() => setShowBubble(true), 2500);
    return () => clearTimeout(timer);
  }, [hasOpenedOnce]);

  return (
    <div className="fixed bottom-5 right-4 z-[95] flex flex-col items-end gap-2 sm:right-6">
      <ChatbotNotification show={showBubble && !isOpen} greeting={greeting} onOpen={onClick} />

      <motion.button
        ref={ref}
        type="button"
        onClick={onClick}
        whileTap={{ scale: 0.94 }}
        aria-label={isOpen ? 'Close chat with Digi Assistant' : 'Open chat with Digi Assistant'}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="focus-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-cta-gradient text-white shadow-glow"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!hasOpenedOnce && !isOpen && (
          <span
            aria-hidden="true"
            className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-signal-green text-[9px] font-bold text-ink-950 ring-2 ring-white"
          >
            1
          </span>
        )}
      </motion.button>
    </div>
  );
});

export default ChatbotLauncher;
