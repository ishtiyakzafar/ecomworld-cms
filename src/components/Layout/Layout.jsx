import React from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="page_container">
      <Sidebar />
      <div className="page_content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
