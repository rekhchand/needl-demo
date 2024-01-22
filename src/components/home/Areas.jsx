import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/utils/sanityClient';

export default function Areas({ content }) {
  return (
    <section className="areas-sec">
      <div className="areas-marquee">
        <div className="all-areas">
          {content.map((area, i) => (
            <div className="area" key={i}>
              <div className="icon">
                <Image
                  src={urlForImage(area.icon).url()}
                  alt={area.title}
                  width={getImageDimensions(area.icon).width}
                  height={getImageDimensions(area.icon).height}
                />
              </div>
              <h3>{area.title}</h3>
            </div>
          ))}
          {content.map((area, i) => (
            <div className="area" key={i}>
              <div className="icon">
                <Image
                  src={urlForImage(area.icon).url()}
                  alt={area.title}
                  width={getImageDimensions(area.icon).width}
                  height={getImageDimensions(area.icon).height}
                />
              </div>
              <h3>{area.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="areas-marquee reverse">
        <div className="all-areas">
          {content.map((area, i) => (
            <div className="area" key={i}>
              <div className="icon">
                <Image
                  src={urlForImage(area.icon).url()}
                  alt={area.title}
                  width={getImageDimensions(area.icon).width}
                  height={getImageDimensions(area.icon).height}
                />
              </div>
              <h3>{area.title}</h3>
            </div>
          ))}
          {content.map((area, i) => (
            <div className="area" key={i}>
              <div className="icon">
                <Image
                  src={urlForImage(area.icon).url()}
                  alt={area.title}
                  width={getImageDimensions(area.icon).width}
                  height={getImageDimensions(area.icon).height}
                />
              </div>
              <h3>{area.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
