/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { BsCollection } from 'react-icons/bs';

export default {
  name: 'member',
  title: 'Needl team',
  type: 'document',
  icon: BsCollection,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      description:
        'Order in which the member is listed. In case of the same number, last edited will be put first',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pic',
      title: 'Picture',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'occu',
      title: 'Occupation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'socials',
      title: 'Social links',
      description:
        'Enter all those applies. Leave the field empty to not show it',
      type: 'memberSocials',
    },
  ],
  preview: {
    select: {
      title: 'name',
      order: 'order',
      media: 'pic',
    },
    prepare(selection) {
      const { title, order, media } = selection;
      return {
        title,
        subtitle: order,
        media,
      };
    },
  },
};
