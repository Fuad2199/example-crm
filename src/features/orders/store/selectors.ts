import type { RootState } from "@/store";

export const selectOrdersState = (state: RootState) => state.orderUI;

export const selectOrders = (state: RootState) =>
  selectOrdersState(state).orders;

export const selectSearchTerm = (state: RootState) =>
  selectOrdersState(state).searchTerm;

export const selectStatusFilter = (state: RootState) =>
  selectOrdersState(state).statusFilter;

export const selectCurrentPage = (state: RootState) =>
  selectOrdersState(state).currentPage;

export const selectSelectedOrder = (state: RootState) =>
  selectOrdersState(state).selectedOrder;

export const selectEditingOrder = (state: RootState) =>
  selectOrdersState(state).editingOrder;

export const selectDeletingOrder = (state: RootState) =>
  selectOrdersState(state).deletingOrder;

