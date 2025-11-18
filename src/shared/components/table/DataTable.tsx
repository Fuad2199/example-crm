import type { DataTableProps } from "./dataTable.types";

export function DataTable<T>({
  columns,
  data,
  emptyText = "No data found",
}: DataTableProps<T>) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    col.className || ""
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {data.length === 0 && (
              <tr>
                <td className="px-6 py-4 text-center text-sm text-gray-500" colSpan={columns.length}>
                  {emptyText}
                </td>
              </tr>
            )}

            {data.map((item, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition-colors cursor-pointer">
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${
                      col.className || ""
                    }`}
                  >
                    {col.render ? col.render(item) : (item[col.key] as string)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
