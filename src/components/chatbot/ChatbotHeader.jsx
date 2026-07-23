import { X, Minus, RotateCcw, Circle } from 'lucide-react';
import Logo from '@/components/common/Logo';

export default function ChatbotHeader({ config, onMinimize, onClose, onRestart }) {
  return (
    <header className="flex items-center justify-between bg-sea-950 px-4 py-3.5">
      <div className="flex items-center gap-2.5">
        <Logo />
        <div>
          <p className="text-sm font-semibold text-white">{config.chatbotName}</p>
          <p className="flex items-center gap-1 text-[11px] text-white/60">
            <Circle className="h-2 w-2 fill-signal-green text-signal-green" aria-hidden="true" />
            <span className="sr-only">Online status:</span>
            {config.statusLabel} · {config.statusSubLabel}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onRestart}
          aria-label="Restart conversation"
          title="Restart conversation"
          className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onMinimize}
          aria-label="Minimize chat"
          title="Minimize"
          className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
        >
          <Minus className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
