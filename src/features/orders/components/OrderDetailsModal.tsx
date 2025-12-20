import React from 'react';
import { X } from 'lucide-react';
import type { Order } from '@/features/orders/types/orders.types';

interface OrderDetailsModalProps {
  order: Order;
  onClose: () => void;
}

export const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ order, onClose }) => (
  <div className="fixed inset-0 bg-black/50 dark:bg-white/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white dark:bg-slate-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="sticky top-0 bg-white border-b dark:text-slate-50 dark:bg-slate-900 border-gray-200 px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-50 dark:bg-slate-900">Order Details</h2>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-red-600 rounded transition-colors cursor-pointer">
          <X size={20} />
        </button>
      </div>

      <div className="p-6">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Customer:</strong> {order.customer}</p>
        <p><strong>Products:</strong> {order.products}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>
    </div>
  </div>
);
