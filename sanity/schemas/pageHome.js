/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'homepage',
  title: 'Home page',
  type: 'document',
  fields: [
    {
      name: 'heroHome',
      title: 'Hero section',
      type: 'heroHome',
    },
    {
      name: 'aboutBlurb',
      title: 'About section',
      type: 'aboutBlurb',
    },
    {
      name: 'services',
      title: 'Services section',
      type: 'services',
    },
    {
      name: 'areas',
      title: 'Areas section',
      type: 'areas',
    },
    {
      name: 'seo',
      title: 'SEO settings',
      type: 'seo',
    },
  ],
};
