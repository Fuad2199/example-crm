import { useState } from "react";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/auth.api";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser, user } = useCurrentUser();
  const navigate = useNavigate();

  const logout = async () => {
  if (!user) {
    setError("No user logged in");
    return;
  }

  setLoading(true);
  setError(null);

  try {
    await logoutUser(user.id);
    setUser(null);
    navigate("/login");
  } catch (err: unknown) {
    console.error(err);
    setError(err instanceof Error ? err.message : "Unknown error");
  } finally {
    setLoading(false);
  }
};

  return { logout, loading, error };
};
