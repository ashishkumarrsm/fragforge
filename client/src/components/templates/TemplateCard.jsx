import Poster from "../poster/Poster";
import Button from "../ui/Button";

export default function TemplateCard({ template, onUse }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-3">
      <Poster tpl={template} className="aspect-[4/4.2]" />
      <div className="mt-3 flex items-center justify-between gap-2 px-1">
        <div className="min-w-0">
          <div className="truncate text-[13px] font-bold">{template.name}</div>
          <div className="mt-1 text-[11px] text-muted">
            {template.category} • {template.size}
          </div>
        </div>
        <Button variant="solid" size="xs" onClick={() => onUse(template)}>
          Use this
        </Button>
      </div>
    </div>
  );
}
