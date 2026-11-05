import clsx from "clsx";

// Decorative mountain silhouette shared by every poster
export const MOUNTAINS =
  "[clip-path:polygon(0_70%,22%_25%,38%_52%,58%_8%,100%_62%,100%_100%,0_100%)]";

/** Small poster preview used on template cards, project cards and the editor drawer. */
export default function Poster({ tpl, className }) {
  return (
    <div className={clsx("relative aspect-[4/3] overflow-hidden rounded-lg bg-linear-to-br", tpl.grad, className)}>
      <div className={clsx("absolute inset-x-0 bottom-0 h-3/5 bg-black/45", MOUNTAINS)} />
      <div className="relative flex h-full flex-col items-center justify-center gap-1 px-3 text-center text-white">
        <span className="text-[9px] tracking-[0.25em] text-violet-200">{tpl.eyebrow}</span>
        <span className="font-display text-2xl font-black leading-none">{tpl.title}</span>
        <span className="text-[10px] font-semibold text-violet-200">{tpl.sub}</span>
      </div>
    </div>
  );
}
