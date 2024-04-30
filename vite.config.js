import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
      "@ecommerce": path.resolve(__dirname, "./src/ecommerce"),
      "@emart": path.resolve(__dirname, "./src/emart"),
    },
  },
});
