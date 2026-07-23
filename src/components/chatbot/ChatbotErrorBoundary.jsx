import { Component } from 'react';
import { MessageCircle } from 'lucide-react';

// Error boundaries must be class components — there is no hook equivalent.
// Keeps a chatbot bug from ever taking down the rest of the website: if
// anything inside throws during render, this shows a small, unobtrusive
// fallback instead of an unhandled crash.
export default class ChatbotErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('[Chatbot] Unexpected error — the widget has been hidden to protect the rest of the site.', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="status"
          className="fixed bottom-5 right-4 z-[95] flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-2.5 text-xs text-charcoal-muted shadow-elevation-md sm:right-6"
        >
          <MessageCircle className="h-4 w-4 text-charcoal-muted" />
          Chat assistant is temporarily unavailable.
        </div>
      );
    }

    return this.props.children;
  }
}
