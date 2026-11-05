import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { toPng } from "html-to-image";
import toast from "react-hot-toast";
import { markSaved } from "../features/editor/editorSlice";
import { saveProject } from "../features/projects/projectsSlice";
import EditorToolbar from "../components/editor/EditorToolbar";
import TemplateDrawer from "../components/editor/TemplateDrawer";
import EditorCanvas from "../components/editor/EditorCanvas";
import PropertiesPanel from "../components/editor/PropertiesPanel";

export default function EditorPage() {
  const dispatch = useDispatch();
  const editor = useSelector((s) => s.editor);
  const canvasRef = useRef(null);
  const [exporting, setExporting] = useState(false);

  const handleSave = () => {
    const id = editor.projectId ?? nanoid();
    const { name, templateId, text, font, size, weight, color, align, opacity } = editor;
    dispatch(saveProject({ id, name, templateId, design: { text, font, size, weight, color, align, opacity } }));
    dispatch(markSaved(id));
    toast.success("Project saved");
  };

  const handleExport = async () => {
    if (!canvasRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(canvasRef.current, { pixelRatio: 3, cacheBust: true });
      const a = document.createElement("a");
      a.download = `${editor.name.trim() || "fragforge-design"}.png`;
      a.href = dataUrl;
      a.click();
      toast.success("PNG exported");
    } catch {
      toast.error("Export failed — please try again");
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <EditorToolbar onSave={handleSave} onExport={handleExport} exporting={exporting} />
      <div className="flex flex-1 flex-col lg:flex-row">
        <TemplateDrawer />
        <EditorCanvas captureRef={canvasRef} />
        <PropertiesPanel />
      </div>
    </div>
  );
}
