import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://book-eat-test.ru/",
        changeOrigin: true,
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
    },
  },
  plugins: [react()],
});
