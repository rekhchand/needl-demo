/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'mediapage',
  title: 'Media page',
  type: 'document',
  fields: [
    {
      name: 'heroCommon',
      title: 'Hero section',
      type: 'heroCommon',
    },
    {
      name: 'seo',
      title: 'SEO settings',
      type: 'seo',
    },
  ],
};
