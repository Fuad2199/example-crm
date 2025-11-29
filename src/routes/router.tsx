import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "@/pages/Dashboard";
import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";
import Customers from "@/pages/Customers";
import OrdersPage from "@/pages/Orders";
import ProfilePage from "@/pages/Profile";
import Deals from "@/pages/Deals";
import { Users } from "@/pages/Users";
import { ActivityLogs } from "@/pages/ActivityLogs";
import { Contacts } from "@/pages/Contacts";
import { LeadsPage } from "@/pages/Leads";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
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
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "customers",
        element: (
          <ProtectedRoute permission="customers:read">
            <Customers />
          </ProtectedRoute>
        ),
      },
      {
        path: "deals",
        element: (
          <ProtectedRoute permission="deals:read">
            <Deals />
          </ProtectedRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <ProtectedRoute permission="orders:read">
            <OrdersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "users",
        element: (
          <ProtectedRoute permission="users:read">
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "contacts",
        element: (
          <ProtectedRoute permission="contacts:read">
            <Contacts />
          </ProtectedRoute>
        ),
      },
      {
        path: "activity",
        element: (
          <ProtectedRoute permission="activity:read">
            <ActivityLogs />
          </ProtectedRoute>
        ),
      },
      {
        path: "leads",
        element: (
          <ProtectedRoute permission="leads:read">
            <LeadsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute permission="profile:read">
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
