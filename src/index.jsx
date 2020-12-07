import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import Nav from './Nav/nav.jsx';
import About from './About/about.jsx';
import Projects from './Projects/projects.jsx';

const App = () => {
  return (
    <>
      <Nav />
      <About />
      <Projects />
    </>
  );
};
render(<App />, document.querySelector('#app'));
