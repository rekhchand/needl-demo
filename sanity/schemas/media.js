/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { BsCollection } from 'react-icons/bs';

const icons = {
  article: 'Article',
  podcast: 'Podcast',
  event: 'Event',
}

export default {
  name: 'media',
  title: 'Media',
  type: 'document',
  icon: BsCollection,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used for media URL',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mediaType',
      title: 'Media type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Article', value: 'article' },
          { title: 'Podcast', value: 'podcast' },
          { title: 'Event', value: 'event' },
        ],
      },
      initialValue: 'article',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'member'}],
      options: {
        disableNew: true,
      }
    },
    {
      name: 'thumb',
      title: 'Media thumbnail',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mediaBody',
      title: 'Media content',
      type: 'blockForMedia',
    },
  ],
  preview: {
    select: {
      title: 'title',
      mediaType: 'mediaType',
      media: 'thumb',
    },
    prepare(selection) {
      const { title, mediaType, media } = selection;
      console.log(mediaType, icons[mediaType]);
      return {
        title,
        subtitle: icons[mediaType],
        media,
      };
    },
  },
};
