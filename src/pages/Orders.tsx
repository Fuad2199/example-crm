import React, { startTransition, Suspense, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type AppDispatch, type RootState } from '@/store';
import {
  setSearchTerm,
  setStatusFilter,
  setCurrentPage,
  setSelectedOrder,
  setEditingOrder,
  setDeletingOrder,
} from '@/features/orders/store/order.slices';
import {
  calculateOrderStats,
  OrdersHeader,
  OrdersTable,
  Pagination,
  OrderDetailsModal,
  NewOrderModal,
  EditOrderModal,
  DeleteOrderModal,
  type Order,
  type StatusFilter,
} from '@/features/orders';
import {
  useGetOrdersQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} from '@/features/orders/api/orders.api';
import OrdersSkeleton from '@/features/orders/components/OrderSkeleton';

const OrdersPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchTerm, statusFilter, currentPage, selectedOrder, editingOrder, deletingOrder } =
    useSelector((state: RootState) => state.orderUI);

  const [isNewOrderOpen, setIsNewOrderOpen] = useState(false);
  const itemsPerPage = 10;

  // RTK Query: server-side pagination
  const { data: orders = [], isLoading } = useGetOrdersQuery({ page: currentPage, limit: itemsPerPage });

  const [createOrder] = useCreateOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();
  const [deleteOrder] = useDeleteOrderMutation();

  // Filter & memoization
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch = searchTerm === '' || order.customer?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, statusFilter]);

  const totalPages = useMemo(() => Math.ceil(filteredOrders.length / itemsPerPage), [filteredOrders.length]);

  const stats = useMemo(() => calculateOrderStats(orders), [orders]);

  // Handlers
  const handleSearchChange = (value: string) =>
    startTransition(() => {
      dispatch(setSearchTerm(value));
    });
  const handleFilterChange = (value: StatusFilter) => dispatch(setStatusFilter(value));
  const handlePageChange = (page: number) => dispatch(setCurrentPage(page));

  const handleViewOrder = (order: Order) => dispatch(setSelectedOrder(order));
  const handleCloseView = () => dispatch(setSelectedOrder(null));

  const handleOpenNewOrder = () => setIsNewOrderOpen(true);
  const handleCloseNewOrder = () => setIsNewOrderOpen(false);

  const handleEditOrder = (order: Order) => dispatch(setEditingOrder(order));
  const handleCloseEditOrder = () => dispatch(setEditingOrder(null));

  const handleDeleteOrder = (order: Order) => dispatch(setDeletingOrder(order));
  const handleCloseDeleteOrder = () => dispatch(setDeletingOrder(null));

  const handleOrderCreated = async (newOrder: Omit<Order, 'id'>) => {
    await createOrder(newOrder);
    setIsNewOrderOpen(false);
  };

  const handleOrderUpdated = async (updated: Order) => {
    await updateOrder({ id: updated.id, data: updated });
    dispatch(setEditingOrder(null));
  };

  const handleOrderDeleted = async (deletedId: string) => {
    await deleteOrder(deletedId);
    dispatch(setDeletingOrder(null));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <OrdersHeader
        stats={stats}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        statusFilter={statusFilter}
        onFilterChange={handleFilterChange}
        onNewOrder={handleOpenNewOrder}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 dark:bg-slate-900 dark:text-slate-50">
        <div className="min-h-[420px]">
          {isLoading ? (
            <OrdersSkeleton />
          ) : (
            <OrdersTable
              orders={filteredOrders}
              onViewOrder={handleViewOrder}
              onEditOrder={handleEditOrder}
              onDeleteOrder={handleDeleteOrder}
            />
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={filteredOrders.length}
          itemsPerPage={itemsPerPage}
        />
      </div>

      {selectedOrder && <OrderDetailsModal order={selectedOrder} onClose={handleCloseView} />}
      {isNewOrderOpen && <NewOrderModal onClose={handleCloseNewOrder} onCreated={handleOrderCreated} />}
      <Suspense fallback={null}>
        {editingOrder && (
          <EditOrderModal order={editingOrder} onClose={handleCloseEditOrder} onUpdated={handleOrderUpdated} />
        )}
      </Suspense>
      {deletingOrder && (
        <DeleteOrderModal order={deletingOrder} onClose={handleCloseDeleteOrder} onDeleted={() => handleOrderDeleted(deletingOrder.id)} />
      )}
    </div>
  );
};

export default OrdersPage;
