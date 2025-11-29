// src/store/dealStore.ts
import { create } from "zustand";

export type DealStatus = "New" | "Negotiation" | "Won" | "Lost";

export interface Deal {
  id: string;
  name: string;
  customer: string;
  amount: number;
  status: DealStatus;
  expectedClose: string;
}

interface DealStore {
  deals: Deal[];
  searchTerm: string;
  filterStatus: DealStatus | "All";
  selectedDeal: Deal | null;

  // Actions
  setDeals: (deals: Deal[]) => void;
  setSearchTerm: (term: string) => void;
  setFilterStatus: (status: DealStatus | "All") => void;
  setSelectedDeal: (deal: Deal | null) => void;
  updateDealStatus: (dealId: string, status: DealStatus) => void;
  addDeal: (deal: Deal) => void;
  removeDeal: (dealId: string) => void;
}

export const useDealStore = create<DealStore>((set, get) => ({
  deals: [],
  searchTerm: "",
  filterStatus: "All",
  selectedDeal: null,

  setDeals: (deals) => set({ deals }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilterStatus: (status) => set({ filterStatus: status }),
  setSelectedDeal: (deal) => set({ selectedDeal: deal }),

  updateDealStatus: (dealId, status) => {
    set({
      deals: get().deals.map((deal) =>
        deal.id === dealId ? { ...deal, status } : deal
      ),
    });
  },

  addDeal: (deal) => set({ deals: [...get().deals, deal] }),
  removeDeal: (dealId) =>
    set({ deals: get().deals.filter((deal) => deal.id !== dealId) }),
}));
