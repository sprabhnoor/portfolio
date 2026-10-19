import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base must match the GitHub repository name for a project site:
// https://sprabhnoor.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
