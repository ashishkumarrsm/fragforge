import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/ui/uiSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((s) => s.ui.theme);
  const isDark = theme === "dark";
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-fg transition hover:bg-elevated"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
