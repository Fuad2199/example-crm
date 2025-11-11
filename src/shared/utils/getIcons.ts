// src/utils/getIcons.ts
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const getIcon = (name: string): LucideIcon | undefined => {
  return (Icons as unknown as Record<string, LucideIcon>)[name];
};
