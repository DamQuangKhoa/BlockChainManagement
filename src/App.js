import React, { Component } from "react";
import { Route, Switch } from "react-router";

// Styles
import "./css/oswald.css";
import "./css/open-sans.css";
import "./css/pure-min.css";
import "./App.css";
import BaseContainer from "./layouts/base/BaseContainer";
import Menu from "./components/menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route exact path="/home"  component={HomeContainer}/> */}
        {/* <R2t path="/home"  component={HomeContainer}/> */}
        <Menu />
        <div class="all-content-wrapper">
          <div />
        </div>
      </div>
    );
  }
}

export default App;
