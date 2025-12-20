import React from 'react';
import { Edit, X, Eye } from 'lucide-react';
import type { Order } from '@/features/orders/types/orders.types';

interface OrdersTableRowActionsProps {
  order: Order;
  onView: (order: Order) => void;
  onEdit: (order: Order) => void;
  onDelete: (order: Order) => void;
}

export const OrdersTableRowActions: React.FC<OrdersTableRowActionsProps> = ({
  order,
  onView,
  onEdit,
  onDelete,
}) => (
  <div className="flex gap-2">
    <button onClick={() => onView(order)} className="p-1 text-blue-600 hover:bg-blue-50 rounded cursor-pointer" title="View Order">
      <Eye size={16} />
    </button>
    <button onClick={() => onEdit(order)} className="p-1 text-yellow-600 hover:bg-blue-50 rounded cursor-pointer" title="Edit Order">
      <Edit size={16} />
    </button>
    <button onClick={() => onDelete(order)} className="p-1 text-red-600 hover:bg-blue-50 rounded cursor-pointer" title="Delete Order">
      <X size={16} />
    </button>
  </div>
);
