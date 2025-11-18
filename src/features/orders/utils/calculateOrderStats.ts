// src/features/orders/utils/calculateOrderStats.ts

import type { Order } from "../orders.types";

export const calculateOrderStats = (orders: Order[]) => ({
  total: orders.length,
  pending: orders.filter(o => o.status === 'pending').length,
  shipped: orders.filter(o => o.status === 'shipped').length,
  delivered: orders.filter(o => o.status === 'delivered').length,
});
