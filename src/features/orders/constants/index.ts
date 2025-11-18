import type { Order } from "../orders.types";

export const ORDER_STATUS_COLORS = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  shipped: 'bg-blue-100 text-blue-800 border-blue-200',
  delivered: 'bg-green-100 text-green-800 border-green-200',
  cancelled: 'bg-red-100 text-red-800 border-red-200',
  default: 'bg-gray-100 text-gray-800 border-gray-200',
} as const;

export const allOrders: Order[] = [
    { id: 'ORD-2024-001', customer: 'Tech Solutions Inc', products: 'MacBook Pro 16"', quantity: 5, date: '2024-11-10', status: 'delivered', total: 12499.95, email: 'contact@techsolutions.com', phone: '+1 (555) 123-4567', address: '123 Business Ave, San Francisco, CA 94105', payment: 'Paid', notes: 'Bulk order for new employees' },
    { id: 'ORD-2024-002', customer: 'Global Enterprises', products: 'Dell XPS 15, Monitors x3', quantity: 4, date: '2024-11-11', status: 'shipped', total: 8999.80, email: 'orders@globalent.com', phone: '+1 (555) 234-5678', address: '456 Corporate Blvd, New York, NY 10001', payment: 'Paid', notes: 'Express shipping requested' },
    { id: 'ORD-2024-003', customer: 'StartUp Labs', products: 'iPhone 15 Pro', quantity: 10, date: '2024-11-11', status: 'pending', total: 11999.90, email: 'admin@startuplabs.io', phone: '+1 (555) 345-6789', address: '789 Innovation Dr, Austin, TX 78701', payment: 'Pending', notes: 'Awaiting payment confirmation' },
    { id: 'ORD-2024-004', customer: 'Retail Chain Co', products: 'Samsung Galaxy S24', quantity: 25, date: '2024-11-09', status: 'delivered', total: 22499.75, email: 'purchasing@retailchain.com', phone: '+1 (555) 456-7890', address: '321 Market St, Chicago, IL 60601', payment: 'Paid', notes: 'Store inventory replenishment' },
    { id: 'ORD-2024-005', customer: 'Design Studio Pro', products: 'iPad Pro 12.9", Apple Pencil', quantity: 3, date: '2024-11-12', status: 'pending', total: 4497.00, email: 'hello@designstudio.com', phone: '+1 (555) 567-8901', address: '654 Creative Lane, Los Angeles, CA 90012', payment: 'Paid', notes: 'Gift wrapped requested' },
    { id: 'ORD-2024-006', customer: 'Education First', products: 'Chromebook x50', quantity: 50, date: '2024-11-08', status: 'cancelled', total: 14999.50, email: 'it@educationfirst.edu', phone: '+1 (555) 678-9012', address: '987 School Rd, Boston, MA 02108', payment: 'Refunded', notes: 'Budget constraints - cancelled by customer' },
    { id: 'ORD-2024-007', customer: 'Media Productions', products: 'Sony Camera, Lenses x3', quantity: 4, date: '2024-11-11', status: 'shipped', total: 9899.60, email: 'gear@mediaproductions.com', phone: '+1 (555) 789-0123', address: '147 Studio Way, Miami, FL 33101', payment: 'Paid', notes: 'Fragile - handle with care' },
    { id: 'ORD-2024-008', customer: 'Finance Corp', products: 'Surface Laptop 5', quantity: 15, date: '2024-11-10', status: 'delivered', total: 17999.85, email: 'it@financecorp.com', phone: '+1 (555) 890-1234', address: '258 Wall St, New York, NY 10005', payment: 'Paid', notes: 'Standard delivery completed' },
  ];