/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'reviews',
  title: 'Reviews section',
  type: 'object',
  fields: [
    {
      name: 'tag',
      title: 'Section tag',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
