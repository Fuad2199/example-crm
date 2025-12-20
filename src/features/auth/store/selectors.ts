import type { RootState } from "@/store";

export const selectIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;