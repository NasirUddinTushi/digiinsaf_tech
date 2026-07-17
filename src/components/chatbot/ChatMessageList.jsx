import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';

export default function ChatMessageList({ chatbot }) {
  const { messages, isTyping, currentStep, suggestedQuestions, sendMessage } = chatbot;
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const showSuggestedQuestions = messages.length <= 1 && suggestedQuestions.length > 0 && !currentStep;

  return (
    <div ref={scrollRef} role="log" aria-live="polite" aria-label="Conversation" className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} chatbot={chatbot} />
      ))}

      {showSuggestedQuestions && (
        <div className="flex flex-wrap gap-1.5">
          {suggestedQuestions.map((faq) => (
            <button
              key={faq.id}
              type="button"
              onClick={() => sendMessage(faq.question)}
              className="focus-ring rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-graphite-500 transition-colors hover:border-cyan-400/40 hover:text-white"
            >
              {faq.question}
            </button>
          ))}
        </div>
      )}

      {isTyping && <TypingIndicator />}
    </div>
  );
}
