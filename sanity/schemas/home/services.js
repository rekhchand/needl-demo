/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'services',
  title: 'Services section',
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
    {
      name: 'allServices',
      title: 'All services',
      type: 'array',
      of: [{ type: 'serviceCard' }],
    },
  ],
};
