import Image from 'next/image';
import { groq } from 'next-sanity';
import { client, urlForImage } from '@/utils/sanityClient';
import { getImageDimensions } from '@sanity/asset-utils';
import Button from './Button';

export default async function CtaBox() {
  const settings = await client.fetch(groq`
  *[_type == 'siteSettings']{
    ctaBox{
      title,
      'image': image.asset
    }
  }[0]`);
  const { ctaBox } = settings;

  return (
    <div className="cta-box">
      <div className="cta-bg" />

      <div className="cta-content">
        <h2 className="h2-small">{ctaBox.title}</h2>
        <Button btnText="Get in touch" href="/contact" secondary />
      </div>

      <div className="cta-image">
        <Image
          src={urlForImage(ctaBox.image).url()}
          alt={ctaBox.title}
          width={getImageDimensions(ctaBox.image).width}
          height={getImageDimensions(ctaBox.image).height}
          quality={100}
        />
      </div>
    </div>
  );
}
