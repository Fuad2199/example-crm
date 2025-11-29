import { calculateOrderStats, DeleteOrderModal, EditOrderModal, NewOrderModal, OrderDetailsModal, OrdersHeader, OrdersTable, Pagination, useOrders, type Order, type StatusFilter } from '@/features/orders';
import React, { useState, useEffect } from 'react';

const OrdersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [orders, setOrders] = useState<Order[]>([]);
  const { data: allOrders = [] } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isNewOrderOpen, setIsNewOrderOpen] = useState<boolean>(false);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [deletingOrder, setDeletingOrder] = useState<Order | null>(null);

  const itemsPerPage = 10;

  // Sync hook data to local state
  useEffect(() => {
    setOrders(allOrders);
  }, [allOrders]);

  const stats = calculateOrderStats(orders);

  // Filter logic
  const filteredOrders: Order[] = orders.filter((order) => {
    const matchesSearch =
      searchTerm === '' ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.products.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const handleViewOrder = (order: Order) => setSelectedOrder(order);
  const handleCloseView = () => setSelectedOrder(null);

  const handleOpenNewOrder = () => setIsNewOrderOpen(true);
  const handleCloseNewOrder = () => setIsNewOrderOpen(false);

  const handleEditOrder = (order: Order) => setEditingOrder(order);
  const handleCloseEditOrder = () => setEditingOrder(null);

  const handleDeleteOrder = (order: Order) => setDeletingOrder(order);
  const handleCloseDeleteOrder = () => setDeletingOrder(null);

  // Callbacks from modals
  const handleOrderCreated = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
    setIsNewOrderOpen(false);
  };

  const handleOrderUpdated = (updated: Order) => {
    setOrders((prev) => prev.map((o) => (o.id === updated.id ? updated : o)));
    setEditingOrder(null);
  };

  const handleOrderDeleted = (deletedId: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== deletedId));
    setDeletingOrder(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <OrdersHeader
        stats={stats}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onFilterChange={setStatusFilter}
        onNewOrder={handleOpenNewOrder}
      />

      {/* Orders Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 dark:bg-slate-900 dark:text-slate-50">
        <OrdersTable
          orders={paginatedOrders}
          onViewOrder={handleViewOrder}
          onEditOrder={handleEditOrder}
          onDeleteOrder={handleDeleteOrder}
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filteredOrders.length}
          itemsPerPage={itemsPerPage}
        />
      </div>

      {/* Modals */}
      {selectedOrder && <OrderDetailsModal order={selectedOrder} onClose={handleCloseView} />}
      {isNewOrderOpen && <NewOrderModal onClose={handleCloseNewOrder} onCreated={handleOrderCreated} />}
      {editingOrder && <EditOrderModal order={editingOrder} onClose={handleCloseEditOrder} onUpdated={handleOrderUpdated} />}
      {deletingOrder && <DeleteOrderModal order={deletingOrder} onClose={handleCloseDeleteOrder} onDeleted={() => handleOrderDeleted(deletingOrder.id)} />}
    </div>
  );
};

export default OrdersPage;
