/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'heroAbout',
  title: 'Hero section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Hero title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'para',
      title: 'Hero paragraph',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Hero image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
};
