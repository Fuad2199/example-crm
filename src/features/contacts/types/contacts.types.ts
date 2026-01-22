// types/contacts.ts

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: 'lead' | 'contacted' | 'qualified' | 'nurturing' | 'unqualified';
  source: 'websiteForm' | 'socialMedia' | 'campaign' | 'referral' | 'other';
  lastActivity: string;
  region: string;
}

export interface ContactsDashboard {
  totalContacts: number;
  newContacts: number;
  contactsByStatus: {
    lead: number;
    contacted: number;
    qualified: number;
    nurturing: number;
    unqualified: number;
  };
  contactsBySource: {
    websiteForm: number;
    socialMedia: number;
    campaign: number;
    referral: number;
    other: number;
  };
  inactiveContacts: number;
  conversionRate: number;
}

export interface ContactsResponse {
  contactsDashboard: ContactsDashboard;
  contactsList: Contact[];
}
