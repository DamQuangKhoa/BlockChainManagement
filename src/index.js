import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route,Switch } from 'react-router'
import { Switch, Route, Router } from "react-router-dom";
import { DrizzleProvider } from 'drizzle-react'
// Layouts
import App from './App'
import { LoadingContainer } from 'drizzle-react-components'

import { history, store } from './store'
import drizzleOptions from './drizzleOptions'
import DemoContainer from './layouts/demo/DemoContainer';
import BaseContainer from './layouts/base/BaseContainer';
import Menu from './components/menu';


ReactDOM.render((
  <DrizzleProvider options={drizzleOptions} store={store}>
    <LoadingContainer>
      <Router history={history} store={store}>
        <div>
          <Menu />
          <div class="all-content-wrapper">
            <Route exact path="/" component={BaseContainer} />
            <Route exact path="/home" component={DemoContainer} />
          </div>
        </div>
        {/* <Route exact path="/" component={App} /> */}
      </Router>
    </LoadingContainer>
  </DrizzleProvider>
),
  document.getElementById('root')
);
