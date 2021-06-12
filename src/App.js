import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Card, Typography, Space } from 'antd';
import LoginComponent from './components/Login';
import HomeComponent from './components/Home';

function App() {

  return (
  <Router>
    <Switch>
      <Route path="/" exact>
        <LoginComponent />
      </Route>
      <Route path='/home'>
        <HomeComponent />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;

