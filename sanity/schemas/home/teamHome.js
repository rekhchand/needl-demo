/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'teamHome',
  title: 'Team section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'para',
      title: 'Paragraph',
      type: 'text',
    },
  ],
};
