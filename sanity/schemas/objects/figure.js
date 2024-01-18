/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt text',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.').required(),
      description: 'Important for SEO and accessiblity.',
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
};
