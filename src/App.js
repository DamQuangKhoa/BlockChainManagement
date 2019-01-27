import React, { Component } from 'react'
import { Route,Switch } from 'react-router'


// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import BaseContainer from './layouts/base/BaseContainer';
import Menu from './components/menu';
import HomeContainer from './layouts/home/HomeContainer';
import DemoContainer from './layouts/demo/DemoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route exact path="/home"  component={HomeContainer}/> */}
        <Menu />
        <div class="all-content-wrapper">
        <div>
        <Route  path="/home"  component={DemoContainer}/>
        <Route exact path="/"  component={BaseContainer}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App
