import React from "react";
import { Outlet } from "react-router-dom";

function SchoolLayout() {
  return (
    <>
      <header>
        <h2>School Header Part</h2>
      </header>
      <Outlet />
      <footer>
        <h2>School Footer Part</h2>
      </footer>
    </>
  );
}

export default SchoolLayout;
