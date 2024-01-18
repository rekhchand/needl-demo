/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  title: 'Rich text',
  name: 'blockForMedia',
  type: 'object',
  fields: [
    {
      title: 'Rich text',
      name: 'blockText',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
        },
        { type: 'figure' },
        { type: 'soundcloud' },
      ],
    },
  ],
};
