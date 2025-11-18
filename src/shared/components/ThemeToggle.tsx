import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="size-10 flex items-center justify-center rounded-lg cursor-pointer"
    >
      {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
