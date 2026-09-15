import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * The masthead prints an "Updated" stamp, so it has to be true rather than
 * hand-maintained: it is stamped from the build that produced the bundle.
 */
const built = new Date();
const buildStamp = `${String(built.getUTCMonth() + 1).padStart(2, "0")} · ${built.getUTCFullYear()}`;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __BUILD_STAMP__: JSON.stringify(buildStamp),
  },
});
