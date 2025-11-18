import { ORDER_STATUS_COLORS } from "../constants";

export const getStatusColor = (
  status: keyof typeof ORDER_STATUS_COLORS
): string => {
  return ORDER_STATUS_COLORS[status] || ORDER_STATUS_COLORS.default;
};

