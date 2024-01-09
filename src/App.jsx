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
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import SchoolUser, { user } from "./pages/school/SchoolUser";
import SchoolUserError from "./pages/school/SchoolUserError";
import AccountFrom from "./pages/account/AccountFrom";
import userFromValidation from "./pages/account/accountFromvalidation";
import AccountFromError from "./pages/account/AccountFromError";
import AccountSuccess from "./pages/account/AccountSuccess";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainHome />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/school" element={<SchoolLayout />}>
          <Route index element={<SchoolHome />} />
          <Route path="about" element={<SchoolAbout />} />
          <Route
            path="user"
            element={<SchoolUser />}
            loader={user}
            errorElement={<SchoolUserError />}
          />
        </Route>
        <Route path="/school/*" element={<SchoolError />} />

        <Route path="/account" element={<AccountLayout />}>
          <Route index element={<AccountHome />} />
          <Route path="contact" element={<AccountContact />} />
          <Route path="success" element={<AccountSuccess />} />
          <Route
            path="from"
            element={<AccountFrom />}
            action={userFromValidation}
            errorElement={<AccountFromError />}
          />
        </Route>
        <Route path="/account/*" element={<AccountError />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registration />} />

        <Route path="/*" element={<MainError />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
