import { defineConfig } from 'astro/config';
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://needl-demo.netlify.app/',
  integrations: [sanityIntegration({
    projectId: "uqvx2o8i",
    dataset: "production",
    studioBasePath: "/admin",
    useCdn: false
  }), react(), sitemap()],
  image: {
    domains: ["cdn.sanity.io"],
  },
  output: "hybrid",
  adapter: netlify()
});