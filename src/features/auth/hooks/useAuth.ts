import { useState, useEffect } from "react";
import type { User } from "../types";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    // JSON Javascript obyektinə çevrilibsə loadingi dayandır
    if (stored) {
      setUser(JSON.parse(stored));
      setLoading(false);
      return;
    }

    // db.json-dan log edilmiş useri götür
    fetch("http://localhost:3000/login")
      .then(res => res.json())
      .then((users: User[]) => {
        const loggedIn = users.find(u => u.isLoggedIn === true) || null;
        setUser(loggedIn);
      })
      .finally(() => setLoading(false));
  }, []);

  const role = user?.role ?? null;

  return { user, role, loading };
};
