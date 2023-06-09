import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@public": `${path.resolve(__dirname, "./public/")}`,
      "@": path.resolve(__dirname, "./src/"),
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@context": `${path.resolve(__dirname, "./src/context/")}`,
      "@hooks": `${path.resolve(__dirname, "./src/hooks/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
    },
  },
})
