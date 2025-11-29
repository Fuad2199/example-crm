// src/features/orders/hooks/useOrders.ts
import { useQuery } from '@tanstack/react-query';
import type { Customer } from '../types';
import { getAllCustomers } from '../CustomersService';

export const useCustomer = () => {
  return useQuery<Customer[]>({
    queryKey: ['orders'],
    queryFn: getAllCustomers,
    staleTime: 1000 * 60 * 2, // 2 dəqiqə cache-də saxlayır
    refetchOnWindowFocus: false, // istifadəçi səhifəyə qayıdanda təzələməsin
  });
};
