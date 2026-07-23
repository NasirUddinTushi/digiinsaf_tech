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
          className="focus-ring rounded-full border border-sea-100 bg-sea-50 px-3.5 py-1.5 text-xs font-medium text-sea-700 transition-colors hover:bg-sea-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {reply.label}
        </button>
      ))}
    </div>
  );
}
