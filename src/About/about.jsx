import React from 'react';
import './about.css';
import photo from '../img/img1.png';

const About = () => {
  return (
    <div id="about" className="about">
      <header className="about__heading">
        <div className="about__name">
          <img className="about__photo" src={photo} alt="fotka autorky" />
          <h1>Zuzana Jakubčak</h1>
          <h2>web developer</h2>
        </div>
        <div className="main__about-text">
          <h2 className="main-h2">about</h2>
          <p>
            Passionate junior web developer, mainly self-taught. I am interested
            especially in CSS, Javascript, React, and generally in the whole
            process of creating a nice, fully functional and user friendly
            website. Currently I completed a 3 month web dev course -{' '}
            <a
              className="about__item"
              href="https://www.czechitas.cz/en/portfolio/digital-academy"
              target="_blank"
            >
              Digital Academy Web, Czechitas
            </a>
            , and I would like to get an opportunity to find my entry job as a
            frontend developer. Until now, I have been working as a biology
            teacher and a teaching assistant. For more information about my
            previous career path and CV,{' '}
            <a className="about__item" href="#contact">
              contact me.
            </a>
          </p>
        </div>
      </header>
      <div className="about__columns">
        <div className="about__column">
          <h2 className="main-h2">skills</h2>
          <table className="skills-table">
            <tr>
              HTML5{' '}
              <th>
                {' '}
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>{' '}
                <i class="far fa-star"></i>
              </th>
            </tr>
            <tr>
              CSS3{' '}
              <th>
                {' '}
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>{' '}
                <i class="far fa-star"></i>
              </th>
            </tr>
            <tr>
              JavaScript{' '}
              <th>
                {' '}
                <i class="fas fa-star"></i> <i class="far fa-star"></i>{' '}
                <i class="far fa-star"></i>
              </th>
            </tr>
            <tr>
              React{' '}
              <th>
                {' '}
                <i class="fas fa-star"></i> <i class="far fa-star"></i>{' '}
                <i class="far fa-star"></i>
              </th>
            </tr>
            <tr>
              Webpack{' '}
              <th>
                <i class="fas fa-star"></i> <i class="far fa-star"></i>{' '}
                <i class="far fa-star"></i>
              </th>
            </tr>
            <tr>
              GitHub{' '}
              <th>
                {' '}
                <i class="fas fa-star"></i> <i class="far fa-star"></i>{' '}
                <i class="far fa-star"></i>
              </th>
            </tr>
            <tr>
              Google Workspace{' '}
              <th>
                {' '}
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>{' '}
                <i class="far fa-star"></i>
              </th>
            </tr>
            <tr>
              Visual Studio Code{' '}
              <th>
                {' '}
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>{' '}
                <i class="far fa-star"></i>
              </th>
            </tr>
            <tr>
              Bootstrap{' '}
              <th>
                {' '}
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>{' '}
                <i class="far fa-star"></i>
              </th>
            </tr>
            <tr>
              Wordpress{' '}
              <th>
                {' '}
                <i class="fas fa-star"></i> <i class="far fa-star"></i>{' '}
                <i class="far fa-star"></i>
              </th>
            </tr>
            <tr>
              GIMP{' '}
              <th>
                {' '}
                <i class="fas fa-star"></i> <i class="far fa-star"></i>{' '}
                <i class="far fa-star"></i>{' '}
              </th>
            </tr>
          </table>
          <strong>other skills:</strong>
          <p>OS (MS Windows, Linux - user level)</p>
          <p>LibreOffice</p>
          <strong>languages:</strong>
          <p>Czech (native), English (C1), German (A2)</p>
        </div>
        <div className="about__column">
          <h2 className="main-h2">education</h2>
          <h4>Digital Academy Web, Czechitas</h4>
          <p> Praha, 9/2020 - 12/2020</p>
          <br />
          <h4>IT Academy, Primakurzy.cz</h4>
          <p>Web development, Praha, 2/2020</p>
          <br />
          <h4>Charles University Prague, Faculty of Education</h4>
          <p>
            Praha, 2014 - 2017, Biology, geology and environmental studies,
            Health education.
          </p>
          <br />
          <h4>Charles University Prague, Faculty of Science</h4>
          <p> Praha, 2008 - 2011, Ecological and evolutionary biology.</p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default About;
