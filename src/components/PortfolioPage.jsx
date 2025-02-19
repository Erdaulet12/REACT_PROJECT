import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";

const PortfolioPage = () => {
  const projects = useSelector((state) => state.projects.projects);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [sortOption, setSortOption] = useState("");
  const [filterTech, setFilterTech] = useState("");

  useEffect(() => {
    let result = [...projects];

    // Фильтрация по технологии
    if (filterTech) {
      result = result.filter((project) =>
        project.technologies.includes(filterTech)
      );
    }

    // Сортировка
    if (sortOption === "date") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "name") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProjects(result);
  }, [projects, sortOption, filterTech]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Мои проекты</h1>

        {/* Блок сортировки и фильтра */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 mb-8">
          <div className="flex flex-col">
            <label htmlFor="sort" className="mb-1 text-sm font-semibold">
              Сортировать:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded py-2 px-3 text-white focus:outline-none"
            >
              <option value="">Выбрать</option>
              <option value="date">По дате</option>
              <option value="name">По названию</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="filter" className="mb-1 text-sm font-semibold">
              Фильтровать по технологии:
            </label>
            <select
              id="filter"
              value={filterTech}
              onChange={(e) => setFilterTech(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded py-2 px-3 text-white focus:outline-none"
            >
              <option value="">Все</option>
              <option value="React">React</option>
              <option value="Redux">Redux</option>
              <option value="Tailwind">Tailwind</option>
              <option value="Material UI">Material UI</option>
              <option value="Chakra UI">Chakra UI</option>
            </select>
          </div>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
