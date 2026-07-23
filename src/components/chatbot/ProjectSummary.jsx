import { Loader2 } from 'lucide-react';
import chatbotConfig from '@/config/chatbotConfig';
import { chatbotFlows } from '@/data/chatbotFlows';
import { humanizeFieldName, resolveAnswerLabel } from '@/utils/chatbotHelpers';

const SUMMARY_TITLE_BY_FLOW = {
  'project-inquiry': "Here's a summary of your project request:",
  'quote-request': "Here's a summary of your request:",
  'consultation-request': "Here's a summary of your consultation request:",
  'human-handover': "Here's a summary of your message:",
};

export default function ProjectSummary({ flowId, answers, disabled, onSubmit, onEdit, onRestart }) {
  const flow = chatbotFlows[flowId];
  if (!flow) return null;

  const rows = flow.steps
    .filter((step) => answers[step.field] !== undefined && answers[step.field] !== '')
    .map((step) => ({
      label: humanizeFieldName(step.field),
      value: resolveAnswerLabel(step, answers[step.field]),
    }));

  return (
    <div className="mt-2 w-full max-w-[85%] rounded-xl2 border border-hairline bg-paper p-4">
      <p className="mb-3 text-sm font-semibold text-charcoal">{SUMMARY_TITLE_BY_FLOW[flowId] || 'Here is a summary:'}</p>
      <dl className="space-y-1.5">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between gap-3 text-xs">
            <dt className="text-charcoal-muted">{row.label}</dt>
            <dd className="text-right font-medium text-charcoal">{row.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-3 border-t border-hairline pt-3 text-[11px] leading-snug text-charcoal-muted">{chatbotConfig.privacyMessage}</p>

      <div className="mt-3 flex flex-col gap-2">
        <button
          type="button"
          disabled={disabled}
          onClick={onSubmit}
          className="focus-ring flex items-center justify-center gap-2 rounded-xl bg-sea-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sea-800 disabled:opacity-60"
        >
          {disabled && <Loader2 className="h-4 w-4 animate-spin" />}
          Submit Request
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={disabled}
            onClick={onEdit}
            className="focus-ring flex-1 rounded-xl border border-hairline bg-white px-4 py-2 text-xs font-medium text-charcoal hover:border-sea-700/40 disabled:opacity-60"
          >
            Edit Details
          </button>
          <button
            type="button"
            disabled={disabled}
            onClick={onRestart}
            className="focus-ring flex-1 rounded-xl border border-hairline bg-white px-4 py-2 text-xs font-medium text-charcoal hover:border-sea-700/40 disabled:opacity-60"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
