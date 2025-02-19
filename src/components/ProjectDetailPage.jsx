import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './Projects.css';


const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = useSelector(state =>
    state.projects.projects.find(proj => proj.id === parseInt(id))
  );

  if (!project) {
    return <div>Проект не найден</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-4"
    >
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="mb-4">{project.description}</p>
      <p className="mb-4">
        <strong>Используемые технологии:</strong> {project.technologies.join(', ')}
      </p>
      <p className="mb-4"><strong>Дата:</strong> {project.date}</p>
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500"
      >
        Посмотреть на GitHub
      </a>
      <div className="mt-4">
        <Link to="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Назад
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;
