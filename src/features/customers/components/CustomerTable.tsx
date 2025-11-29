import { PencilLine, Trash } from 'lucide-react';
import type { Customer } from '../types';

export interface CustomerTableProps {
    customers: Customer[]; // optional, default contactsData istifadə olunacaq
}

const CustomersTable: React.FC<CustomerTableProps> = ({ customers }) => {
    return (
        <div className="relative h-125 w-full shrink-0 overflow-auto rounded-none [scrollbar-width:thin]">
            <table className="table w-full divide-y divide-gray-200">
                <thead className="table-header bg-gray-50 dark:bg-gray-800">
                    <tr className="table-row">
                        <th className="table-head">id</th>
                        <th className="table-head">Name</th>
                        <th className="table-head">Email</th>
                        <th className="table-head">Phone</th>
                        <th className="table-head">Company</th>
                        <th className="table-head">Status</th>
                        <th className="table-head">Last Contacted</th>
                        <th className="table-head">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-body divide-y divide-gray-200 dark:divide-gray-700">
                    {customers.map((customer) => (
                        <tr className="table-row hover:bg-gray-100 dark:hover:bg-gray-900" key={customer.id}>
                            <td className="table-cell">{customer.id}</td>

                            {/* Contact Name + Avatar */}
                            <td className="table-cell">
                                <figure className="flex items-center gap-x-3">
                                    <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full object-cover" />
                                    <figcaption className="flex flex-col">
                                        <span className="font-medium text-slate-900 dark:text-slate-50">{customer.name}</span>
                                        <span className="text-sm text-slate-600 dark:text-slate-400">{customer.position}</span>
                                    </figcaption>
                                </figure>
                            </td>

                            {/* Email with truncation and tooltip */}
                            <td className="table-cell text-slate-900 dark:text-slate-50 max-w-[150px] truncate">
                                <span title={customer.email} className="cursor-default">
                                    {customer.email}
                                </span>
                            </td>
                            <td className="table-cell text-slate-900 dark:text-slate-50">{customer.phone}</td>
                            <td className="table-cell text-slate-900 dark:text-slate-50">{customer.company}</td>

                            {/* Status with color coding */}
                            <td className="table-cell">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                        customer.status === 'Active'
                                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                                            : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                                    }`}
                                >
                                    {customer.status}
                                </span>
                            </td>
                            <td className="table-cell text-slate-600 dark:text-slate-400">{customer.lastContacted}</td>

                            {/* Actions */}
                            <td className="table-cell">
                                <div className="flex items-center gap-x-2">
                                    <button className="text-blue-500 dark:text-blue-400 cursor-pointer">
                                        <PencilLine size={20} />
                                    </button>
                                    <button className="text-red-500 dark:text-red-400 cursor-pointer">
                                        <Trash size={20} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        </div>
    );
};

export default CustomersTable;
