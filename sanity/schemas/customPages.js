import { BsFiles, BsFileText } from 'react-icons/bs'

export default {
  name: 'customPages',
  title: 'Secondary pages',
  type: 'document',
  icon: BsFiles,
  fields: [
    {
      name: 'name',
      title: 'Page name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'title',
      title: 'Hero title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainContent',
      title: 'Page content',
      type: 'array',
      of: [{
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
        ],
      }],
      description: 'Text contents with headings, lists, links, etc.',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      const {title} = selection;
      return {
        title: title,
        media: BsFileText,
      }
    }
  }
}