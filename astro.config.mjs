// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import lottie from "astro-integration-lottie";
import robotsTxt from "astro-robots-txt";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [lottie(), robotsTxt()],
  site: "https://kevinduran.vercel.app/",
});
