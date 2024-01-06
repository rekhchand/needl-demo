import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
import deskStructure from './sanity/deskStructure';
import favicon from './sanity/favicon.svg';

export default defineConfig({
  name: 'default',
  title: 'needl.io',
  basePath: '/admin',
  icon: favicon,

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
