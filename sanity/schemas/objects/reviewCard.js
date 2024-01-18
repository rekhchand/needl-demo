/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { PiUserDuotone } from 'react-icons/pi';

export default {
  name: 'reviewCard',
  title: 'Logo',
  type: 'object',
  icon: PiUserDuotone,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
