import { createSlice, createSelector } from "@reduxjs/toolkit";
import { TEMPLATES } from "../../data/templates";

const templatesSlice = createSlice({
  name: "templates",
  initialState: { items: TEMPLATES, category: "All designs" },
  reducers: {
    setCategory(state, { payload }) {
      state.category = payload;
    },
  },
});

export const { setCategory } = templatesSlice.actions;

export const selectFilteredTemplates = createSelector(
  [(s) => s.templates.items, (s) => s.templates.category, (s) => s.ui.search],
  (items, category, search) =>
    items.filter(
      (t) =>
        (category === "All designs" || t.category === category) &&
        t.name.toLowerCase().includes(search.trim().toLowerCase()),
    ),
);

export default templatesSlice.reducer;
