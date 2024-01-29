/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'aboutBlurb',
  title: 'About section',
  type: 'object',
  fields: [
    {
      name: 'tag',
      title: 'Section tag',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'aboutText',
      title: 'About text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
};
