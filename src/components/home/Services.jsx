import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/utils/sanityClient';
import { PortableText } from '@portabletext/react';
import CtaBox from '../CtaBox';

const serializer = {
  list: {
    bullet: ({ children }) => <ul className="pointers">{children}</ul>,
  },
};

export default function Services({ content }) {
  const { title, para, allServices } = content;

  return (
    <section className="services-sec">
      <div className="wrapper">
        <div className="services-sec-contain main-grid">
          <div className="first-sec">
            <h2 className="h2-small">{title}</h2>
            <p className="sub">{para}</p>
          </div>

          <div className="services-sec-content">
            <div className="all-services">
              {allServices.map((service, i) => (
                <div className="service" key={i}>
                  <div className="service-left">
                    <Image
                      src={urlForImage(service.icon).url()}
                      alt={service.title}
                      width={getImageDimensions(service.icon).width}
                      height={getImageDimensions(service.icon).height}
                    />
                    <h3>{service.title}</h3>
                  </div>
                  <div className="service-details">
                    <PortableText
                      value={service.rawTexts}
                      components={serializer}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CtaBox />
      </div>
    </section>
  );
}
