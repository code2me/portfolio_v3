import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Portfolio",
    short_name: "Portfolio",
    description: "Portfolio website of Navneet Bahuguna",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/maskable_icon.png",
        sizes: "225x225",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#4db5ff",
    background_color: "#4db5ff",
    display: "standalone",
    scope: "/",
    start_url: "/",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
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
