import React from "react";
import { Outlet } from "react-router-dom";
import { baseConfig } from "../../config";
import SideBar from "../SideBar";
import Header from "../Header";
import Footer from "../Footer";
import "./Layout.css";

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = () => {
  return (
    <div className="layout-container">
      {baseConfig.header ? <Header /> : <></>}
      <SideBar />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className="page-container">
        <Outlet />
      </div>
      {baseConfig.footer ? <Footer /> : <></>}
    </div>
  );
};

export default Layout;
