import React from 'react';
import './main.css';
import photo from '../img/blob7_v3.png';

const Main = () => {
  return (
    <div id="main" className="main">
      <div className="main__about-heading">
        <div>
          <h1>Zuzana Jakubčak</h1>
          <h2>web developer</h2>
        </div>
        <img className="main__photo" src={photo} alt="fotka autorky" />
      </div>
      <div className="main__about">
        <div className="main__about-text">
          <h2>about</h2>
          <p>
            I am a passionate junior web developer, interested especially in
            CSS, Javascript and React.
          </p>
          <h2>skills</h2>
          <p>
            HTML5, CSS3, JS, React (basics), Webpack, Google Workspace, GitHub,
            Visual Studio Code, Bootstrap, OS (MS Windows, Linux - user level),
            LibreOffice, Wordpress.
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
          <h3>
            <i class="fas fa-angle-right"></i> IT Academy, Primakurzy.cz
          </h3>
          <p>Web development, Praha, 2/2020</p>
          <h3>
            <i class="fas fa-angle-right"></i> Charles University Prague,
            Faculty of Education
          </h3>
          <p>
            Praha, 2014 - 2017, Biology, geology and environmental studies,
            Health education.
          </p>
          <h3>
            <i class="fas fa-angle-right"></i> Charles University Prague,
            Faculty of Science
          </h3>
          <p> Praha, 2008 - 2011, Ecological and evolutionary biology.</p>
          <h3>
            <i class="fas fa-angle-right"></i> High School - Gymnázium Turnov
          </h3>
          <p>2003-2007</p>
        </div>
        <div className="main__about-img">
          <i class="fab1 fab fa-pagelines"></i>
          <i class="fab2 fab fa-pagelines"></i>
        </div>
      </div>
    </div>
  );
};

export default Main;
