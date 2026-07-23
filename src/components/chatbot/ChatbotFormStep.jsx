import { Check, ShieldCheck } from 'lucide-react';
import { cn } from '@/utils/cn';

// Renders the input control for the current guided-flow step when it needs
// something other than free text (choice buttons, a multi-select checklist,
// or the consent confirmation). Text steps fall through to ChatInput instead.
export default function ChatbotFormStep({ step, pendingMultiChoice, disabled, onChoose, onToggleMultiChoice, onConfirmMultiChoice, onAcceptConsent }) {
  if (step.inputType === 'choice') {
    return (
      <div className="border-t border-hairline p-3">
        <div className="grid grid-cols-2 gap-2">
          {step.options.map((option) => (
            <button
              key={option.value}
              type="button"
              disabled={disabled}
              onClick={() => onChoose(option)}
              className="focus-ring rounded-xl border border-hairline bg-white px-3 py-2 text-left text-xs font-medium text-charcoal transition-colors hover:border-sea-700/40 disabled:opacity-50"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step.inputType === 'multi-choice') {
    return (
      <div className="border-t border-hairline p-3">
        <div className="grid grid-cols-2 gap-2">
          {step.options.map((option) => {
            const selected = pendingMultiChoice?.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                disabled={disabled}
                aria-pressed={selected}
                onClick={() => onToggleMultiChoice(option)}
                className={cn(
                  'focus-ring flex items-center gap-1.5 rounded-xl border px-3 py-2 text-left text-xs font-medium transition-colors disabled:opacity-50',
                  selected ? 'border-sea-700 bg-sea-50 text-charcoal' : 'border-hairline bg-white text-charcoal hover:border-sea-700/40'
                )}
              >
                {selected && <Check className="h-3 w-3 flex-shrink-0 text-sea-700" />}
                {option.label}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          disabled={disabled}
          onClick={onConfirmMultiChoice}
          className="focus-ring mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-sea-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sea-800 disabled:opacity-60"
        >
          Continue
        </button>
      </div>
    );
  }

  if (step.inputType === 'consent') {
    return (
      <div className="border-t border-hairline p-3">
        <button
          type="button"
          disabled={disabled}
          onClick={onAcceptConsent}
          className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-sea-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sea-800 disabled:opacity-60"
        >
          <ShieldCheck className="h-4 w-4" />
          I Agree & Submit
        </button>
      </div>
    );
  }

  return null;
}
