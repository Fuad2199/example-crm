import { useState } from "react";
import { logoutUser } from "../api/auth.api";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const logout = async (): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await logoutUser();
      return true;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error };
};
