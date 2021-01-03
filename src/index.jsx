import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import HomePage from './Pages/HomePage.jsx';
import ProjectsPage from './Pages/ProjectsPage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/index">
        <HomePage />
      </Route>
      <Route path="/projects">
        <ProjectsPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);
render(<App />, document.querySelector('#app'));
