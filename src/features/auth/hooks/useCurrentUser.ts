// src/hooks/useCurrentUser.ts
import { useCallback, useState } from "react";
import type { User } from "../types/types";

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCurrentUser = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/users?isLoggedIn=true");
      const data: User[] = await res.json();
      setUser(data[0] ?? null);
    } catch (err) {
      console.error("Failed to fetch current user:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    user,
    setUser,
    loading,
    isAuthenticated: Boolean(user),
    fetchCurrentUser,
  };
};
