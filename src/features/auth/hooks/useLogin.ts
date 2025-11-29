import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginPayload } from "../types";
import { authService } from "../services/auth.service";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.login(payload); // LoginResponse

      // 🔹 istifadəçi məlumatını localStorage-da saxla
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      // 🔹 roluna görə yönləndirmə (admin → /dashboard, agent → /orders)
      if (data.user.role === "admin") {
        navigate("/dashboard");
      } else if (data.user.role === "agent") {
        navigate("/orders");
      }

      return data;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
