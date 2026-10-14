import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Every route is prerendered to static HTML (`vite-ssg build`) so search
  // engines and social networks get real content instead of an empty <div>.
  ssgOptions: {
    formatting: "minify",
    // Static routes + a 404 page that Vercel serves for unknown URLs
    includedRoutes: (paths) => [...paths.filter((path) => !path.includes(":")), "/404"],
  },
});
