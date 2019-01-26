import React, { Component } from 'react'
import { Route } from 'react-router'
import HomeContainer from './layouts/home/HomeContainer'


// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import Dashboard from './layouts/dashboard/Dashboard';
import BaseContainer from './layouts/base/BaseContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route exact path="/home"  component={HomeContainer}/> */}
        <Route exact path="/"  component={BaseContainer}/>
      </div>
    );
  }
}

export default App
