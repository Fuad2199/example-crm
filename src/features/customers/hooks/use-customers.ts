import { useState } from "react";
import type { Customer } from "../types/customer.types";
import { mockCustomers } from "../data/mock-customers";
import { toast } from "sonner";

const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);

  // modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  console.log(selectedCustomer, modalOpen);

  const handlers = {
    addCustomer() {
      setModalMode("add");
      setSelectedCustomer(null);
      setModalOpen(true);
    },
    saveCustomer(data: Omit<Customer, "id">) {
      if (modalMode === "add") {
        setCustomers([{ ...data, id: Date.now().toString() }, ...customers]);
        toast.success("Customer added");
      } else if (selectedCustomer) {
        setCustomers(
          customers.map(c =>
            c.id === selectedCustomer.id ? { ...data, id: c.id } : c
          )
        );
        toast.success("Customer updated");
      }
      setModalOpen(false);
    },
  };

  // analytics
  const analytics

  return {
    data: { customers },
    filters: {
      searchQuery: "",
      statusFilter: "all",
    },
    modals: {
      modalOpen,
      modalMode,
      onSave: handlers.saveCustomer,
    },
    handlers,
    ui: {
      showEmptyState: customers.length === 0,
      emptyState: "<p>No customers yet!</p>", // buraya EmptyState komponenti qoyula bilər
    },
  };
}

export default useCustomers
