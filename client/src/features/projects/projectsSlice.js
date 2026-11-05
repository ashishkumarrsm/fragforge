import { createSlice, createSelector } from "@reduxjs/toolkit";

const hoursAgo = (h) => new Date(Date.now() - h * 3600 * 1000).toISOString();

const SEED = [
  { id: "p1", name: "Final Clash — Tournament", templateId: 1, edited: hoursAgo(2), design: null },
  { id: "p2", name: "Nova — Player spotlight", templateId: 2, edited: hoursAgo(26), design: null },
  { id: "p3", name: "Squad Up — Event", templateId: 3, edited: hoursAgo(72), design: null },
];

function load() {
  try {
    const raw = localStorage.getItem("ff-projects");
    return raw ? JSON.parse(raw) : SEED;
  } catch {
    return SEED;
  }
}

const projectsSlice = createSlice({
  name: "projects",
  initialState: { items: load() },
  reducers: {
    // upsert: updates the project if the id exists, otherwise adds it on top
    saveProject: {
      reducer(state, { payload }) {
        const i = state.items.findIndex((p) => p.id === payload.id);
        if (i >= 0) state.items[i] = payload;
        else state.items.unshift(payload);
      },
      prepare(project) {
        return { payload: { ...project, edited: new Date().toISOString() } };
      },
    },
    renameProject(state, { payload: { id, name } }) {
      const p = state.items.find((x) => x.id === id);
      if (p) p.name = name;
    },
    deleteProject(state, { payload: id }) {
      state.items = state.items.filter((p) => p.id !== id);
    },
  },
});

export const { saveProject, renameProject, deleteProject } = projectsSlice.actions;

export const selectFilteredProjects = createSelector(
  [(s) => s.projects.items, (s) => s.ui.search],
  (items, search) => items.filter((p) => p.name.toLowerCase().includes(search.trim().toLowerCase())),
);

export default projectsSlice.reducer;
