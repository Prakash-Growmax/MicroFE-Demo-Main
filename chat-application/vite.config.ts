import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'ansightApp',
      filename: 'remoteEntry.js',
      exposes: {
        './AnsightApp': './src/App.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1200,
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // This ensures remoteEntry.js is placed in the assets folder
        // to match the URL in main-app's config
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'remoteEntry'
            ? 'assets/remoteEntry.js'
            : 'assets/[name]-[hash].js';
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5004, // Use a consistent port for development
    strictPort: true,
    cors: {
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      credentials: true,
    },
  },
  preview: {
    port: 4173, // Match the port in your main-app config
    strictPort: true,
    cors: true,
  },
});
