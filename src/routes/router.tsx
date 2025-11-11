import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Contacts from "@/pages/Contacts";
import Profile from "@/pages/Profile";
import { AuthLayout } from "./AuthLayout";


export const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthLayout><Login /></AuthLayout> 
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "profile",
        element: <Profile />,
      }
    ],
  },
]);
