import { Pencil, Trash2 } from "lucide-react";
import Poster from "../poster/Poster";
import { getTemplate } from "../../data/templates";
import { timeAgo } from "../../lib/timeAgo";

export default function ProjectCard({ project, onOpen, onRename, onDelete }) {
  const tpl = getTemplate(project.templateId);
  return (
    <div className="rounded-2xl border border-line bg-surface p-3">
      <button onClick={onOpen} className="block w-full text-left">
        <Poster tpl={tpl} />
      </button>
      <div className="mt-3 flex items-start justify-between gap-2 px-1">
        <div className="min-w-0">
          <div className="truncate text-[13px] font-bold">{project.name}</div>
          <div className="mt-1 text-[11px] text-muted">Edited {timeAgo(project.edited)}</div>
        </div>
        {(onRename || onDelete) && (
          <div className="flex shrink-0 gap-1">
            {onRename && (
              <button onClick={onRename} aria-label="Rename" className="rounded-md bg-elevated p-1.5 text-muted hover:text-fg">
                <Pencil size={13} />
              </button>
            )}
            {onDelete && (
              <button onClick={onDelete} aria-label="Delete" className="rounded-md bg-rose-100 p-1.5 text-rose-600 dark:bg-[#351b29] dark:text-rose-300">
                <Trash2 size={13} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
