import { useState } from 'react';
import type { Customer, CustomerStatus, SortDirection, SortField } from '../types/customer.types';
import { toast } from 'sonner';
import {
    useAddCustomerMutation,
    useDeleteCustomerMutation,
    useGetCustomersQuery,
    useUpdateCustomerMutation,
} from '../api/customer.api';

const useCustomers = () => {
    
    // Local UI state for filtering and sorting
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<CustomerStatus | 'all'>('all');
    const [sortField, setSortField] = useState<SortField | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    
    // Pagination state
    const [itemsPerPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Fetch customers with RTK Query (server-side filtering, sorting, pagination)
    const { data, isLoading } = useGetCustomersQuery({
        page: currentPage,
        limit: itemsPerPage,
        sortField: sortField ?? undefined,
        sortDirection,
        searchQuery: searchQuery,
        statusFilter: statusFilter !== 'all' ? statusFilter : undefined,
    });

    // RTK Query mutations
    const [addCustomer] = useAddCustomerMutation();
    const [updateCustomer] = useUpdateCustomerMutation();
    const [deleteCustomer] = useDeleteCustomerMutation();

    // Add/Edit modal state
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    // Delete confirmation modal state
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [toDelete, setToDelete] = useState<Customer | null>(null);

    // Centralized action handlers
    const handlers = {
        // Create new customer
        addCustomer: async (data: Omit<Customer, 'id'>) => {
            try {
                await addCustomer(data).unwrap();
                setModalMode('add');
                setSelectedCustomer(null);
                setModalOpen(true);
                toast.success('Customer added');
            } catch (err) {
                toast.error('Failed to add customer');
                console.error(err);
            }
        },

        // Open edit modal with selected customer
        editCustomer: (customer: Customer) => {
            setModalMode('edit');
            setSelectedCustomer(customer);
            setModalOpen(true);
        },

        // Save customer (add or update based on mode)
        saveCustomer: async (data: Omit<Customer, 'id'>) => {
            if (modalMode === 'add') {
                await addCustomer(data);
                toast.success('Customer added');
            } else if (selectedCustomer) {
                await updateCustomer({ id: selectedCustomer.id, ...data });
                toast.success('Customer updated');
            }
            setModalOpen(false);
        },

        // Open delete confirmation modal
        askDelete: (customer: Customer) => {
            setToDelete(customer);
            setDeleteOpen(true);
        },

        // Confirm and execute delete
        confirmDelete: async () => {
            if (!toDelete) return;
            await deleteCustomer(toDelete.id);
            setDeleteOpen(false);
            toast.success('Customer deleted');
        },
    };

    // Public API of the hook
    return {
        // Data layer
        data: { customers: data?.data ?? [], total: data?.total ?? 0, isLoading },

        // Filter controls
        filters: {
            searchQuery,
            statusFilter,
            hasActiveFilters: searchQuery !== '' || statusFilter !== 'all',
            onSearch(value: string) {
                setSearchQuery(value);
                setCurrentPage(1);
            },
            onStatusChange(value: CustomerStatus) {
                setStatusFilter(value);
                setCurrentPage(1);
            },
            onReset() {
                setSearchQuery('');
                setStatusFilter('all');
                setCurrentPage(1);
            },
        },

        // Modal controls
        modals: {
            modalOpen,
            modalMode,
            selectedCustomer,
            deleteOpen,
            customerName: toDelete?.name ?? '',
            onCloseModal: () => setModalOpen(false),
            onSave: handlers.saveCustomer,
            onCloseDelete: () => setDeleteOpen(false),
            onConfirmDelete: handlers.confirmDelete,
        },

        // Sorting logic
        sorting: {
            sortField,
            sortDirection,
            onSort(field: SortField) {
                if (sortField === field) {
                    setSortDirection((d) => (d === 'asc' ? 'desc' : 'asc'));
                } else {
                    setSortField(field);
                    setSortDirection('asc');
                }
            },
        },

        // Pagination helpers
        pagination: {
            currentPage,
            totalPages: Math.ceil((data?.total ?? 0) / itemsPerPage),
            next: () => setCurrentPage((p) => p + 1),
            prev: () => setCurrentPage((p) => p - 1),
            reset: () => setCurrentPage(1),
        },
        handlers,
    };
};

export default useCustomers;
