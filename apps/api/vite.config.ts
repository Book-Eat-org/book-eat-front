import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      $models: resolve(__dirname, "./src/models"),
      $enums: resolve(__dirname, "./src/enums"),
    },
  },
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
    },
  },
  plugins: [dts()],
});
