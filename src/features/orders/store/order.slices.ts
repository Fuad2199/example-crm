
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Order, OrdersState, StatusFilter } from '../types/orders.types';


const initialState: OrdersState = {
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

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
            state.currentPage = 1;
        },
        setStatusFilter(state, action: PayloadAction<StatusFilter>) {
            state.statusFilter = action.payload;
            state.currentPage = 1;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setSelectedOrder(state, action: PayloadAction<Order | null>) {
            state.selectedOrder = action.payload;
        },
        setEditingOrder(state, action: PayloadAction<Order | null>) {
            state.editingOrder = action.payload;
        },
        setDeletingOrder(state, action: PayloadAction<Order | null>) {
            state.deletingOrder = action.payload;
        },
        resetOrderUIState(state) {
            state.selectedOrder = null;
            state.editingOrder = null;
            state.deletingOrder = null;
        },
    }
});

export const {
    setSearchTerm,
    setStatusFilter,
    setCurrentPage,
    setSelectedOrder,
    setEditingOrder,
    setDeletingOrder,
    resetOrderUIState,
} = orderSlice.actions;

export default orderSlice.reducer;
