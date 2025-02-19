import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-5 shadow hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex items-center justify-between">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <Link to={`/projects/${project.id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Подробнее
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
