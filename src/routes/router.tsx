import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";
import { ActivityLogs, Contacts, Customers, Dashboard, Deals, LeadsPage, Login, OrdersPage, ProfilePage, Users } from "@/pages";
import { Permission } from "@/utils/rbac/Permission";

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
          <ProtectedRoute permission={Permission.CUSTOMERS_READ}>
            <Customers />
          </ProtectedRoute>
        ),
      },
      {
        path: "deals",
        element: (
          <ProtectedRoute permission={Permission.DEALS_READ}>
            <Deals />
          </ProtectedRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <ProtectedRoute permission={Permission.ORDERS_READ}>
            <OrdersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "users",
        element: (
          <ProtectedRoute permission={Permission.USERS_READ}>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "contacts",
        element: (
          <ProtectedRoute permission={Permission.CONTACTS_READ}>
            <Contacts />
          </ProtectedRoute>
        ),
      },
      {
        path: "activity",
        element: (
          <ProtectedRoute permission={Permission.ACTIVITY_READ}>
            <ActivityLogs />
          </ProtectedRoute>
        ),
      },
      {
        path: "leads",
        element: (
          <ProtectedRoute permission={Permission.LEADS_READ}>
            <LeadsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute permission={Permission.PROFILE_READ}>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
