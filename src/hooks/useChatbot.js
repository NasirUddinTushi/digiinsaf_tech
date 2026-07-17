import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import chatbotConfig from '@/config/chatbotConfig';
import { chatbotServices } from '@/data/chatbotServices';
import { projects, projectCategories } from '@/data/projects';
import { processSteps } from '@/data/process';
import { quickReplyActions, quickReplies, fallbackQuickReplies, initialQuickReplyIds } from '@/data/chatbotQuickReplies';
import { resolveMessage } from '@/utils/chatbotEngine';
import { sanitizeUserInput } from '@/utils/sanitize';
import { generateMessageId, generateConversationId } from '@/utils/chatbotHelpers';
import { FLOW_SCHEMAS } from '@/utils/chatbotValidation';
import chatbotAnalytics from '@/utils/chatbotAnalytics';
import { submitProjectInquiry, submitConsultationRequest, requestHumanFollowUp, submitMessageFeedback, saveConversation, fetchSuggestedQuestions } from '@/services/chatbotService';
import { useChatbotStorage } from './useChatbotStorage';
import { useChatbotFlow } from './useChatbotFlow';

const FLOW_SUBMIT_FNS = {
  'project-inquiry': submitProjectInquiry,
  'quote-request': submitProjectInquiry,
  'consultation-request': submitConsultationRequest,
  'human-handover': requestHumanFollowUp,
};

const CONFIRMATION_BY_FLOW = {
  'project-inquiry': 'Thank you! Your project request has been received successfully. Our team will review it and contact you shortly.',
  'quote-request': 'Thank you! Your project request has been received successfully. Our team will review it and prepare a suitable estimate.',
  'consultation-request': 'Your consultation request has been submitted. The Digiinsaf team will contact you to confirm the meeting.',
  'human-handover': 'Thanks — I have passed your message to the Digiinsaf team. They will be in touch shortly. This chat has not connected you to a live agent.',
};

const PORTFOLIO_CATEGORY_LABELS = {
  all: 'All',
  web: 'Web Development',
  mobile: 'Mobile Apps',
  saas: 'SaaS',
  'ui-ux': 'UI/UX',
  ai: 'AI Solutions',
  ecommerce: 'E-commerce',
};

function buildQuickReplies(ids) {
  return ids.map((id) => quickReplies[id]).filter(Boolean);
}

function serviceMenuReplies() {
  return [
    ...chatbotServices.filter((s) => s.isActive).map((s) => ({ id: s.slug, label: s.serviceName, action: 'SELECT_SERVICE', payload: s.slug })),
    { id: 'not-sure', label: 'I’m Not Sure', action: 'SERVICE_NOT_SURE' },
  ];
}

function portfolioCategoryReplies() {
  return projectCategories.map((category) => ({
    id: `portfolio-${category.key}`,
    label: PORTFOLIO_CATEGORY_LABELS[category.key] || category.label,
    action: 'SELECT_PORTFOLIO_CATEGORY',
    payload: category.key,
  }));
}

export function useChatbot({ navigate } = {}) {
  const messagesRef = useRef([]);

  const [uiState, setUiState] = useState('closed'); // 'closed' | 'open' | 'minimized'
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const [submissionState, setSubmissionState] = useState('idle'); // idle | loading | success | error
  const storage = useChatbotStorage();
  const [conversationId] = useState(() => storage.restored?.conversationId || generateConversationId());

  const pushMessage = useCallback((partial) => {
    setMessages((prev) => [
      ...prev,
      {
        id: generateMessageId(),
        sender: partial.role === 'user' ? 'user' : 'assistant',
        type: partial.type || 'text',
        content: partial.text || '',
        options: partial.quickReplies || [],
        timestamp: new Date().toISOString(),
        metadata: partial,
      },
    ]);
  }, []);

  const updateLastMessage = useCallback((updater) => {
    setMessages((prev) => {
      if (prev.length === 0) return prev;
      const next = [...prev];
      const last = next[next.length - 1];
      next[next.length - 1] = {
        ...last,
        content: updater.text ?? last.content,
        metadata: { ...last.metadata, ...updater },
      };
      return next;
    });
  }, []);

  const flow = useChatbotFlow({
    onMessage: (partial) => pushMessage(partial),
    onFlowComplete: async (flowId, answers) => {
      const payload = {
        ...answers,
        source: 'website_chatbot',
        conversationId,
        consentAccepted: true,
        createdAt: new Date().toISOString(),
      };

      if ((flowId === 'project-inquiry' || flowId === 'quote-request') && typeof payload.selectedFeatures === 'string') {
        payload.selectedFeatures = payload.selectedFeatures.split(',').map((f) => f.trim()).filter(Boolean);
      }
      if ((flowId === 'project-inquiry' || flowId === 'quote-request') && !Array.isArray(payload.selectedFeatures)) {
        payload.selectedFeatures = [];
      }

      const schema = FLOW_SCHEMAS[flowId];
      const result = schema.safeParse(payload);

      if (!result.success) {
        setSubmissionState('error');
        pushMessage({
          text: 'A couple of details did not look quite right, so I was not able to submit this. Would you like to start over?',
          quickReplies: buildQuickReplies(['restart', 'talk-to-team']),
        });
        return;
      }

      setSubmissionState('loading');
      setIsTyping(true);
      try {
        const submitFn = FLOW_SUBMIT_FNS[flowId];
        const response = await submitFn(result.data);
        await saveConversation({ conversationId, messages: messagesRef.current, status: 'new' }).catch(() => null);

        setSubmissionState('success');
        pushMessage({ text: CONFIRMATION_BY_FLOW[flowId] });
        if (response?.mocked && response?.devMessage) {
          pushMessage({ text: response.devMessage, isDevNote: true });
        }

        if (flowId === 'project-inquiry' || flowId === 'quote-request') {
          chatbotAnalytics.projectInquirySubmitted(result.data);
          pushMessage({
            text: 'You can also:',
            quickReplies: [
              { id: 'go-contact', label: 'Go to Contact Page', action: 'NAVIGATE', payload: '/contact' },
              { id: 'view-services', label: 'View Services', action: quickReplyActions.SHOW_SERVICES },
              { id: 'return-home', label: 'Return Home', action: 'NAVIGATE', payload: '/' },
            ],
          });
        } else if (flowId === 'consultation-request') {
          chatbotAnalytics.consultationRequested(result.data);
          pushMessage({ text: 'Is there anything else I can help with?', quickReplies: buildQuickReplies(initialQuickReplyIds) });
        } else {
          pushMessage({ text: 'Is there anything else I can help with?', quickReplies: buildQuickReplies(initialQuickReplyIds) });
        }
      } catch {
        setSubmissionState('error');
        pushMessage({
          text: 'That did not go through. Please try again, or reach the team directly.',
          quickReplies: buildQuickReplies(['talk-to-team']),
        });
      } finally {
        setIsTyping(false);
      }
    },
  });

  // ---- restore or greet ----------------------------------------------------
  // Guarded with a ref (rather than relying on the empty dep array alone)
  // so this can't double the greeting under React StrictMode's dev-mode
  // double-invoked effects, or any future remount.
  const hasInitializedRef = useRef(false);
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    if (storage.restored?.messages?.length) {
      setMessages(storage.restored.messages);
      flow.restoreFlow(storage.restored.flow);
    } else {
      pushMessage({ text: chatbotConfig.welcomeMessage, quickReplies: buildQuickReplies(initialQuickReplyIds) });
    }
    fetchSuggestedQuestions().then(setSuggestedQuestions).catch(() => setSuggestedQuestions([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) return;
    storage.persist({
      conversationId,
      messages,
      flow: { activeFlow: flow.activeFlow, awaitingSummary: flow.awaitingSummary },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, flow.activeFlow, flow.awaitingSummary, conversationId]);

  // ---- open / close / minimize ---------------------------------------------
  const open = useCallback(() => {
    setUiState('open');
    setHasOpenedOnce(true);
    chatbotAnalytics.chatbotOpened();
  }, []);
  const close = useCallback(() => {
    setUiState('closed');
    chatbotAnalytics.chatbotClosed();
  }, []);
  const minimize = useCallback(() => setUiState('minimized'), []);
  const toggle = useCallback(() => setUiState((prev) => (prev === 'open' ? 'closed' : 'open')), []);

  // ---- navigation ------------------------------------------------------------
  const navigateTo = useCallback(
    (url) => {
      chatbotAnalytics.chatbotLinkClicked(url);
      minimize();
      navigate?.(url);
    },
    [navigate, minimize]
  );

  // ---- content flows: services / portfolio / process / talk to team --------
  const showServiceMenu = useCallback(() => {
    pushMessage({ text: 'What type of solution are you looking for?', quickReplies: serviceMenuReplies() });
  }, [pushMessage]);

  const showServiceDetail = useCallback(
    (slug) => {
      const service = chatbotServices.find((s) => s.slug === slug);
      if (!service) return;
      chatbotAnalytics.serviceSelected(slug);
      const deliverables = service.keyDeliverables.map((item) => `• ${item}`).join('\n');
      pushMessage({
        text: `${service.shortDescription}\n\nWe can help with:\n${deliverables}\n\nWould you like to view the service details or tell us about your project?`,
        relatedPageUrl: service.pageUrl,
        quickReplies: [
          { id: 'view-service', label: 'View Service', action: 'NAVIGATE', payload: service.pageUrl },
          { id: 'start-project-from-service', label: 'Start a Project', action: quickReplyActions.START_PROJECT_INQUIRY },
          { id: 'back-to-services', label: 'Back to Services', action: 'BACK_TO_SERVICES' },
        ],
      });
    },
    [pushMessage]
  );

  const showPortfolio = useCallback(() => {
    pushMessage({ text: 'What kind of work would you like to see?', quickReplies: portfolioCategoryReplies() });
  }, [pushMessage]);

  const showPortfolioResults = useCallback(
    (categoryKey) => {
      const filtered = categoryKey === 'all' ? projects : projects.filter((p) => p.categories.includes(categoryKey));
      const featured = filtered.slice(0, 3);
      pushMessage({
        text: featured.length ? 'Here are a few projects that might be relevant:' : 'No projects in that category yet — here are a few others:',
        type: 'project-card',
        projectCards: (featured.length ? featured : projects.slice(0, 3)).map((p) => ({
          slug: p.slug,
          title: p.title,
          industry: p.industry,
          summary: p.summary,
        })),
        quickReplies: buildQuickReplies(['view-portfolio', 'start-project']),
      });
    },
    [pushMessage]
  );

  const [processStepIndex, setProcessStepIndex] = useState(0);
  const showProcessStep = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(index, processSteps.length - 1));
      setProcessStepIndex(clamped);
      const step = processSteps[clamped];
      pushMessage({
        type: 'process-step',
        text: `${step.title}\n\n${step.summary}`,
        processStepIndex: clamped,
        processStepCount: processSteps.length,
      });
    },
    [pushMessage]
  );

  const showProcess = useCallback(() => {
    setProcessStepIndex(0);
    showProcessStep(0);
  }, [showProcessStep]);

  const navigateProcessStep = useCallback(
    (direction) => {
      const nextIndex = processStepIndex + direction;
      if (nextIndex < 0 || nextIndex >= processSteps.length) return;
      setProcessStepIndex(nextIndex);
      const step = processSteps[nextIndex];
      updateLastMessage({ text: `${step.title}\n\n${step.summary}`, processStepIndex: nextIndex });
    },
    [processStepIndex, updateLastMessage]
  );

  const showTalkToTeam = useCallback(() => {
    pushMessage({
      type: 'contact-card',
      text: 'You can reach the Digiinsaf team directly, or send a message here and we will get back to you.',
      contactCard: { email: chatbotConfig.supportEmail, whatsapp: chatbotConfig.whatsapp },
      quickReplies: [
        { id: 'send-message', label: 'Send a Message', action: 'START_HANDOVER' },
        { id: 'go-contact-page', label: 'Go to Contact Page', action: 'NAVIGATE', payload: '/contact' },
      ],
    });
  }, [pushMessage]);

  const showQuoteIntro = useCallback(() => {
    pushMessage({
      text: 'Project pricing depends on scope, features, design complexity, integrations and delivery requirements. I can collect a few details to help Digiinsaf prepare a suitable estimate.',
    });
    flow.startFlow('quote-request');
  }, [pushMessage, flow]);

  const restart = useCallback(() => {
    flow.cancelFlow();
    pushMessage({ text: 'No problem — starting over.' });
    pushMessage({ text: chatbotConfig.welcomeMessage, quickReplies: buildQuickReplies(initialQuickReplyIds) });
  }, [pushMessage, flow]);

  // ---- quick reply dispatch ---------------------------------------------------
  const handleAction = useCallback(
    (action, payload) => {
      switch (action) {
        case quickReplyActions.SHOW_SERVICES:
          return showServiceMenu();
        case 'SELECT_SERVICE':
          return showServiceDetail(payload);
        case 'SERVICE_NOT_SURE':
          return pushMessage({
            text: 'No problem — tell me a little about what you are trying to build and I will point you in the right direction, or we can start a project inquiry.',
            quickReplies: buildQuickReplies(['start-project', 'talk-to-team']),
          });
        case 'BACK_TO_SERVICES':
          return showServiceMenu();
        case quickReplyActions.START_PROJECT_INQUIRY:
          return flow.startFlow('project-inquiry');
        case quickReplyActions.GET_QUOTE:
          return showQuoteIntro();
        case quickReplyActions.SHOW_PROCESS:
          return showProcess();
        case quickReplyActions.VIEW_PORTFOLIO:
          return showPortfolio();
        case 'SELECT_PORTFOLIO_CATEGORY':
          return showPortfolioResults(payload);
        case quickReplyActions.BOOK_CONSULTATION:
          return flow.startFlow('consultation-request');
        case quickReplyActions.TALK_TO_TEAM:
          return showTalkToTeam();
        case 'START_HANDOVER':
          return flow.startFlow('human-handover');
        case 'NAVIGATE':
          return navigateTo(payload);
        case quickReplyActions.RESTART:
          return restart();
        default:
          return undefined;
      }
    },
    [showServiceMenu, showServiceDetail, pushMessage, flow, showQuoteIntro, showProcess, showPortfolio, showPortfolioResults, showTalkToTeam, navigateTo, restart]
  );

  const selectQuickReply = useCallback(
    (reply) => {
      pushMessage({ role: 'user', text: reply.label });
      chatbotAnalytics.quickReplySelected(reply.id);
      handleAction(reply.action, reply.payload);
    },
    [pushMessage, handleAction]
  );

  // ---- free-text send ---------------------------------------------------------
  const sendMessage = useCallback(
    async (rawText) => {
      const text = sanitizeUserInput(rawText);
      if (!text) return;

      if (flow.currentStep) {
        // Free text answers the current flow step directly — this also lets
        // a visitor type past a multi-choice step instead of clicking options.
        flow.submitTextAnswer(text);
        return;
      }

      pushMessage({ role: 'user', text });
      setIsTyping(true);
      try {
        const response = await resolveMessage(text, { conversationId });
        setIsTyping(false);
        if (response.type === 'service' && response.sourceId) {
          chatbotAnalytics.serviceSelected(response.sourceId);
        }
        pushMessage({
          text: response.text,
          relatedPageUrl: response.relatedPageUrl,
          quickReplies: response.quickReplies || undefined,
          suggestedFollowUps: response.suggestedFollowUps,
          feedbackEnabled: response.type === 'faq' || response.type === 'service' || response.type === 'knowledge-base',
        });
      } catch {
        setIsTyping(false);
        pushMessage({ text: chatbotConfig.fallbackMessage, quickReplies: fallbackQuickReplies });
      }
    },
    [flow, pushMessage, conversationId]
  );

  const submitFeedback = useCallback(
    (messageId, rating) => {
      setMessages((prev) => prev.map((m) => (m.id === messageId ? { ...m, metadata: { ...m.metadata, feedback: rating } } : m)));
      submitMessageFeedback({ messageId, conversationId, rating, optionalComment: null, createdAt: new Date().toISOString() }).catch(() => null);
    },
    [conversationId]
  );

  const clearConversation = useCallback(() => {
    storage.clear();
    flow.cancelFlow();
    setMessages([]);
    pushMessage({ text: chatbotConfig.welcomeMessage, quickReplies: buildQuickReplies(initialQuickReplyIds) });
  }, [storage, flow, pushMessage]);

  return useMemo(
    () => ({
      uiState,
      hasOpenedOnce,
      open,
      close,
      minimize,
      toggle,
      messages,
      isTyping,
      submissionState,
      currentStep: flow.currentStep,
      awaitingSummary: flow.awaitingSummary,
      activeFlow: flow.activeFlow,
      suggestedQuestions,
      sendMessage,
      selectQuickReply,
      selectChoiceAnswer: flow.submitChoiceAnswer,
      toggleMultiChoiceOption: flow.toggleMultiChoiceOption,
      confirmMultiChoiceStep: flow.confirmMultiChoiceStep,
      acceptConsent: flow.acceptConsent,
      confirmSummary: flow.confirmSummary,
      editSummary: flow.editSummary,
      navigateProcessStep,
      navigateTo,
      submitFeedback,
      clearConversation,
      restart,
      config: chatbotConfig,
    }),
    [
      uiState,
      hasOpenedOnce,
      open,
      close,
      minimize,
      toggle,
      messages,
      isTyping,
      submissionState,
      flow.currentStep,
      flow.awaitingSummary,
      flow.activeFlow,
      flow.submitChoiceAnswer,
      flow.toggleMultiChoiceOption,
      flow.confirmMultiChoiceStep,
      flow.acceptConsent,
      flow.confirmSummary,
      flow.editSummary,
      suggestedQuestions,
      sendMessage,
      selectQuickReply,
      navigateProcessStep,
      navigateTo,
      submitFeedback,
      clearConversation,
      restart,
    ]
  );
}

export default useChatbot;
