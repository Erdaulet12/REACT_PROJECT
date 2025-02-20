import { createSlice } from "@reduxjs/toolkit";
import PCYBER_image from "../../assets/PCYBER.png";
import TODO_image from "../../assets/TODO.png";
import PORTFOLIO_image from "../../assets/PORTFOLIO.png";
import ELITETRAVEL_image from "../../assets/ELITETRAVEL.png";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Проект 1",
      description: "Краткое описание проекта 1",
      github: "https://github.com/username/project1",
      technologies: ["React", "Redux"],
      date: "2023-01-15",
      image: PCYBER_image,
    },
    {
      id: 2,
      title: "Проект 2",
      description: "Краткое описание проекта 2",
      github: "https://github.com/username/project2",
      technologies: ["React", "Tailwind"],
      date: "2023-02-10",
      image: TODO_image,
    },
    {
      id: 3,
      title: "Проект 3",
      description: "Краткое описание проекта 3",
      github: "https://github.com/username/project3",
      technologies: ["React", "Material UI"],
      date: "2023-03-05",
      image: PORTFOLIO_image,
    },
    {
      id: 4,
      title: "Проект 4",
      description: "Краткое описание проекта 4",
      github: "https://github.com/username/project4",
      technologies: ["React", "Chakra UI"],
      date: "2023-04-01",
      image: ELITETRAVEL_image,
    },
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
