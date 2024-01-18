/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'ctaBox',
  title: 'CTA box',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
};
