import React from "react";
import ReactDOM from "react-dom";
// import { Router, Route,Switch } from 'react-router'
// import { Switch, Route, Router } from "react-router-dom";
import { DrizzleProvider } from "drizzle-react";
// Layouts
import { LoadingContainer } from "drizzle-react-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ProjectContainer from "./container/ProjectContainer/ProjectContainer";
import { history, store } from "./store";
import drizzleOptions from "./drizzleOptions";

import Menu from "./components/menu";
import HeaderTop from "../src/component/Layouts/HeaderTop";
// import Footer from "./../../component/Layouts/Footer";
import PesonnelContainer from "../src/container/PesonnelContainer/PesonnelContainer";

import SideBar from "../src/component/Layouts/SideBar ";
import Footer from "../src/component/Layouts/Footer";
import LogoUser from "../src/component/User/LogoUser";
import ControlSidebar from "../src/component/Layouts/ControlSidebar";
import RouterURL from "../src/RouterURL/RouterURL";
import BaseContainer from "./layouts/base/BaseContainer";
import HomeContainer from "./layouts/demo/DemoContainer";

ReactDOM.render(
  <DrizzleProvider options={drizzleOptions} store={store}>
    <LoadingContainer>
      <Router history={history} store={store}>
        <div class="all-content-wrapper">
          <div className="App">
            <div className="wrapper">
              <header
                className="main-header"
                style={{ position: "fixed", width: "100%" }}
              >
                <LogoUser />
                <HeaderTop />
              </header>
              {localStorage.getItem("token") ? (
                <RouterURL />
              ) : (
                <Route path="/" component={BaseContainer} />
              )}

              {localStorage.getItem("token") ? <SideBar /> : ""}
              <Footer />
              <ControlSidebar />
            </div>
          </div>
          {/* <Route exact path="/" component={BaseContainer} /> */}
          {/* <Route exact path="/" component={App} /> */}
        </div>
      </Router>
    </LoadingContainer>
  </DrizzleProvider>,
  document.getElementById("root")
);
