import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      $assets: resolve(__dirname, "./src/assets"),
      $constants: resolve(__dirname, "./src/constants"),
      $components: resolve(__dirname, "./src/components"),
      $hooks: resolve(__dirname, "./src/hooks"),
      $models: resolve(__dirname, "./src/models"),
      $utils: resolve(__dirname, "./src/utils"),
      $api: resolve(__dirname, "./src/api"),
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
