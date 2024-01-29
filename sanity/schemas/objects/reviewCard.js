/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'reviewCard',
  title: 'Logo',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pic',
      title: 'Picture',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'occupation',
      title: 'Occupation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'round',
      title: 'Series round',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'reviewText',
      title: 'Review text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
};
