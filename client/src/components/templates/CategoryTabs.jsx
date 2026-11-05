import clsx from "clsx";
import { CATEGORIES } from "../../data/templates";

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="mt-6 flex gap-2 overflow-x-auto rounded-xl border border-line bg-surface p-2">
      {CATEGORIES.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={clsx(
            "shrink-0 rounded-lg px-4 py-2 text-xs transition",
            active === c ? "bg-violet-600 font-bold text-white" : "text-muted hover:bg-elevated hover:text-fg",
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
