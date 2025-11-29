import type { Role } from "@/features/auth/types";
import type { LucideIcon } from "lucide-react";

const rolePermissions: Record<Role, string[]> = {
  admin: ["dashboard:read", "contacts:read", "customers:read", "deals:read", "leads:read", "users:read", "orders:read", "activity:read", "profile:read"],
  agent: ["dashboard:read", "contacts:read", "customers:read", "deals:read", "leads:read", "users:read", "orders:read"],
};

// İcazə yoxlama
export const can = (role: Role, permissions: string[] | string): boolean => {
  if (!permissions) return false;

  if (Array.isArray(permissions)) {
    return permissions.includes(role);
  }

  // əvvəlki string-based permission yoxlaması
  return rolePermissions[role]?.includes(permissions) ?? false;
};

// Menu filter
export const filterMenuByRole = (menu: Array<{ icon: LucideIcon; label: string; roles: Role[] }>, role: Role) => {
  return menu.filter(item => item.roles.includes(role));
};
