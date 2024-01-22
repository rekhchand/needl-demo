import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/utils/sanityClient';
import { PortableText } from '@portabletext/react';

const serializer = {
  list: {
    bullet: ({ children }) => <ul className="pointers">{children}</ul>,
  },
};

export default function Values({ content }) {
  const { title, para, allValues } = content;

  return (
    <section className="values-sec">
      <div className="wrapper">
        <div className="values-sec-contain main-grid">
          <div className="first-sec">
            <h2 className="h2-small">{title}</h2>
            <p className="sub">{para}</p>
          </div>

          <div className="values-sec-content">
            <div className="all-values">
              {allValues.map((value, i) => (
                <div className="value" key={i}>
                  <div className="value-left">
                    <Image
                      src={urlForImage(value.icon).url()}
                      alt={value.title}
                      width={getImageDimensions(value.icon).width}
                      height={getImageDimensions(value.icon).height}
                    />
                    <h3>{value.title}</h3>
                  </div>
                  <div className="value-details">
                    <PortableText
                      value={value.rawTexts}
                      components={serializer}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
