import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { setField } from "../../features/editor/editorSlice";
import { getTemplate } from "../../data/templates";
import { FONTS } from "../../data/fonts";
import Button from "../ui/Button";

const field = "w-full rounded-lg border border-line bg-elevated px-3 py-2.5 text-sm text-fg outline-none focus:border-primary";
const label = "block text-[11px] text-muted";

export default function PropertiesPanel() {
  const dispatch = useDispatch();
  const { text, font, size, weight, color, align, opacity, templateId } = useSelector((s) => s.editor);
  const set = (key) => (e) => {
    const v = e.target.value;
    dispatch(setField({ key, value: ["size", "weight", "opacity"].includes(key) ? Number(v) : v }));
  };

  return (
    <aside className="space-y-5 border-t border-line bg-panel p-5 lg:w-75 lg:border-l lg:border-t-0">
      <div>
        <div className="text-sm font-bold">Properties</div>
        <div className="mt-1 truncate text-[11px] text-muted">TEXT / {text.split("\n")[0].toUpperCase() || "EMPTY"}</div>
      </div>

      <label className={label}>
        Text content
        <textarea rows={2} value={text} onChange={set("text")} className={clsx(field, "mt-2 resize-none")} />
      </label>

      <label className={label}>
        Font family
        <select value={font} onChange={set("font")} className={clsx(field, "mt-2")}>
          {FONTS.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className={label}>
          Font size
          <input type="number" min={12} max={120} value={size} onChange={set("size")} className={clsx(field, "mt-2")} />
        </label>
        <label className={label}>
          Weight
          <select value={weight} onChange={set("weight")} className={clsx(field, "mt-2")}>
            <option value={400}>Regular</option>
            <option value={700}>Bold</option>
            <option value={900}>Black</option>
          </select>
        </label>
      </div>

      <label className={label}>
        Text color
        <div className="mt-2 flex items-center gap-3">
          <input type="color" value={color} onChange={set("color")} className="h-9 w-9 cursor-pointer rounded-lg border border-line bg-transparent" />
          <span className="text-xs uppercase text-fg">{color}</span>
        </div>
      </label>

      <div>
        <div className={clsx(label, "mb-2")}>Alignment</div>
        <div className="grid grid-cols-3 gap-1 rounded-lg border border-line bg-elevated p-1">
          {["left", "center", "right"].map((a) => (
            <button
              key={a}
              onClick={() => dispatch(setField({ key: "align", value: a }))}
              className={clsx("rounded-md py-1.5 text-xs capitalize", align === a ? "bg-soft font-semibold text-brand" : "text-muted")}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <label className={label}>
        <span className="flex justify-between">
          Opacity <span>{opacity}%</span>
        </span>
        <input type="range" min={10} max={100} value={opacity} onChange={set("opacity")} className="mt-3 w-full accent-primary" />
      </label>

      <div className="space-y-2 pt-2">
        <Button variant="soft" size="sm" className="w-full" onClick={() => dispatch(setField({ key: "text", value: getTemplate(templateId).title }))}>
          Reset text
        </Button>
        <Button variant="danger" size="sm" className="w-full" onClick={() => dispatch(setField({ key: "text", value: "" }))}>
          Clear text
        </Button>
      </div>
    </aside>
  );
}
