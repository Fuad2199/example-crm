export const Permission = {
  DASHBOARD_READ: "dashboard:read",
  CUSTOMERS_READ: "customers:read",
  DEALS_READ: "deals:read",
  PRODUCTS_READ: "products:read",
  ORDERS_READ: "orders:read",
  ANALYTICS_READ: "analytics:read",
  PROFILE_READ: "profile:read",
} as const;

export type Permission = typeof Permission[keyof typeof Permission];
