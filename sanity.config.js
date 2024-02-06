import {defineConfig} from 'sanity'
import { structureTool } from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'
import deskStructure from './sanity/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'needl.io',

  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,

  plugins: [structureTool({
    structure: deskStructure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
