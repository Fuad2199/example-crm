import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "@/pages/Dashboard";
import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";
import Customers from "@/pages/Customers";
import { Sales } from "@/pages/Sales";
import { Products } from "@/pages/Products";
import OrdersPage from "@/pages/Orders";
import { Analytics } from "@/pages/Analytics";
import ProfilePage from "@/pages/Profile";

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
        path: "sales",
        element: (
          <ProtectedRoute permission="sales:read">
            <Sales />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute permission="products:read">
            <Products />
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
        path: "analytics",
        element: (
          <ProtectedRoute permission="analytics:read">
            <Analytics />
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
