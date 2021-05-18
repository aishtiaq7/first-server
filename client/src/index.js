import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Route exact path='/users'>
      <App />
    </Route> 
  </Router>,
  document.getElementById('root')
); 

