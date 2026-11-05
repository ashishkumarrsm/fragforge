import { createSlice } from "@reduxjs/toolkit";

const stored = typeof localStorage !== "undefined" ? localStorage.getItem("ff-theme") : null;

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: stored === "light" || stored === "dark" ? stored : "dark",
    search: "",
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setSearch(state, { payload }) {
      state.search = payload;
    },
  },
});

export const { toggleTheme, setSearch } = uiSlice.actions;
export default uiSlice.reducer;
