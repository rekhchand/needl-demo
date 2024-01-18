import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Values from '@/components/about/Values';
import '@/css/about/aboutpage.scss';

export const metadata = {
  title: 'About us | Needle.io',
  description: 'Aboutpage description',
  // openGraph: {
  //   images: '/og-image.png',
  // },
};

export default function Media() {
  return (
    <Layout>
      <main>
        <Hero
          title="Who we are"
          sub="We aim to be the go-to recruitment firm for indigenous tech startups and scale-ups as well for those organisations looking to build an EMEA base out of Ireland."
        />
        <Values
          tag="Our values"
          title="At the core of everything we do in line with our values"
        />
      </main>
    </Layout>
  );
}
