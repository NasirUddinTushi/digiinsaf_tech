import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ChatbotHeader from './ChatbotHeader';
import ChatMessageList from './ChatMessageList';
import ChatbotFormStep from './ChatbotFormStep';
import ChatInput from './ChatInput';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

export default function ChatbotWindow({ chatbot, onClose, onMinimize, onAfterHide }) {
  const { config, currentStep, activeFlow, isTyping, sendMessage, selectChoiceAnswer, toggleMultiChoiceOption, confirmMultiChoiceStep, acceptConsent, clearConversation } = chatbot;
  const dialogRef = useRef(null);

  useLockBodyScroll(true);

  // Focus management: move focus into the dialog on open, return it to
  // whichever trigger (launcher or minimized pill) becomes visible again
  // on close/minimize — see ChatbotWidget.jsx's focusVisibleTrigger.
  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      onMinimize();
      onAfterHide?.();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onMinimize, onAfterHide]);

  const handleClose = () => {
    onClose();
    onAfterHide?.();
  };

  const handleMinimize = () => {
    onMinimize();
    onAfterHide?.();
  };

  const showTextInput = !currentStep || currentStep.inputType === 'text';

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      aria-label={`${config.chatbotName} chat window`}
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed inset-0 z-[95] flex h-[100dvh] flex-col overflow-hidden bg-white
        sm:inset-auto sm:bottom-24 sm:right-4 sm:h-[min(650px,calc(100vh-7rem))] sm:w-[min(400px,calc(100vw-2rem))]
        sm:rounded-xl2 sm:border sm:border-hairline sm:shadow-elevation-lg md:right-6"
    >
      <ChatbotHeader config={config} onMinimize={handleMinimize} onClose={handleClose} onRestart={clearConversation} />

      <ChatMessageList chatbot={chatbot} />

      {!showTextInput && activeFlow && (
        <ChatbotFormStep
          step={currentStep}
          pendingMultiChoice={activeFlow.pendingMultiChoice}
          disabled={isTyping}
          onChoose={selectChoiceAnswer}
          onToggleMultiChoice={toggleMultiChoiceOption}
          onConfirmMultiChoice={confirmMultiChoiceStep}
          onAcceptConsent={acceptConsent}
        />
      )}
      {showTextInput && <ChatInput disabled={isTyping} onSend={sendMessage} />}

      <p
        className="border-t border-hairline px-4 text-center text-[10px] leading-snug text-charcoal-muted"
        style={{ paddingTop: '0.5rem', paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      >
        Automated assistant — please don't share passwords, payment details or other sensitive information.
      </p>
    </motion.div>
  );
}
