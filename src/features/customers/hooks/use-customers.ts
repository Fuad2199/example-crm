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
    // filters
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<CustomerStatus | 'all'>('all');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortField, setSortField] = useState<SortField | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

    // pagination
    const itemsPerPage = 10;

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

    // modal states
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    const [deleteOpen, setDeleteOpen] = useState(false);
    const [toDelete, setToDelete] = useState<Customer | null>(null);

    const handlers = {
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
        editCustomer: (customer: Customer) => {
            setModalMode('edit');
            setSelectedCustomer(customer);
            setModalOpen(true);
        },
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
        askDelete: (customer: Customer) => {
            setToDelete(customer);
            setDeleteOpen(true);
        },
        confirmDelete: async () => {
            if (!toDelete) return;
            await deleteCustomer(toDelete.id);
            setDeleteOpen(false);
            toast.success('Customer deleted');
        },
    };

    return {
        data: { customers: data?.data ?? [], total: data?.total ?? 0, isLoading },
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
