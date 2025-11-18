import React from "react";
import { Search, Filter } from "lucide-react";
import type { SearchFilterOption } from "./searchFilter.types";

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;

  filterValue: string;
  onFilterChange: (value: string) => void;

  filterOptions: SearchFilterOption[];
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  onSearchChange,

  filterValue,
  onFilterChange,
  filterOptions,
}) => {
  return (
    <div className="flex gap-3">
      {/* SEARCH */}
      <div className="flex-1 relative min-w-200">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      {/* FILTER */}
      <div className="relative">
        <Filter
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <select
          value={filterValue}
          onChange={(e) => onFilterChange(e.target.value)}
          className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white
                     dark:text-slate-50 dark:bg-slate-900"
        >
          {filterOptions.map((item) => (
            <option
              key={item.value}
              value={item.value}
              className="dark:text-slate-50 dark:bg-slate-900"
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
