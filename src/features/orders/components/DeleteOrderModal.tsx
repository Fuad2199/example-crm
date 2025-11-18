// src/features/orders/components/DeleteOrderModal.tsx
import React from 'react';
import { X } from 'lucide-react';
import type { Order } from '@/features/orders/orders.types';

interface DeleteOrderModalProps {
  order: Order;
  onClose: () => void;
  onDeleted: () => void; // callback silindikdən sonra
}

export const DeleteOrderModal: React.FC<DeleteOrderModalProps> = ({
  order,
  onClose,
  onDeleted,
}) => {
  const handleDelete = () => {
    // Burada backend API çağırışı edə bilərsən, məsələn:
    // await deleteOrder(order.id);
    console.log('Deleted order', order.id);
    onDeleted();
  };

  return (
    <div className="fixed inset-0 dark:bg-dark/50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white border border-slate-300 dark:bg-slate-900 dark:text-slate-50 rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Delete Order</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded cursor-pointer">
            <X size={20} />
          </button>
        </div>

        <p className="mb-6 text-gray-700 dark:text-slate-50">
          Are you sure you want to delete order <span className="font-semibold">{order.id}</span>?
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 dark:hover:bg-slate-950 text-gray-700 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
