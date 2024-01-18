/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { PiLinkSimpleDuotone } from 'react-icons/pi';

export default {
  name: 'socialCard',
  title: 'Social link',
  type: 'object',
  icon: PiLinkSimpleDuotone,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
};
