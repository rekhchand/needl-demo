import Image from 'next/image';
import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '@/utils/sanityClient';
import Logo from '../images/needl-logo.svg';

export default async function Footer() {
  const settings = await client.fetch(groq`
  *[_type == 'siteSettings']{
    socials[]{
      name,
      url
    }
  }[0]`);
  const { socials } = settings;

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-contain main-grid">
          <a href="/" className="logo">
            <Image src={Logo} alt="Needl.io logo" />
          </a>

          <div className="footer-content">
            <div className="footer-link-grid">
              <div className="footer-link-group">
                <Link href="/about">About us</Link>
                <Link href="/">Jobs</Link>
                <Link href="/media">Media</Link>
                <Link href="/contact">Contact us</Link>
              </div>
              <div className="footer-link-group">
                {socials.map((link, i) => (
                  <a href={link.url} target="_blank" key={i}>
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="footer-link-group">
                <Link href="/terms">Terms of service</Link>
                <Link href="/privacy-policy">Privacy policy</Link>
              </div>
            </div>

            <p className="copyright">
              &copy; Needl.io {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
