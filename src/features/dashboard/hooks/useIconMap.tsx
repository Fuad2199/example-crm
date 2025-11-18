import { CreditCard, DollarSign, Package, Users, type LucideIcon } from "lucide-react";

export const useIconMap = () => {
  const iconMap: Record<string, LucideIcon> = {
    package: Package,
    dollar: DollarSign,
    users: Users,
    'credit-card': CreditCard,
  };

  const getIcon = (key: string) => iconMap[key] || Package; // default icon

  return { getIcon };
};