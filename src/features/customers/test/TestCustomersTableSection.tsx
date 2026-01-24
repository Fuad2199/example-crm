import { useEffect, useState } from 'react';
import type { Customer, CustomersTableSectionProps } from '../types/customer.types';
import useCustomers from '../hooks/use-customers';
import CustomersFilters from '../components/customers-filters';
import { customersData } from '@/constants';
import TableSection from '../components/table-section';

export default function TestCustomersTableSection({
    sorting,
    pagination,
}: CustomersTableSectionProps) {
    const { filters, data } = useCustomers();
    const [currentCustomers, setCurrentCustomers] = useState<Customer[]>(data.customers || customersData);

    // Simulate search input
    useEffect(() => {
        const query = filters.searchQuery.toLowerCase();
        const filtered = data.customers.filter((c: Customer) => c.name.toLowerCase().includes(query));
        setCurrentCustomers(filtered);
    }, [filters.searchQuery, data.customers]);
    return (
        <div>
            <CustomersFilters
                searchQuery={filters.searchQuery}
                statusFilter={filters.statusFilter}
                onSearch={filters.onSearch}
                onStatusChange={filters.onStatusChange}
                onReset={filters.onReset}
                hasActiveFilters={filters.hasActiveFilters}
            />
    
            <TableSection
                customers={currentCustomers}
                totalCount={currentCustomers.length}
                pagination={pagination}
                sorting={sorting}
                onEdit={(c: Customer) => console.log('edit', c)}
                onDelete={(c: Customer) => console.log('delete', c)}
            />
        </div>
    );
}
