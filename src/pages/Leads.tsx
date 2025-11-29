import { Building2, ChevronDown, Clock, Filter, Mail, Plus, Search, TrendingUp, UserCheck, Users } from 'lucide-react';

export function LeadsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-gray-900">Leads</h1>
                            <p className="text-gray-600 mt-1">Manage and track your sales leads</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                        <Plus size={20} />
                        Add Lead
                    </button>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                    <article className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-gray-600 text-sm">Total Leads</h3>
                                <data value={8} className="text-gray-900 mt-1">
                                    8
                                </data>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <Users className="text-blue-600" size={24}></Users>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-gray-600 text-sm">New</h3>
                                <data value={8} className="text-gray-900 mt-1">
                                    8
                                </data>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <Clock className="text-blue-600" size={24}></Clock>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-gray-600 text-sm">Qualified</h3>
                                <data value={8} className="text-gray-900 mt-1">
                                    8
                                </data>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <UserCheck className="text-green-600" size={24}></UserCheck>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-gray-600 text-sm">In Negotiation</h3>
                                <data value={8} className="text-gray-900 mt-1">
                                    8
                                </data>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <TrendingUp className="text-orange-600" size={24}></TrendingUp>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-gray-600 text-sm">Pipeline Value</h3>
                                <data value={8} className="text-gray-900 mt-1">
                                    8
                                </data>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <TrendingUp className="text-purple-600" size={24}></TrendingUp>
                            </div>
                        </div>
                    </article>
                </section>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 mb-6">

              {/* Filters and Search */}
                <form className="p-4 flex flex-col sm:flex-row gap-4" role="search">
                    {/* Search Input */}
                    <div className="flex-1 relative" role="searchbox">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} aria-hidden="true" />

                        <label htmlFor="lead-search" className="sr-only">
                            Search Leads
                        </label>

                        <input
                            id="lead-search"
                            type="text"
                            placeholder="Search leads by name, company, or email..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Filter Dropdown */}
                    <div className="flex gap-2" role="group" aria-label="Lead Filters">
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} aria-hidden="true" />

                            <label htmlFor="lead-status-filter" className='sr-only'>
                                Filter by Status
                            </label>

                            <select id="lead-status-filter"
                            className='pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white'>
                                <option value="all">All Statuses</option>
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="qualified">Qualified</option>
                                <option value="negotation">Negotation</option>
                                <option value="lost">Lost</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                        </div>
                    </div>
                </form>
            </div>

            {/* Leads Table */}
            <div className="overflow-x-auto">
              <table className='w-full'>
                <thead className='bg-gray-50 border-b border-gray-200'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider'>Lead</th>
                    <th scope='col' className='px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider'>Company</th>
                    <th scope='col' className='px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider'>Status</th>
                    <th scope='col' className='px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider'>Value</th>
                    <th scope='col' className='px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider'>Source</th>
                    <th scope='col' className='px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider'>Assigned To</th>
                    <th scope='col' className='px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider'>Last Contact</th>
                    <th scope='col' className='px-6 py-3 text-left text-xs text-gray-600 uppercase tracking-wider'>Actions</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  <tr className="hover:bg-gray-50 transition-colors">

                    {/* Lead Info */}
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div>
                        <div className='text-gray-900'>Marcus Aurelius</div>
                        <div className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                          <Mail size={14} aria-hidden="true"/>
                          marcus@gmail.com
                        </div>
                        <div className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                          <Mail size={14} aria-hidden="true"/>
                          +123 456 7890
                        </div>
                      </div>
                    </td>
                    
                    {/* Company */}
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className='text-gray-400' aria-hidden="true"/>
                        <span className='text-gray-900'>TechCorp Inc</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 rounded-full text-sm">Qualified</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                      $45.000
                  </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      Website
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                      John Smith
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      11/27/2025
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right cursor-pointer">
                        View
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    );
}
