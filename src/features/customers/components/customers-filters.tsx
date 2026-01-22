import { Button, Input } from '@/components/ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { Filter, Search } from 'lucide-react';
import type { CustomersFiltersProps } from '../types/customer.types';
const customersFilters = ({
    searchQuery,
    onSearch,
    statusFilter,
    onStatusChange,
    hasActiveFilters,
    onReset,
}: CustomersFiltersProps) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search by name, company, email, or owner..."
                        value={searchQuery}
                        onChange={(e) => onSearch(e.target.value)}
                        className="pl-10 border-gray-200 focusc-visible:ring-blue-500"
                    />
                </div>

                {/* Status Filter */}
                <div className="w-full md:w-52">
                    <Select value={statusFilter} onValueChange={onStatusChange}>
                        <SelectTrigger className="border-gray-200">
                            <div className="flex items-center">
                                <Filter className="mr-2 h-4 w-4 text-gray-400" />
                                <SelectValue placeholder="Filter by Status" />
                            </div>
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                            <SelectItem value="lead">Lead</SelectItem>
                            <SelectItem value="churned">Churned</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Reset */}
                {hasActiveFilters && (
                    <Button variant="outline" onClick={onReset} className="border-gray-200">
                        Clear Filters
                    </Button>
                )}
            </div>
        </div>
    );
};

export default customersFilters;
