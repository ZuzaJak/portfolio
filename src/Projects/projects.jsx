import React from 'react';
import './projects.css';
import kodovani from '../img/kodovani.jpg';
import piskvorky from '../img/piskvorky.jpg';
import nike from '../img/nike.jpg';
import island from '../img/island.jpg';
import ph from '../img/ph.jpg';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects__about">
        <div className="projects__about-item">
          <div className="projects__about-text">
            <h2>Band webpage</h2>
            <a
              className="projects__item"
              href="https://prvnihore.netlify.app/"
              target="_blank"
            >
              prvnihore.netlify.app
            </a>
          </div>
          <div className="projects__about-img">
            <a href="https://prvnihore.netlify.app/" target="_blank">
              <img className="projects-img" src={ph} alt="náhled stránky" />
            </a>
          </div>
        </div>
        <br />

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
            <p> - in collaboration with Lena Bačíková</p>
            <p>
              - final project for{' '}
              <a
                className="projects__item"
                href="https://www.czechitas.cz/en/portfolio/digital-academy"
                target="_blank"
              >
                Digital Academy Web, Czechitas
              </a>
              , this project won in the category "Star Project"
            </p>
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
            <h2>Piškvorky (five-in-a-row)</h2>
            <a
              className="projects__item"
              href="https://zuzajak.github.io/piskvorky/"
              target="_blank"
            >
              zuzajak.github.io/piskvorky
            </a>
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
        <div className="projects__about-item">
          <div className="projects__about-text">
            <h2>Travel blog - Island</h2>
            <a
              className="projects__item"
              href="https://zuzajak.github.io/Island/"
              target="_blank"
            >
              zuzajak.github.io/Island
            </a>
          </div>
          <div className="projects__about-img">
            <a href="https://zuzajak.github.io/Island/" target="_blank">
              <img className="projects-img" src={island} alt="náhled stránky" />
            </a>
          </div>
        </div>
        <br />
        <div className="projects__about-item">
          <div className="projects__about-text">
            <h2>Advertisement</h2>
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
              <img
                className=" projects-img projects-img-nike"
                src={nike}
                alt="náhled stránky"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
