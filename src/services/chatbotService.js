// Chatbot service layer — orchestrates content and submissions for the
// chatbot. UI components and the chatbot hooks never touch localStorage,
// fetch, or mode-switching directly; they call the functions exported here.
//
// Provider/AI-facing calls (fetchChatbotConfig, sendMessageToAI,
// submitProjectInquiry, submitConsultationRequest) are delegated to
// src/services/chatbotApi.js, which is the single boundary that would
// change to connect a real backend or AI provider. This file additionally
// covers content (FAQs/services) and conversation/feedback persistence,
// which use the site's general backend (VITE_API_BASE_URL) once one exists.
//
// Endpoints this file is written against (none exist yet):
//   GET   /api/chatbot/faqs
//   GET   /api/chatbot/services
//   GET   /api/chatbot/suggested-questions
//   POST  /api/chatbot/conversations
//   PATCH /api/chatbot/conversations/:id
//   POST  /api/chatbot/feedback
// (config/message/project-inquiries/consultation-requests live in chatbotApi.js)

import { apiRequest } from './apiClient';
import chatbotConfig from '@/config/chatbotConfig';
import { chatbotFaqs } from '@/data/chatbotFaqs';
import { chatbotServices } from '@/data/chatbotServices';
import { fetchChatbotConfig, sendMessageToAI, submitProjectInquiry, submitConsultationRequest } from './chatbotApi';

export { fetchChatbotConfig, sendMessageToAI, submitProjectInquiry, submitConsultationRequest };

const ENDPOINTS = {
  faqs: '/api/chatbot/faqs',
  services: '/api/chatbot/services',
  suggestedQuestions: '/api/chatbot/suggested-questions',
  conversations: '/api/chatbot/conversations',
  feedback: '/api/chatbot/feedback',
};

const MOCK_DELAY_MS = 400;

const isMockMode = () => chatbotConfig.mode === 'mock';
const isBackendConfigured = () => Boolean(import.meta.env.VITE_API_BASE_URL);

function wait(ms = MOCK_DELAY_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function mockResult(data) {
  return { success: true, mocked: true, devMessage: chatbotConfig.devModeMessage, data };
}

// A handful of curated, high-value questions surfaced as starter prompts.
const SUGGESTED_QUESTION_IDS = [
  'services-what-services',
  'planning-how-to-start',
  'planning-cost',
  'company-international-clients',
  'planning-mvp',
];

export async function fetchChatbotFaqs() {
  if (isMockMode() || !isBackendConfigured()) {
    await wait();
    return chatbotFaqs.filter((faq) => faq.isActive);
  }
  try {
    return await apiRequest(ENDPOINTS.faqs);
  } catch {
    return chatbotFaqs.filter((faq) => faq.isActive);
  }
}

export async function fetchChatbotServices() {
  if (isMockMode() || !isBackendConfigured()) {
    await wait();
    return chatbotServices.filter((service) => service.isActive);
  }
  try {
    return await apiRequest(ENDPOINTS.services);
  } catch {
    return chatbotServices.filter((service) => service.isActive);
  }
}

export async function fetchSuggestedQuestions() {
  if (isMockMode() || !isBackendConfigured()) {
    await wait();
    return SUGGESTED_QUESTION_IDS.map((id) => chatbotFaqs.find((faq) => faq.id === id)).filter(Boolean);
  }
  try {
    return await apiRequest(ENDPOINTS.suggestedQuestions);
  } catch {
    return SUGGESTED_QUESTION_IDS.map((id) => chatbotFaqs.find((faq) => faq.id === id)).filter(Boolean);
  }
}

/**
 * Step 4/5 of the response priority order: the future backend knowledge
 * base and AI fallback, folded into one call — see chatbotApi.js ->
 * sendMessageToAI(). Returns null when nothing is configured, so the
 * caller (chatbotEngine.js) falls through to the fixed fallback response.
 */
export async function searchKnowledgeBase(query, conversationId) {
  return sendMessageToAI(query, conversationId);
}

/**
 * Creates or updates the backend conversation record. Until a backend
 * exists, conversation persistence is local only (see chatbotStorage.js).
 */
export async function saveConversation(conversation) {
  if (isMockMode() || !isBackendConfigured()) {
    await wait(150);
    return mockResult({ conversationId: conversation.conversationId || `local-${Date.now()}` });
  }
  try {
    if (conversation.conversationId) {
      return await apiRequest(`${ENDPOINTS.conversations}/${conversation.conversationId}`, {
        method: 'PATCH',
        body: conversation,
      });
    }
    return await apiRequest(ENDPOINTS.conversations, { method: 'POST', body: conversation });
  } catch {
    return { success: false, mocked: false };
  }
}

/**
 * Expected payload: { fullName, email, phone, summary, preferredContactMethod,
 *   conversationId, source, consentAccepted, createdAt }
 * Simulated for now — no live handover exists.
 */
export async function requestHumanFollowUp(payload) {
  if (isMockMode() || !isBackendConfigured()) {
    await wait(700);
    return mockResult({ referenceId: `HANDOVER-${Date.now()}` });
  }
  return apiRequest(ENDPOINTS.conversations, { method: 'POST', body: { ...payload, status: 'new', requiresHuman: true } });
}

/**
 * Expected payload: { messageId, conversationId, rating, optionalComment, createdAt }
 */
export async function submitMessageFeedback(payload) {
  if (isMockMode() || !isBackendConfigured()) {
    await wait(150);
    return mockResult(null);
  }
  return apiRequest(ENDPOINTS.feedback, { method: 'POST', body: payload });
}
