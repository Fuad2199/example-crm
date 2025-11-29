import { Navigate } from "react-router-dom";
import type { ProtectedRouteProps } from "../types";
import { useAuth } from "../hooks/useAuth";
import { can } from "@/utils/rbac";



export const ProtectedRoute = ({ permission, children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>; 
  if (!user) return <Navigate to="/login" replace />;
  if (!can(user.role, permission)) return <div>Access Denied ❌</div>;

  return <>{children}</>;
};
