/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'aboutBlurb',
  title: 'About section',
  type: 'object',
  fields: [
    {
      name: 'para',
      title: 'About blurb',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'About image',
      type: 'figure',
    },
  ],
};
