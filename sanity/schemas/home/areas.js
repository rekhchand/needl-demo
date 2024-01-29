/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'areas',
  title: 'Areas section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
    },
    {
      name: 'allAreas',
      title: 'All areas',
      type: 'array',
      of: [{ type: 'areaCard' }],
    },
  ],
};
