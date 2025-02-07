import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Root/HomeLayout";
import Error from "../Components/Error";
import Login from "../page/Login";

import LoginLayout from "../Root/LoginLayout";
import Register from "../page/Register";
import Protected from "./Protected";
import Profile from "../page/Profile";
import UpdateProfile from "../Components/UpdateProfile";
import ForgetPassword from "../Components/ForgetPassword";
import Services from "../Components/Services";
import Details from "../page/Details";
import Solution from "../Components/Solution";
import Courses from "../page/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Services></Services>,
        loader: () => fetch("/data.json"),
      },
    ],
  },

  {
    path: "/details/:id",
    element: (
      <Protected>
        <Details></Details>
      </Protected>
    ),
    loader: () => fetch("/data.json"),
  },

  {
    path: "/courses",
    element: (
      <Protected>
        <Courses></Courses>
      </Protected>
    ),
    loader: () => fetch("/data.json"),
  },

  {
    path: "/auth",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },

  {
    path: "/profile",
    element: (
      <Protected>
        <Profile></Profile>
      </Protected>
    ),
    children: [{ path: "/profile", element: <UpdateProfile></UpdateProfile> }],
  },
]);
