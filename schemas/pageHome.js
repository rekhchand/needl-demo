export default {
  name: 'homepage',
  title: 'Home page',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heroPara',
      title: 'Hero paragraph',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO specific',
      type: 'seo',
    },
  ]
}