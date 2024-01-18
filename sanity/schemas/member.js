/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { BsCollection } from 'react-icons/bs';

export default {
  name: 'member',
  title: 'Needl team',
  type: 'document',
  icon: BsCollection,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
