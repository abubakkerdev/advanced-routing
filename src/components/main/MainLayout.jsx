import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>
        <h2>Main Header Part</h2>
      </header>
      <Outlet />
      <footer>
        <h2>Main Footer Part</h2>
      </footer>
    </>
  );
}

export default MainLayout;
