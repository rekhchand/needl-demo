/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'serviceCard',
  title: 'Service card',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'details',
      title: 'Details',
      type: 'blockWithList',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
};
