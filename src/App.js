import React, { Component } from 'react';
import Routes from './components/Routes';
import './App.css';

import { Router } from 'react-router-dom';
import history from './services/history.js';
class App extends Component {
  render() {
    return <Router history={ history }>
      <Routes />
    </Router>
  }
}
export default App;
