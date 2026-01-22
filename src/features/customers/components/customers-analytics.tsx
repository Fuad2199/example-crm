import { AnalyticsCard } from "@/shared/components/cards/Analytics-card"
import { TrendingUp, UserCheck, UserPlus, Users } from "lucide-react";
import type { AnalyticsProps } from "../types/customer.types";


const CustomersAnalytics = ({ analytics }: { analytics: AnalyticsProps }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <AnalyticsCard
                title="Total Customers"
                value={analytics.totalCustomers}
                change={12.5}
                changeLabel="from last month"
                icon={<Users className="h-5 w-5" />}
                trend="up"
                accentColor="bg-blue-500"
              />
              <AnalyticsCard
                title="Active Customers"
                value={analytics.activeCustomers}
                change={8.2}
                changeLabel="from last month"
                icon={<UserCheck className="h-5 w-5" />}
                trend="up"
                accentColor="bg-emerald-500"
              />
              <AnalyticsCard
                title="New Leads"
                value={analytics.leadCustomers}
                change={-3.1}
                changeLabel="from last month"
                icon={<UserPlus className="h-5 w-5" />}
                trend="down"
                accentColor="bg-purple-500"
              />
              <AnalyticsCard
                title="Conversion Rate"
                value={`${analytics.conversionRate}%`}
                change={5.4}
                changeLabel="from last month"
                icon={<TrendingUp className="h-5 w-5" />}
                trend="up"
                accentColor="bg-amber-500"
              />
            </div>
  )
}

export default CustomersAnalytics
