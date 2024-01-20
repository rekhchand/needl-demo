import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import MediaSec from '@/components/media/MediaSec';
import '@/css/media/mediapage.scss';

export const metadata = {
  title: 'Media | Needle.io',
  description: 'Mediapage description',
  // openGraph: {
  //   images: '/og-image.png',
  // },
};

export default function Media() {
  return (
    <Layout>
      <main>
        <Hero
          title="Media"
          sub="Our team have extensive networks and are active within the tech community hosting multiple podcast series, meetups and events. Some events are less serious than others!"
        />
        <MediaSec />
      </main>
    </Layout>
  );
}
