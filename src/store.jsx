import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./features/projects/projectsSlice.jsx";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
