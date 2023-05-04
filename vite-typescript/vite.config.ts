import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
  ],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          console.log("id", id);
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
