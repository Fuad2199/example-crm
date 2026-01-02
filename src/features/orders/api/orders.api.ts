import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Order } from '../types/orders.types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    // GET /orders?page=1&limit=10
    getOrders: builder.query<Order[], { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 }) => `/orders?_page=${page}&_limit=${limit}`,
      providesTags: ['Orders'],
    }),

    // GET /orders/:id
    getOrderById: builder.query<Order, string>({
      query: (id) => `/orders/${id}`,
      providesTags: (_, __, id) => [{ type: 'Orders', id }],
    }),

    // POST /orders
    createOrder: builder.mutation<Order, Omit<Order, 'id'>>({
      query: (body) => ({
        url: '/orders',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Orders'],
    }),

    // PUT /orders/:id
    updateOrder: builder.mutation<Order, { id: string; data: Partial<Omit<Order, 'id'>> }>({
      query: ({ id, data }) => ({
        url: `/orders/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_, __, { id }) => [{ type: 'Orders', id }],
    }),

    // DELETE /orders/:id
    deleteOrder: builder.mutation<void, string>({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = ordersApi;
