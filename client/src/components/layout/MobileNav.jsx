import { NavLink } from "react-router-dom";
import { PenTool } from "lucide-react";
import clsx from "clsx";
import { NAV_ITEMS } from "./navItems";

const link = ({ isActive }) =>
  clsx("flex flex-col items-center gap-0.5 px-4 py-1 text-[11px]", isActive ? "text-brand" : "text-muted");

export default function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-around border-t border-line bg-panel/95 py-2 backdrop-blur lg:hidden">
      {NAV_ITEMS.map(({ to, label, Icon }) => (
        <NavLink key={to} to={to} className={link}>
          <Icon size={19} />
          {label}
        </NavLink>
      ))}
      <NavLink to="/editor" className={link}>
        <PenTool size={19} />
        Editor
      </NavLink>
    </nav>
  );
}
