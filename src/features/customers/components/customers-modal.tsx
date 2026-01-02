import { useState, useEffect } from "react";
import type { Customer, CustomerStatus } from "../types/customer.types";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Button, Input, Label } from "@/components/ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

interface CustomerModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (customer: Omit<Customer, "id">) => void;
  customer?: Customer | null;
  mode: "add" | "edit";
}

export function CustomerModal({
  open,
  onClose,
  onSave,
  customer,
  mode,
}: CustomerModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    phone: "",
    company: "",
    email: "",
    status: "lead" as CustomerStatus,
    owner: "",
  });

  useEffect(() => {
    if (customer && mode === "edit") {
      setFormData({
        name: customer.name,
        avatar: customer.avatar,
        phone: customer.phone,
        company: customer.company,
        email: customer.email,
        status: customer.status,
        owner: customer.owner,
      });
    } else if (mode === "add") {
      setFormData({
        name: "",
        avatar: "",
        phone: "",
        company: "",
        email: "",
        status: "lead",
        owner: "",
      });
    }
  }, [customer, mode, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      lastActivity: new Date().toISOString(),
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add New Customer" : "Edit Customer"}
          </DialogTitle>
          <DialogDescription>
            {mode === "add"
              ? "Enter the customer details below."
              : "Update the customer information."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Acme Inc."
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@acme.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value: CustomerStatus) =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lead">Lead</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="churned">Churned</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="owner">Owner</Label>
              <Input
                id="owner"
                value={formData.owner}
                onChange={(e) =>
                  setFormData({ ...formData, owner: e.target.value })
                }
                placeholder="Sales Rep Name"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {mode === "add" ? "Add Customer" : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
