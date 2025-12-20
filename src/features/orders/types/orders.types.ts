export interface OrdersTableProps {
  orders: Order[];
  onViewOrder: (order: Order) => void;
  onEditOrder: (order: Order) => void;
  onDeleteOrder: (order: Order) => void;
}

export interface Order {
  id: string;
  customer: string;
  products: string;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  quantity?: number;
  date?: string;
  total?: number;
  email?: string;
  phone?: string;
  address?: string;
  payment?: string;
  notes?: string;
}

export interface Stats {
  total: number;
  pending: number;
  shipped: number;
  delivered: number;
}

export type StatusFilter = 'all' | 'pending' | 'shipped' | 'delivered' | 'cancelled';