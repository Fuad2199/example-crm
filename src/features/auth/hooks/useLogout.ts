// src/hooks/useLogout.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

type LogoutResult = {
  success: boolean;
  error?: Error | string;
};

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const logout = async (): Promise<LogoutResult> => {
    setLoading(true);
    setError(null);

    try {
      authService.logout();
      navigate("/login");
      return { success: true };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false); // yalnız side-effect, return yox
    }
  };

  return { logout, loading, error };
};
