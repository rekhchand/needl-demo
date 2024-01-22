/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'memberSocials',
  title: 'Social links',
  type: 'object',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'number',
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
    },
  ],
};
