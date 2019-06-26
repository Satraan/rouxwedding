import React from 'react';
import { Card, Icon, Menu } from 'semantic-ui-react'

import logo from './logo.svg';

import Home from './Home/Home.js';
import Registry from './Registry/Registry.js';
import Information from './Information/Information.js';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">


    <Router>
    <Menu>
         <Menu.Item
           name='Home'>
            <Link to="/">
              Home
            </Link>
         </Menu.Item>
         <Menu.Item
           name='Event Information'>
            <Link to="/information">
              Event Information
            </Link>
         </Menu.Item>
         <Menu.Item
           name='Wedding Registry'>
            <Link to="/registry">
              Wedding Registry
            </Link>
         </Menu.Item>


       </Menu>

          <Route exact path="/" component={Home} />
          <Route path="/registry" component={Registry} />
          <Route path="/information" component={Information} />

    </Router>




    </div>
  );
}

export default App;
