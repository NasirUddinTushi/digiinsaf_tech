import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';
import { fadeUpViewport } from '@/utils/motionVariants';

// Promotes the existing chatbot widget (mounted globally in App.jsx) —
// this dispatches a DOM event the widget listens for (see
// ChatbotWidget.jsx) rather than rendering a second chat interface.
function openChatbot() {
  window.dispatchEvent(new Event('digiinsafe:open-chatbot'));
}

export default function DigiAssistantPromo() {
  return (
    <Section tone="light" spacing="tight">
      <motion.div
        {...fadeUpViewport}
        className="surface-card flex flex-col items-center justify-between gap-6 p-6 text-center sm:flex-row sm:p-8 sm:text-left"
      >
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl2 bg-cta-gradient text-white shadow-glow">
            <MessageCircle className="h-6 w-6" />
          </span>
          <div>
            <p className="text-lg font-semibold text-white">Not sure which service you need?</p>
            <p className="text-body-sm text-muted-onlight">Ask Digi Assistant — it can point you to the right starting point.</p>
          </div>
        </div>
        <Button onClick={openChatbot} variant="primary" size="md" className="w-full sm:w-auto">
          Open Digi Assistant
          <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </Section>
  );
}
