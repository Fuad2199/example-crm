import { Button } from "@/shared/ui/button";
import { EmptyState } from "./EmptyState";
import type { CustomersTableSectionProps } from "../types/customer.types";
import CustomersTable from "./CustomerTable";

export function CustomersTableSection({
  customers,
  totalCount,
  sorting,
  pagination,
  onEdit,
  onDelete,
}: CustomersTableSectionProps) {
  const showNoResults = totalCount === 0;

  return (
    <div className="space-y-4">
      {/* Results summary */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600 font-medium">
          Showing{" "}
          <span className="text-gray-900">{customers.length}</span> of{" "}
          <span className="text-gray-900">{totalCount}</span> customers
        </p>
      </div>

      {/* Table / Empty */}
      {showNoResults ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <EmptyState
            title="No customers found"
            description="Try adjusting your search or filters to find what you're looking for."
          />
        </div>
      ) : (
        <>
          <CustomersTable
            customers={customers}
            sortField={sorting.sortField}
            sortDirection={sorting.sortDirection}
            onSort={sorting.onSort}
            onEdit={onEdit}
            onDelete={onDelete}
          />

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-200 px-5 py-4">
              <p className="text-gray-600 font-medium">
                Page{" "}
                <span className="text-gray-900">
                  {pagination.currentPage}
                </span>{" "}
                of{" "}
                <span className="text-gray-900">
                  {pagination.totalPages}
                </span>
              </p>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={pagination.prev}
                  disabled={pagination.currentPage === 1}
                  className="border-gray-200"
                >
                  Previous
                </Button>

                <Button
                  variant="outline"
                  onClick={pagination.next}
                  disabled={
                    pagination.currentPage === pagination.totalPages
                  }
                  className="border-gray-200"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}