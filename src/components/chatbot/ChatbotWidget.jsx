import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useChatbot } from '@/hooks/useChatbot';
import ChatbotLauncher from './ChatbotLauncher';
import ChatbotWindow from './ChatbotWindow';

// Mounted once, globally (see src/App.jsx), so the conversation persists as
// a visitor moves between pages. All content and behaviour comes from
// src/config/chatbotConfig.js, src/data/chatbot*.js and
// src/services/chatbot*.js — this component only renders state from
// useChatbot() and never hardcodes chatbot copy itself.
export default function ChatbotWidget() {
  const navigate = useNavigate();
  const chatbot = useChatbot({ navigate });
  const launcherRef = useRef(null);
  const minimizedPillRef = useRef(null);

  // Lets other parts of the app (e.g. the homepage's "Ask Digi Assistant"
  // promo) open this same widget instance without lifting chatbot state
  // into a global store — a plain DOM event is enough for an occasional
  // cross-component trigger like this.
  useEffect(() => {
    function handleOpenRequest() {
      chatbot.open();
    }
    window.addEventListener('digiinsafe:open-chatbot', handleOpenRequest);
    return () => window.removeEventListener('digiinsafe:open-chatbot', handleOpenRequest);
  }, [chatbot]);

  if (!chatbot.config.isEnabled) return null;

  // Whichever trigger is about to become visible (launcher or minimized
  // pill) gets focus once the chat window unmounts — used by both the
  // header's Close/Minimize buttons and the Escape key handler.
  const focusVisibleTrigger = () => {
    requestAnimationFrame(() => {
      (launcherRef.current || minimizedPillRef.current)?.focus();
    });
  };

  return (
    <>
      {chatbot.uiState === 'minimized' && (
        <motion.button
          ref={minimizedPillRef}
          type="button"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={chatbot.open}
          className="focus-ring fixed bottom-5 right-4 z-[95] flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-2.5 text-sm font-medium text-charcoal shadow-elevation-md sm:right-6"
        >
          <MessageCircle className="h-4 w-4 text-sea-700" />
          {chatbot.config.chatbotName}
        </motion.button>
      )}

      {chatbot.uiState === 'closed' && (
        <ChatbotLauncher
          ref={launcherRef}
          isOpen={false}
          hasOpenedOnce={chatbot.hasOpenedOnce}
          greeting={chatbot.config.greetingBubble}
          onClick={chatbot.open}
        />
      )}

      <AnimatePresence>
        {chatbot.uiState === 'open' && (
          <ChatbotWindow chatbot={chatbot} onClose={chatbot.close} onMinimize={chatbot.minimize} onAfterHide={focusVisibleTrigger} />
        )}
      </AnimatePresence>
    </>
  );
}
