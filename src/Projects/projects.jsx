import React from 'react';
import './projects.css';
import kodovani from '../img/kodovani.jpg';
import piskvorky from '../img/piskvorky.jpg';
import nike from '../img/nike.jpg';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="projects__heading">Projects</h1>
      <div className="projects__about">
        <div className="projects__about-item">
          <div className="projects__about-text">
            <h2>Kódování pro děti</h2>
            <a
              className="projects__item"
              href="https://www.kodovaniprodeti.cz/"
              target="_blank"
            >
              kodovaniprodeti.cz
            </a>
            <p>- final project for Digital Academy Web, Czechitas.</p>
            <p>- in collaboration with Lena Bačíková.</p>
          </div>
          <div className="projects__about-img">
            <a href="https://www.kodovaniprodeti.cz/" target="_blank">
              <img
                className="projects-img"
                src={kodovani}
                alt="náhled stránky"
              />
            </a>
          </div>
        </div>
        <br />

        <div className="projects__about-item">
          <div className="projects__about-text">
            <h2>Piškvorky</h2>
            <a
              className="projects__item"
              href="https://zuzajak.github.io/piskvorky/"
              target="_blank"
            >
              zuzajak.github.io/piskvorky
            </a>
            <p>- game five-in-a-row</p>
          </div>
          <div className="projects__about-img">
            <a href="https://zuzajak.github.io/piskvorky/" target="_blank">
              <img
                className="projects-img"
                src={piskvorky}
                alt="náhled stránky"
              />
            </a>
          </div>
        </div>

        <br />
        <div className="projects__about-item">
          <div className="projects__about-text">
            <h2>Nike shoes advertisement</h2>
            <a
              className="projects__item"
              href="https://zuzajak.github.io/shoes/"
              target="_blank"
            >
              zuzajak.github.io/shoes
            </a>
          </div>
          <div className="projects__about-img">
            <a href="https://zuzajak.github.io/shoes" target="_blank">
              <img className="projects-img" src={nike} alt="náhled stránky" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
