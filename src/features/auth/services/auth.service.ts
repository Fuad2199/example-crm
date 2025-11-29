// src/services/auth-service.ts

import { loginUser, type LoginPayload, type LoginResponse } from "@/features/auth/api/auth.api";

const TOKEN_KEY = "token";
const USER_KEY = "user";

export const authService = {
  // 1️⃣ Login funksiyası
  async login(payload: LoginPayload): Promise<LoginResponse> {
    const data = await loginUser(payload);
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    return data;
  },

  // 2️⃣ Logout funksiyası
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  // 3️⃣ Hazır user-i gətirir (localStorage-dan)
  getCurrentUser() {
    const userJson = localStorage.getItem(USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  },

  // 4️⃣ Token-i oxuyur
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  // 5️⃣ Login olub-olmadığını yoxlayır
  isAuthenticated() {
    return Boolean(localStorage.getItem(TOKEN_KEY));
  },
};
