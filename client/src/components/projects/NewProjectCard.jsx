import { Plus } from "lucide-react";

export default function NewProjectCard({ onClick }) {
  return (
    <button onClick={onClick} className="rounded-2xl border border-line bg-surface p-3 text-left">
      <div className="grid aspect-[4/3] place-items-center rounded-lg border border-dashed border-primary/50 bg-soft text-center">
        <div>
          <Plus className="mx-auto text-brand" size={30} />
          <div className="mt-1 text-[13px] text-brand">Create something new</div>
        </div>
      </div>
      <div className="mt-3 px-1">
        <div className="text-[13px] font-bold">Start from a blank canvas</div>
        <div className="mt-1 text-[11px] text-muted">Custom dimensions</div>
      </div>
    </button>
  );
}
