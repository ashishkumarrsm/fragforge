// Label + input + validation error, wired for react-hook-form's `register`
export default function FormField({ label, error, extra, registration, ...inputProps }) {
  return (
    <label className="block text-xs font-semibold">
      <span className="flex justify-between">
        {label}
        {extra}
      </span>
      <input
        {...registration}
        {...inputProps}
        className={`mt-2 w-full rounded-lg border bg-surface px-3 py-3.5 text-sm font-normal outline-none focus:border-primary ${
          error ? "border-danger" : "border-line"
        }`}
      />
      {error && <span className="mt-1 block text-[11px] font-normal text-danger">{error}</span>}
    </label>
  );
}
