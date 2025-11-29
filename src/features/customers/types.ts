


export type CustomerStatus = "Active" | "Inactive";

export interface Customer {
  id: number;
  name: string;
  position?: string;
  email: string;
  phone: string;
  company: string;
  status: CustomerStatus;
  lastContacted?: string; // ISO date string
  avatar?: string;
  notes: string;
}
