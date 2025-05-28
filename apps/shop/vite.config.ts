import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import mkcert from "vite-plugin-mkcert";

const STAND_FLAG = "--stand=";

const TARGETS = {
  PROM:'https://book-eat.ru/',
  DEV:'https://book-eat-test.ru/'
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  const STAND = process.argv
    .find((arg) => arg.startsWith(STAND_FLAG))
    ?.replace(STAND_FLAG, "");

  return {
    server: {
      proxy: {
        "/book-eat": {
          target: TARGETS.DEV,
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        $constants: resolve(__dirname, "./src/constants"),
        $components: resolve(__dirname, "./src/components"),
        $selectors: resolve(__dirname, "./src/selectors"),
        $hooks: resolve(__dirname, "./src/hooks"),
        $models: resolve(__dirname, "./src/models"),
        $api: resolve(__dirname, "./src/api"),
        $enums: resolve(__dirname, "./src/enums"),
        $utils: resolve(__dirname, "./src/utils"),
      },
    },
    plugins: [react(), mkcert()],
    envDir: `./scripts/${STAND}`,
  };
});
