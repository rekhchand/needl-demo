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
      type: 'string',
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'calendly',
      title: 'Calendly link',
      type: 'url',
    },
  ],
};
