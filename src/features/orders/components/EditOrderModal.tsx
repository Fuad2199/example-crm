// src/features/orders/components/EditOrderModal.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Order } from '@/features/orders/types/orders.types';
import { updateOrder } from '../services/OrderService';

interface EditOrderModalProps {
  order: Order;
  onClose: () => void;
  onUpdated: (order: Order) => void;
}

export const EditOrderModal: React.FC<EditOrderModalProps> = ({ order, onClose, onUpdated }) => {
  const [customer, setCustomer] = useState(order.customer);
  const [products, setProducts] = useState(order.products);
  const [status, setStatus] = useState<Order['status']>(order.status);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updated = await updateOrder(order.id, { customer, products, status });
      onUpdated(updated);
      onClose();
    } catch (error) {
      console.error(error);
      alert('Error updating order!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/10 dark:bg-black/50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white border border-slate-300 dark:border-slate-300 dark:bg-slate-900 rounded-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Order</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-red-600 rounded cursor-pointer">
            <X size={20} />
          </button>
        </div>

        <form className="space-y-4 dark:bg-slate-900" onSubmit={handleSubmit}>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Customer"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            value={products}
            onChange={(e) => setProducts(e.target.value)}
            placeholder="Products"
            className="w-full border px-3 py-2 rounded"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Order['status'])}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};
