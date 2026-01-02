import type { OrdersState } from "../types/orders.types";

export const orderInitialState: OrdersState = {
    orders: [],
    searchTerm: '',
    statusFilter: 'all',
    currentPage: 1,
    selectedOrder: null,
    editingOrder: null,
    deletingOrder: null,
    loading: false,
    error: null,
};