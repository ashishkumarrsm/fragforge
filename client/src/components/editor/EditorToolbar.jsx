import { Download, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { setField } from "../../features/editor/editorSlice";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

export default function EditorToolbar({ onSave, onExport, exporting }) {
  const dispatch = useDispatch();
  const { name, dirty } = useSelector((s) => s.editor);
  return (
    <header className="flex flex-wrap items-center gap-3 border-b border-line bg-panel px-4 py-3">
      <Link to="/dashboard" title="Back to dashboard">
        <Logo compact />
      </Link>
      <div className="mx-2 hidden h-8 w-px bg-line sm:block" />
      <div className="min-w-0 flex-1">
        <input
          value={name}
          onChange={(e) => dispatch(setField({ key: "name", value: e.target.value }))}
          aria-label="Project name"
          className="w-full bg-transparent text-[13px] font-bold outline-none"
        />
        <div className="flex items-center gap-1.5 text-[10px] text-muted">
          <span className={clsx("h-1.5 w-1.5 rounded-full", dirty ? "bg-amber-400" : "bg-success")} />
          {dirty ? "Unsaved changes" : "All changes saved"}
        </div>
      </div>
      <ThemeToggle />
      <Button variant="ghost" size="sm" onClick={onSave}>
        <Save size={14} /> Save
      </Button>
      <Button size="sm" onClick={onExport} disabled={exporting}>
        <Download size={14} /> {exporting ? "Exporting…" : "Export PNG"}
      </Button>
    </header>
  );
}
