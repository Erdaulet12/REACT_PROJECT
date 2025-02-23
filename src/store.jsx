import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./features/projects/ProjectsSlice.jsx";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
