import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <a href={project.html_url}>{project.name}</a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;