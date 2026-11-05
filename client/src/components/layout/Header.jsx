import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/ui/uiSlice";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header({ title, subtitle, searchable }) {
  const dispatch = useDispatch();
  const search = useSelector((s) => s.ui.search);
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold lg:text-[27px]">{title}</h1>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        {searchable && (
          <label className="relative">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="Search..."
              className="w-44 rounded-xl border border-line bg-surface py-3 pl-10 pr-4 text-xs outline-none focus:border-primary sm:w-64"
            />
          </label>
        )}
        <ThemeToggle />
        <div className="grid h-10 w-10 place-items-center rounded-full bg-soft text-xs font-bold text-brand">AK</div>
      </div>
    </header>
  );
}
