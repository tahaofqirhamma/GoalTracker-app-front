import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <section className="section layout">
        <div className="sdiebar">
          <Sidebar />
        </div>
        <div className="rest">
          <Navbar />
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Layout;
