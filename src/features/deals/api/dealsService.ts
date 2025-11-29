// src/features/deals/api/dealsService.ts
import axios from 'axios';
import type { Deal } from '../store/dealStore';

/**
 * Backend API URL — environment dəyişənlərdən gəlir.
 * Məsələn: VITE_API_URL=http://localhost:5000
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Bütün deal-ləri gətirir (GET /deals)
 */
export async function fetchDeals(): Promise<Deal[]> {
  const response = await axios.get(`${API_BASE_URL}/deals`);
  return response.data;
}

/**
 * Yeni deal əlavə edir (POST /deals)
 */
export async function addDeal(deal: Omit<Deal, 'id'>): Promise<Deal> {
  const response = await axios.post(`${API_BASE_URL}/deals`, deal);
  return response.data;
}

/**
 * Mövcud deal-i update edir (PUT /deals/:id)
 */
export async function updateDeal(id: string, deal: Omit<Deal, 'id'>): Promise<Deal> {
  const response = await axios.put(`${API_BASE_URL}/deals/${id}`, deal);
  return response.data;
}

/**
 * Deal status-u update edir (PATCH /deals/:id)
 */
export async function updateDealStatus({
  dealId,
  status,
}: {
  dealId: string;
  status: Deal['status'];
}): Promise<Deal> {
  const response = await axios.patch(`${API_BASE_URL}/deals/${dealId}`, { status });
  return response.data;
}

/**
 * Deal silir (DELETE /deals/:id)
 */
export async function deleteDeal(dealId: string): Promise<void> {
  await axios.delete(`${API_BASE_URL}/deals/${dealId}`);
}
