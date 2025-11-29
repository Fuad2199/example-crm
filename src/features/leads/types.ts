export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'new' | 'contacted' | 'qualified' | 'negotiation' | 'lost';
  value: number;
  source: string;
  assignedTo: string;
  createdAt: string;
  lastContact: string;
}

