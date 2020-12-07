import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import Nav from './Nav/nav.jsx';
import Main from './Main/main.jsx';

const App = () => {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
};
render(<App />, document.querySelector('#app'));
