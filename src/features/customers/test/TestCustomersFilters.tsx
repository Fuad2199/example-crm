import { useState } from "react";
import CustomersFilters from "../components/customers-filters";

const TestCustomersFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive" | "lead" | "churned">("all");

  const handleSearch = (val: string) => {
    console.log("Search query:", val);
    setSearchQuery(val);
  };

  const handleStatusChange = (val: typeof statusFilter) => {
    console.log("Status filter:", val);
    setStatusFilter(val);
  };

  const handleReset = () => {
    console.log("Filters reset");
    setSearchQuery("");
    setStatusFilter("all");
  };

  return (
    <CustomersFilters
      searchQuery={searchQuery}
      onSearch={handleSearch}
      statusFilter={statusFilter}
      onStatusChange={handleStatusChange}
      hasActiveFilters={searchQuery !== "" || statusFilter !== "all"}
      onReset={handleReset}
    />
  );
};

export default TestCustomersFilters;
