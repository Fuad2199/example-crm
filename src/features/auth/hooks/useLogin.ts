import { useState } from "react";
import { authService } from "@/services/auth.service";
import type { LoginPayload } from "../types";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.login(payload); // ✅ service vasitəsilə login
      return data; // buradan LoginResponse gəlir
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
