import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = useSelector((state) =>
    state.projects.projects.find((proj) => proj.id === parseInt(id))
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
        <h1 className="text-2xl">Проект не найден</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          {project.image && (
            <div className="mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
          )}
          <p className="mb-4">{project.description}</p>
          <p className="mb-4">
            <strong>Используемые технологии:</strong>{" "}
            {project.technologies.join(", ")}
          </p>
          <p className="mb-4">
            <strong>Дата:</strong> {project.date}
          </p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Посмотреть на GitHub
          </a>
          <div className="mt-4">
            <Link to="/projects">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Назад
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
