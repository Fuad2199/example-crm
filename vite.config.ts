import  tailwindcss from '@tailwindcss/vite';
// vite.config.ts
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "@/components/ui"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@features": path.resolve(__dirname, "src/features"),
      "@services": path.resolve(__dirname, "src/services"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@features/auth/store": path.resolve(__dirname, "src/features/auth/store"),
    },
  },
});
