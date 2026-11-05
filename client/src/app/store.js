import { configureStore } from "@reduxjs/toolkit";
import ui from "../features/ui/uiSlice";
import templates from "../features/templates/templatesSlice";
import projects from "../features/projects/projectsSlice";
import editor from "../features/editor/editorSlice";

export const store = configureStore({
  reducer: { ui, templates, projects, editor },
});

// Persist theme + saved projects in localStorage (only when they actually change)
let last = {};
store.subscribe(() => {
  const { ui, projects } = store.getState();
  try {
    if (ui.theme !== last.theme) localStorage.setItem("ff-theme", ui.theme);
    if (projects.items !== last.items) localStorage.setItem("ff-projects", JSON.stringify(projects.items));
  } catch {
    /* storage unavailable — ignore */
  }
  last = { theme: ui.theme, items: projects.items };
});
