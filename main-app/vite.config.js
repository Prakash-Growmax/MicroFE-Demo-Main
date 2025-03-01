import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const __dirname = path.resolve();

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-app",
      remotes: {
        // Try this URL if the root one doesn't work
        analyticsApp:
          "https://micro-fe-demo-main-analytics-app.vercel.app/assets/remoteEntry.js",
        // Or if the above solution works, keep it at the root
        // analyticsApp:
        //   "https://micro-fe-demo-main-analytics-app.vercel.app/remoteEntry.js",
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
    port: 5001,
    strictPort: true,
    cors: {
      origin: "*",
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      credentials: true,
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: true,
    cssCodeSplit: false,
  },
});
