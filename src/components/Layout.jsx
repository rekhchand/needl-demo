import Navbar from './Navbar';
import Cursor from './Cursor';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Cursor />
      {children}
      <Footer />
    </>
  );
}
