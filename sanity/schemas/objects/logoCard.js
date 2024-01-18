/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { PiLinkSimpleDuotone } from 'react-icons/pi';

export default {
  name: 'logoCard',
  title: 'Logo',
  type: 'object',
  icon: PiLinkSimpleDuotone,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo image (in svg/png)',
      type: 'image',
    },
  ],
};
