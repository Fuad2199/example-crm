export type CustomerStatus = "active" | "inactive" | "lead" | "churned";

export interface Customer {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  company: string;
  email: string;
  status: CustomerStatus;
  lastActivity: string;
  owner: string;
}

export type SortField = "name" | "company" | "status" | "lastActivity";
export type SortDirection = "asc" | "desc";

export interface CustomerHeadersProps {
  onAdd: () => void;
}
export interface CustomersModalsProps {
  modalOpen: boolean;
  modalMode: "add" | "edit";
  selectedCustomer: Customer | null;
  deleteOpen: boolean;
  customerName: string;
  onCloseModal: () => void;
  onSave: (data: Omit<Customer, "id">) => void;
  onCloseDelete: () => void;
  onConfirmDelete: () => void;
}

export type AnalyticsProps = {
    totalCustomers: number;
    activeCustomers: number;
    inactiveCustomers: number;
    leadCustomers: number;
    churnedCustomers: number;
    conversionRate: string;
    recentlyActive: number;
};

export interface CustomersFiltersProps {
    searchQuery: string;
    onSearch: (value: string) => void;
    statusFilter: CustomerStatus | "all";
    onStatusChange: (value: CustomerStatus) => void;
    hasActiveFilters: boolean;
    onReset: () => void;
}
export interface CustomerTableProps {
  customers: Customer[];

  sortField: SortField | null;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;

  onEdit: (customer: Customer) => void;
  onDelete: (customer: Customer) => void;
}

export interface CustomersTableSectionProps {
  customers: Customer[];

  sorting: {
    sortField: SortField | null;
    sortDirection: SortDirection;
    onSort: (field: SortField) => void;
  };

  pagination: {
    currentPage: number;
    totalPages: number;
    next: () => void;
    prev: () => void;
    reset?: () => void;
  };

  onEdit: (customer: Customer) => void;
  onDelete: (customer: Customer) => void;
  loading?: boolean;

  totalCount?: number;
}

export type GetCustomersParams = {
  page?: number;
  limit?: number;
  sortField?: SortField | undefined;
  sortDirection?: SortDirection;
  searchQuery?: string | undefined;
  statusFilter?: CustomerStatus | 'all' | undefined;
};