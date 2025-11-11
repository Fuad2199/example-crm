import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface CardType {
  id: number;
  title: string;
  value: number;
  change: number;
  icon: string;
  color: string;
}

export interface CardProps {
    icon: LucideIcon;
    title: string;
    value: string | number;
    change?: string | number;
    changeIcon?: LucideIcon;
    color?: string; // icon background color
    children?: ReactNode; // optional body content
}