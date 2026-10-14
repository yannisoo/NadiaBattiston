import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";

import App from "./App.vue";
import { routes, scrollBehavior } from "./router";

import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "./index.css";

// After a new deploy, an open tab may request page chunks that no longer
// exist: reload to get the new version instead of failing silently.
if (!import.meta.env.SSR) {
  window.addEventListener("vite:preloadError", () => window.location.reload());
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior, base: import.meta.env.BASE_URL },
  ({ app }) => {
    app.use(createPinia());
  }
);
