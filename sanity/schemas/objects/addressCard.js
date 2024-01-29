/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { PiMapPinDuotone } from 'react-icons/pi';

export default {
  name: 'addressCard',
  title: 'Address card',
  type: 'object',
  icon: PiMapPinDuotone,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
