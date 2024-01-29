/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'contact',
      title: 'Primary contact link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'addresses',
      title: 'Addresses',
      type: 'array',
      of: [{ type: 'addressCard' }],
    },
    {
      name: 'socials',
      title: 'Social links',
      type: 'array',
      of: [{ type: 'socialCard' }],
    },
    {
      name: 'logos',
      title: 'Logos section',
      type: 'array',
      of: [{ type: 'logoCard' }],
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reviewCard' }],
    },
    {
      name: 'ctaBox',
      title: 'CTA box',
      type: 'ctaBox',
    },
  ],
};
