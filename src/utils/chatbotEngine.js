// Chatbot response-priority engine.
//
// Order (per Digiinsaf chatbot rules — do not send every message to an AI
// API; rule-based/local matches are cheaper and more accurate):
//   1. Match predefined FAQs
//   2. Match service-related keywords
//   3. (continue an active conversation flow — handled by useChatbot
//      BEFORE this engine is consulted, since it needs stateful step info)
//   4. Search the future backend knowledge base
//   5. AI provider fallback (only reachable in 'ai' mode — folded into the
//      same backend call as step 4; the browser never calls an AI API directly)
//   6. Offer contact with the Digiinsaf team
import chatbotConfig from '@/config/chatbotConfig';
import { chatbotFaqs } from '@/data/chatbotFaqs';
import { chatbotServices } from '@/data/chatbotServices';
import { fallbackQuickReplies } from '@/data/chatbotQuickReplies';
import { searchKnowledgeBase } from '@/services/chatbotService';
import { containsSensitiveInfo } from './sanitize';

function normalize(text) {
  return text.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function scoreAgainstKeywords(normalizedInput, keywords = []) {
  return keywords.reduce((score, keyword) => (normalizedInput.includes(keyword.toLowerCase()) ? score + 1 : score), 0);
}

function matchFaq(normalizedInput) {
  let best = null;
  let bestScore = 0;

  for (const faq of chatbotFaqs) {
    if (!faq.isActive) continue;
    const questionScore = normalizedInput.includes(normalize(faq.question)) ? 3 : 0;
    const keywordScore = scoreAgainstKeywords(normalizedInput, faq.keywords);
    const score = questionScore + keywordScore;
    if (score > bestScore) {
      best = faq;
      bestScore = score;
    }
  }

  return bestScore > 0 ? best : null;
}

function matchService(normalizedInput) {
  let best = null;
  let bestScore = 0;

  for (const service of chatbotServices) {
    if (!service.isActive) continue;
    const nameScore = normalizedInput.includes(normalize(service.serviceName)) ? 2 : 0;
    const questionScore = (service.commonQuestions || []).reduce(
      (score, question) => (normalizedInput.includes(normalize(question)) ? score + 2 : score),
      0
    );
    const score = nameScore + questionScore;
    if (score > bestScore) {
      best = service;
      bestScore = score;
    }
  }

  return bestScore > 0 ? best : null;
}

const SAFETY_NOTICE =
  "For your safety, please don't share passwords, one-time codes, card numbers or other sensitive information here or anywhere else online. Digiinsaf will never ask you for this.";

/**
 * Resolves a free-text visitor message into a response, following the
 * priority order above. Does NOT handle step 3 (active flow continuation) —
 * call this only when there is no in-progress flow.
 */
export async function resolveMessage(rawText, { conversationId } = {}) {
  const text = rawText || '';

  if (containsSensitiveInfo(text)) {
    return { type: 'safety', text: SAFETY_NOTICE, quickReplies: fallbackQuickReplies };
  }

  const normalizedInput = normalize(text);

  // 1. Predefined FAQs
  const faq = matchFaq(normalizedInput);
  if (faq) {
    return {
      type: 'faq',
      text: faq.answer,
      relatedPageUrl: faq.relatedPageUrl,
      suggestedFollowUps: faq.suggestedFollowUps,
      sourceId: faq.id,
    };
  }

  // 2. Service keywords
  const service = matchService(normalizedInput);
  if (service) {
    return {
      type: 'service',
      text: `${service.shortDescription} You can see the full details on the ${service.serviceName} page.`,
      relatedPageUrl: service.pageUrl,
      sourceId: service.id,
    };
  }

  // 4 & 5. Future knowledge base / AI fallback (only active in api/ai mode
  // with a backend configured — otherwise this resolves to null immediately)
  if (chatbotConfig.mode !== 'mock') {
    const knowledgeBaseResult = await searchKnowledgeBase(text, conversationId);
    if (knowledgeBaseResult?.answer) {
      return {
        type: 'knowledge-base',
        text: knowledgeBaseResult.answer,
        relatedPageUrl: knowledgeBaseResult.relatedPageUrl || null,
        sourceId: knowledgeBaseResult.sourceId || null,
      };
    }
  }

  // 6. Fallback — never invent a confident answer when nothing matched.
  return { type: 'fallback', text: chatbotConfig.fallbackMessage, quickReplies: fallbackQuickReplies };
}

export default resolveMessage;
