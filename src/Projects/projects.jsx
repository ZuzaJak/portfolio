import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="projects__heading">Projects</h1>
      <div className="projects__about-text">
        <h2>Kódování pro děti</h2>
        <a
          className="projects__item"
          href="https://www.kodovaniprodeti.cz/"
          target="_blank"
        >
          kodovaniprodeti.cz
        </a>
      </div>
    </div>
  );
};

export default Projects;
