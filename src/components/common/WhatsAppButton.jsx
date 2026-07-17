import { motion } from 'framer-motion';
import { WhatsappGlyph } from './SocialIcons';
import siteConfig from '@/config/siteConfig';

const DEFAULT_MESSAGE = "Hi Digiinsaf, I'd like to talk about a project.";

// Standalone floating WhatsApp shortcut, independent of the chatbot widget —
// mounted globally (see src/App.jsx) at bottom-left so it never overlaps the
// chat launcher, which sits bottom-right.
export default function WhatsAppButton() {
  const digitsOnly = siteConfig.contact.whatsapp.replace(/\D/g, '');
  const href = `https://wa.me/${digitsOnly}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileTap={{ scale: 0.94 }}
      aria-label="Chat with Digiinsaf on WhatsApp"
      title="Chat on WhatsApp"
      className="focus-ring fixed bottom-5 left-4 z-[95] flex h-14 w-14 items-center justify-center rounded-full bg-signal-green text-white shadow-glow sm:left-6"
    >
      <WhatsappGlyph className="h-7 w-7" />
    </motion.a>
  );
}
