import { groq } from 'next-sanity';
import { client } from '@/utils/sanityClient';
import Layout from '@/components/Layout';
import HeroHome from '@/components/home/HeroHome';
import ClientLogos from '@/components/ClientLogos';
import WhoSec from '@/components/home/WhoSec';
import Services from '@/components/home/Services';
import Areas from '@/components/home/Areas';
import Reviews from '@/components/Reviews';
import Team from '@/components/Team';
import NewsSec from '@/components/home/NewsSec';
import '@/css/home/homepage.scss';

export default async function Home() {
  const homeContent = await client.fetch(groq`
  *[_type == 'homepage']{
    heroHome,
    aboutBlurb,
    services{
      title,
      para,
      allServices[]{
        title,
        'icon': icon.asset,
        'rawTexts': details.blockText
      }
    },
    'areas': areas.allAreas[]{
      title,
      'icon': icon.asset
    },
    teamHome,
    seo
  }[0]`);
  const siteData = await client.fetch(groq`
  *[_type == 'siteSettings']{
    logos[]{
      name,
      'image': logo.asset
    },
    testimonials
  }[0]`);
  const { heroHome, aboutBlurb, services, areas, teamHome } = homeContent;
  const { testimonials } = siteData;

  return (
    <Layout>
      <main>
        <HeroHome heroContent={heroHome} />
        <ClientLogos />
        <WhoSec content={aboutBlurb} />
        <Services content={services} />
        <Areas content={areas} />
        <Reviews allReviews={testimonials} />
        <Team title={teamHome.title} sub={teamHome.para} />
        <NewsSec />
      </main>
    </Layout>
  );
}

export async function generateMetadata() {
  const homeContent = await client.fetch(groq`
  *[_type == 'homepage']{
    seo{
      title,
      description,
      'image': ogImage.asset->url
    }
  }[0]`);
  const { seo } = homeContent;

  return {
    title: seo?.title,
    description: seo?.description,
    openGraph: {
      images: seo?.image || '/og-image.jpg',
    },
  };
}
