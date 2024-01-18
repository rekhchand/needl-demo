/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  title: 'Text field',
  name: 'blockWithList',
  type: 'object',
  fields: [
    {
      title: 'Block Text',
      name: 'blockText',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [{ title: 'Bullet list', value: 'bullet' }],
          marks: {
            decorators: [],
          },
        },
      ],
    },
  ],
};
