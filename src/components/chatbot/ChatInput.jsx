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
    <div className="border-t border-hairline p-3">
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
          className="focus-ring w-full resize-none rounded-2xl border border-hairline bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal-muted disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="focus-ring flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sea-700 text-white transition-colors hover:bg-sea-800 disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
      {isNearMessageLimit(value) && (
        <p className="mt-1 text-right text-[11px] text-charcoal-muted">{charsRemaining(value)} characters left</p>
      )}
    </div>
  );
}
