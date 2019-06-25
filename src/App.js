import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

import logo from './logo.svg';

import Home from './Home/Home.js';
import Registry from './Registry/Registry.js';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">

    <div className="ui menu">
      <h1>The Roux Wedding</h1>
    </div>

    <Router>

          <Route exact path="/" component={Home} />
          <Route path="/registry" component={Registry} />

    </Router>




    </div>
  );
}

export default App;
