export const Permission = {
  DASHBOARD_READ: "dashboard:read",
  CUSTOMERS_READ: "customers:read",
  DEALS_READ: "deals:read",
  ORDERS_READ: "orders:read",
  USERS_READ: "users:read",
  CONTACTS_READ: "contacts:read",
  ACTIVITY_READ: "activity:read",
  LEADS_READ: "leads:read",
  PROFILE_READ: "profile:read",
} as const;

export type Permission = typeof Permission[keyof typeof Permission];
