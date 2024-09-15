import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      "/book-eat": {
        target: "https://book-eat.ru/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      $constants: resolve(__dirname, "./src/constants"),
      $hooks: resolve(__dirname, "./src/hooks"),
      $models: resolve(__dirname, "./src/models"),
      $api: resolve(__dirname, "./src/api"),
      $enums: resolve(__dirname, "./src/enums"),
      $utils: resolve(__dirname, "./src/utils"),
      $components: resolve(__dirname, "./src/components"),
      $store: resolve(__dirname, "./src/store"),
    },
  },
  plugins: [mkcert(), react()],
});
