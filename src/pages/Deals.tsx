import React, { useState } from "react";
import { Search, Filter, TrendingUp, DollarSign, Calendar, ChevronDown, MoreVertical } from "lucide-react";
import { mockDeals } from "@/constants";
import type { Deal } from "@/features/deals/types/deals.types";

const Deals: React.FC = () => {
  const [deals] = useState<Deal[]>(mockDeals);
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: Deal["status"]) => {
    const colors = {
      New: "bg-blue-100 text-blue-700 border-blue-200",
      Negotiation: "bg-amber-100 text-amber-700 border-amber-200",
      Won: "bg-emerald-100 text-emerald-700 border-emerald-200",
      Lost: "bg-gray-100 text-gray-600 border-gray-200"
    };
    return colors[status];
  };

  const filteredDeals = deals?.filter((deal) => {
    const matchesStatus = filterStatus === "All" || deal.status === filterStatus;
    const matchesSearch =
      deal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.customer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalValue = filteredDeals?.reduce((sum, deal) => sum + deal.amount, 0) || 0;
  const wonDeals = filteredDeals?.filter(d => d.status === "Won").length || 0;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-1">Deals Pipeline</h1>
              <p className="text-slate-600">Manage and track your sales opportunities</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm hover:shadow flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              New Deal
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium mb-1">Total Pipeline</p>
                  <p className="text-2xl font-bold text-blue-900">${(totalValue / 1000).toFixed(0)}K</p>
                </div>
                <div className="bg-blue-200 rounded-full p-3">
                  <DollarSign className="w-6 h-6 text-blue-700" />
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-600 text-sm font-medium mb-1">Deals Won</p>
                  <p className="text-2xl font-bold text-emerald-900">{wonDeals}</p>
                </div>
                <div className="bg-emerald-200 rounded-full p-3">
                  <TrendingUp className="w-6 h-6 text-emerald-700" />
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-600 text-sm font-medium mb-1">Active Deals</p>
                  <p className="text-2xl font-bold text-amber-900">{filteredDeals?.length || 0}</p>
                </div>
                <div className="bg-amber-200 rounded-full p-3">
                  <Calendar className="w-6 h-6 text-amber-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search deals or customers..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <select
                className="pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none cursor-pointer min-w-40"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="Negotiation">Negotiation</option>
                <option value="Won">Won</option>
                <option value="Lost">Lost</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Deals Table */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Deal Name</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Customer</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Amount</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Expected Close</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredDeals?.map((deal) => (
                  <tr key={deal.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{deal.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-medium">
                          {deal.customer.charAt(0)}
                        </div>
                        <span className="text-slate-700">{deal.customer}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-slate-900">${deal.amount.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(deal.expectedClose).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(deal.status)}`}>
                        {deal.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded hover:bg-slate-100">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredDeals?.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-2">
                <Search className="w-12 h-12 mx-auto mb-3" />
              </div>
              <p className="text-slate-600 font-medium">No deals found</p>
              <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Deals;