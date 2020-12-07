import React from 'react';
import './main.css';
import photo from '../img/blob7_v1.png';

const Main = () => {
  return (
    <div id="main" className="main">
      <div className="main__about">
        <div>
          <h1>Zuzana Jakubčak</h1>
          <h2>web developer</h2>
        </div>
        <img className="main__photo" src={photo} alt="fotka autorky" />
      </div>
      <div className="main__about-text">
        <h2>about</h2>
        <p>
          I am a passionate junior web developer, interested especially in CSS,
          Javascript and React.
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
        <p></p>
      </div>
    </div>
  );
};

export default Main;
