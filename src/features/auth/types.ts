import type { LucideIcon } from "lucide-react";

export type Role = "admin" | "agent";

export type LoginPayload = {
  email: string;
  password: string;
}



export interface LoginResponse {
  token: string;
  user: Pick<User, "id" | "name" | "role" | "email"> & { avatar?: string };
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: Role;
  isLoggedIn: boolean;
  lastLogin: string;
}


export interface MenuItem {
  id: number;
  title: string;
  icon: LucideIcon;
  path: string;
  roles: Role[];
  children?: MenuItem[];
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
  permission: string;
};