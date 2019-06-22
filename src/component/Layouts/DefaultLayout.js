import React from "react";
import Header from "../containers/header/MainMenu";
import MenuLogin from "../containers/header/MenuLogin";
import Footer from "../containers/footer/Footer";
import ModalForm from "../containers/modal/Modal";
import { ACCESS_TOKEN } from "../constants";

export const DefaultLayout = ({ children }) => {
  const login = localStorage.getItem(ACCESS_TOKEN);
  return (
    <div className="layout-default">
      <header
        className="main-header"
        style={{ position: "fixed", width: "100%" }}
      >
        <LogoUser />
        <HeaderTop />
      </header>
      <SideBar />
      <div class="all-content-wrapper">{children}</div>
      <ControlSidebar />
      <Footer />
    </div>
  );
};
