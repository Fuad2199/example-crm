import React from 'react';
import { X } from 'lucide-react';
import type { Order } from '../types/orders.types';
import { useCreateOrderMutation } from '../api/orders.api';

interface NewOrderModalProps {
    onClose: () => void;
    onCreated: (newOrder: Order) => void;
}

export const NewOrderModal: React.FC<NewOrderModalProps> = ({ onClose, onCreated }) => {
  const [createOrder, { isLoading }] = useCreateOrderMutation();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const customer = (form.customer as HTMLInputElement).value.trim();
        const products = (form.products as HTMLInputElement).value.trim();
        const status = (form.status as HTMLSelectElement).value as
            | 'pending'
            | 'shipped'
            | 'delivered'
            | 'cancelled';

        const newOrder: Omit<Order, 'id'> = {
            customer,
            products,
            status,
            quantity: 1,
            date: new Date().toISOString(),
            total: 0,
            email: '',
            phone: '',
            address: '',
        };

        try {
            const createdOrder = await createOrder(newOrder).unwrap();

            if (!createdOrder) {
                alert('Failed to create order.');
                return;
            }

            onCreated(createdOrder);
            onClose(); // modal bağla
        } catch (error) {
            console.error(error);
            alert('Error saving order!');
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white border border-slate-300 dark:bg-slate-900 rounded-lg max-w-lg w-full p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Create New Order</h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                        <X size={20} />
                    </button>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        name="customer"
                        type="text"
                        placeholder="Customer"
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                    <input
                        name="products"
                        type="text"
                        placeholder="Products"
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                    <select name="status" className="w-full border px-3 py-2 rounded">
                        <option value="pending">Pending</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                        {isLoading ? 'Creating...' : 'Create Order'}
                    </button>
                </form>
            </div>
        </div>
    );
};
