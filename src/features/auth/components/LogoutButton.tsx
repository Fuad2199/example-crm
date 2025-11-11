import Button from "@/components/ui/Button/button";
import { useLogout } from "../hooks/useLogout";
import { useState } from "react";

export const LogoutButton = () => {
  const { logout, loading, error } = useLogout();
  const [message, setMessage] = useState<string | null>(null);

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      setMessage("Successfully logged out");
    } else {
      setMessage(error || "Failed to logout");
    }
  };

  return (
    <div>
      <Button onClick={handleLogout} disabled={loading}>
        {loading ? "Logging out..." : "Logout"}
      </Button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </div>
  );
};
