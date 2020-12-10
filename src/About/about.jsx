import React from 'react';
import './about.css';
import photo from '../img/img1.png';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__heading">
        <div className="about__name">
          <h1>Zuzana Jakubčak</h1>
          <h2>web developer</h2>
        </div>
        <img className="about__photo" src={photo} alt="fotka autorky" />
      </div>

      <div className="main__about-text">
        <h2>about</h2>
        <p>
          I am a passionate junior web developer, mainly self-taught. I am
          interested especially in CSS, Javascript, React. I am highly motivated
          and keen to learn more about web development. Currently I am completed
          a 3 month web dev course -{' '}
          <a
            className="projects__item"
            href="https://www.czechitas.cz/en/portfolio/digital-academy"
            target="_blank"
          >
            Digital Academy Web, Czechitas
          </a>
          , and I am open to new job opportunities. Until now, I have been
          working as a Teacher and a Teaching assistant. For more information
          about my previous career path and CV, please{' '}
          <a className="projects__item" href="#contact">
            {' '}
            contact me.
          </a>
        </p>
        <h2>skills</h2>
        <p>
          HTML5, CSS3, JS, React (basics), Webpack, Google Workspace, GitHub,
          Visual Studio Code, Bootstrap, OS (MS Windows, Linux - user level),
          LibreOffice, Wordpress, GIMP (basics).
        </p>
        <h2>languages</h2>
        <p>
          Czech (native), English (C1), German (A2), French (A1), Hindi (A1).
        </p>
        <h2>education</h2>
        <h3>
          <i class="fas fa-angle-right"></i> Digital Academy Web, Czechitas
        </h3>
        <p> Praha, 9/2020 - 12/2020</p>
        <br />
        <h3>
          <i class="fas fa-angle-right"></i> IT Academy, Primakurzy.cz
        </h3>
        <p>Web development, Praha, 2/2020</p>
        <br />
        <h3>
          <i class="fas fa-angle-right"></i> Charles University Prague, Faculty
          of Education
        </h3>
        <p>
          Praha, 2014 - 2017, Biology, geology and environmental studies, Health
          education.
        </p>
        <br />
        <h3>
          <i class="fas fa-angle-right"></i> Charles University Prague, Faculty
          of Science
        </h3>
        <p> Praha, 2008 - 2011, Ecological and evolutionary biology.</p>
        <br />
        <h3>
          <i class="fas fa-angle-right"></i> High School - Gymnázium Turnov
        </h3>
        <p>2003-2007</p>
      </div>
    </div>
  );
};

export default About;
