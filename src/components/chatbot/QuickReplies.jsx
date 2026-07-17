export default function QuickReplies({ replies, onSelect, disabled }) {
  if (!replies?.length) return null;

  return (
    <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Suggested replies">
      {replies.map((reply) => (
        <button
          key={reply.id}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(reply)}
          className="focus-ring rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-500/15 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {reply.label}
        </button>
      ))}
    </div>
  );
}
