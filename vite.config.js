import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// Site multipágina: a landing page e a página de obrigado (conversão do Google Ads)
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        obrigado: resolve(import.meta.dirname, "obrigado.html"),
      },
    },
  },
});
