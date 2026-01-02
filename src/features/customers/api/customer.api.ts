import axios from "axios";
import type { Customer } from "../types/customer.types";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function getAllCustomers(): Promise<Customer[]> {
    const response = await axios.get(`${API_BASE_URL}/customers`);
    return response.data
};

export async function createCustomer(customer: Omit<Customer, "id">): Promise<Customer> {
    const response = await axios.post(`${API_BASE_URL}/customers`, customer);
    return response.data
}

export async function updateCustomer(id: string, customer: Omit<Customer, 'id'>): Promise<Customer> {
  const response = await axios.put(`${API_BASE_URL}/customers/${id}`, customer);
  return response.data;
}