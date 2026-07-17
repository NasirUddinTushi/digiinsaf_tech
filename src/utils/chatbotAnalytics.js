// Placeholder analytics hooks for the chatbot. No provider is connected yet —
// every function just logs in development so the call sites are already in
// place. Wire up Google Analytics, Plausible, PostHog, etc. inside `track()`
// only; the named event functions below should not need to change.

const isDev = import.meta.env.DEV;

function track(eventName, payload = {}) {
  // TODO: connect a real analytics provider here, e.g.:
  //   window.gtag?.('event', eventName, payload);
  //   window.posthog?.capture(eventName, payload);
  if (isDev) {
    // eslint-disable-next-line no-console
    console.debug('[chatbot analytics]', eventName, payload);
  }
}

export const chatbotAnalytics = {
  chatbotOpened: () => track('chatbot_opened'),
  chatbotClosed: () => track('chatbot_closed'),
  quickReplySelected: (replyId) => track('quick_reply_selected', { replyId }),
  serviceSelected: (serviceSlug) => track('service_selected', { serviceSlug }),
  projectFlowStarted: (flowId) => track('project_flow_started', { flowId }),
  projectInquirySubmitted: (payload) => track('project_inquiry_submitted', payload),
  consultationRequested: (payload) => track('consultation_requested', payload),
  chatbotLinkClicked: (url) => track('chatbot_link_clicked', { url }),
};

export default chatbotAnalytics;
