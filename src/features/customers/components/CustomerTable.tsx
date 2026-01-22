import { PencilLine, Trash } from 'lucide-react';
import type { CustomerTableProps } from '../types/customer.types';

const CustomersTable: React.FC<CustomerTableProps> = ({ customers }) => {
    return (
        <div
            className="relative h-125 w-full shrink-0 border-gray-300 bg-white shadow-sm overflow-auto rounded-none [scrollbar-width:thin]"
            role="region"
            aria-labelledby="customers-table-title"
        >
            <table className="w-full border-collapse divide-y divide-gray-200">
                <caption id="customers-table-title" className="sr-only">
                    Customers list
                </caption>
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th scope="col" className="table-head">
                            Name
                        </th>
                        <th scope="col" className="table-head">
                            Company
                        </th>
                        <th scope="col" className="table-head">
                            Status
                        </th>
                        <th scope="col" className="table-head">
                            Email
                        </th>
                        <th scope="col" className="table-head">
                            Last activity
                        </th>
                        <th scope="col" className="table-head text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="table-body divide-y divide-gray-200 dark:divide-gray-700">
                    {customers.map((customer) => (
                        <tr key={customer.id} className="table-row hover:bg-gray-100 dark:hover:bg-gray-900">
                            {/* Contact Name + Avatar */}
                            <th scope='row' className="table-cell font-normal">
                                <figure className="flex items-center gap-x-3">
                                    <img
                                        src={customer.avatar}
                                        alt={`${customer.name} avatar`}
                                        className="w-10 h-10 rounded-full object-cover border border-red-500"
                                    />
                                    <figcaption className="flex flex-col">
                                        <span className="font-medium text-slate-900 dark:text-slate-50">
                                            {customer.name}
                                        </span>
                                    </figcaption>
                                </figure>
                            </th>

                            <td className="table-cell text-slate-900 dark:text-slate-50">
                                {customer.company}
                            </td>

                            {/* Status with color coding */}
                            <td className="table-cell">
                                <span
                                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
                                        customer.status === 'active'
                                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                                            : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                                    }`}
                                >
                                    {customer.status}
                                </span>
                            </td>

                            {/* Email with truncation and tooltip */}
                            <td className="table-cell text-slate-900 dark:text-slate-50 max-w-[150px] truncate">
                                <span title={customer.email} className="cursor-default">
                                    {customer.email}
                                </span>
                            </td>

                            <td className="table-cell text-slate-600 dark:text-slate-400">
                                {customer.lastActivity}
                            </td>

                            {/* Actions */}
                            <td className="table-cell text-right">
                                <div className="flex items-center gap-x-2">
                                    <button aria-label={`Edit ${customer.name}`} className="text-blue-500 dark:text-blue-400 cursor-pointer">
                                        <PencilLine size={20} />
                                    </button>
                                    <button aria-label={`Delete ${customer.name}`} className="text-red-500 dark:text-red-400 cursor-pointer">
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
