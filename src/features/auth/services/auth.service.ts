import { loginUser, logoutUser } from "../api/auth.api";
import type { LoginPayload, LoginResponse, User } from "../types/types";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const USER_KEY = "user";

export const authService = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    // JSON Server-dən user-i çəkirik və isLoggedIn true olur
    const user: User = await loginUser(payload);

    if (!user) {
      throw new Error("Email və ya şifrə yanlışdır");
    }
    
    const accessToken = "fakeAccessToken-" + user.id;
    const refreshToken = "fakeRefreshToken-" + user.id;

    // localStorage-a yaz
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    return {
      user,
      accessToken,
      refreshToken
    };
  },

  logout: async () => {
    const userStr = localStorage.getItem(USER_KEY);
    if (userStr) {
      const user: User = JSON.parse(userStr);
      
      try {
        await logoutUser(user);
        console.log("✅ User logged out from JSON Server");
      } catch (error) {
        console.error("❌ Error updating JSON Server:", error);
      }
    }

    // localStorage-u təmizlə
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem(USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  },

  getAccessToken: (): string | null => localStorage.getItem(ACCESS_TOKEN_KEY),

  isLoggedIn: (): boolean => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const user = localStorage.getItem(USER_KEY);
    return !!accessToken && !!user;
  },

  refreshToken: async (): Promise<string> => {
    // burda da fake refresh
    const newAccessToken = "fakeRefreshedToken-" + Date.now();
    localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
    return newAccessToken;
  }
};