import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  projects: [
    {
      id: 1,
      title: "Проект 1",
      description: "Краткое описание проекта 1",
      github: "https://github.com/username/project1",
      technologies: ["React", "Redux"],
      date: "2023-01-15"
    },
    {
      id: 2,
      title: "Проект 2",
      description: "Краткое описание проекта 2",
      github: "https://github.com/username/project2",
      technologies: ["React", "Tailwind"],
      date: "2023-02-10"
    },
    {
      id: 3,
      title: "Проект 3",
      description: "Краткое описание проекта 3",
      github: "https://github.com/username/project3",
      technologies: ["React", "Material UI"],
      date: "2023-03-05"
    },
    {
      id: 4,
      title: "Проект 4",
      description: "Краткое описание проекта 4",
      github: "https://github.com/username/project4",
      technologies: ["React", "Chakra UI"],
      date: "2023-04-01"
    },
  ]
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    }
});

export default projectsSlice.reducer;
