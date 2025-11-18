import { useState, useCallback, type JSX } from "react";
import { Loader2 } from "lucide-react"; // istəyə görə: npm i lucide-react

// Hook tipi
interface UseLoadingSpinner {
  loading: boolean;
  showSpinner: () => void;
  hideSpinner: () => void;
  Spinner: JSX.Element | null;
}

export const useLoadingSpinner = (): UseLoadingSpinner => {
  const [loading, setLoading] = useState(false);

  const showSpinner = useCallback(() => setLoading(true), []);
  const hideSpinner = useCallback(() => setLoading(false), []);

  const Spinner = loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <Loader2 className="w-10 h-10 animate-spin text-white" />
    </div>
  ) : null;

  return { loading, showSpinner, hideSpinner, Spinner };
};
