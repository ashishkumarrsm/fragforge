import clsx from "clsx";

export default function Logo({ className, compact = false }) {
  return (
    <div className={clsx("select-none", className)}>
      <div className={clsx("font-extrabold tracking-tight", compact ? "text-xl" : "text-2xl")}>
        FRAG<span className="text-brand">FORGE</span>
      </div>
      {!compact && <div className="text-[10px] tracking-[0.2em] text-muted">FORGE YOUR GAMING IDENTITY</div>}
    </div>
  );
}
