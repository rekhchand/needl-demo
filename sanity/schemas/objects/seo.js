export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Meta title',
      type: 'string',
      description: 'e.g. "Needl.io | Recruitment, done better"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Meta description',
      description: 'Between 50-160 characters',
      type: 'text',
    },
    {
      name: 'ogImage',
      title: 'Picture',
      description: 'for og:image, the thumbnail image for specific page (we have a default one, so not necessary)',
      type: 'image',
    },
  ],
}