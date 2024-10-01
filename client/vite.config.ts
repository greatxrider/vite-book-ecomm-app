import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src'), // Set the root directory to 'src'
  plugins: [
    react(), // Add React plugin
    svgr(),  // Add SVGR plugin for importing SVGs as React components
  ],
  build: {
    outDir: '../dist', // Output directory for build files
  },
  server: {
    open: true, // Automatically open the app in the browser on server start
  },
  test: {
    globals: true, // Enable global variables for tests
    environment: "jsdom", // Set the test environment to jsdom
    setupFiles: "src/setupTests", // Path to setup files for tests
    mockReset: true, // Reset mocks between tests
  },
});
