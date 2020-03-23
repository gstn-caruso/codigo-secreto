import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tablero from './Tablero';
import Inicio from './Inicio';
import './App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Inicio/>
      </Route>
      <Route path="/tablero/:id">
        <Tablero/>
      </Route>
    </Switch>
  </Router>
);

export default App;
