
import { cn } from "@/lib/cn";
import type { AnalyticsCardProps } from "@/shared/types/card.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export function AnalyticsCard({
  title,
  value,
  change,
  changeLabel,
  icon,
  trend,
  accentColor = "bg-blue-500",
}: AnalyticsCardProps) {
  const getTrendIcon = () => {
    if (!change && !trend) return null;
    
    const effectiveTrend = trend || (change && change > 0 ? "up" : change && change < 0 ? "down" : "neutral");
    
    switch (effectiveTrend) {
      case "up":
        return <TrendingUp className="h-3.5 w-3.5" />;
      case "down":
        return <TrendingDown className="h-3.5 w-3.5" />;
      case "neutral":
        return <Minus className="h-3.5 w-3.5" />;
      default:
        return null;
    }
  };

  const getTrendColor = () => {
    if (!change && !trend) return "text-gray-600";
    
    const effectiveTrend = trend || (change && change > 0 ? "up" : change && change < 0 ? "down" : "neutral");
    
    switch (effectiveTrend) {
      case "up":
        return "text-green-700 bg-green-50";
      case "down":
        return "text-red-700 bg-red-50";
      case "neutral":
        return "text-gray-700 bg-gray-50";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card className="relative overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className={cn("absolute top-0 left-0 right-0 h-1", accentColor)} />
      <CardHeader className="flex flex-row items-center justify-between pb-3 pt-5">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        {icon && (
          <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center text-white", accentColor)}>
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent className="pb-5">
        <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
        {(change !== undefined || changeLabel) && (
          <div className={cn("inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full", getTrendColor())}>
            {getTrendIcon()}
            {change !== undefined && (
              <span>
                {change > 0 ? "+" : ""}{change}%
              </span>
            )}
            {changeLabel && (
              <span className="text-gray-600 font-normal ml-0.5">{changeLabel}</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}