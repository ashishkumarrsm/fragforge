import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { changeTemplate } from "../../features/editor/editorSlice";

export default function TemplateDrawer() {
  const dispatch = useDispatch();
  const templates = useSelector((s) => s.templates.items);
  const activeId = useSelector((s) => s.editor.templateId);
  return (
    <aside className="border-b border-line bg-panel p-4 lg:w-64 lg:border-b-0 lg:border-r">
      <div className="text-sm font-bold">Templates</div>
      <p className="mb-3 text-[11px] text-muted">Choose a starting point</p>
      <div className="flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-2 lg:overflow-visible">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => dispatch(changeTemplate(t))}
            title={t.name}
            className={clsx(
              "w-28 shrink-0 overflow-hidden rounded-lg border-2 lg:w-auto",
              activeId === t.id ? "border-primary-light" : "border-transparent",
            )}
          >
            <div className={clsx("grid aspect-[3/4] place-items-center bg-linear-to-br", t.grad)}>
              <span className="px-1 text-center font-display text-[11px] font-black leading-tight text-white">{t.title}</span>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
