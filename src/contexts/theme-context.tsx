import { createContext } from "react";
import type { ThemeProviderState } from "./types/theme.types";
import { initialState } from "@/features/dashboard/hooks/initial-state";

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
