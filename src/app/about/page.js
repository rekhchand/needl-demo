import { groq } from 'next-sanity';
import { client } from '@/utils/sanityClient';
import Layout from '@/components/Layout';
import HeroAbout from '@/components/about/HeroAbout';
import ClientLogos from '@/components/ClientLogos';
import Gallery from '@/components/about/Gallery';
import Values from '@/components/about/Values';
import Team from '@/components/Team';
import Reviews from '@/components/Reviews';
import CtaBox from '@/components/CtaBox';
import '@/css/about/aboutpage.scss';

export default async function About() {
  const aboutContent = await client.fetch(groq`
  *[_type == 'aboutpage']{
    heroAbout{
      title,
      para,
      'image': image.asset
    },
    largeImage{
      'image': asset,
      alt
    },
    values{
      title,
      para,
      allValues[]{
        title,
        'icon': icon.asset,
        'rawTexts': details.blockText
      }
    },
  }[0]`);
  const siteData = await client.fetch(groq`
  *[_type == 'siteSettings']{
    testimonials
  }[0]`);
  const { heroAbout, largeImage, values } = aboutContent;
  const { testimonials } = siteData;

  return (
    <Layout>
      <main className="main-about">
        <HeroAbout heroContent={heroAbout} />
        <ClientLogos />
        <Gallery content={largeImage} />
        <Values content={values} />
        <Team title="Meet our All-Star team" noCta />
        <Reviews allReviews={testimonials} />
        <div className="wrapper">
          <CtaBox />
        </div>
      </main>
    </Layout>
  );
}

export async function generateMetadata() {
  const aboutContent = await client.fetch(groq`
  *[_type == 'aboutpage']{
    seo{
      title,
      description,
      'image': ogImage.asset->url
    }
  }[0]`);
  const { seo } = aboutContent;

  return {
    title: seo?.title,
    description: seo?.description,
    openGraph: {
      images: seo?.image || '/og-image.jpg',
    },
  };
}
