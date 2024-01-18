import Image from 'next/image';
import Link from 'next/link';
import ButtonIco from '../images/ico-button.svg';

export default function Button({ btnText, href, secondary = false }) {
  return (
    <Link
      href={href || '/'}
      className={`button ${secondary ? 'secondary' : ''}`}
    >
      <span className="button-text">{btnText || 'Contact us'}</span>
      <div className="button-ico">
        <Image src={ButtonIco} alt="Arrow" priority className="button-ico" />
      </div>
    </Link>
  );
}
