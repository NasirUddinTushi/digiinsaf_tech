import { ArrowUpRight, ArrowLeft, ArrowRight, FlaskConical, Mail } from 'lucide-react';
import QuickReplies from './QuickReplies';
import ChatFeedbackButtons from './ChatFeedbackButtons';
import ProjectSummary from './ProjectSummary';
import { WhatsappGlyph } from '@/components/common/SocialIcons';
import { formatMessageTimestamp } from '@/utils/chatbotHelpers';
import { cn } from '@/utils/cn';

// Navigating from inside the chat uses chatbot.navigateTo(url) — a plain
// <Link> would fire its own navigation too, double-triggering the route
// change, so these are buttons styled to look like links.
function ChatLinkButton({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus-ring inline-flex items-center gap-1 rounded text-xs font-medium text-cyan-400 hover:text-cyan-300"
    >
      {children}
      <ArrowUpRight className="h-3 w-3" />
    </button>
  );
}

export default function ChatMessage({ message, chatbot }) {
  const isUser = message.sender === 'user';
  const meta = message.metadata || {};

  if (meta.isDevNote) {
    return (
      <div className="flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3.5 py-2.5 text-xs text-amber-300">
        <FlaskConical className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
        <span>{message.content}</span>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col', isUser ? 'items-end' : 'items-start')}>
      <span className="sr-only">{isUser ? 'You said:' : 'Digi Assistant said:'}</span>

      {message.content && (
        <div
          className={cn(
            'max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
            isUser ? 'rounded-br-sm bg-cta-gradient text-white' : 'rounded-bl-sm bg-white/[0.06] text-white'
          )}
        >
          {/* Plain-text rendering only — never dangerouslySetInnerHTML for visitor or bot content. */}
          {message.content}
        </div>
      )}

      <time dateTime={message.timestamp} className="mt-1 px-1 text-[10px] text-graphite-400">
        {formatMessageTimestamp(message.timestamp)}
      </time>

      {meta.relatedPageUrl && !isUser && (
        <div className="-mt-0.5 mb-1.5">
          <ChatLinkButton onClick={() => chatbot.navigateTo(meta.relatedPageUrl)}>View page</ChatLinkButton>
        </div>
      )}

      {message.type === 'project-card' && meta.projectCards && (
        <div className="mt-2 grid w-full max-w-[85%] gap-2">
          {meta.projectCards.map((project) => (
            <div key={project.slug} className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-graphite-400">{project.industry}</p>
              <p className="mt-0.5 text-sm font-semibold text-white">{project.title}</p>
              <p className="mt-1 text-xs text-graphite-500">{project.summary}</p>
              <div className="mt-2">
                <ChatLinkButton onClick={() => chatbot.navigateTo(`/work/${project.slug}`)}>View Case Study</ChatLinkButton>
              </div>
            </div>
          ))}
        </div>
      )}

      {message.type === 'contact-card' && meta.contactCard && (
        <div className="mt-2 w-full max-w-[85%] space-y-2 rounded-xl border border-white/10 bg-white/[0.05] p-3 text-xs text-graphite-500">
          <p className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-cyan-400" /> {meta.contactCard.email}
          </p>
          <p className="flex items-center gap-2">
            <WhatsappGlyph className="h-3.5 w-3.5 text-signal-green" /> {meta.contactCard.whatsapp}
          </p>
        </div>
      )}

      {message.type === 'process-step' && (
        <>
          <div className="mt-1 flex w-full max-w-[85%] items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => chatbot.navigateProcessStep(-1)}
              disabled={meta.processStepIndex === 0}
              aria-label="Previous step"
              className="focus-ring flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white disabled:opacity-40"
            >
              <ArrowLeft className="h-3 w-3" /> Previous
            </button>
            <span className="text-[11px] text-graphite-400">
              Step {meta.processStepIndex + 1} of {meta.processStepCount}
            </span>
            <button
              type="button"
              onClick={() => chatbot.navigateProcessStep(1)}
              disabled={meta.processStepIndex >= meta.processStepCount - 1}
              aria-label="Next step"
              className="focus-ring flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white disabled:opacity-40"
            >
              Next <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          <div className="mt-1.5">
            <ChatLinkButton onClick={() => chatbot.navigateTo('/process')}>View Complete Process</ChatLinkButton>
          </div>
        </>
      )}

      {message.type === 'summary' && (
        <ProjectSummary
          flowId={meta.flowId}
          answers={meta.answers}
          disabled={chatbot.submissionState === 'loading'}
          onSubmit={chatbot.confirmSummary}
          onEdit={chatbot.editSummary}
          onRestart={chatbot.restart}
        />
      )}

      {meta.suggestedFollowUps?.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {meta.suggestedFollowUps.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => chatbot.sendMessage(question)}
              className="focus-ring rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-graphite-500 transition-colors hover:border-cyan-400/40 hover:text-white"
            >
              {question}
            </button>
          ))}
        </div>
      )}

      {message.options?.length > 0 && <QuickReplies replies={message.options} onSelect={chatbot.selectQuickReply} />}

      {meta.feedbackEnabled && (
        <ChatFeedbackButtons feedback={meta.feedback} onRate={(rating) => chatbot.submitFeedback(message.id, rating)} />
      )}
    </div>
  );
}
