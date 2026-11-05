import { ArrowRight } from "lucide-react";

export default function SectionHead({ title, action, onAction }) {
  return (
    <div className="mb-4 mt-8 flex items-center justify-between">
      <h2 className="text-lg font-bold">{title}</h2>
      {action && (
        <button onClick={onAction} className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline">
          {action} <ArrowRight size={13} />
        </button>
      )}
    </div>
  );
}
