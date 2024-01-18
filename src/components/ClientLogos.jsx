import Image from 'next/image';
import { groq } from 'next-sanity';
import { client, urlForImage } from '@/utils/sanityClient';
import { getImageDimensions } from '@sanity/asset-utils';

export default async function ClientLogos() {
  const siteData = await client.fetch(groq`
  *[_type == 'siteSettings']{
    logos[]{
      name,
      'image': logo.asset
    },
  }[0]`);
  const { logos } = siteData;

  return (
    <section className="logos-section">
      <div className="logos-marquee">
        <div className="all-logos">
          {logos.map((logo, i) => (
            <div className="logo" key={i}>
              <Image
                src={urlForImage(logo.image).url()}
                alt={logo.name}
                width={getImageDimensions(logo.image).width}
                height={getImageDimensions(logo.image).height}
              />
            </div>
          ))}
          {logos.map((logo, i) => (
            <div className="logo" key={i}>
              <Image
                src={urlForImage(logo.image).url()}
                alt={logo.name}
                width={getImageDimensions(logo.image).width}
                height={getImageDimensions(logo.image).height}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="logos-marquee reverse">
        <div className="all-logos">
          {logos.map((logo, i) => (
            <div className="logo" key={i}>
              <Image
                src={urlForImage(logo.image).url()}
                alt={logo.name}
                width={getImageDimensions(logo.image).width}
                height={getImageDimensions(logo.image).height}
              />
            </div>
          ))}
          {logos.map((logo, i) => (
            <div className="logo" key={i}>
              <Image
                src={urlForImage(logo.image).url()}
                alt={logo.name}
                width={getImageDimensions(logo.image).width}
                height={getImageDimensions(logo.image).height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
