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
export interface CustomersFiltersProps {
  searchQuery: string;
  statusFilter: CustomerStatus | "all";
  hasActiveFilters: boolean;

  onSearch: (value: string) => void;
  onStatusChange: (value: CustomerStatus | "all") => void;
  onReset: () => void;
}