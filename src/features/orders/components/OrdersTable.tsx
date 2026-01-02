import React from 'react';
import { OrdersTableRowActions } from './OrdersTableRowActions';
import type { OrdersTableProps } from '../types/orders.types';

export const OrdersTable: React.FC<OrdersTableProps> = ({
  orders,
  onViewOrder,
  onEditOrder,
  onDeleteOrder,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">

        {/* orders table header */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:bg-slate-900 dark:text-slate-50 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:bg-slate-900 dark:text-slate-50 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:bg-slate-900 dark:text-slate-50 uppercase tracking-wider">
              Products
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:bg-slate-900 dark:text-slate-50 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:bg-slate-900 dark:text-slate-50 uppercase tracking-wider">
              Payment
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:bg-slate-900 dark:text-slate-50 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        {/* orders table content */}
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map(order => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:bg-slate-900 dark:text-slate-50">
                {order.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:bg-slate-900 dark:text-slate-50">
                {order.customer}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:bg-slate-900 dark:text-slate-50">
                {order.products}
              </td>

              {/* Status with colored badge */}
              <td className="px-6 py-4 whitespace-nowrap text-sm dark:bg-slate-900 dark:text-slate-50">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${order.status === 'shipped' ? 'bg-blue-100 text-blue-800' : ''}
                    ${order.status === 'delivered' ? 'bg-green-100 text-green-800' : ''}
                    ${order.status === 'cancelled' ? 'bg-red-100 text-red-800' : ''}
                  `}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </td>

              {/* Payment with colored badge */}
              <td className="px-6 py-4 whitespace-nowrap text-sm dark:bg-slate-900 dark:text-slate-50">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${order.payment === 'Paid' ? 'bg-green-100 text-green-800' : ''}
                    ${order.payment === 'Unpaid' ? 'bg-red-100 text-red-800' : ''}
                    ${order.payment === 'Partially Paid' ? 'bg-yellow-100 text-yellow-800' : ''}
                  `}
                >
                  {order.payment}
                </span>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:bg-slate-900 dark:text-slate-50">
                <OrdersTableRowActions
                  order={order}
                  onView={onViewOrder}
                  onEdit={onEditOrder}
                  onDelete={onDeleteOrder}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(OrdersTable);