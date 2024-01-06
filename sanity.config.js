import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from './deskStructure'
import Favicon from './src/images/favicon.svg';

export default defineConfig({
  name: 'default',
  title: 'Needl',
  // basePath: '/admin',
  icon: Favicon,

  projectId: 'uqvx2o8i',
  dataset: 'production',

  plugins: [deskTool({
    structure: deskStructure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
