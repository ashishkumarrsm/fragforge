import clsx from "clsx";

const variants = {
  primary:
    "bg-linear-to-br from-primary-light to-violet-600 text-white shadow-lg shadow-violet-900/25 hover:brightness-110",
  solid: "bg-violet-600 text-white hover:brightness-110",
  ghost: "border border-line bg-surface text-fg hover:bg-elevated",
  soft: "bg-elevated text-fg hover:brightness-95",
  danger: "bg-rose-100 text-rose-700 hover:brightness-95 dark:bg-[#351b29] dark:text-rose-300",
};
const sizes = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export default function Button({ variant = "primary", size = "md", className, children, ...props }) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
