import Link from 'next/link';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/utils/sanityClient';
import PodcastIco from '../images/ico-podcast.svg';
import ArticleIco from '../images/ico-article.svg';

export default function MediaCard({ image, title, podcast }) {
  return (
    <Link href="/" className="media-card">
      <div className="thumb">
        <Image
          src={urlForImage(image).url()}
          alt={title}
          width={getImageDimensions(image).width}
          height={getImageDimensions(image).height}
          quality={96}
          sizes="33vw"
        />
      </div>
      <h3>{title}</h3>
      <div className="media-tag">
        {podcast ? (
          <>
            <Image src={PodcastIco} alt="Podcast" />
            <span>Podcast</span>
          </>
        ) : (
          <>
            <Image src={ArticleIco} alt="Article" />
            <span>Article</span>
          </>
        )}
      </div>
    </Link>
  );
}
