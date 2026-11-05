import clsx from "clsx";

export default function FormatCard({ format, onClick }) {
  const { label, hint, Icon, card, box, link } = format;
  return (
    <button
      onClick={onClick}
      className={clsx("flex items-center gap-4 rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-lg", card)}
    >
      <span className={clsx("grid h-12 w-12 shrink-0 place-items-center rounded-xl", box)}>
        <Icon size={21} />
      </span>
      <span>
        <span className="block text-sm font-bold">{label}</span>
        <span className="mt-1 block text-[11px] text-muted">{hint}</span>
        <span className={clsx("mt-2 block text-[11px] font-medium", link)}>Explore format →</span>
      </span>
    </button>
  );
}
