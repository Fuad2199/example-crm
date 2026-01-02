// auth.types.ts
import type { Permission } from "@/utils/rbac/Permission";
import type { LucideIcon } from "lucide-react";

// ===== Roles =====
export type Role = "admin" | "agent";

// ===== Auth Payloads =====
export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

// ===== User =====
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: Role;
  lastLogin: string;
  isActive: boolean;
  isLoggedIn: boolean;
  isAuthenticated: boolean;
}

// ===== Auth State =====
export interface AuthState {
  user: User | null;
  accessToken?: string | undefined;
  refreshToken?: string | undefined;
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  isAuthenticated: boolean;
  isActive: boolean;
}

// ===== Navigation / Menu =====
export interface MenuItem {
  id: number;
  title: string;
  icon: LucideIcon;
  path: string;
  roles: Role[];
  children?: MenuItem[];
}

// ===== Protected Route Props =====
export interface ProtectedRouteProps {
  children: React.ReactNode;
  permission?: Permission;
}
