import { Navigate } from "react-router-dom";
import type { ProtectedRouteProps } from "../types";
import { can } from "@/utils/rbac";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

export const ProtectedRoute = ({ permission, children }: ProtectedRouteProps) => {
  const { user, isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

   if (loading) return <div>Loading...</div>;
  if (!isAuthenticated || !user) return <Navigate to="/login" replace />;
  if (permission && (!user || !can(user.role, permission))) return <div>Access Denied ❌</div>;

  return <>{children}</>;
};
