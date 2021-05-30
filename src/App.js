import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import UserProfile from './UserProfile';

function App() {
  return (<Router>
    <Switch>
      <Route exact path='/'><Login/></Route>
    </Switch>
    <Switch>
      <Route exact path='/userProfile'>
        <UserProfile/>
      </Route>
    </Switch>
  </Router>);
}

export default App;
