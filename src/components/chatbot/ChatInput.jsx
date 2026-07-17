import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { MAX_MESSAGE_LENGTH, isNearMessageLimit, charsRemaining } from '@/utils/chatbotHelpers';

const MAX_TEXTAREA_HEIGHT = 120;

export default function ChatInput({ disabled, onSend }) {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`;
  }, [value]);

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
    // Shift+Enter falls through to the textarea's default newline behaviour.
  };

  const handleChange = (event) => {
    setValue(event.target.value.slice(0, MAX_MESSAGE_LENGTH));
  };

  return (
    <div className="border-t border-white/10 p-3">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
        className="flex items-end gap-2"
      >
        <label htmlFor="chatbot-input" className="sr-only">
          Message Digi Assistant
        </label>
        <textarea
          id="chatbot-input"
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message… (Enter to send, Shift+Enter for a new line)"
          disabled={disabled}
          maxLength={MAX_MESSAGE_LENGTH}
          className="focus-ring w-full resize-none rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-graphite-600 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="focus-ring flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cta-gradient text-white disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
      {isNearMessageLimit(value) && (
        <p className="mt-1 text-right text-[11px] text-graphite-400">{charsRemaining(value)} characters left</p>
      )}
    </div>
  );
}
