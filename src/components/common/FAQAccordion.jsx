import { useState, useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              'overflow-hidden rounded-xl2 border bg-white transition-colors duration-300',
              isOpen ? 'border-sea-700/40' : 'border-hairline'
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="focus-ring flex w-full items-center gap-4 px-5 py-5 text-left text-base font-medium text-charcoal transition-colors hover:bg-sea-50 sm:px-6"
              >
                <span
                  className={cn(
                    'flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300',
                    isOpen ? 'bg-sea-700 text-white' : 'bg-sea-50 text-sea-700'
                  )}
                >
                  <Plus className={cn('h-4 w-4 transition-transform duration-300', isOpen && 'rotate-45')} />
                </span>
                <span className="flex-1">{item.question}</span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 pl-[4.25rem] text-body-sm leading-relaxed text-charcoal-muted sm:px-6 sm:pl-[4.75rem]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
