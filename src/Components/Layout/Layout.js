import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <div 
    style={
      {
        display:"flex" 
      }
    }>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;