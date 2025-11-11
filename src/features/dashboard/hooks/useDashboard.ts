import { useQuery } from "@tanstack/react-query";
import type { CardType } from "../dashboard.types";
import getDashboardCards from "../services/DashboardService";

const useDashboard = () => {
  const {
    data: cards = [],
    isLoading,
    error,
  } = useQuery<CardType[]>({
    queryKey: ["dashboard-cards"],
    queryFn: getDashboardCards,
  });

  return { cards, isLoading, error };
};

export default useDashboard;