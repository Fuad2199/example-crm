import React from 'react';
import { OrdersStatsCards, type OrdersStats } from '@/features/orders/components/OrderStatsCards';
import type { StatusFilter } from '@/features/orders/orders.types';
import { SearchFilter } from '@/shared/components/search-filter';
import { OrdersActions } from './OrdersActions';

interface OrdersHeaderProps {
  stats: OrdersStats;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: StatusFilter;
  onFilterChange: (value: StatusFilter) => void;
  onNewOrder: () => void; // ✅ New prop for opening modal
}

export const OrdersHeader: React.FC<OrdersHeaderProps> = ({
  stats,
  searchTerm,
  onSearchChange,
  statusFilter,
  onFilterChange,
  onNewOrder, // ✅ receive callback
}) => {
  return (
    <header className="bg-white border-b border-gray-200 dark:bg-slate-900 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-slate-50 dark:bg-slate-900">Orders</h1>
          <OrdersActions onNewOrder={onNewOrder} /> {/* ✅ pass callback */}
        </div>

        {/* Stats */}
        <section className="p-6">
          <OrdersStatsCards stats={stats} />
        </section>

        {/* Search + Filters */}
        <section className="flex gap-3">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            filterValue={statusFilter}
            onFilterChange={(value) => onFilterChange(value as StatusFilter)}
            filterOptions={[
              { value: 'all', label: 'All Status' },
              { value: 'pending', label: 'Pending' },
              { value: 'shipped', label: 'Shipped' },
              { value: 'delivered', label: 'Delivered' },
              { value: 'cancelled', label: 'Cancelled' },
            ]}
          />
        </section>
      </div>
    </header>
  );
};
