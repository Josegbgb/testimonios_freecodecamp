import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/testimonios_freecodecamp/",
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
