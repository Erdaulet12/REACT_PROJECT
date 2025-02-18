import { useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Projects.css';

const sampleProjects = [
  {
    id: 1,
    title: "Project One",
    description: "Краткое описание проекта 1",
    github: "https://github.com/username/project-one",
    date: "2023-01-15",
    technologies: ["React", "Redux"]
  },
  {
    id: 2,
    title: "Project Two",
    description: "Краткое описание проекта 2",
    github: "https://github.com/username/project-two",
    date: "2023-03-20",
    technologies: ["Node.js", "Express"]
  },
  {
    id: 3,
    title: "Project Three",
    description: "Краткое описание проекта 3",
    github: "https://github.com/username/project-three",
    date: "2022-12-05",
    technologies: ["React", "Material UI"]
  }
];

const ProjectsPage = () => {
  const [sortOption, setSortOption] = useState("dateDesc");
  const [filterTech, setFilterTech] = useState("all");

  const allTechnologies = [...new Set(sampleProjects.flatMap(project => project.technologies))];

  const filteredProjects = sampleProjects.filter(project => 
    filterTech === "all" || project.technologies.includes(filterTech)
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOption === "dateAsc") return new Date(a.date) - new Date(b.date);
    if (sortOption === "dateDesc") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Мои проекты
        </Typography>

        <Grid container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="sort-label">Сортировать по дате</InputLabel>
              <Select
                labelId="sort-label"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                label="Сортировать по дате"
              >
                <MenuItem value="dateDesc">Новые сначала</MenuItem>
                <MenuItem value="dateAsc">Старые сначала</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="filter-label">Фильтр по технологии</InputLabel>
              <Select
                labelId="filter-label"
                value={filterTech}
                onChange={(e) => setFilterTech(e.target.value)}
                label="Фильтр по технологии"
              >
                <MenuItem value="all">Все</MenuItem>
                {allTechnologies.map((tech) => (
                  <MenuItem key={tech} value={tech}>
                    {tech}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {sortedProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card className="project-card">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button 
                    size="small" 
                    component={Link} 
                    to={`/projects/${project.id}`}
                  >
                    Подробнее
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default ProjectsPage;
