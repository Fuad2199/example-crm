// src/features/orders/services/OrderService.ts
import axios from 'axios';
import type { Order } from '../orders.types';

/**
 * Backend API URL — environment dəyişənlərdən gəlir.
 * Məsələn: VITE_API_URL=http://localhost:5000
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Bütün sifarişləri gətirir (GET /orders)
 */
export async function getAllOrders(): Promise<Order[]> {
  const response = await axios.get(`${API_BASE_URL}/orders`);
  return response.data;
}

export async function createOrder(order: Omit<Order, 'id'>): Promise<Order> {
  const response = await axios.post(`${API_BASE_URL}/orders`, order);
  return response.data;
}

export async function updateOrder(id: string, order: Omit<Order, 'id'>): Promise<Order> {
  const response = await axios.put(`${API_BASE_URL}/orders/${id}`, order);
  return response.data;
}

