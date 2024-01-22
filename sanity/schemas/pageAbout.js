/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'aboutpage',
  title: 'About page',
  type: 'document',
  fields: [
    {
      name: 'heroAbout',
      title: 'Hero section',
      type: 'heroAbout',
    },
    {
      name: 'largeImage',
      title: 'Large image section',
      type: 'figure',
    },
    {
      name: 'values',
      title: 'Values section',
      type: 'values',
    },
    {
      name: 'seo',
      title: 'SEO settings',
      type: 'seo',
    },
  ],
};
