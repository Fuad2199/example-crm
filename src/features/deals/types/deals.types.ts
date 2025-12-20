export interface Deal {
  id: string;
  name: string;
  customer: string;
  amount: number;
  status: "New" | "Negotiation" | "Won" | "Lost";
  expectedClose: string;
}