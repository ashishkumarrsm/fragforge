import clsx from "clsx";
import { Minus, MousePointer2, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setZoom } from "../../features/editor/editorSlice";
import { getTemplate } from "../../data/templates";
import { MOUNTAINS } from "../poster/Poster";

const FONT_CLASS = { Orbitron: "font-esports", "Space Grotesk": "font-display", Inter: "font-sans" };

/** The live poster. `captureRef` points at the node that gets exported to PNG. */
export default function EditorCanvas({ captureRef }) {
  const dispatch = useDispatch();
  const { templateId, text, font, size, weight, color, align, opacity, zoom } = useSelector((s) => s.editor);
  const tpl = getTemplate(templateId);

  return (
    <section className="flex flex-1 flex-col bg-bg p-4">
      <div className="flex items-center justify-between rounded-lg border border-line bg-surface px-4 py-2.5 text-[11px] text-muted">
        <span className="inline-flex items-center gap-1.5">
          <MousePointer2 size={13} /> Select
        </span>
        <span className="inline-flex items-center gap-3">
          <button onClick={() => dispatch(setZoom(zoom - 25))} aria-label="Zoom out">
            <Minus size={14} />
          </button>
          {zoom}%
          <button onClick={() => dispatch(setZoom(zoom + 25))} aria-label="Zoom in">
            <Plus size={14} />
          </button>
        </span>
      </div>

      <div className="grid flex-1 place-items-center overflow-auto py-6">
        <div style={{ width: `${(zoom / 75) * 340}px` }} className="shadow-2xl shadow-black/40">
          <div ref={captureRef} className={clsx("relative aspect-[2/3] overflow-hidden bg-linear-to-br", tpl.grad)}>
            <div className="absolute left-1/2 top-[40%] h-[60%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light/15" />
            <div className={clsx("absolute inset-x-0 bottom-0 h-[45%] bg-black/55", MOUNTAINS)} />
            <div className="relative flex h-full flex-col items-center pt-[10%] text-center text-white">
              <span className="text-[10px] tracking-[0.3em] text-violet-200">FRAGFORGE PRESENTS</span>
              <div
                className={clsx("mt-[14%] w-[85%] whitespace-pre-line leading-[1.05]", FONT_CLASS[font])}
                style={{ fontSize: `${(size / 53) * 2.1}rem`, fontWeight: weight, color, textAlign: align, opacity: opacity / 100 }}
              >
                {text}
              </div>
              <span className="mt-3 text-xs font-bold tracking-[0.3em] text-violet-300">{tpl.sub}</span>
              <div className="absolute bottom-[14%] rounded-lg border border-primary-light bg-[#0b0b18]/80 px-6 py-2">
                <div className="text-[8px] tracking-[0.2em] text-violet-300">TOTAL PRIZE POOL</div>
                <div className="text-xl font-black">₹ 50,000</div>
              </div>
              <span className="absolute bottom-[6%] text-[11px] font-bold text-violet-100">REGISTER NOW • 24 NOVEMBER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
