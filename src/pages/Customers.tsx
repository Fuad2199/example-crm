import { contactsData } from '@/constants';
import { PencilLine, Trash } from 'lucide-react';

const Customers = () => {
    return (
        <div className="flex justify-center items-center text-white">
            <article className="card">
                <header className="card-header">
                    <h1>Customers</h1>
                </header>
                <section className="card-body p-0">
  <div className="relative h-125 w-full shrink-0 overflow-auto rounded-none [scrollbar-width:thin]">
    <table className="table w-full">
      <thead className="table-header bg-gray-50 dark:bg-gray-800">
        <tr className="table-row">
          <th className="table-head">#</th>
          <th className="table-head">Contact</th>
          <th className="table-head">Email</th>
          <th className="table-head">Phone</th>
          <th className="table-head">Company</th>
          <th className="table-head">Status</th>
          <th className="table-head">Last Contacted</th>
          <th className="table-head">Actions</th>
        </tr>
      </thead>
      <tbody className="table-body divide-y divide-gray-200 dark:divide-gray-700">
        {contactsData.map((contact, index) => (
          <tr key={contact.id} className="table-row hover:bg-gray-100 dark:hover:bg-gray-900">
            <td className="table-cell">{index + 1}</td>

            {/* Contact Name + Avatar */}
            <td className="table-cell">
              <figure className="flex items-center gap-x-3">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <figcaption className="flex flex-col">
                  <span className="font-medium text-slate-900 dark:text-slate-50">{contact.name}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{contact.position}</span>
                </figcaption>
              </figure>
            </td>

            {/* Email with truncation and tooltip */}
            <td className="table-cell text-slate-900 dark:text-slate-50 max-w-[150px] truncate">
              <span title={contact.email} className="cursor-default">
                {contact.email}
              </span>
            </td>

            <td className="table-cell text-slate-900 dark:text-slate-50">{contact.phone}</td>
            <td className="table-cell text-slate-900 dark:text-slate-50">{contact.company}</td>

            {/* Status with color coding */}
            <td className="table-cell">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  contact.status === "Active"
                    ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                    : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                }`}
              >
                {contact.status}
              </span>
            </td>

            <td className="table-cell text-slate-600 dark:text-slate-400">{contact.lastContacted}</td>

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
</section>

            </article>
        </div>
    );
};

export default Customers;
