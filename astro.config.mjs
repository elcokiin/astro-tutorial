// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tutorial.tenjodiego961.workers.dev/",
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
});
