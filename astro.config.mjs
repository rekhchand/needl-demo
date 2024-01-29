import { defineConfig } from 'astro/config';
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import { metadata } from './src/components/Layout.astro';

// https://astro.build/config
export default defineConfig({
  site: metadata.siteUrl,
  integrations: [sanityIntegration({
    projectId: "uqvx2o8i",
    dataset: "production",
    studioBasePath: "/admin",
    useCdn: false
  }), react(), sitemap()],
  output: "hybrid",
  adapter: netlify()
});