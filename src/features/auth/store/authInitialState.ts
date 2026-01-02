import type { AuthState } from "../types/types";

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isActive: false,
  isLoggedIn: false,
  isAuthenticated: false
};
