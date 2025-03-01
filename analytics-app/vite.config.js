import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
const __dirname = path.resolve();

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "analytics-app",
      // Important: Set this to output at the root instead of in assets/
      filename: "remoteEntry.js",
      exposes: {
        "./AnalyticsModule": "./src/components/AnalyticsModule.jsx",
        "./SharedButton": "../shared/ui-components/Button.jsx",
        "./SharedCard": "../shared/ui-components/Card.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom", "styled-components"],
    }),
  ],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },
  server: {
    port: 5002,
    strictPort: true,
    cors: {
      origin: "*",
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      credentials: true,
    },
  },
  preview: {
    port: 5003,
    strictPort: true,
    cors: true,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Place remoteEntry.js at the root of the dist folder
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === "remoteEntry"
            ? "remoteEntry.js"
            : "assets/[name]-[hash].js";
        },
      },
    },
  },
});
