// src/features/customers/customersApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Customer, GetCustomersParams } from '../types/customer.types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const customersApi = createApi({
    reducerPath: 'customersApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    tagTypes: ['Customer'],
    endpoints: (builder) => ({
        getCustomers: builder.query<{ data: Customer[]; total: number }, GetCustomersParams>({
            query: ({ page = 1, limit = 10, sortField, sortDirection, searchQuery, statusFilter }) => {
                const params = new URLSearchParams();

                params.append('_page', page.toString());
                params.append('_limit', limit.toString());

                if (sortField) {
                    params.append('_sort', sortField);
                    params.append('_order', sortDirection || 'asc');
                }

                if (searchQuery) {
                    params.append('q', searchQuery);
                }

                if (statusFilter && statusFilter !== 'all') {
                    params.append('status', statusFilter);
                }

                return `customers?${params.toString()}`
            },
            transformResponse: (response: Customer[], meta) => {
              const total = Number(meta?.response?.headers.get('X-Total-Count') ?? response.length);
              return { data: response, total };
            },
            providesTags: (result) =>
                result
                    ? [...result.data.map(({ id }) => ({ type: 'Customer' as const, id })),
                          { type: 'Customer', id: 'LIST' },
                      ]
                    : [{ type: 'Customer', id: 'LIST' }],
        }),
        addCustomer: builder.mutation<Customer, Omit<Customer, 'id'>>({
            query: (body) => ({
                url: 'customers',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Customer', id: 'LIST' }],
        }),
        updateCustomer: builder.mutation<Customer, Customer>({
            query: ({ id, ...rest }) => ({
                url: `customers/${id}`,
                method: 'PUT',
                body: rest,
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: 'Customer', id }],
        }),
        deleteCustomer: builder.mutation<{ success: boolean; id: string }, string>({
            query: (id) => ({
                url: `customers/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Customer', id: 'LIST' }],
        }),
    }),
});

export const {
    useGetCustomersQuery,
    useAddCustomerMutation,
    useUpdateCustomerMutation,
    useDeleteCustomerMutation,
} = customersApi;
