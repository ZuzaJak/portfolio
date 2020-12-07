import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import Nav from './Nav/nav.jsx';
import About from './About/about.jsx';
import Projects from './Projects/projects.jsx';
import Contact from './Contact/contact.jsx';

const App = () => {
  return (
    <>
      <Nav />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
render(<App />, document.querySelector('#app'));
