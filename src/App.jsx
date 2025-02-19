import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import PortfolioPage from './components/PortfolioPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import './App.css';

const HomePage = () => (
  <motion.div
    className="home-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container maxWidth="sm" className="container">
      <Box className="header">
        <Typography variant="h3" gutterBottom>
          Меня зовут Ердаулет.
        </Typography>
        <Typography variant="body1" paragraph>
          Мобильный разработчик и немножечко frontend.
        </Typography>
        <Typography variant="body2" paragraph>
          Это мое портфолио. Здесь будут показаны 4 проекта.
        </Typography>
      </Box>

      <nav>
        <ul>
          <li>
            <Link to="/about">Обо мне</Link>
          </li>
          <li>
            <Link to="/projects">Проекты</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </motion.div>
);

const AboutPage = () => (
  <motion.div
    className="page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Обо мне
      </Typography>
      <Typography variant="body1">
        Краткая информация о себе...
      </Typography>
    </Container>
  </motion.div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<PortfolioPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
