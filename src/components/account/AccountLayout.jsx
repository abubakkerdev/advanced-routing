import React from "react";
import { Outlet } from "react-router-dom";

function AccountLayout() {
  return (
    <>
      <header>
        <h2>Account Header Part</h2>
      </header>
      <Outlet />
      <footer>
        <h2>Account Footer Part</h2>
      </footer>
    </>
  );
}

export default AccountLayout;
