import type { CustomerStatus, SortDirection, SortField } from '../types/customer.types';
import { useGetCustomersQuery, useAddCustomerMutation, useUpdateCustomerMutation, useDeleteCustomerMutation } from '../api/customer.api';

export const useCustomerData = (searchQuery: string, statusFilter: CustomerStatus | 'all', sortField: SortField | null, sortDirection: SortDirection, currentPage: number, itemsPerPage: number) => {
    const { data, isLoading } = useGetCustomersQuery({
        page: currentPage,
        limit: itemsPerPage,
        sortField: sortField ?? undefined,
        sortDirection,
        searchQuery: searchQuery || undefined,
        statusFilter: statusFilter !== 'all' ? statusFilter : undefined,
    });

    const [addCustomer] = useAddCustomerMutation();
    const [updateCustomer] = useUpdateCustomerMutation();
    const [deleteCustomer] = useDeleteCustomerMutation();

    return { data, isLoading, addCustomer, updateCustomer, deleteCustomer };
};
