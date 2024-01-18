import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/utils/sanityClient';
import Button from '../Button';

export default function WhoSec({ content }) {
  return (
    <section className="who-sec">
      <div className="wrapper">
        <div className="who-sec-contain main-grid">
          <div className="first-sec">
            <div className="img-contain">
              <Image
                src={urlForImage(content.image.asset).url()}
                alt={content.image.alt}
                width={getImageDimensions(content.image.asset).width}
                height={getImageDimensions(content.image.asset).height}
                quality={96}
                sizes="100vw"
                placeholder="blur"
                blurDataURL={urlForImage(content.image.asset)
                  .width(24)
                  .height(24)
                  .blur(10)
                  .url()}
                // sizes="
                // (max-width: 768px) 100vw,
                // (max-width: 1920px) 50vw,
                // 40vw"
              />
            </div>
          </div>

          <div className="who-sec-content">
            <h2 className="h2-small">{content.para}</h2>
            <Button btnText="More about us" href="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}
