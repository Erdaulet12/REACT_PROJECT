import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioPage from "./components/PortfolioPage";
import ProjectDetailPage from "./components/ProjectDetailPage";

const HomePage = () => (
  <motion.div
    className="animate-fadeIn"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="max-w-sm mx-auto text-center">
      <div className="bg-[#007bff] text-white p-10 rounded-[15px]">
        <h1 className="m-0 text-[2.5em]">Меня зовут Ердаулет.</h1>
        <p className="text-[1.2em]">
          Мобильный разработчик и немножечко frontend.
        </p>
        <p className="text-[1.2em]">
          Это мое портфолио. Здесь будут показаны 4 проекта.
        </p>
      </div>

      <nav className="mt-4">
        <ul className="list-none p-0 text-center">
          <li className="inline mx-[10px]">
            <Link
              to="/about"
              className="text-[#5ddb41] no-underline text-[1.2em] hover:underline animate-fadeBlink"
            >
              Обо мне
            </Link>
          </li>
          <li className="inline mx-[10px]">
            <Link
              to="/projects"
              className="text-[#5ddb41] no-underline text-[1.2em] hover:underline animate-fadeBlink"
            >
              Проекты
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </motion.div>
);

const AboutPage = () => (
  <motion.div
    className="p-5 text-center animate-fadeIn"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4">Обо мне</h1>
      <p>Краткая информация о себе...</p>
    </div>
  </motion.div>
);

const App = () => {
  return (
    <div className="h-screen w-screen bg-[#253b51] flex justify-center items-center font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<PortfolioPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
