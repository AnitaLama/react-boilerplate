import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Container";
import TestPage from "./Container/Loader";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact strict component={HomePage} />
        <Route path="/TestPage" exact strict component={TestPage} />
      </Switch>
    );
  }
}

export default App;
