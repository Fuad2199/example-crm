import type { ThemeProviderState } from "@/contexts/types/theme.types";

export const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}