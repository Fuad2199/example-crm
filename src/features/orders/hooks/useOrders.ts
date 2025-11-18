// src/features/orders/hooks/useOrders.ts
import { useQuery } from '@tanstack/react-query';
import type { Order } from '../orders.types';
import { getAllOrders } from '../services/OrderService';

export const useOrders = () => {
  return useQuery<Order[]>({
    queryKey: ['orders'],
    queryFn: getAllOrders,
    staleTime: 1000 * 60 * 2, // 2 dəqiqə cache-də saxlayır
    refetchOnWindowFocus: false, // istifadəçi səhifəyə qayıdanda təzələməsin
  });
};
