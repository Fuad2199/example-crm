// src/hooks/useCurrentUser.ts
import { useEffect, useState } from "react";
import type { User } from "../types";

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/users?isLoggedIn=true");
        const data: User[] = await res.json();

        if (data.length > 0) {
          setUser(data[0] ?? null);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Failed to fetch current user:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchLoggedInUser();
  }, []);

  return { user, setUser, loading, isAuthenticated: !!user };
};
