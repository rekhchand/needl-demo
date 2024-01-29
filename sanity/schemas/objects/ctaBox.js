/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'ctaBox',
  title: 'CTA box',
  type: 'object',
  fields: [
    {
      name: 'ctaTag',
      title: 'Cta tag',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
