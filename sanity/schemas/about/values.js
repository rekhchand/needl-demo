/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'values',
  title: 'Values section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'para',
      title: 'Short paragraph',
      type: 'string',
    },
    {
      name: 'allValues',
      title: 'All values',
      type: 'array',
      of: [{ type: 'valueCard' }],
    },
  ],
};
