import { BsFiles, BsFileText, BsGear } from 'react-icons/bs';
/* eslint-disable */

const hiddenDocTypes = listItem => ![
  'homepage', 'siteSettings'
].includes(listItem.getId());

export default (S) =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(hiddenDocTypes),

      S.divider(),

      S.listItem()
        .title("Pages")
        .icon(BsFiles)
        .child(
          S.list()
          .title("Pages")
          .items([
            S.listItem()
              .title("Home page")
              .icon(BsFileText)
              .child(S.document().title("Home page").schemaType('homepage').id('homepage')),
          ])
        ),

      S.listItem()
        .title("Site Settings")
        .icon(BsGear)
        .child(S.document().title("Site Settings").schemaType('siteSettings').documentId('siteSettings')),
    ]);