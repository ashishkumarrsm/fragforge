import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "../ui/Logo";
import { NAV_ITEMS } from "./navItems";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-62.5 flex-col border-r border-line bg-panel p-5 lg:flex">
      <Logo className="mb-10 px-2 pt-2" />
      <nav className="flex flex-col gap-2">
        {NAV_ITEMS.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition",
                isActive
                  ? "border-l-[3px] border-primary-light bg-soft font-bold text-brand"
                  : "text-muted hover:bg-elevated hover:text-fg",
              )
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto flex items-center gap-3 rounded-2xl border border-line bg-surface p-4">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-violet-700 text-xs font-bold text-white">AK</div>
        <div>
          <div className="text-xs font-bold">Ashish Kumar</div>
          <div className="text-[11px] text-muted">Free workspace</div>
        </div>
      </div>
    </aside>
  );
}
