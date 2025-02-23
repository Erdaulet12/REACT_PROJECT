import { createSlice } from "@reduxjs/toolkit";
import PCYBER_image from "../../assets/PCYBER.png";
import TODO_image from "../../assets/TODO.png";
import PORTFOLIO_image from "../../assets/PORTFOLIO.png";
import ELITETRAVEL_image from "../../assets/ELITETRAVEL.png";

const initialState = {
  projects: [
    {
      id: 1,
      title: "PCyber",
      description: "Сайт интернет-магазин компьютерной техники и гарнитур",
      github: "https://github.com/Erdaulet12/PCyber",
      technologies: ["Python", "Django"],
      date: "2024-12-26",
      image: PCYBER_image,
    },
    {
      id: 2,
      title: "TODO",
      description: "Сайт для создания списка задач и их редактирования",
      github: "https://github.com/Erdaulet12/JAVASCRIPT_PROJECT",
      technologies: ["JavaScript", "HTML"],
      date: "2024-05-25",
      image: TODO_image,
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Сайт портфолио с использованием HTML и CSS",
      github: "https://github.com/Erdaulet12/Project_HTML_CSS",
      technologies: ["HTML", "CSS"],
      date: "2024-02-06",
      image: PORTFOLIO_image,
    },
    {
      id: 4,
      title: "EliteTravel",
      description: "Сайт для путешествий и аренд самолетов",
      github: "https://github.com/lPurplel/EliteTravel",
      technologies: ["Python", "Django"],
      date: "2024-11-05",
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
