import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: [resolve(__dirname, "src/index.ts")],
      name: "Headless",
      formats: ["es", "umd"],
      fileName: (format) => `headless.${format}.js`,
    },
  },
  plugins: [
    react(),
    dts({
      outDir: ["dist", "types"],
      // include: ['src/index.ts'],
      exclude: ["src/ignore"],
      // aliasesExclude: [/^@components/],
      staticImport: true,
      rollupTypes: true,
      insertTypesEntry: true,
    }),
  ],
});
