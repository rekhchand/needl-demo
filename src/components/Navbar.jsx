import Image from 'next/image';
import Logo from '../images/needl-logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-contain">
        <a href="/" className="logo">
          <Image src={Logo} alt="Needl.io logo" />
        </a>

        <ul className="nav-links">
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/media">Media</a>
          </li>
          <li>
            <a href="/contact" className="button small">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
