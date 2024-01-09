import React from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./components/main/MainLayout";
import MainHome from "./pages/main/MainHome";
import About from "./pages/main/About";
import Contact from "./pages/main/Contact";
import MainError from "./pages/errors/MainError";
import SchoolLayout from "./components/school/SchoolLayout";
import SchoolHome from "./pages/school/SchoolHome";
import SchoolAbout from "./pages/school/SchoolAbout";
import SchoolError from "./pages/errors/SchoolError";
import AccountLayout from "./components/account/AccountLayout";
import AccountHome from "./pages/account/AccountHome";
import AccountContact from "./pages/account/AccountContact";
import AccountError from "./pages/errors/AccountError";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainHome />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/*" element={<MainError />} />

        <Route path="/school" element={<SchoolLayout />}>
          <Route index element={<SchoolHome />} />
          <Route path="about" element={<SchoolAbout />} />
        </Route>
        <Route path="/school/*" element={<SchoolError />} />

        <Route path="/account" element={<AccountLayout />}>
          <Route index element={<AccountHome />} />
          <Route path="contact" element={<AccountContact />} />
        </Route>
        <Route path="/account/*" element={<AccountError />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
