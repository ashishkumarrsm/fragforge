import { createSlice } from "@reduxjs/toolkit";

export const DEFAULT_DESIGN = {
  font: "Orbitron",
  size: 48,
  weight: 900,
  color: "#ffffff",
  align: "center",
  opacity: 90,
};

const initialState = {
  projectId: null,
  name: "Untitled design",
  templateId: 1,
  text: "CHAMPIONS",
  ...DEFAULT_DESIGN,
  zoom: 75,
  dirty: false,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    startFromTemplate: (_s, { payload: tpl }) => ({
      ...initialState,
      name: `${tpl.name} — untitled`,
      templateId: tpl.id,
      text: tpl.title,
      dirty: true,
    }),
    startBlank: (_s, { payload: tpl }) => ({
      ...initialState,
      templateId: tpl.id,
      text: "YOUR TEXT",
      dirty: true,
    }),
    openProject: (_s, { payload: { project, tpl } }) => ({
      ...initialState,
      ...(project.design ?? {}),
      text: project.design?.text ?? tpl.title,
      projectId: project.id,
      name: project.name,
      templateId: project.templateId,
      dirty: false,
    }),
    setField(state, { payload: { key, value } }) {
      state[key] = value;
      state.dirty = true;
    },
    changeTemplate(state, { payload: tpl }) {
      state.templateId = tpl.id;
      state.text = tpl.title;
      state.dirty = true;
    },
    setZoom(state, { payload }) {
      state.zoom = Math.min(150, Math.max(25, payload));
    },
    markSaved(state, { payload: id }) {
      state.projectId = id;
      state.dirty = false;
    },
  },
});

export const { startFromTemplate, startBlank, openProject, setField, changeTemplate, setZoom, markSaved } =
  editorSlice.actions;
export default editorSlice.reducer;
