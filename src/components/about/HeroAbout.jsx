import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/utils/sanityClient';
import Button from '../Button';

export default function HeroAbout({ heroContent }) {
  return (
    <div className="hero hero-about">
      <div className="wrapper">
        <div className="hero-content">
          <h1>{heroContent.title}</h1>
          <p className="hero-para">{heroContent.para}</p>
          <Button btnText="Get in touch" href="/contact" />
        </div>
      </div>

      <div className="hero-image">
        <Image
          src={urlForImage(heroContent.image).url()}
          alt={heroContent.title}
          width={getImageDimensions(heroContent.image).width}
          height={getImageDimensions(heroContent.image).height}
          priority
        />
      </div>
    </div>
  );
}
