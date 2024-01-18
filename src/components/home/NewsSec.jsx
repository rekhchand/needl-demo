import { groq } from 'next-sanity';
import { client } from '@/utils/sanityClient';
import Button from '../Button';
import MediaCard from '../MediaCard';
import CtaBox from '../CtaBox';

export default async function NewsSec() {
  const allMedia = await client.fetch(groq`
  *[_type == 'media'] | order(_createdAt desc)[0...3]{
    _id,
    title,
    'slug': slug.current,
    'thumb': thumb.asset,
    mediaType,
  }`);
  const settings = await client.fetch(groq`
  *[_type == 'siteSettings']{
    socials[]{
      name,
      url
    }
  }[0]`);
  const { socials } = settings;

  return (
    <section className="news-sec">
      <div className="wrapper">
        <div className="news-heading">
          <div className="news-heading-texts">
            <h2>News & Podcasts</h2>
            <p className="sub">
              Our team have extensive networks and are active within the tech
              community hosting multiple podcast series, meetups and events.
              Some events are less serious than others!
            </p>
          </div>
          <div className="news-cta">
            <Button btnText="More news" href="/media" secondary />
          </div>
        </div>

        <div className="all-media">
          {allMedia.map((media) => (
            <MediaCard
              image={media.thumb}
              title={media.title}
              podcast={media.mediaType === 'podcast'}
              key={media._id}
            />
          ))}
        </div>

        <div className="follow-us">
          <h3>Follow us for more:</h3>
          <div className="follow-links">
            {socials.map((link, i) => (
              <a
                href={link.url}
                target="_blank"
                key={i}
                className="link-inline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <CtaBox />
      </div>
    </section>
  );
}
