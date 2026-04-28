import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/**/*.{test,spec}.{ts,tsx}", "tests/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: {
      // Match tsconfig: @* → ./src/*
      // We need individual entries because vitest/vite don't support * in aliases the same way
      "@consts": resolve(__dirname, "src/consts.ts"),
      "@data": resolve(__dirname, "src/data"),
      "@lib": resolve(__dirname, "src/lib"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@components": resolve(__dirname, "src/components"),
      "@types": resolve(__dirname, "src/types"),
    },
  },
});