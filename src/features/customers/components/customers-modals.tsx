import type { Customer } from "../types/customer.types";
import { CustomerModal } from "./customers-modal";
import { DeleteConfirmDialog } from "./delete-confirm-dialog";


interface CustomersModalsProps {
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

export function CustomersModals({
  modalOpen,
  modalMode,
  selectedCustomer,
  deleteOpen,
  customerName,
  onCloseModal,
  onSave,
  onCloseDelete,
  onConfirmDelete,
}: CustomersModalsProps) {
  return (
    <>
      {/* Add / Edit Customer Modal */}
      <CustomerModal
        open={modalOpen}
        mode={modalMode}
        customer={selectedCustomer}
        onClose={onCloseModal}
        onSave={onSave}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        open={deleteOpen}
        customerName={customerName}
        onClose={onCloseDelete}
        onConfirm={onConfirmDelete}
      />
    </>
  );
}
