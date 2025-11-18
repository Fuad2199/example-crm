import React from 'react';
import { Download, Plus } from 'lucide-react';

interface OrdersActionsProps {
  onNewOrder: () => void;
}

export const OrdersActions: React.FC<OrdersActionsProps> = ({ onNewOrder }) => (
  <section className="flex gap-2">
    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 dark:text-slate-50 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors cursor-pointer">
      <Download size={16} />
      Export
    </button>
    <button
      onClick={onNewOrder}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors cursor-pointer"
    >
      <Plus size={16} />
      New Order
    </button>
  </section>
);
