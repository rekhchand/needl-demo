import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/utils/sanityClient';

export default function Gallery({ content }) {
  return (
    <section className="gallery-sec">
      <Image
        src={urlForImage(content.image).url()}
        alt={content.alt}
        width={getImageDimensions(content.image).width}
        height={getImageDimensions(content.image).height}
      />
    </section>
  );
}
