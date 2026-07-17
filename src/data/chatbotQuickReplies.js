// Predefined quick-reply button sets. `action` values are handled by
// src/hooks/useChatbotFlow.js — keeping them as string constants here
// (rather than inline in components) means the same action can be reused
// across multiple message contexts without duplication.

export const quickReplyActions = {
  SHOW_SERVICES: 'SHOW_SERVICES',
  START_PROJECT_INQUIRY: 'START_PROJECT_INQUIRY',
  GET_QUOTE: 'GET_QUOTE',
  SHOW_PROCESS: 'SHOW_PROCESS',
  VIEW_PORTFOLIO: 'VIEW_PORTFOLIO',
  BOOK_CONSULTATION: 'BOOK_CONSULTATION',
  TALK_TO_TEAM: 'TALK_TO_TEAM',
  RESTART: 'RESTART',
};

// The seven initial options shown after the welcome message.
export const initialQuickReplyIds = [
  'explore-services',
  'start-project',
  'get-quote',
  'our-process',
  'view-portfolio',
  'book-consultation',
  'talk-to-team',
];

export const quickReplies = {
  'explore-services': { id: 'explore-services', label: 'Explore Our Services', action: quickReplyActions.SHOW_SERVICES },
  'start-project': { id: 'start-project', label: 'Start a Project', action: quickReplyActions.START_PROJECT_INQUIRY },
  'get-quote': { id: 'get-quote', label: 'Get a Quote', action: quickReplyActions.GET_QUOTE },
  'our-process': { id: 'our-process', label: 'Our Work Process', action: quickReplyActions.SHOW_PROCESS },
  'view-portfolio': { id: 'view-portfolio', label: 'View Portfolio', action: quickReplyActions.VIEW_PORTFOLIO },
  'book-consultation': { id: 'book-consultation', label: 'Book a Consultation', action: quickReplyActions.BOOK_CONSULTATION },
  'talk-to-team': { id: 'talk-to-team', label: 'Talk to the Team', action: quickReplyActions.TALK_TO_TEAM },
  restart: { id: 'restart', label: 'Restart Conversation', action: quickReplyActions.RESTART },
};

export const fallbackQuickReplies = [quickReplies['explore-services'], quickReplies['start-project'], quickReplies['talk-to-team']];

export const getQuickReplyById = (id) => quickReplies[id];

export default quickReplies;
