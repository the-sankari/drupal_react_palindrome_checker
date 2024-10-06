import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <h1>Plindrome Checker</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
