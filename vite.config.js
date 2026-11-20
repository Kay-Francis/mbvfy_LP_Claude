import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// Site multipágina: a landing page, a página de obrigado (conversão do Google Ads)
// e a de Termos de Uso e Política de Privacidade (/politicas, mesmo endereço do WordPress)
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        obrigado: resolve(import.meta.dirname, "obrigado.html"),
        politicas: resolve(import.meta.dirname, "politicas.html"),
      },
    },
  },
});
